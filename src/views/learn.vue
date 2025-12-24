<template>
  <div class="learn">
    <header>
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
    </article>
    <article>
      <div class="content learn_article">
        <div class="filter">
          <p class="filter_left">{{ $t("learn.text1") }}</p>
          <div class="filter_right">
            <p class="filter_li" :class="{'active': choose_index == ''}" @click="choose_filter('')">{{ $t("learn.text2") }}</p>
            <p class="filter_li" v-for="item in filter_list" :key="item.value" :class="{'active': choose_index == item.value}" @click="choose_filter(item.value)">{{ item.name }}</p>
          </div>
        </div>
        <div class="filter_cont">
          <div v-if="total_blog" v-for="(item, index) in blog_list" :key="item._id" class="cont_article" @click="showInfo(item)">
            <div class="artic_img"><img :src="item.img_url.indexOf('image') !== -1 ? item.img_url : getImageUrl((index%3)+2)" :alt="item.img_alt ? item.img_alt : ''"></div>
            <div class="artic_title">{{ item.title }}</div> 
            <div class="artic_text">{{ item.category }}</div> 
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
  import { getList } from "@/api/index";

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
        {
          name: 'Workflows',
          value: 'Workflows'
        },
        {
          name: 'Act-two',
          value: 'Act-two'
        },
        {
          name: 'Gen-4',
          value: 'Gen-4'
        }
      ])
      const getImageUrl = (index) => {
        const num = (index % 3) + 2;
        return require(`@/assets/learn/learn_img${num}.png`);
      }
      const blog_list = ref([])
      const total_blog = ref(0)
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
      margin: 0 auto 150px;
      min-height: calc(100vh - 500px);
      .filter {
        display: flex;
        align-items: center;
        margin-bottom: 60px;
        .filter_left {
          font-size: 20px;
          line-height: 1.5;
          color: rgba(255, 255, 255, .6);
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
              margin: 0 60px 0 10px;
            }
          }
        }
      }
      .filter_cont {
        gap: 2%;
        min-height: 300px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .cont_article {
          width: 32%;
          cursor: pointer;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 40px;
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
            }
          }
          .artic_title {
            width: 100%;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            overflow: hidden;
            line-height: 1.5;
            margin: 16px 0 4px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .artic_text {
            font-size: 16px;
            line-height: 1.5;
            color: rgba(255, 255, 255, .6);
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
