<template>
  <div class="learn">
    <!-- <header>
      <div class="content learn_page">
        <div class="bg"></div>
        <div class="page_cont">
          <div class="title">{{ $t("learn.title") }}</div>
        </div>
      </div>
    </header>
    <article>
      <div class="content learn_intro">
        <div class="image"></div>
        <div class="intro">{{ $t("learn.text") }}</div>
      </div>
    </article> -->
    <article>
      <div class="content learn_article">
        <div class="filter">
          <p class="filter_left">{{ $t("learn.text1") }}</p>
          <div class="filter_right">
            <p class="filter_li" :class="{'active': choose_index == ''}" @click="choose_filter('')">{{ $t("learn.text2") }}</p>
            <p class="filter_li" v-for="item in filter_list" :key="item.value" :class="{'active': choose_index == item.value}" @click="choose_filter(item.value)">{{ item.label }}</p>
          </div>
        </div>
        <div class="filter_cont">
          <div v-if="total_blog" v-for="(item, index) in blog_list" :key="item._id" class="cont_article" @click="showInfo(item)">
            <div class="artic_img"><img :src="item.img_file ? `https://www.hpvideo.io/uploads/${item.img_file}` : getImageUrl((index%3)+2)" :alt="item.img_alt ? item.img_alt : ''"></div>
            <div class="artic_title">{{ item.title }}</div> 
            <div class="artic_desc">{{ item.description }}</div> 
            <div class="artic_text">
              <p>{{ item.category }}</p>
              <p>{{ new Date(item.date).toLocaleString() }}</p>
            </div> 
          </div>
          <div class="no_data" v-else>No Data</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref, watch, onMounted, onUnmounted, computed, inject, nextTick } from "vue";
  import { useStore } from "vuex"
  import { useI18n } from "vue-i18n";
  import { useRoute, useRouter } from 'vue-router'
  import { getList, getCategories } from "@/api/index";

  export default defineComponent({
    name: 'learn',
    components: {},
    setup() {
      const { t, locale } = useI18n()
      const message = inject( '$message')
      const store = useStore()
      const loading = inject( '$loading')
      let lan = computed(() => store.state.lan)
      const router = useRouter()
      const route = useRoute()
      
      const choose_index = ref('')
      const choose_filter = async (index) => {
        choose_index.value = index
        getBlogList()
      }
      const linkHref = (el) => {
        window.open(`https://www.hpvideo.io/`, '_blank')
      }
      const filter_list = ref([
        { label: "HPVideo News", value: "HPVideo News" },
        { label: "Trending Headlines", value: "Trending Headlines" },
      ])
      const getImageUrl = (index) => {
        const num = (index % 3) + 2;
        return require(`@/assets/learn/learn_img${num}.png`);
      }
      const blog_list = ref([])
      const total_blog = ref(0)
      const categories = ref([])
      const getCategoriesData = async () => {
        try {
          const res = await getCategories()
          if (res.success) {
            filter_list.value = res.content || []
          }
        } catch (error) {
          console.log(error.message);
        }
      }
      const getBlogList = async () => {
        const loadingInstance = loading.service({
          target: '.filter_cont',
          text: 'Loading...',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        try {
          const res = await getList({
            page: 1,
            pageSize: 50,
            category: choose_index.value
          })
          if (res.success) {
            blog_list.value = res.data.list || []
            total_blog.value = res.data.total || 0
            loadingInstance.close()
          } else {
            loadingInstance.close()
          }
          console.log(blog_list.value, 'blog_list');
        } catch (error) {
          loadingInstance.close()
        }
      }
      const showInfo = (item) => {
        router.push({path: `/blogInfo/${item.link_url ? item.link_url : ''}`})
      }
      onMounted(async () => {
        getBlogList()
        getCategoriesData()
      });
      onUnmounted(() => {
        
      });
      return {
        lan,
        choose_index,
        choose_filter,
        filter_list,
        blog_list,
        total_blog,
        getImageUrl,
        showInfo
      };
    }
  })
</script>

<style lang="scss" scoped>
.learn {
  width: 100%;
  font-style: normal;
  .content {
    min-width: 1200px;
    width: 100%;
    font-size: 0;
    line-height: 0;
    &.learn_page {
      position: relative;
      width: 100%;
      z-index: 5;
      min-height: 880px;
      margin: 114px auto 0;
      box-sizing: border-box;
      height: calc(100vh - 114px);
      background-image: url(../assets/learn/learn_bg.png); 
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.96) 57%, #000 77%, #000 100%);
      }
      .page_cont {
        position: relative;
        z-index: 11;
        width: 90%;
        margin: auto;
        height: 100%;
        max-width: 1440px;
        min-width: 1200px;
        .title {
          position: absolute;
          left: 0;
          width: 800px;
          bottom: 150px;
          color: #fff;
          font-size: 64px;
          font-weight: 600;
          line-height: 64px;
        }
      }
    }
    &.learn_intro {
      width: 90%;
      display: flex;
      max-width: 1440px;
      min-width: 1200px;
      margin: 0 auto 60px;
      justify-content: space-between;
      .image {
        width: 515px;
        height: 325px;
        margin-right: 40px;
        background: url(../assets/learn/learn_img1.png) no-repeat 100%/100%;
      }
      .intro {
        flex: 1;
        font-size: 24px;
        line-height: 30px;
        color: rgba(255, 255, 255, .6);
      }
    }
    &.learn_article {
      width: 90%;
      max-width: 1440px;
      min-width: 1200px;
      margin: 114px auto 150px;
      min-height: calc(100vh - 500px);
      .filter {
        display: flex;
        align-items: center;
        margin-bottom: 60px;
        .filter_left {
          font-size: 32px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 1);
        }
        .filter_right {
          gap: 10px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          .filter_li {
            font-size: 16px;
            cursor: pointer;
            line-height: 16px;
            padding: 14px 18px;
            border-radius: 8px;
            transition: all .3s ease;
            border: 1px solid #262626;
            color: rgba(255, 255, 255, .6);
            background: rgba(20, 20, 20, 1);
            &.active {
              color: #98989A;
              background: #fff;
            }
            &:hover {
              color: #98989A;
              background: #fff;
            }
            &:first-child {
              margin: 0 20px 0 60px;
            }
          }
        }
      }
      .filter_cont {
        gap: 2%;
        min-height: 300px;
        display: flex;
        flex-wrap: wrap;
        .cont_article {
          width: 32%;
          cursor: pointer;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 40px;
          transition: all 1s ease;
          &:hover {
            .artic_img {
              img {
                transform: scale(1.1);
              }
            }
            .artic_title {
              color: transparent;
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-image: linear-gradient(90deg, #9703E5 0%, #D305F6 100%); 
            }
            .artic_desc,.artic_text {
              color: #fff;
            }
          }
          .artic_img {
            width: 100%;
            height: 185px;
            display: flex;
            overflow: hidden;
            justify-content: center;
            img {
              width: 100%;
              height: 185px;
              object-fit: cover;
              transition: transform 1s ease;
            }
          }
          .artic_title {
            width: 100%;
            color: #fff;
            font-size: 24px;
            font-weight: 800;
            overflow: hidden;
            line-height: 1.5;
            margin: 16px 0 4px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            background-image: linear-gradient(90deg, #fff 0%, #fff 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background-image 1s ease;
          }
          .artic_desc {
            width: 100%;
            font-size: 16px;
            line-height: 1.5;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            color: rgba(255, 255, 255, .6);
          }
          .artic_text {
            width: 100%;
            display: flex;
            font-size: 16px;
            line-height: 1.5;
            margin-top: 16px;
            align-items: center;
            justify-content: space-between;
            color: rgba(255, 255, 255, .4);
          }
        }
        .no_data {
          width: 100%;
          height: 300px;
          display: flex;
          font-size: 40px;
          line-height: 1.5;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, .6);
        }
      }
    }
  }
}

</style>
