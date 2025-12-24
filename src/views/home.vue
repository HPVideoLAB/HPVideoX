<template>
  <div class="home">
    <header>
      <div class="content home_page">
        <div class="bg1"></div>
        <div class="cont1">
          <div class="home_left">
            <div class="title animation_hide" v-animate="{delay: 0, class:'fadeInUp'}">
              <p class="title1">{{ $t("home.cont1.title1") }}</p>
              <p>{{ $t("home.cont1.title2") }}</p>
              <!-- <p>{{ $t("home.cont1.title3") }}</p> -->
            </div>
            <div class="text animation_hide delay200" v-animate="{delay: 200, class:'fadeInUp'}">
              <p>{{ $t("home.cont1.title3") }}</p>
            </div>
            <!-- <div class="text animation_hide delay200" v-animate="{delay: 200, class:'fadeInUp'}">
              
            </div> -->
            <div class="home_bottom">
              <div class="btn animation_hide delay400" v-animate="{delay: 400, class:'amplify'}" @click="linkHref('')">
                <span class="icon"></span> {{ $t("home.cont1.btn") }}
              </div>
              <p class="desc"><span class="icon"></span> {{ $t("home.cont1.text1") }}</p>
              <p class="desc"><span class="text1">10%</span>{{ $t("home.cont1.text2") }}</p>
            </div>
            
          </div>
          <div class="home_right">
            <div 
              class="scroll-container" 
              ref="scrollContainer1"
              @mouseenter="handleMouseEnter1"
              @mouseleave="handleMouseLeave1"
            >
              <div class="scroll-content" ref="scrollContent1">
                <div 
                  class="item" 
                  v-for="(item, index) in 4" 
                  :class="`img_left_bg${index+1}`"
                >
                  <div class="icon" @click="show_video_info(index)"></div>
                </div>
              </div>
            </div>
            <div 
              class="scroll-container" 
              ref="scrollContainer"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
            >
              <div class="scroll-content" ref="scrollContent">
                <div 
                  class="item" 
                  v-for="(item, index) in 4" 
                  :class="`img_right_bg${index+1}`"
                >
                  <div class="icon" @click="show_video_info(index+4)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="content help_with">
        <div class="title animation_hide" v-animate="{delay: 0, class:'fadeInUp'}">{{ $t("home.cont2.title") }}</div>
        <div class="ask_cont animation_hide delay300" v-animate="{delay: 300, class:'fadeInUp'}">
          <div class="ask_text_cont">
            <textarea 
              v-model="inputText" 
              class="transparent-textarea" 
              placeholder="Ask anything"
            ></textarea>
            <div class="text_btn" @click="linkHref(inputText)">→</div>
          </div>
        </div>
        <div class="ask_example">
          <div class="example animation_hide delay100" v-animate="{delay: 100, class:'fadeInLeft'}" @click="linkHref($t('home.cont2.text1'))">{{ $t("home.cont2.text1") }}</div>
          <div class="example animation_hide delay200" v-animate="{delay: 200, class:'fadeInLeft'}" @click="linkHref($t('home.cont2.text2'))">{{ $t("home.cont2.text2") }}</div>
          <div class="example animation_hide delay300" v-animate="{delay: 300, class:'fadeInRight'}" @click="linkHref($t('home.cont2.text3'))">{{ $t("home.cont2.text3") }}</div>
          <div class="example animation_hide delay100" v-animate="{delay: 100, class:'fadeInLeft'}" @click="linkHref($t('home.cont2.text4'))">{{ $t("home.cont2.text4") }}</div>
          <div class="example animation_hide delay200" v-animate="{delay: 200, class:'fadeInRight'}" @click="linkHref($t('home.cont2.text5'))">{{ $t("home.cont2.text5") }}</div>
        </div>
      </div>
    </article>
    <div class="content intro_cont">
      <div class="intro">
        <div class="title">{{ $t("home.cont3.title1") }}</div>
        <div class="intro_text">
          <p class="text animation_hide delay100" v-animate="{delay: 100, class:'fadeInUp'}">{{ $t("home.cont3.text1_1") }}</p>
          <p class="text animation_hide delay300" v-animate="{delay: 300, class:'fadeInUp'}">{{ $t("home.cont3.text1_2") }}</p>
          <p class="text animation_hide delay500" v-animate="{delay: 500, class:'fadeInUp'}">{{ $t("home.cont3.text1_3") }}</p>
          <p class="text animation_hide delay700" v-animate="{delay: 700, class:'fadeInUp'}">{{ $t("home.cont3.text1_4") }}</p>
        </div>
      </div>
      <div class="intro">
        <div class="title">{{ $t("home.cont3.title2") }}</div>
        <div class="intro_text">
          <p class="text animation_hide delay100" v-animate="{delay: 100, class:'fadeInUp'}">{{ $t("home.cont3.text2_1") }}</p>
          <p class="text animation_hide delay300" v-animate="{delay: 300, class:'fadeInUp'}">{{ $t("home.cont3.text2_2") }}</p>
          <p class="text animation_hide delay500" v-animate="{delay: 500, class:'fadeInUp'}">{{ $t("home.cont3.text2_3") }}</p>
          <p class="text animation_hide delay700" v-animate="{delay: 700, class:'fadeInUp'}">{{ $t("home.cont3.text2_4") }}</p>
        </div>
      </div>
      <div class="intro">
        <div class="title">{{ $t("home.cont3.title3") }}</div>
        <div class="intro_text">
          <p class="text animation_hide delay100" v-animate="{delay: 100, class:'fadeInDown'}">{{ $t("home.cont3.text3_1") }}</p>
          <p class="text animation_hide delay300" v-animate="{delay: 300, class:'fadeInDown'}">{{ $t("home.cont3.text3_2") }}</p>
          <p class="text animation_hide delay500" v-animate="{delay: 500, class:'fadeInDown'}">{{ $t("home.cont3.text3_3") }}</p>
          <p class="text animation_hide delay700" v-animate="{delay: 700, class:'fadeInDown'}">{{ $t("home.cont3.text3_4") }}</p>
        </div>
      </div>
      <div class="intro">
        <div class="title">{{ $t("home.cont3.title4") }}</div>
        <div class="intro_text">
          <p class="text animation_hide delay100" v-animate="{delay: 100, class:'fadeInDown'}">{{ $t("home.cont3.text4_1") }}</p>
          <p class="text animation_hide delay300" v-animate="{delay: 300, class:'fadeInDown'}">{{ $t("home.cont3.text4_2") }}</p>
          <p class="text animation_hide delay500" v-animate="{delay: 500, class:'fadeInDown'}">{{ $t("home.cont3.text4_3") }}</p>
          <p class="text animation_hide delay700" v-animate="{delay: 700, class:'fadeInDown'}">{{ $t("home.cont3.text4_4") }}</p>
        </div>
      </div>
    </div>
    <div class="content support_model">
      <div class="title">{{ $t("home.model.title") }}</div>
      <div class="models_list">
        <div class="models_li animation_hide" :class="`delay${index}00`" v-animate="{delay: (index+1)*100, class:'fadeInUp'}" v-for="(item, index) in models_data" :key="index">
          <div class="top_title">
            <div class="text">{{ item.title }}</div>
            <!-- <div class="btn">{{ $t("home.model.learn_more") }}</div> -->
          </div>
          <div class="models_text">
            <p class="text">{{ item.text1 }}</p>
            <p class="text">{{ item.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content text_video">
      <div class="title">{{ $t("home.cont4.title") }}</div>
      <div class="video-container" :class="containerClass">
        <div class="placeholder" :class="placeholderClass">
          <img src="../assets/video_img.png" class="placeholder-image">
          <div class="play-button" @click="playVideo"></div>
        </div>
        <video 
            ref="videoPlayer"
            class="video-player" 
            src="https://static1.deeplink.cloud/hpvideo_assets/case_video4.mp4" 
            @click="togglePlay"
            @ended="videoEnded"
            preload="metadata"
            loop
        >
            Your browser does not support video playback
        </video>
        <div class="progress-bar" v-if="isPlaying">
          <div class="progress" :style="{ width: videoProgress + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="content use_cases animation_hide delay100" v-animate="{delay: 100, class:'fadeInUp'}">
      <div class="title">{{ $t("home.cont5.title") }}</div>
      <div class="case_list">
        <div class="text" :class="{'active': choose_case == index}" v-for="(item, index) in case_data" :key="index" @click="ChooseCase(index)">{{ item.text }}</div>
      </div>
      <div class="case_info">
        <div class="info_left">
          <div class="left_text">{{ case_data_list[choose_case].title }}</div>
          <div class="left_text1">{{ case_data_list[choose_case].text }}</div>
        </div>
        <div class="info_right">
          <img v-if="case_data_list[choose_case].type == 'png'" :src="case_data_list[choose_case].video" alt="">
          <video v-else class="videos" ref="videoRef" :src="case_data_list[choose_case].video"
            loop="loop" 
            muted="muted" 
            controls="controls"
            controlsList="noplaybackrate, nopip">
          </video>
        </div>
      </div>
    </div>
    <div class="content speed_cost">
      <div class="title">{{ $t("home.cont6.title") }}</div>
      <div class="speedcost_cont">
        <!-- <div class="cont_left animation_hide delay100" v-animate="{delay: 100, class:'fadeInLeft'}"><img src="../assets/cont6_img1.png" alt=""></div> -->
        <div class="cont_left">
          <div class="left_cont animation_hide" v-animate="{delay: 0, class:'seamlessScroll'}">
            <div class="rocket animation_hide" v-animate="{delay: 0, class:'scrollUp'}"></div>
            <div class="cont_title animation_hide delay20100" v-animate="{delay: 8100, class:'fadeInDown'}"></div>
            <div class="cont_globl animation_hide delay20100" v-animate="{delay: 8300, class:'fadeInUp'}">
              <div class="globl_map">
                <div class="map_img"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont_right">

          <div class="feature-list">
            <div
              v-for="item in visibleItems"
              :key="item.id"
              class="feature-item"
              :class="{ 'is-active': item.id === activeItem.id }"
            >
              <div class="feature-title">
                {{ item.title }}
              </div>
              <ul class="feature-points">
                <li v-for="(p, i) in item.points" :key="i">
                  <span class="dot"></span>
                  <span>{{ p }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- <div class="right_cont animation_hide delay100" v-animate="{delay: 100, class:'fadeInRight'}">
            <div class="right_title">{{ $t("home.cont6.cost_cont1.title") }}</div>
            <div class="right_list">
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont1.text1") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont1.text2") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont1.text3") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont1.text4") }}</p></div>
            </div>
          </div>
          <div class="right_cont animation_hide delay300" v-animate="{delay: 300, class:'fadeInRight'}">
            <div class="right_title">{{ $t("home.cont6.cost_cont2.title") }}</div>
            <div class="right_list">
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont2.text1") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont2.text2") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont2.text3") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont2.text4") }}</p></div>
            </div>
          </div>
          <div class="right_cont animation_hide delay600" v-animate="{delay: 600, class:'fadeInRight'}">
            <div class="right_title">{{ $t("home.cont6.cost_cont3.title") }}</div>
            <div class="right_list">
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont3.text1") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont3.text2") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont3.text3") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont3.text4") }}</p></div>
            </div>
          </div>
          <div class="right_cont animation_hide delay900" v-animate="{delay: 900, class:'fadeInRight'}">
            <div class="right_title">{{ $t("home.cont6.cost_cont4.title") }}</div>
            <div class="right_list">
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont4.text1") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont4.text2") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont4.text3") }}</p></div>
              <div class="right_li"><span class="icon"></span><p>{{ $t("home.cont6.cost_cont4.text4") }}</p></div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div class="content supported">
      <div class="title">
        <p>{{ $t("home.cont7.title1") }}</p>
        <p>{{ $t("home.cont7.title2") }}</p>
      </div>
      <div class="support_list">
        <div class="support_li"><img src="../assets/support_img1.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img2.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img3.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img4.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img5.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img6.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img7.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img8.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img9.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img10.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img11.png" alt=""></div>
        <div class="support_li"><img src="../assets/support_img12.png" alt=""></div>
      </div>
    </div> -->
    <div class="content blog_cont">
      <div class="title">{{ $t("home.cont8.title") }}</div>
      <div v-if="items.length > 0" class="slider-container" @mousedown="startDrag" @touchstart="startDrag">
        <div 
            class="slider-wrapper" 
            ref="slider"
            :style="{ transform: `translateX(${translateX}px)` }"
        >
            <div class="slide" v-for="(item, index) in items" :key="index" @click="linkHref1(item)">
                <div class="artic_img"><img :src="item.img_file ? `https://www.hpvideo.io/uploads/${item.img_file}` : getImageUrl((index%3)+2)" :alt="item.img_alt ? item.img_alt : ''"></div>
                <div class="artic_title">{{ item.title }}</div>
                <div class="artic_desc">
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
      </div>
      <div class="no_data" v-else>No Data</div>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" align-center width="70%" :lock-scroll="true" :show-close="false">
    <div class="show_model">
      <div class="show_video">
        <iframe width="100%" height="400" :src="show_video_data.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <!-- <iframe width="100%" height="400" src="https://www.youtube.com/watch?v=M1FhHfY82mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
      </div>
      <div class="model_desc">
        <div class="model_cont">
          <div class="model_title">{{ show_video_data.title }}</div>
          <div class="model_text">{{ show_video_data.desc }}</div>
        </div>
        <div class="model_btn">
          <!-- <div class="btn_down"><span class="icon"></span> Download</div> -->
          <div class="btn_create" @click="linkHref(show_video_data.tips)">
            <span class="icon"></span> {{ $t("home.cont1.btn") }}
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref, watch, onMounted, onUnmounted, computed, inject, nextTick } from "vue";
  import { useStore } from "vuex";
  import { useI18n } from "vue-i18n";
  import { useRoute, useRouter } from 'vue-router';
  import video3 from "@/assets/video/case_video3.png";
  import video5 from "@/assets/video/case_video5.png"
  import video6 from "@/assets/video/case_video6.png"
  import video7 from "@/assets/video/case_video7.png"
  import video9 from "@/assets/video/case_video9.png"
  import { getList, getCategories } from "@/api/index";
  export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
      const { t, locale } = useI18n()
      const message = inject( '$message')
      const store = useStore()
      const loading = inject( '$loading')
      let lan = computed(() => store.state.lan)
      const router = useRouter()
      const route = useRoute()
      const dialogVisible = ref(false)
      const videoData = ref([
        {
          video: 'https://www.youtube.com/embed/M1FhHfY82mY?si=Zh8m_1GZGTQoHBqV',
          title: "SORA 2",
          desc: t('home.cont1.model1.text'),
          tips: t('home.cont1.model1.tips')
        },
        {
          video: 'https://www.youtube.com/embed/I06Ef8alr2Y?si=3IlWasti6KKyHcW4"',
          title: "VEO 3.1",
          desc: t('home.cont1.model2.text'),
          tips: t('home.cont1.model2.tips')
        },
        {
          video: 'https://www.youtube.com/embed/dnSan_D8Des?si=cH3FQuIQ3LU2h66a',
          title: "KLING V2.0",
          desc: t('home.cont1.model3.text'),
          tips: t('home.cont1.model3.tips')
        },
        {
          video: 'https://www.youtube.com/embed/Yn6sDfH_dRU?si=GLhYUHczp-k0oJ_x',
          title: "PIXVERSE V4.5",
          desc: t('home.cont1.model4.text'),
          tips: t('home.cont1.model4.tips')
        },
        {
          video: 'https://www.youtube.com/embed/nKeCnvsYN3c?si=coLZys8CLBWGe4Ma',
          title: "LTX 2 PRO",
          desc: t('home.cont1.model5.text'),
          tips: t('home.cont1.model5.tips')
        },
        
        {
          video: 'https://www.youtube.com/embed/kDBdqhn6vXg?si=lK3rxUVF76gOK4Jt',
          title: "WAN 2.5",
          desc: t('home.cont1.model6.text'),
          tips: t('home.cont1.model6.tips')
        },
        
        {
          video: 'https://www.youtube.com/embed/J18idUz87LA?si=h-B2zHCNEgVzpRx0',
          title: "HAILUO 02",
          desc: t('home.cont1.model7.text'),
          tips: t('home.cont1.model7.tips')
        },
        {
          video: 'https://www.youtube.com/embed/-hDVEou4cus?si=b9LlL1O9rZiuA7a1',
          title: "SEEDANCE V1",
          desc: t('home.cont1.model8.text'),
          tips: t('home.cont1.model8.tips')
        },
      ])
      // hpvideo
      const scrollContent = ref(null);
      const scrollContainer = ref(null);
      const isScrolling = ref(true);
      const scrollDirection = ref('down');
      const scrollPosition = ref(0);
      const maxScroll = ref(0);

      let animationId = null;
      const scrollSpeed = 1; 
      
      const calculateMaxScroll = () => {
        if (scrollContent.value && scrollContainer.value) {
          const contentHeight = scrollContent.value.scrollHeight;
          const containerHeight = scrollContainer.value.clientHeight;
          maxScroll.value = Math.max(0, contentHeight - containerHeight);
        }
      };
      
      const startScrolling = () => {
        if (!isScrolling.value) return;
        
        const updateScroll = () => {
          if (scrollDirection.value === 'down') {
            scrollPosition.value += scrollSpeed;
            
            if (scrollPosition.value >= maxScroll.value) {
              scrollPosition.value = maxScroll.value; 
              scrollDirection.value = 'up';
            }
          } else {
            scrollPosition.value -= scrollSpeed;
            
            if (scrollPosition.value <= 0) {
              scrollPosition.value = 0; 
              scrollDirection.value = 'down';
            }
          }
          
          if (scrollContent.value) {
            scrollContent.value.style.transform = `translateY(-${scrollPosition.value}px)`;
          }
          
          animationId = requestAnimationFrame(updateScroll);
        };
        
        animationId = requestAnimationFrame(updateScroll);
      };
      
      const pauseScrolling = () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      };
      
      const handleMouseEnter = () => {
        pauseScrolling();
      };
      
      const handleMouseLeave = () => {
        if (isScrolling.value) {
          startScrolling();
        }
      };

      const scrollContent1 = ref(null);
      const scrollContainer1 = ref(null);
      const isScrolling1 = ref(true);
      const scrollDirection1 = ref('up');
      const scrollPosition1 = ref(0);
      const maxScroll1 = ref(0);

      let animationId1 = null;
      const scrollSpeed1 = 1; 
      
      const calculateMaxScroll1 = () => {
        if (scrollContent1.value && scrollContainer1.value) {
          const contentHeight1 = scrollContent1.value.scrollHeight;
          const containerHeight1 = scrollContainer1.value.clientHeight;
          maxScroll1.value = Math.max(0, contentHeight1 - containerHeight1);
        }
      };
      const scrollToBottom = () => {
        if (scrollContent1.value && scrollContainer1.value) {
          const contentHeight1 = scrollContent1.value.scrollHeight;
          const containerHeight1 = scrollContainer1.value.clientHeight;
          maxScroll1.value = Math.max(0, contentHeight1 - containerHeight1);
          scrollContent1.value.scrollTop = scrollContent1.value.scrollHeight
          scrollPosition1.value = maxScroll1.value
        }
      }
      
      const startScrolling1 = () => {
        if (!isScrolling1.value) return;
        
        const updateScroll = () => {
          if (scrollDirection1.value === 'down') {
            scrollPosition1.value += scrollSpeed1;
            
            if (scrollPosition1.value >= maxScroll1.value) {
              scrollPosition1.value = maxScroll1.value; 
              scrollDirection1.value = 'up';
            }
          } else {
            scrollPosition1.value -= scrollSpeed1;
            
            if (scrollPosition1.value <= 0) {
              scrollPosition1.value = 0; 
              scrollDirection1.value = 'down';
            }
          }
          
          if (scrollContent1.value) {
            scrollContent1.value.style.transform = `translateY(-${scrollPosition1.value}px)`;
          }
          
          animationId1 = requestAnimationFrame(updateScroll);
        };
        
        animationId1 = requestAnimationFrame(updateScroll);
      };
      
      const pauseScrolling1 = () => {
        if (animationId1) {
          cancelAnimationFrame(animationId1);
          animationId1 = null;
        }
      };
      
      const handleMouseEnter1 = () => {
        pauseScrolling1();
      };
      
      const handleMouseLeave1 = () => {
        if (isScrolling1.value) {
          startScrolling1();
        }
      };

      const inputText = ref('')

      const isPlaying = ref(false);
      const videoProgress = ref(0);
      const controlsTimeout = ref(null);
      
      const videoSource = ref('https://vjs.zencdn.net/v/oceans.mp4');
      
      const videoPlayer = ref(null);
      
      const placeholderClass = computed(() => ({
        'hidden': isPlaying.value
      }));
      const containerClass = computed(() => ({
        'playing': isPlaying.value
      }));
      
      const playVideo = async () => {
        if (!videoPlayer.value) return;
        try {
          await videoPlayer.value.play();
          isPlaying.value = true;
        } catch (error) {
          console.error('video play error:', error);
          setTimeout(() => {
            isPlaying.value = true;
          }, 1000);
        }
      };
      
      const pauseVideo = () => {
        if (!videoPlayer.value) return;
        videoPlayer.value.pause();
        isPlaying.value = false;
      };
      
      const togglePlay = () => {
        if (isPlaying.value) {
          pauseVideo();
        } else {
          playVideo();
        }
      };
      
      const videoEnded = () => {
        isPlaying.value = false;
        if (videoPlayer.value) {
          videoPlayer.value.currentTime = 0;
        }
      };
      const updateProgress = () => {
        if (!videoPlayer.value) return;
        const currentTime = videoPlayer.value.currentTime;
        const duration = videoPlayer.value.duration;
        if (duration > 0) {
          videoProgress.value = (currentTime / duration) * 100;
        }
      };

      const choose_case = ref(0)
      const case_data = ref([
        { text: t("home.cont5.text1") },
        { text: t("home.cont5.text2") },
        { text: t("home.cont5.text3") },
        { text: t("home.cont5.text4") },
        { text: t("home.cont5.text5") },
        { text: t("home.cont5.text6") },
        { text: t("home.cont5.text7") },
        { text: t("home.cont5.text8") },
        { text: t("home.cont5.text9") },
        { text: t("home.cont5.text10") },
      ])
      const case_data_list = ref([
        {
          index: 1,
          title: t("home.cont5.text_cont1.title"),
          text: t("home.cont5.text_cont1.text"),
          type: "mp4",
          video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video1.mp4',
        },
        {
          index: 2,
          title: t("home.cont5.text_cont2.title"),
          text: t("home.cont5.text_cont2.text"),
          type: "mp4",
          video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video2.mp4'
        },
        {
          index: 3,
          title: t("home.cont5.text_cont3.title"),
          text: t("home.cont5.text_cont3.text"),
          type: "png",
          video: video3
        },
        {
          index: 4,
          title: t("home.cont5.text_cont4.title"),
          text: t("home.cont5.text_cont4.text"),
          type: "mp4",
          video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video4.mp4'
        },
        {
          index: 5,
          title: t("home.cont5.text_cont5.title"),
          text: t("home.cont5.text_cont5.text"),
          type: "png",
          video: video5
        },
        {
          index: 6,
          title: t("home.cont5.text_cont6.title"),
          text: t("home.cont5.text_cont6.text"),
          type: "png",
          video: video6
        },
        {
          index: 7,
          title: t("home.cont5.text_cont7.title"),
          text: t("home.cont5.text_cont7.text"),
          type: "png",
          video: video7
        },
        {
          index: 8,
          title: t("home.cont5.text_cont8.title"),
          text: t("home.cont5.text_cont8.text"),
          type: "mp4",
          video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video8.mp4'
        },
        {
          index: 9,
          title: t("home.cont5.text_cont9.title"),
          text: t("home.cont5.text_cont9.text"),
          type: "png",
          video: video9
        },
        {
          index: 10,
          title: t("home.cont5.text_cont10.title"),
          text: t("home.cont5.text_cont10.text"),
          type: "mp4",
          video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video10.mp4'
        }
      ])
      const ChooseCase = async (index) => {
        choose_case.value = index
      }

      const models_data = ref([
        {
          title: t("home.model.li1.title"),
          text1: t("home.model.li1.text1"),
          text2: t("home.model.li1.text2"),
        },
        {
          title: t("home.model.li2.title"),
          text1: t("home.model.li2.text1"),
          text2: t("home.model.li2.text2"),
        },
        {
          title: t("home.model.li3.title"),
          text1: t("home.model.li3.text1"),
          text2: t("home.model.li3.text2"),
        },
        {
          title: t("home.model.li4.title"),
          text1: t("home.model.li4.text1"),
          text2: t("home.model.li4.text2"),
        },
        {
          title: t("home.model.li5.title"),
          text1: t("home.model.li5.text1"),
          text2: t("home.model.li5.text2"),
        },
        {
          title: t("home.model.li6.title"),
          text1: t("home.model.li6.text1"),
          text2: t("home.model.li6.text2"),
        },
        {
          title: t("home.model.li7.title"),
          text1: t("home.model.li7.text1"),
          text2: t("home.model.li7.text2"),
        },
        {
          title: t("home.model.li8.title"),
          text1: t("home.model.li8.text1"),
          text2: t("home.model.li8.text2"),
        },
        {
          title: t("home.model.li9.title"),
          text1: t("home.model.li9.text1"),
          text2: t("home.model.li9.text2"),
        }
      ])

      const speed_data = ref([
        {
          id: "cost_cont1",
          title: t("home.cont6.cost_cont1.title"),
          points: [
            t("home.cont6.cost_cont1.text1"),
            t("home.cont6.cost_cont1.text2"),
            t("home.cont6.cost_cont1.text3"),
            t("home.cont6.cost_cont1.text4"),
          ],
        },
        {
          id: "cost_cont2",
          title: t("home.cont6.cost_cont2.title"),
          points: [
            t("home.cont6.cost_cont2.text1"),
            t("home.cont6.cost_cont2.text2"),
            t("home.cont6.cost_cont2.text3"),
            t("home.cont6.cost_cont2.text4"),
          ],
        },
        {
          id: "cost_cont3",
          title: t("home.cont6.cost_cont3.title"),
          points: [
            t("home.cont6.cost_cont3.text1"),
            t("home.cont6.cost_cont3.text2"),
            t("home.cont6.cost_cont3.text3"),
            t("home.cont6.cost_cont3.text4"),
          ],
        },
        {
          id: "cost_cont4",
          title: t("home.cont6.cost_cont4.title"),
          points: [
            t("home.cont6.cost_cont4.text1"),
            t("home.cont6.cost_cont4.text2"),
            t("home.cont6.cost_cont4.text3"),
            t("home.cont6.cost_cont4.text4"),
          ],
        },
      ])

      const activeIndex = ref(0)
      const timer = ref(null)

      const activeItem = computed(() => speed_data.value[activeIndex.value])

      const visibleItems = computed(() => {
        const len = speed_data.value.length
        const idxs = [
          activeIndex.value,
          (activeIndex.value + 1) % len,
          (activeIndex.value + 2) % len
        ]
        return idxs.map(i => speed_data.value[i])
      })


      const linkHref = (el) => {
        if (el) {
          window.open(`https://www.hpvideo.io/creator?urlprompt=${el}`, '_blank')
        } else {
          window.open(`https://www.hpvideo.io/creator`, '_blank')
        }
      }
      const show_video_data = ref(null)
      const show_video_info = async (index) => {
        show_video_data.value = videoData.value[index]
        dialogVisible.value = true
      }

      const getImageUrl = (index) => {
        const num = (index % 3) + 2; 
        return require(`@/assets/learn/learn_img${num}.png`);
      }
      const getBlogList = async () => {
        // const loadingInstance = loading.service({
        //   target: '.filter_cont',
        //   text: 'Loading...',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
        try {
          const res = await getList({
            page: 1,
            pageSize: 20,
            category: ''
          })
          if (res.success) {
            items.value = res.data.list || []
            if (items.value.length > 4) {
              setTimeout(() => {
                initDragBounds();
                startAutoScroll()
              }, 1000);
            }
            // loadingInstance.close()
          } else {
            // loadingInstance.close()
          }
          console.log(blog_list.value, 'blog_list');
        } catch (error) {
          // loadingInstance.close()
        }
      }

      const linkHref1 = (item) => {
        router.push({path: `/blogInfo/${item.link_url ? item.link_url : ''}`})
      }

      const items = ref([]);
    
      const slider = ref(null);
      const translateX = ref(0);
      const isDragging = ref(false);
      const startX = ref(0);
      const startTranslateX = ref(0);
      const isAutoScrolling = ref(true);
      const scrollSpeedSlider = ref(2); 
      const scrollDirectionSlider = ref(-1);
      const autoScrollInterval = ref(null);
      
      const minTranslateX = ref(0);
      const maxTranslateX = ref(0);
      
      const initDragBounds = () => {
        if (!slider.value) return;
        
        const sliderWidth = slider.value.scrollWidth;
        const containerWidth = slider.value.parentElement.clientWidth;
        const maxDrag = sliderWidth - containerWidth;
        
        minTranslateX.value = -maxDrag;
        maxTranslateX.value = 0;
        
        if (maxDrag <= 0) {
            minTranslateX.value = 0;
            maxTranslateX.value = 0;
        }
        translateX.value = Math.max(minTranslateX.value, Math.min(translateX.value, maxTranslateX.value));
      };
    
      const startDrag = (e) => {
        isDragging.value = true;
        
        startX.value = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        startTranslateX.value = translateX.value;
        
        initDragBounds();
        
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
        
        e.preventDefault();
      };
    
      const dragMove = (e) => {
        if (!isDragging.value) return;
        
        e.preventDefault();
        
        const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diffX = currentX - startX.value;
        
        let newTranslateX = startTranslateX.value + diffX;
        newTranslateX = Math.max(minTranslateX.value, Math.min(newTranslateX, maxTranslateX.value));
        
        translateX.value = newTranslateX;
      };
    
      const endDrag = () => {
        isDragging.value = false;
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('touchmove', dragMove);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
        
        setTimeout(() => {
          if (!isDragging.value) {
            resumeAutoScroll();
          }
        }, 2000);
      };

      const resumeAutoScroll = () => {
        if (!isAutoScrolling.value) {
          isAutoScrolling.value = true;
          startAutoScroll();
        }
      };
      const startAutoScroll = () => {
        if (autoScrollInterval.value) {
          clearInterval(autoScrollInterval.value);
        }
        const speedMap = {
            1: 15, 
            2: 8,  
            3: 3   
        };
        const intervalTime = speedMap[scrollSpeedSlider.value];
        autoScrollInterval.value = setInterval(() => {
            if (isDragging.value) return;
            
            let newTranslateX = translateX.value + scrollDirectionSlider.value;
            
            if (newTranslateX <= minTranslateX.value) {
                scrollDirectionSlider.value = 1;
                newTranslateX = minTranslateX.value;
            } else if (newTranslateX >= maxTranslateX.value) {
                scrollDirectionSlider.value = -1;
                newTranslateX = maxTranslateX.value;
            }
            
            translateX.value = newTranslateX;
        }, intervalTime);
      };


      watch(() => locale.value, (newLan) => {
        videoData.value = [
          {
            video: 'https://www.youtube.com/embed/M1FhHfY82mY?si=Zh8m_1GZGTQoHBqV',
            title: "SORA 2",
            desc: t('home.cont1.model1.text'),
            tips: t('home.cont1.model1.tips')
          },
          {
            video: 'https://www.youtube.com/embed/I06Ef8alr2Y?si=3IlWasti6KKyHcW4"',
            title: "VEO 3.1",
            desc: t('home.cont1.model2.text'),
            tips: t('home.cont1.model2.tips')
          },
          {
            video: 'https://www.youtube.com/embed/dnSan_D8Des?si=cH3FQuIQ3LU2h66a',
            title: "KLING V2.0",
            desc: t('home.cont1.model3.text'),
            tips: t('home.cont1.model3.tips')
          },
          {
            video: 'https://www.youtube.com/embed/Yn6sDfH_dRU?si=GLhYUHczp-k0oJ_x',
            title: "PIXVERSE V4.5",
            desc: t('home.cont1.model4.text'),
            tips: t('home.cont1.model4.tips')
          },
          {
            video: 'https://www.youtube.com/embed/nKeCnvsYN3c?si=coLZys8CLBWGe4Ma',
            title: "LTX 2 PRO",
            desc: t('home.cont1.model5.text'),
            tips: t('home.cont1.model5.tips')
          },
          
          {
            video: 'https://www.youtube.com/embed/kDBdqhn6vXg?si=lK3rxUVF76gOK4Jt',
            title: "WAN 2.5",
            desc: t('home.cont1.model6.text'),
            tips: t('home.cont1.model6.tips')
          },
          
          {
            video: 'https://www.youtube.com/embed/J18idUz87LA?si=h-B2zHCNEgVzpRx0',
            title: "HAILUO 02",
            desc: t('home.cont1.model7.text'),
            tips: t('home.cont1.model7.tips')
          },
          {
            video: 'https://www.youtube.com/embed/-hDVEou4cus?si=b9LlL1O9rZiuA7a1',
            title: "SEEDANCE V1",
            desc: t('home.cont1.model8.text'),
            tips: t('home.cont1.model8.tips')
          },
        ]

        models_data.value = [
          {
            title: t("home.model.li1.title"),
            text1: t("home.model.li1.text1"),
            text2: t("home.model.li1.text2"),
          },
          {
            title: t("home.model.li2.title"),
            text1: t("home.model.li2.text1"),
            text2: t("home.model.li2.text2"),
          },
          {
            title: t("home.model.li3.title"),
            text1: t("home.model.li3.text1"),
            text2: t("home.model.li3.text2"),
          },
          {
            title: t("home.model.li4.title"),
            text1: t("home.model.li4.text1"),
            text2: t("home.model.li4.text2"),
          },
          {
            title: t("home.model.li5.title"),
            text1: t("home.model.li5.text1"),
            text2: t("home.model.li5.text2"),
          },
          {
            title: t("home.model.li6.title"),
            text1: t("home.model.li6.text1"),
            text2: t("home.model.li6.text2"),
          },
          {
            title: t("home.model.li7.title"),
            text1: t("home.model.li7.text1"),
            text2: t("home.model.li7.text2"),
          },
          {
            title: t("home.model.li8.title"),
            text1: t("home.model.li8.text1"),
            text2: t("home.model.li8.text2"),
          },
          {
            title: t("home.model.li9.title"),
            text1: t("home.model.li9.text1"),
            text2: t("home.model.li9.text2"),
          }
        ]

        case_data.value = [
          { text: t("home.cont5.text1") },
          { text: t("home.cont5.text2") },
          { text: t("home.cont5.text3") },
          { text: t("home.cont5.text4") },
          { text: t("home.cont5.text5") },
          { text: t("home.cont5.text6") },
          { text: t("home.cont5.text7") },
          { text: t("home.cont5.text8") },
          { text: t("home.cont5.text9") },
          { text: t("home.cont5.text10") },
        ]

        case_data_list.value = [
          {
            index: 1,
            title: t("home.cont5.text_cont1.title"),
            text: t("home.cont5.text_cont1.text"),
            type: "mp4",
            video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video1.mp4',
          },
          {
            index: 2,
            title: t("home.cont5.text_cont2.title"),
            text: t("home.cont5.text_cont2.text"),
            type: "mp4",
            video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video2.mp4'
          },
          {
            index: 3,
            title: t("home.cont5.text_cont3.title"),
            text: t("home.cont5.text_cont3.text"),
            type: "png",
            video: video3
          },
          {
            index: 4,
            title: t("home.cont5.text_cont4.title"),
            text: t("home.cont5.text_cont4.text"),
            type: "mp4",
            video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video4.mp4'
          },
          {
            index: 5,
            title: t("home.cont5.text_cont5.title"),
            text: t("home.cont5.text_cont5.text"),
            type: "png",
            video: video5
          },
          {
            index: 6,
            title: t("home.cont5.text_cont6.title"),
            text: t("home.cont5.text_cont6.text"),
            type: "png",
            video: video6
          },
          {
            index: 7,
            title: t("home.cont5.text_cont7.title"),
            text: t("home.cont5.text_cont7.text"),
            type: "png",
            video: video7
          },
          {
            index: 8,
            title: t("home.cont5.text_cont8.title"),
            text: t("home.cont5.text_cont8.text"),
            type: "mp4",
            video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video8.mp4'
          },
          {
            index: 9,
            title: t("home.cont5.text_cont9.title"),
            text: t("home.cont5.text_cont9.text"),
            type: "png",
            video: video9
          },
          {
            index: 10,
            title: t("home.cont5.text_cont10.title"),
            text: t("home.cont5.text_cont10.text"),
            type: "mp4",
            video: 'https://static1.deeplink.cloud/hpvideo_assets/case_video10.mp4'
          }
        ]

        speed_data.value = [
          {
            id: "cost_cont1",
            title: t("home.cont6.cost_cont1.title"),
            points: [
              t("home.cont6.cost_cont1.text1"),
              t("home.cont6.cost_cont1.text2"),
              t("home.cont6.cost_cont1.text3"),
              t("home.cont6.cost_cont1.text4"),
            ],
          },
          {
            id: "cost_cont2",
            title: t("home.cont6.cost_cont2.title"),
            points: [
              t("home.cont6.cost_cont2.text1"),
              t("home.cont6.cost_cont2.text2"),
              t("home.cont6.cost_cont2.text3"),
              t("home.cont6.cost_cont2.text4"),
            ],
          },
          {
            id: "cost_cont3",
            title: t("home.cont6.cost_cont3.title"),
            points: [
              t("home.cont6.cost_cont3.text1"),
              t("home.cont6.cost_cont3.text2"),
              t("home.cont6.cost_cont3.text3"),
              t("home.cont6.cost_cont3.text4"),
            ],
          },
          {
            id: "cost_cont4",
            title: t("home.cont6.cost_cont4.title"),
            points: [
              t("home.cont6.cost_cont4.text1"),
              t("home.cont6.cost_cont4.text2"),
              t("home.cont6.cost_cont4.text3"),
              t("home.cont6.cost_cont4.text4"),
            ],
          },
        ]
      })

      
      
      onMounted(async () => {
        nextTick(() => {
          scrollToBottom()
          setTimeout(() => {
            calculateMaxScroll();
            startScrolling();
            calculateMaxScroll1();
            startScrolling1();
            getBlogList()
          }, 100);
          window.addEventListener('resize', calculateMaxScroll);
          window.addEventListener('resize', calculateMaxScroll1);
          window.addEventListener('resize', initDragBounds);
        })
        timer.value = setInterval(() => {
          activeIndex.value = (activeIndex.value + 1) % speed_data.value.length
        }, 3000) 
        // document.addEventListener('keydown', (event) => {
        //   if (event.code === 'Space') {
        //     event.preventDefault();
        //     togglePlay();
        //   }
        // });
        
        if (videoPlayer.value) {
          videoPlayer.value.addEventListener('timeupdate', updateProgress);
        }
      });
      onUnmounted(() => {
        pauseScrolling();
        pauseScrolling1();
        window.removeEventListener('resize', calculateMaxScroll);
        window.removeEventListener('resize', calculateMaxScroll1);
        clearTimeout(controlsTimeout.value);
        if (timer.value) clearInterval(timer.value)
      });
      return {
        lan,

        scrollContent,
        scrollContainer,
        isScrolling,
        scrollDirection,
        handleMouseEnter,
        handleMouseLeave,

        scrollContent1,
        scrollContainer1,
        isScrolling1,
        scrollDirection1,
        handleMouseEnter1,
        handleMouseLeave1,

        inputText,

        isPlaying,
        videoProgress,
        videoSource,
        videoPlayer,
        placeholderClass,
        containerClass,
        playVideo,
        pauseVideo,
        togglePlay,
        videoEnded,

        choose_case,
        case_data,
        case_data_list,
        ChooseCase,
        models_data,
        dialogVisible,
        show_video_data,
        show_video_info,
        linkHref,
        speed_data,
        activeItem,
        visibleItems,

        items,
        slider,
        translateX,
        startDrag,
        getImageUrl,
        linkHref1
      };
    }
  })
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  font-style: normal;
  .content {
    min-width: 1200px;
    width: 100%;
    font-size: 0;
    line-height: 0;
    &.home_page {
      position: relative;
      width: 100%;
      z-index: 5;
      padding: 0;
      display: flex;
      overflow: hidden;
      min-height: 880px;
      height: calc(100vh);
      padding: 114px 0 80px;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      background-position: center;
      background-size: cover;
      background-image: url(../assets/cont1_bg1.png);
      .bg1 {
        position: absolute;
        top: -400px;
        right: -800px;
        width: 2457px;
        height: 2174px;
        background: url(../assets/cont1_bg2.png) no-repeat 100%/100%;
      }
      .cont1 {
        position: relative;
        z-index: 5;
        width: 90%;
        display: flex;
        margin: 0 auto;
        max-width: 1200px;
        align-items: center;
        .home_left {
          flex: 1;
          font-family: "Monda";
          .title {
            color: #fff;
            font-size: 48px;
            text-align: left;
            font-weight: 800;
            line-height: 1.2;
            letter-spacing: 0%;
            margin-bottom: 30px;
            vertical-align: middle;
          }
          .title1 {
            font-size: 60px;
            color: #D305F6;
            letter-spacing: 1px;
          }
          .text {
            gap: 30px;
            display: flex;
            font-size: 24px;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: 0%;
            align-items: center;
            font-family: "Outfit";
            vertical-align: middle;
            color: rgba(255, 255, 255, 0.64);
          }
          .home_bottom {
            gap: 20px;
            display: flex;
            align-items: center;
            margin-top: 100px;
            .btn {
              position: relative;
              width: 223px;
              height: 82px;
              color: #fff;
              font-size: 22px;
              cursor: pointer;
              font-weight: 400;
              line-height: 38px;
              letter-spacing: 0%;
              align-items: center;
              border-radius: 12px;
              display: inline-flex;
              background: #151116;
              font-family: "Outfit";
              vertical-align: middle;
              box-sizing: border-box;
              justify-content: center;
              border: 2px solid rgba(255, 255, 255, 0.05);
              .icon {
                width: 56px;
                height: 56px;
                background: url(../assets/cont1_icon1.png) no-repeat 100%/100%;
              }
            }
            .desc {
              display: flex;
              font-size: 24px;
              font-weight: 400;
              line-height: 38px;
              letter-spacing: 0%;
              align-items: center;
              font-family: "Outfit";
              vertical-align: middle;
              flex-direction: column;
              color: rgba(255, 255, 255, 0.64);
              .icon {
                display: inline-block;
                width: 40px;
                height: 40px;
                background: url(../assets/cont1_icon.png) no-repeat 100%/100%;
              }
              .text1 {
                font-size: 36px;
                color: #D305F6;
                line-height: 40px;
              }
            }
          }
        }
        .home_right {
          gap: 15px;
          width: 585px;
          display: flex;
          min-height: 680px;
          height: calc(100vh - 200px);
          .scroll-container {
            width: 285px;
            height: 100%;
            overflow: hidden;
            position: relative;
            border-radius: 10px;
          }
          
          .scroll-content {
            width: 100%;
            position: absolute;
            // transition: transform 0.5s ease;
          }
          
          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 398px;
            padding: 15px;
            color: #000;
            font-size: 30px;
            overflow: hidden;
            border-radius: 8px;
            margin-bottom: 15px;
            box-sizing: border-box;
            transition: transform 0.3s, box-shadow 0.3s;
            &.img_left_bg1 {
              background: url(../assets/cont1_left_img1.png) no-repeat 100%/100%;
            }
            &.img_left_bg2 {
              background: url(../assets/cont1_left_img2.png) no-repeat 100%/100%;
            }
            &.img_left_bg3 {
              background: url(../assets/cont1_left_img3.png) no-repeat 100%/100%;
            }
            &.img_left_bg4 {
              background: url(../assets/cont1_left_img4.png) no-repeat 100%/100%;
            }
            &.img_right_bg1 {
              background: url(../assets/cont1_right_img1.png) no-repeat 100%/100%;
            }
            &.img_right_bg2 {
              background: url(../assets/cont1_right_img2.png) no-repeat 100%/100%;
            }
            &.img_right_bg3 {
              background: url(../assets/cont1_right_img3.png) no-repeat 100%/100%;
            }
            &.img_right_bg4 {
              background: url(../assets/cont1_right_img4.png) no-repeat 100%/100%;
            }
            .icon {
              cursor: pointer;
              width: 28px;
              height: 31px;
              background: url(../assets/cont1_play.png) no-repeat 100%/100%;
            }
          }
        }
      }
    }
    &.help_with {
      width: 100%;
      z-index: 5;
      position: relative;
      padding: 144px 0 90px;
      // background: linear-gradient(180deg, #411D52 0%, #010101 100%);
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        font-family: "Monda";
      }
      .ask_cont {
        width: 780px;
        height: 244px;
        padding: 16px;
        margin: 63px auto;
        border-radius: 20px;
        box-sizing: border-box;
        background: url(../assets/ask_bg.png) no-repeat 100%/100%;
        @keyframes box-shadow {
          0% {
            box-shadow: 0px 0px 15px 10px rgb(153 3 230 / 80%);
          }
          50% {
            box-shadow: 0px 0px 15px 5px rgb(153 3 230 / 20%);
          }
          100% {
            box-shadow: 0px 0px 15px 10px rgb(153 3 230 / 80%);
          }
        }
        animation-name: box-shadow;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        .ask_text_cont {
          display: flex;
          border-radius: 14px;
          align-items: flex-end;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.1);
          .transparent-textarea {
            width: 100%;
            resize: none;
            height: 138px;
            padding: 15px;
            color: #fff;
            font-size: 16px;
            border-radius: 8px;
            box-sizing: border-box;
            background: transparent;
            transition: all 0.3s ease;
            // border: 2px solid rgba(255, 255, 255, 0.3);
            border: none;
          }
          .transparent-textarea:focus {
            outline: none;
            border: none;
            // border-color: rgba(255, 255, 255, 0.7);
            // box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }
          .transparent-textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          .text_btn {
            margin: 16px;
            color: #fff;
            font-size: 36px;
            cursor: pointer;
            font-weight: 200;
            line-height: 36px; 
            padding: 3px 20px;
            border-radius: 4px;
            display: inline-block;
            background: #9903E6;
          }
        }
      }
      .ask_example {
        gap: 12px;
        margin: auto;
        width: 1100px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .example {
          width: 30%;
          font-size: 16px;
          cursor: pointer;
          line-height: 20px;
          padding: 10px 18px;
          border-radius: 10px;
          box-sizing: border-box;
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }
    &.intro_cont {
      gap: 40px;
      width: 90%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      max-width: 1440px;
      min-width: 1200px;
      // align-items: center;
      padding: 150px 0 90px;
      justify-content: space-between;
      .intro {
        width: 580px;
        // height: 360px;
        padding: 72px;
        box-sizing: border-box;
        background: url(../assets/intro_bg.png) no-repeat 100%/100% 100%;
        .title {
          width: 100%;
          height: 78px;
          color: #fff;
          font-size: 32px;
          font-weight: 600;
          line-height: 39px;
          margin: 5px 0 54px;
          font-family: "Monda";
        }
        .intro_text {
          gap: 18px;
          display: flex;
          flex-wrap: wrap;
          .text {
            font-size: 18px;
            line-height: 20px;
            padding: 10px 18px;
            border-radius: 10px;
            box-sizing: border-box;
            color: rgba(255, 255, 255, 0.6);
            background: rgba(208, 154, 255, 0.06);
            border: 1px solid rgba(182, 120, 254, 0.13);
          }
        }
      }
    }
    &.support_model {
      width: 90%;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      padding: 150px 0 90px;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        font-family: "Monda";
        margin-bottom: 100px;
      }
      .models_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .models_li {
          width: 32%;
          padding: 32px;
          margin-bottom: 36px;
          border-radius: 34px;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.2);
          .top_title {
            display: flex;
            align-items: center;
            margin-bottom: 17px;
            justify-content: space-between;
            .text {
              color: #fff;
              font-size: 30px;
              font-weight: 600;
              line-height: 40px;
            }
            .btn {
              color: #fff;
              font-size: 16px;
              line-height: 1;
              padding: 8px 10px;
              border-radius: 10px;
              background: #9903E6;
            }
          }
          .models_text {
            font-size: 16px;
            line-height: 24px;
            color: rgba(255, 255, 255, 0.5);
            .text {
              margin-top: 10px;
            }
          }
        }
      }
    }
    &.text_video {
      width: 100%;
      padding: 150px 0 0;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        font-family: "Monda";
        margin-bottom: 100px;
      }
      .video-container {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
        background-color: #1a1a2e;
        &.has-placeholder {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        .placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%);
          transition: opacity 0.5s ease;
          z-index: 10;
          &.hidden {
            opacity: 0;
            pointer-events: none;
          }
          .placeholder-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.7;
          }
          .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 112px;
            height: 123px;
            cursor: pointer;
            transition: all 0.3s ease;
            transform: translate(-50%, -50%);
            background: url(../assets/play_btn.png) no-repeat 100%/100%;
            &:hover {
              transform: translate(-50%, -50%) scale(1.1);
            }
          }

          .video-title {
            position: absolute;
            bottom: 100px;
            left: 0;
            width: 100%;
            text-align: center;
            color: white;
            font-size: 2.5rem;
            font-weight: 600;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            padding: 0 20px;
          }
          .video-description {
            position: absolute;
            bottom: 50px;
            left: 0;
            width: 100%;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.2rem;
            padding: 0 20px;
          }
        }
        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 5;
        }
        .controls {
          position: absolute;
          bottom: 30px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 20;
          opacity: 0;
          transition: opacity 0.3s ease;
          &.visible {
            opacity: 1;
          }
          .control-button {
            width: 60px;
            height: 60px;
            background: rgba(96, 66, 255, 0.8);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin: 0 15px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            &:hover {
              background: rgba(96, 66, 255, 1);
              transform: scale(1.1);
            }
            .control-icon {
              color: white;
              font-size: 24px;
            }
            &.pause-button .control-icon {
              margin-left: -2px;
            }
          }
        }
        &:hover .controls {
          opacity: 1;
        }
      }
      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 15;
        color: white;
        font-size: 1.2rem;
      }
      .progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        z-index: 20;
        .progress {
          height: 100%;
          background: linear-gradient(90deg, #6042FF, #B0BAFF);
          width: 0%;
          transition: width 0.1s linear;
        }
      }
    }
    &.use_cases {
      width: 90%;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      padding: 150px 0 90px;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        margin-bottom: 33px;
        font-family: "Monda";
      }
      .case_list {
        gap: 24px;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 150px;
        justify-content: center;
        .text {
          cursor: pointer;
          font-size: 20px;
          line-height: 20px;
          padding: 10px 18px;
          border-radius: 10px;
          box-sizing: border-box;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(208, 154, 255, 0.06);
          border: 1px solid rgba(182, 120, 254, 0.13);
          &.active {
            color: #B678FE;
            background: rgba(208, 154, 255, 0.09);
            border: 1px solid rgba(182, 120, 254, 1);
          }
          &:hover {
            color: #B678FE;
            background: rgba(208, 154, 255, 0.09);
            border: 1px solid rgba(182, 120, 254, 1);
          }
        }
      }
      .case_info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .info_left {
          width: 442px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .left_text {
            font-size: 36px;
            font-weight: 600;
            line-height: 40px;
            margin-bottom: 50px;
            color: rgba(255, 255, 255, 1);
          }
          .left_text1 {
            font-size: 24px;
            font-weight: 500;
            line-height: 30px;
            margin-bottom: 50px;
            color: rgba(255, 255, 255, 0.5);
          }
        }
        .info_right {
          width: 670px;
          img {
            width: 669px;
            height: 380px;
          }
          video {
            width: 669px;
            height: 380px;
          }
        }
      }
    }
    &.speed_cost {
      width: 90%;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      padding: 150px 0 90px;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        margin-bottom: 100px;
        font-family: "Monda";
      }
      .speedcost_cont {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .cont_left {
          width: 729px;
          .left_cont {
            position: relative;
            width: 729px;
            height: 626px;
            overflow: hidden;
            border-radius: 46px;
            box-sizing: border-box;
            border: 8px solid #242424;
            // background: url(../assets/speed_bg.png) no-repeat 100%/100%;
            background-image: 
                url('../assets/speed_bg.png'),
                url('../assets/speed_bg.png');
            background-size: cover;
            background-position: 
                center top,
                center top;
            background-repeat: no-repeat;
            &.seamlessScroll {
              animation: seamlessScroll 10s ease-in-out forwards;
            }
            // animation: seamlessScroll 20s ease-in-out forwards;
            @keyframes seamlessScroll {
              0% {
                  background-position: 
                      center top,
                      center -626px;
              }
              100% {
                  background-position: 
                      center 626px,
                      center top;
              }
            }

            .rocket {
              width: 546px;
              height: 1519px;
              margin: 120px auto 0;
              // animation: scrollUp 20s ease-in-out forwards;
              background: url(../assets/speed_rocket.png) no-repeat 100%/100%;
            }
            .scrollUp {
              animation: scrollUp 10s ease-in-out forwards;
            }
            @keyframes scrollUp { 0% { transform: translateY(0); } 100% { transform: translateY(-1800px); } }
            .cont_title {
              position: absolute;
              top: 150px;
              width: 375px;
              height: 50px;
              left: 50%;
              right: 50%;
              margin-left: -187.5px;
              background: url(../assets/speed_text.png) no-repeat 100%/100%;
            }
            .cont_globl {
              position: absolute;
              bottom: -440px;
              width: 841px;
              height: 841px;
              left: 50%;
              right: 50%;
              margin-left: -420px;
              background: url(../assets/speed_globl.png) no-repeat 100%/100%;
              .globl_map {
                position: absolute;
                left: 105px;
                bottom: 71px;
                width: 630px;
                height: 630px;
                overflow: hidden;
                border-radius: 100%;
                .map_img {
                  margin-top: 50px;
                  width: 2474px;
                  height: 585px;
                  animation: scrollImage 20s linear infinite;
                  background: url(../assets/speed_map.png) no-repeat 100%/100%;
                }
                @keyframes scrollImage { 0% { transform: translateX(0); } 100% { transform: translateX(-1844px); } }
              }
            }
            .delay20100 {
              animation-delay: 8100ms; 
            }
            .delay20300 {
              animation-delay: 8300ms; 
            }
          }
        }
        .cont_right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .feature-list {
            gap: 24px;
            display: flex;
            min-width: 420px;
            flex-direction: column;
            .feature-item {
              border-left: 2px solid rgba(255, 255, 255, 0.1);
              padding-left: 54px;
              opacity: 0.35;
              transform: translateX(0);
              transition:
                opacity 0.3s ease,
                transform 0.3s ease,
                border-color 0.25s ease;
              &.is-active {
                border-left-color: #b020f0;
                opacity: 1;
                // transform: translateX(8px);
              }
              .feature-title {
                color: #fff;
                line-height: 1;
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 25px;
              }
              .feature-points {
                list-style: none;
                padding: 0;
                margin: 0;
                li {
                  gap: 8px;
                  opacity: 0.9;
                  display: flex;
                  font-size: 20px;
                  line-height: 30px;
                  align-items: center;
                  color: rgba(255, 255, 255, 0.5);
                }
                li + li {
                  margin-top: 4px;
                }
                .dot {
                  width: 13px;
                  height: 13px;
                  margin-right: 15px;
                  background: url(../assets/speed_point.png) no-repeat 100%/100%;
                }
              }
            }
          }
          // .right_cont {
          //   .right_title {
          //     color: #fff;
          //     font-size: 28px;
          //     font-weight: 600;
          //     line-height: 36px;
          //     margin-bottom: 25px;
          //   }
          //   .right_list {
          //     display: flex;
          //     flex-direction: column;
          //     .right_li {
          //       display: flex;
          //       align-items: center;
          //       .icon {
          //         display: inline-block;
          //         width: 13px;
          //         height: 13px;
          //         margin-right: 15px;
          //         background: url(../assets/cont6_icon.png) no-repeat 100%/100%;
          //       }
          //       p {
          //         font-size: 20px;
          //         line-height: 33px;
          //         color: rgba(255, 255, 255, 0.5);
          //       }
          //     }
          //   }
          // }
        }
      }
    }
    &.supported {
      width: 90%;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      padding: 150px 0 90px;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        margin-bottom: 100px;
        font-family: "Monda";
      }
      .support_list {
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .support_li {
          width: 250px;
          height: 104px;
          img {
            width: 250px;
            height: 104px;
          }
        }
      }
    }
    &.blog_cont {
      width: 90%;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      padding: 150px 0 90px;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        line-height: 68px;
        text-align: center;
        margin-bottom: 100px;
        font-family: "Monda";
      }
      .slider-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        // border-radius: 16px;
        // padding: 30px 0;
        // background: rgba(255, 255, 255, 0.05);
        cursor: grab;
        &:active {
          cursor: grabbing;
        }
        .slider-wrapper {
          display: flex;
          gap: 20px;
          padding: 0 20px;
          user-select: none;
        }
        .slide {
          flex: 0 0 auto;
          width: 300px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: rgba(208, 154, 255, 0.06);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
          &:hover {
            transform: translateY(-5px);
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
          line-height: 1.2;
          padding: 0 10px;
          margin: 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          box-sizing: border-box;
          -webkit-box-orient: vertical;
            /* 添加渐变背景的过渡效果 */
          background-image: linear-gradient(90deg, #fff 0%, #fff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background-image 1s ease;
        }
        .artic_desc {
          width: 100%;
          font-size: 16px;
          padding: 0 10px;
          line-height: 1.5;
          overflow: hidden;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          box-sizing: border-box;
          -webkit-box-orient: vertical;
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
.show_model {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .show_video {
    width: 65%;
    height: 400px;
    display: flex;
    align-items: center;
    // background: url(../assets/dialog_img.png) no-repeat 100%/100%;
    .videos {
      width: 100%;
      height: 400px;
      // background: url(../assets/dialog_img.png) no-repeat 100%/100%;
    }
  }
  .model_desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    .model_cont {
      .model_title {
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .model_text {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 20px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .model_btn {
      display: flex;
      color: #fff;
      font-size: 16px;
      line-height: 25px;
      align-items: center;
      justify-content: end;
      .btn_down {
        display: flex;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: 11px 15px;
        align-items: center;
        border-radius: 14px;
        background: linear-gradient(0deg, #9703E5 0%, #D305F6 100%);
        .icon {
          width: 24px;
          height: 24px;
          margin-right: 2px;
          display: inline-block;
          background: url(../assets/download.png) no-repeat 100%/100%;
        }
      }
      .btn_create {
        display: flex;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: 10px 15px;
        align-items: center;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        // background-color: rgba(20, 20, 20, 0.8); 
        // border: 1px solid rgba(100, 100, 100, 0.3);
        // box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.1),  0 2px 4px rgba(0, 0, 0, 0.2);
        .icon {
          width: 24px;
          height: 24px;
          margin-right: 2px;
          display: inline-block;
          background: url(../assets/cont1_icon1.png) no-repeat 100%/100%;
        }
        // &::before {
        //   content: '';
        //   position: absolute;
        //   top: 0;
        //   left: 50%;
        //   width: 400px;
        //   height: 50px;
        //   /* border-radius: 20px; */
        //   background: radial-gradient(at top left, rgba(179, 22, 137, 1) 0%, rgb(160, 204, 26) 10%, rgba(41, 8, 142,8) 40%, rgba(0, 0, 0, .3) 80%);
        //   // background: linear-gradient(90deg, #a020f0, #e0d7ff, #ffffff);
        // }
        // &::after {
        //   content: '';
        //   position: absolute;
        //   top: 50%;
        //   left: 50%;
        //   transform: translate(-50%, -50%);
        //   width: 190px;
        //   height: 90px;
        //   border-radius: 20px;
        //   z-index: 1;
        //   // background: #f0f0f0;
        //   background: linear-gradient(90deg, #e0d7ff, #ffffff);
        // }
      }
    }
  }
}

</style>


<style>
.el-dialog {
  background: #000 !important;
  border-radius: 60px !important;
  border: 5px solid rgba(255, 255, 255, .1);
}
</style>

<style>


@property --btn_angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.home_cont .home_left .btn::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: -4px;
  left: -4px;
  z-index: -1;
  padding: 4px;
  border-radius: 12px;
  background-image: conic-gradient(from var(--btn_angle), transparent 50%, #b445ea);
  animation: 3s spin linear infinite;
}


@keyframes spin {
  from {
    --btn_angle: 0deg;
  }
  to {
    --btn_angle: 360deg;
  }
}
</style>