<template>
  <div class="pricing-wrap">
    <header class="pricing-hero">
      <div class="content">
        <h1>Pay only for what you generate</h1>
        <p class="updated">No subscription. No monthly minimum. No signup gate.</p>
        <p class="hero-detail">
          1,000 credits = $1 USD &middot; the Studio shows the exact cost
          on the Generate button before you spend.
        </p>
      </div>
    </header>

    <section class="content packs-section">
      <h2>Credit packs</h2>
      <p class="section-sub">
        Pick a pack, finish payment via Creem, credits land in your wallet
        instantly. Leftover credits never expire.
      </p>
      <div class="pack-grid">
        <div
          v-for="pack in featuredPacks"
          :key="pack.usd"
          class="pack-card"
          :class="{ featured: pack.featured }"
        >
          <div v-if="pack.badge" class="pack-badge">{{ pack.badge }}</div>
          <div class="pack-price">
            <span class="currency">$</span>
            <span class="amount">{{ pack.usd }}</span>
          </div>
          <div class="pack-credits">{{ pack.credits.toLocaleString() }} credits</div>
          <div class="pack-bonus">{{ pack.tagline }}</div>
          <ul class="pack-features">
            <li v-for="(f, idx) in pack.features" :key="idx">{{ f }}</li>
          </ul>
          <a class="pack-cta" :href="ctaHref" target="_blank" rel="noopener">
            Buy {{ pack.usd }} pack
          </a>
        </div>
      </div>
      <p class="all-packs-note">
        Other pack sizes ($15 / $25 / $30 / $35 / $40 / $50 / $100) are also
        available in Studio. All processed by Creem (cards, Apple Pay,
        Google Pay, Alipay, WeChat Pay).
      </p>
    </section>

    <section class="content models-section">
      <h2>Approximate cost per video</h2>
      <p class="section-sub">
        Costs are recomputed live as you change model, duration, or
        resolution. Failed generations auto-refund &mdash; you only pay
        for what successfully renders.
      </p>
      <div class="model-table-wrap">
        <table class="model-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Duration</th>
              <th>Resolution</th>
              <th class="price">Price</th>
              <th class="credits">Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in costRows" :key="row.id" :class="{ best: row.best }">
              <td>
                <div class="model-name">{{ row.name }}</div>
                <div v-if="row.note" class="model-note">{{ row.note }}</div>
              </td>
              <td>{{ row.duration }}</td>
              <td>{{ row.resolution }}</td>
              <td class="price">${{ row.price.toFixed(2) }}</td>
              <td class="credits">{{ row.credits.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content faq-section">
      <h2>Pricing FAQ</h2>
      <div class="faq-grid">
        <div class="faq-card">
          <h3>What if a generation fails?</h3>
          <p>
            Auto-refunded to your wallet within seconds. You only pay for
            videos that successfully render and download.
          </p>
        </div>
        <div class="faq-card">
          <h3>Do credits expire?</h3>
          <p>
            No. Credits sit in your wallet until you spend them. Buy a $5
            pack today, use it next month, no penalty.
          </p>
        </div>
        <div class="faq-card">
          <h3>Can I get a pack refund?</h3>
          <p>
            Unspent credits can be refunded within 14 days. See our
            <router-link to="/refund">Refund Policy</router-link> for details.
          </p>
        </div>
        <div class="faq-card">
          <h3>Why pay-per-clip not subscription?</h3>
          <p>
            Most creators don't make videos every day. A monthly plan
            either over-charges light users or under-delivers heavy ones.
            Credits scale to your actual use.
          </p>
        </div>
      </div>
    </section>

    <footer class="pricing-footer">
      <div class="content">
        Questions? Email
        <a href="mailto:support@hpvideo.io">support@hpvideo.io</a>
        &middot;
        <router-link to="/">Back to home</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PricingPage',
  setup() {
    const ctaHref = 'https://www.hpvideo.io/creator/';

    const featuredPacks = [
      {
        usd: 5,
        credits: 5000,
        tagline: 'Try a few clips',
        badge: 'Starter',
        featured: false,
        features: [
          'About 3 WAN 2.7 720p clips',
          'About 8 Seedance 6s clips',
          'No expiry',
        ],
      },
      {
        usd: 20,
        credits: 20000,
        tagline: 'Most creators land here',
        badge: 'Most Popular',
        featured: true,
        features: [
          '13 WAN 2.7 720p / 5s clips',
          '4 WAN 2.7 1080p / 10s clips',
          '2 Veo 3.1 8s clips',
          'No expiry',
        ],
      },
      {
        usd: 50,
        credits: 50000,
        tagline: 'For agencies / studios',
        badge: 'Best Value',
        featured: false,
        features: [
          '33 WAN 2.7 720p / 5s clips',
          '5 Veo 3.1 8s clips',
          'Or 75 Seedance 6s clips',
          'No expiry',
        ],
      },
    ];

    const costRows = [
      { id: 'ovi', name: 'OVI', note: 'Lifelike characters, fast', duration: '5s', resolution: 'std', price: 0.45, credits: 450 },
      { id: 'seedance', name: 'Seedance 2.0', note: 'Cheapest, good for ideation', duration: '6s', resolution: 'std', price: 0.60, credits: 600, best: true },
      { id: 'hailuo', name: 'Hailuo 2.3', note: 'Strong motion', duration: '6s', resolution: 'std', price: 0.69, credits: 690 },
      { id: 'pixverse', name: 'Pixverse V6', note: 'Stylised animation', duration: '5s', resolution: 'std', price: 1.20, credits: 1200 },
      { id: 'wan-720', name: 'WAN 2.7', note: 'Photoreal, frontier-tier', duration: '5s', resolution: '720p', price: 1.50, credits: 1500 },
      { id: 'wan-1080', name: 'WAN 2.7', note: 'Photoreal, longer + sharper', duration: '10s', resolution: '1080p', price: 4.50, credits: 4500 },
      { id: 'kling', name: 'Kling 3.0', note: 'Cinematic motion', duration: '10s', resolution: 'std', price: 8.40, credits: 8400 },
      { id: 'veo', name: 'Veo 3.1', note: "Google's flagship, dialogue-aware", duration: '8s', resolution: 'std', price: 9.60, credits: 9600 },
    ];

    return { ctaHref, featuredPacks, costRows };
  },
});
</script>

<style scoped>
.pricing-wrap {
  background: #fff;
  color: #1a1a1a;
  min-height: 100vh;
}
.pricing-hero {
  background: linear-gradient(135deg, #c213f2 0%, #8a2ce6 100%);
  color: white;
  padding: 140px 20px 60px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.pricing-hero h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 0 0 8px;
  position: relative;
  z-index: 2;
}
.pricing-hero .updated {
  opacity: 0.9;
  font-size: 16px;
  margin: 0 0 12px;
  position: relative;
  z-index: 2;
}
.pricing-hero .hero-detail {
  opacity: 0.85;
  font-size: 14px;
  max-width: 620px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.content {
  max-width: 1100px;
  margin: 0 auto;
}
section.content {
  padding: 60px 20px;
}
section h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
  text-align: center;
}
.section-sub {
  text-align: center;
  color: #555;
  font-size: 15px;
  max-width: 720px;
  margin: 0 auto 36px;
  line-height: 1.5;
}
.pack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}
.pack-card {
  position: relative;
  background: #fff;
  border: 1px solid #e8e8ec;
  border-radius: 16px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.pack-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(194, 19, 242, 0.12);
  border-color: #c213f2;
}
.pack-card.featured {
  border: 2px solid #c213f2;
  background: linear-gradient(180deg, #fff 0%, #faf2ff 100%);
  box-shadow: 0 8px 24px rgba(194, 19, 242, 0.18);
}
.pack-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #c213f2;
  color: white;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 6px 14px;
  border-radius: 999px;
  white-space: nowrap;
}
.pack-card:not(.featured) .pack-badge {
  background: #f3f3f7;
  color: #555;
}
.pack-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 4px;
}
.pack-price .currency {
  font-size: 24px;
  color: #888;
  margin-right: 4px;
}
.pack-price .amount {
  font-size: 56px;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
}
.pack-credits {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #c213f2;
  margin: 8px 0 6px;
}
.pack-bonus {
  text-align: center;
  font-size: 13px;
  color: #777;
  margin-bottom: 20px;
}
.pack-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  flex: 1;
}
.pack-features li {
  padding-left: 22px;
  position: relative;
  margin: 6px 0;
}
.pack-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #c213f2;
  font-weight: 700;
}
.pack-cta {
  display: block;
  text-align: center;
  background: linear-gradient(90deg, #c213f2 0%, #8a2ce6 100%);
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 16px;
  border-radius: 999px;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.pack-card:not(.featured) .pack-cta {
  background: #1a1a1a;
}
.pack-cta:hover {
  opacity: 0.9;
}
.all-packs-note {
  text-align: center;
  color: #777;
  font-size: 13px;
  margin: 32px 0 0;
}
.model-table-wrap {
  overflow-x: auto;
}
.model-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #fff;
  border: 1px solid #e8e8ec;
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;
}
.model-table th,
.model-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f0f3;
}
.model-table thead th {
  background: #faf2ff;
  font-weight: 700;
  color: #555;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.model-table tbody tr:last-child td {
  border-bottom: 0;
}
.model-table tbody tr.best {
  background: #faf2ff;
}
.model-name {
  font-weight: 600;
  color: #1a1a1a;
}
.model-note {
  font-size: 12px;
  color: #888;
  margin-top: 2px;
}
.model-table .price,
.model-table .credits {
  text-align: right;
  white-space: nowrap;
}
.model-table .price {
  font-weight: 700;
  color: #c213f2;
}
.model-table .credits {
  color: #777;
  font-size: 13px;
}
.faq-section {
  background: #faf8fc;
  margin-top: 0;
}
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.faq-card {
  background: white;
  border-radius: 12px;
  padding: 22px 24px;
  border: 1px solid #ececf0;
}
.faq-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #1a1a1a;
}
.faq-card p {
  font-size: 14px;
  color: #444;
  line-height: 1.6;
  margin: 0;
}
.faq-card a {
  color: #c213f2;
}
.pricing-footer {
  background: #f7f7f7;
  padding: 24px 20px;
  text-align: center;
  font-size: 13px;
  color: #555;
}
.pricing-footer a {
  color: #c213f2;
}

@media (max-width: 768px) {
  .pricing-hero {
    padding: 60px 16px 32px;
  }
  .pricing-hero h1 {
    font-size: 28px;
  }
  section.content {
    padding: 40px 16px;
  }
  section h2 {
    font-size: 22px;
  }
  .pack-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
