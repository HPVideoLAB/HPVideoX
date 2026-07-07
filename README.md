# hpvideo-router — source stash + blog upload fix

`node.hpvideo.io` → `hpvideo-router-svc` → `hpvideo-router` deployment.
Express (ESM) + Multer + MongoDB. Serves the blog admin API
(`/api/getUser/*`) used by the blog backend at `backend.hpvideo.io`.

**⚠ No git repo** for this service in our cloned set — source lives
only inside the image `docker.io/library/hpvideo-router:prod`, built
2026-02-24. This `loginInfo.js` is a copy pulled from the running pod.
Full `/app` (index.js, HttpRequest/*.js) is still only in the image.

## 2026-07-07 — blog image upload fix

Symptom: "博客图片上传不了" — Add Blog failed. Router logs showed
`MulterError: Field value too long`.

Root cause: `loginInfo.js` multer config set `limits.fileSize` (5MB)
but not `limits.fieldSize`, so Multer's **1MB default field limit**
rejected the base64 cover-image / rich `editor_content` text field.
The `/addBlog` + `/editBlog` handlers run `upload.fields()` before
`authenticate`, so the error hit before auth.

Fix (line ~80): added
```js
fieldSize: 25 * 1024 * 1024,  // 25MB per text field
fields: 50,
```

Deployed as image `hpvideo-router:prod-blogfix` (docker build FROM the
old image + COPY patched loginInfo.js → ctr import to k8s.io →
`kubectl set image deployment/hpvideo-router`). Pod runs on master01.

Verified: a 3MB `editor_content` field now passes multer and reaches
the auth middleware (`403 A token is required`) instead of throwing
MulterError.

## Rebuild recipe (if the image needs another patch)

```bash
# on master01 (via jumpbox 52.79.41.196), docker is at /usr/bin/docker
ctr -n k8s.io images export /tmp/r.tar docker.io/library/hpvideo-router:prod
docker load -i /tmp/r.tar
# edit loginInfo.js, then:
printf 'FROM hpvideo-router:prod\nCOPY loginInfo.js /app/HttpRequest/loginInfo.js\n' > Dockerfile
docker build -t hpvideo-router:prod-blogfix2 .
docker save hpvideo-router:prod-blogfix2 -o /tmp/r2.tar
ctr -n k8s.io images import /tmp/r2.tar
kubectl set image deployment/hpvideo-router router=docker.io/library/hpvideo-router:prod-blogfix2 -n hpvideo
rm -f /tmp/r.tar /tmp/r2.tar   # 296MB each — always clean up
```
