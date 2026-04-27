<template>
  <div class="legal-wrap">
    <header class="legal-hero">
      <div class="content">
        <h1>{{ pageData.title }}</h1>
        <p class="updated">Last updated: {{ pageData.updated }}</p>
      </div>
    </header>
    <article class="content legal-body">
      <section v-for="(sec, idx) in pageData.sections" :key="idx">
        <h2 v-if="sec.heading">{{ sec.heading }}</h2>
        <p v-for="(para, pidx) in sec.paragraphs" :key="pidx" v-html="para"></p>
        <ul v-if="sec.bullets" class="legal-bullets">
          <li v-for="(b, bidx) in sec.bullets" :key="bidx" v-html="b"></li>
        </ul>
      </section>
    </article>
    <footer class="legal-footer">
      <div class="content">
        Questions? Email <a href="mailto:support@hpvideo.io">support@hpvideo.io</a>
        · <router-link to="/">Back to home</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  import { defineComponent, computed } from "vue";
  import { useRoute } from 'vue-router';
  import { LEGAL_CONTENT } from '@/legal/content';

  export default defineComponent({
    name: 'LegalPage',
    props: {
      pageKey: { type: String, required: true },
    },
    setup(props) {
      const route = useRoute();
      const pageData = computed(() => LEGAL_CONTENT[props.pageKey] || LEGAL_CONTENT.notfound);
      return { pageData };
    },
  });
</script>

<style scoped>
.legal-wrap {
  background: #fff;
  color: #1a1a1a;
  min-height: 100vh;
}
.legal-hero {
  background: linear-gradient(135deg, #c213f2 0%, #8a2ce6 100%);
  color: white;
  padding: 80px 20px 40px;
  text-align: center;
}
.legal-hero h1 {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 8px;
}
.legal-hero .updated {
  opacity: 0.85;
  font-size: 13px;
}
.legal-body {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  line-height: 1.7;
}
.legal-body h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 32px 0 12px;
  color: #1a1a1a;
}
.legal-body p {
  margin: 8px 0 12px;
  color: #333;
}
.legal-body p :deep(a),
.legal-body :deep(a) {
  color: #c213f2;
  text-decoration: underline;
}
.legal-body .legal-bullets {
  list-style: disc;
  padding-left: 20px;
  margin: 8px 0 16px;
}
.legal-body .legal-bullets li {
  margin: 6px 0;
}
.legal-footer {
  background: #f7f7f7;
  padding: 24px 20px;
  text-align: center;
  font-size: 13px;
  color: #555;
}
.legal-footer a {
  color: #c213f2;
}
.content {
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .legal-hero {
    padding: 60px 16px 32px;
  }
  .legal-hero h1 {
    font-size: 26px;
  }
  .legal-body {
    padding: 28px 16px 60px;
  }
  .legal-body h2 {
    font-size: 18px;
  }
}
</style>
