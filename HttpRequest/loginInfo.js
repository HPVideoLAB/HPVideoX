import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'
import timeout from 'connect-timeout'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// 链接数据库
const { ObjectId } = mongodb;
const MongoClient = mongodb.MongoClient;
const urlEcode = bodyParser.json()
// 定义路由
export const loginInfo = express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义存储路径
const NODE_DIR = './';  // Node.js 服务所在目录
// const WEB_DIR = '/opt/1panel/apps/openresty/openresty/www/sites/test.hpvideo.ai/index/uploads';    // 图片存储目标目录
const WEB_DIR = '/app/uploads';    // 图片存储目标目录

// 设置超时请求时间
loginInfo.use(timeout('20s'));

const blacklist = [];
// 设置 MongoDB 连接信息
const mongoURI = "mongodb://deeplink:DeepLinkGlobal2023@8.219.11.151:27017,8.214.76.106:27017,8.214.55.62:27017/test1?replicaSet=deeplink"
const mongoURI1 = process.env.MONGODB_ROUTER_URI || "mongodb://hpvideo:hpvideo2015@localhost:27019"

// 设置 Multer 以处理文件上传
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   }
// });

// 配置 multer 存储到 WEB_DIR 目录
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 直接指定绝对路径到 /data/web
    const uploadDir = WEB_DIR;
    
    // 确保目录存在
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log(`创建上传目录: ${uploadDir}`);
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // const ext = path.extname(file.originalname);
    // const name = path.basename(file.originalname, ext)
    //                 .toLowerCase()
    //                 .replace(/[^a-z0-9]/g, '-');
    // cb(null, "img" + '-' + uniqueSuffix + ext);
    const originalName = file.originalname;
    cb(null, originalName);
  }
});

// 文件过滤器 — accept by mimetype, with an extension fallback so phone
// photos that arrive as image/heic or application/octet-stream (some
// browsers/drag-drops) aren't wrongly rejected.
const IMG_EXT = /\.(jpe?g|png|gif|webp|bmp|heic|heif|avif|svg)$/i;
const fileFilter = (req, file, cb) => {
  const mt = (file.mimetype || '').toLowerCase();
  if (mt.startsWith('image/') || IMG_EXT.test(file.originalname || '')) {
    cb(null, true);
  } else {
    cb(new Error('只允许上传图片文件！'), false);
  }
};

const upload = multer({ storage, fileFilter, limits: {
  fileSize: 25 * 1024 * 1024, // 25MB per uploaded file — phone photos routinely exceed 5MB (was 5MB, which silently 500'd)
  fieldSize: 25 * 1024 * 1024, // 25MB per text field (base64 cover image / rich editor_content) — default 1MB caused MulterError: Field value too long
  fields: 50
}});

// Wrap multer so its errors become a clean JSON response (and get logged)
// instead of propagating to Express's default handler as a silent 500 HTML
// page. Without this, an oversized / wrong-mimetype file failed with no log
// and no useful message to the admin. Use this in place of
// `upload.fields([{ name: 'img_file' }])` on the blog routes.
const uploadImg = (req, res, next) => {
  upload.fields([{ name: 'img_file' }])(req, res, (err) => {
    if (err) {
      console.error('图片上传中间件错误:', err.code || '', err.message);
      const msg = err.code === 'LIMIT_FILE_SIZE'
        ? '图片超过 25MB 上限，请压缩后重试'
        : ('图片上传失败: ' + err.message);
      return res.status(400).json({ success: false, code: -3, msg });
    }
    next();
  });
};


const userInfo = {
  username: '$2a$10$PCY4hu0gIfBxnmMVfTqukunumHq8M4BhOYQDVDCQugV1r5/iDbvIS',  // "hpvideo"
  password: '$2a$12$WU4EVmeiF/zhQX0NtShiu.f27KXvi5xepXedQ8vjLXRx2Q/FiDJIq' // "hpvideo123"
}

// 用户登录
loginInfo.post('/login', urlEcode, async (request, response ,next) => {
  let conn = null;
  try {
    const { username, password } = request.body
    if (username && password) {
      if (bcrypt.compareSync(username, userInfo.username) && bcrypt.compareSync(password, userInfo.password)) {
        let token = jwt.sign({ username, password }, 'token', {
          expiresIn: 60*60*2// 授权时效24小时
        })
        !request.timedout&&response.json({
          code: 10001,
          msg: '登录成功',
          success: true,
          content: token
        })
      } else {
        !request.timedout&&response.json({
          code: -1,
          msg: '用户密码不正确',
          success: false
        })
      }
    } else {
      !request.timedout&&response.json({
        code: -1,
        msg: '用户密码不能为空',
        success: false
      })
    }
  } catch (error) {
    !request.timedout&&response.json({
      code: -10001,
      msg:error.message,
      success: false
    })
  } finally {
    if (conn != null){
      conn.close()
      conn = null
    }
  } 
})


function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  // console.log(blacklist, 'blacklist');
  if (blacklist.includes(token)) {
    return res.status(401).send('Token revoked. Please authenticate.');
  }
  try {
    const decoded = jwt.verify(token, 'token');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
}

loginInfo.get('/getCategories', async (request, response ,next) => {
  let conn = null;
  try {
    if (conn == null) {
      conn = await MongoClient.connect(mongoURI1, { useUnifiedTopology: true })
    }
    const hpvideo = await conn.db("hpvideo").collection("blog_categories")
    const categoryData = await hpvideo.find({}).toArray()
    !request.timedout&&response.json({
      success: true,
      code: 10001,
      msg: '查询成功',
      content: categoryData
    })
    if (conn != null){
      conn.close()
      conn = null
    }
  } catch (error) {
    !request.timedout&&response.json({
      code: -10001,
      msg:error.message,
      success: false
    })
    if (conn != null){
      conn.close()
      conn = null
    }
  } finally {
    if (conn != null){
      conn.close()
      conn = null
    }
  } 
})

// 新增博客内容
loginInfo.post('/addBlog', urlEcode, uploadImg, authenticate, async (req, res) => {
  try {
    // 连接到 MongoDB
    const conn = await MongoClient.connect(mongoURI1, { useUnifiedTopology: true })
    // 从请求中获取其他字段
    const { title, link_url, description, category, date, editor_content } = req.body
    if (title&&link_url&&description&&category&&date&&editor_content) {
      const collection = await conn.db("hpvideo").collection("blog_list")
      const timestamp = + new Date(date)
      if (req.body.img_url) delete req.body.img_url
      await collection.insertOne({...req.body, img_file: (req.files && req.files['img_file'] && req.files['img_file'][0]) ? req.files['img_file'][0].filename : (req.body.img_file || ''), timestamp: timestamp})
      conn.close();
      !req.timedout&&res.json({
        success: true,
        code: 1,
        msg: '新增成功'
      })
    } else {
      !req.timedout&&res.json({
        success: false,
        code: -2,
        msg: '新增失败,缺少必要参数',
      })
    }
  } catch (err) {
    !req.timedout&&res.json({
      success: false,
      code: -1,
      msg: '新增失败',
      errorInfo: err.message
    })
  }
});

// 编辑博客内容
loginInfo.post('/editBlog', urlEcode, uploadImg, authenticate, async (req, res) => {
  try {
    // 连接到 MongoDB
    const conn = await MongoClient.connect(mongoURI1, { useUnifiedTopology: true })
    // 从请求中获取其他字段
    const { id, title, link_url, img_alt, description, category, date, editor_content } = req.body
    if (id&&title&&link_url&&category&&date&&editor_content) {
      const collection = await conn.db("hpvideo").collection("blog_list")
      let data = {
        title: title, 
        link_url: link_url,
        category: category,
        date: date,
        img_alt: img_alt,
        description: description,
        editor_content: editor_content,
        timestamp: + new Date(date),
      }
      if (req.files['img_file']) {
        // data.img_url = req.body.img_url,
        data.img_file = req.files['img_file'][0].filename
      }
      await collection.updateOne({_id: new ObjectId(id)}, {$set: data})
      conn.close();
      !req.timedout&&res.json({
        success: true,
        code: 1,
        msg: '修改成功'
      })
    } else {
      !req.timedout&&res.json({
        success: false,
        code: -2,
        msg: '修改失败,缺少必要参数',
      })
    }
  } catch (err) {
    !req.timedout&&res.json({
      success: false,
      code: -1,
      msg: '新增失败',
      errorInfo: err.message
    })
  }
});

// 删除
loginInfo.post('/deleteBlog', urlEcode, authenticate, async (req, res) => {
  try {
    // 连接到 MongoDB
    const conn = await MongoClient.connect(mongoURI1, { useUnifiedTopology: true })
    // 从请求中获取其他字段
    const { id } = req.body
    if (id) {
      const collection = await conn.db("hpvideo").collection("blog_list")
      await collection.deleteOne({_id: new ObjectId(id)})
      conn.close();
      !req.timedout&&res.json({
        success: true,
        code: 1,
        msg: '删除成功'
      })
    } else {
      !req.timedout&&res.json({
        success: false,
        code: -2,
        msg: '删除失败,缺少必要参数',
      })
    }
  } catch (err) {
    !req.timedout&&res.json({
      success: false,
      code: -1,
      msg: '新增失败',
      errorInfo: err.message
    })
  }
});

// 获取博客列表
loginInfo.post('/getList', urlEcode, async (req, res) => {
  try {
    // 连接到 MongoDB
    const conn = await MongoClient.connect(mongoURI1, { useUnifiedTopology: true })
    // 从请求中获取其他字段
    const { size, current, category } = req.body
    let pageSize = size?parseInt(size):20
    let pageNum = current?parseInt(current):1
    let perams= [pageSize*(pageNum - 1), pageSize]
    const collection = await conn.db("hpvideo").collection("blog_list")
    let reqData = {}
    if (category !== '') {
      reqData.category = category
    }
    const Total = await collection.find(reqData).toArray()
    const list = await collection.aggregate([{ $sort: {timestamp: -1} }, {$match: reqData}, {$skip: perams[0]}, {$limit: perams[1]}]).toArray()
    conn.close();
    !req.timedout&&res.json({
      success: true,
      code: 1,
      msg: '获取列表信息',
      data: {
        list: list,
        total: Total.length,
      }
    })
  } catch (err) {
    !req.timedout&&res.json({
      success: false,
      code: -1,
      msg: '获取列表信息失败',
      errorInfo: err.message
    })
  }
});

// 获取博客的详细信息
loginInfo.post('/getBlogInfo', urlEcode, async (req, res) => {
  try {
    // 连接到 MongoDB
    const conn = await MongoClient.connect(mongoURI1, { useUnifiedTopology: true })
    // 从请求中获取其他字段
    const { link_url } = req.body
    const collection = await conn.db("hpvideo").collection("blog_list")
    const Info = await collection.find({link_url: link_url}).toArray()
    conn.close();
    !req.timedout&&res.json({
      success: true,
      code: 1,
      msg: '获取列表信息',
      data: Info.length? Info[0]: {}
    })
  } catch (err) {
    !req.timedout&&res.json({
      success: false,
      code: -1,
      msg: '获取列表信息失败',
      errorInfo: err.message
    })
  }
});


// 用户退出
loginInfo.post('/loginOut', urlEcode, authenticate, async (request, response ,next) => {
  let conn = null;
  try {
    const token = request.headers['authorization'];
    if (token) {
      blacklist.push(token)
      !request.timedout&&response.json({
        code: 10001,
        msg: '退出成功，token已注销',
        success: true,
        content: token
      })
    }
  } catch (error) {
    !request.timedout&&response.json({
      code: -10001,
      msg:error.message,
      success: false
    })
  } finally {
    if (conn != null){
      conn.close()
      conn = null
    }
  } 
})

// 定义超时处理函数
loginInfo.use((req, res, next) => {
  if (req.timedout) {
    res.status(504).send('Service is unavailable (timeout)');
  } else {
    next();
  }
});


const getUser = async () => {
  const username = 'hpvideo';
  const password = 'hpvideo123';
  try {
    // 哈希密码
    const salt = await bcrypt.genSalt(10);
    const hashedusername = await bcrypt.hash(username, salt);
    console.log('Hashed username:', hashedusername);
    // 或者更简洁的方式：直接哈希（自动生成salt）
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log('Hashed password:', hashedPassword);
    // 验证密码
    const isMatch = await bcrypt.compare('hpvideo', hashedusername);
    console.log('Password matches:', isMatch); // true
  } catch (error) {
    console.error('Error:', error);
  }
}
