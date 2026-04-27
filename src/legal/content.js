// Legal page content for hpvideo.io. Plain English, ad-platform
// compliant. Localization is Phase 2 — until then, English is shown
// for every locale (better than 404).

export const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'April 2026',
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          'HPVideo Studio (operated by HPVideoLAB) provides AI video generation services accessible at hpvideo.io. This policy explains what data we collect, why, and how to reach us about it.',
          'Contact: <a href="mailto:support@hpvideo.io">support@hpvideo.io</a>.',
        ],
      },
      {
        heading: 'Data we collect',
        bullets: [
          '<b>Wallet address</b> — a public blockchain address generated in your browser or imported by you. We use it as your account identifier.',
          '<b>Generation prompts and assets</b> — text prompts and any images/videos you upload, retained only as long as needed to deliver your output.',
          '<b>Output videos</b> — generated videos and their metadata (model, duration, resolution, cost).',
          '<b>Payment records</b> — when you buy credits via Creem (our third-party payment processor), we receive a transaction ID and credit amount. Card data never touches our servers.',
          '<b>Usage analytics</b> — aggregate page views and event counts via Google Analytics 4. No personally identifying information is sent.',
          '<b>Device information</b> — browser fingerprint hash for fraud / abuse prevention only.',
        ],
      },
      {
        heading: 'How we use the data',
        bullets: [
          'Deliver the AI video service you requested.',
          'Process credit purchases and prevent fraud.',
          'Improve our product through aggregate analytics.',
          'Comply with legal obligations.',
        ],
        paragraphs: [
          'We do <b>not</b> sell your data, run advertising profiles on you, or share prompts with third parties beyond the AI providers required to fulfil your generation request.',
        ],
      },
      {
        heading: 'Third-party processors',
        bullets: [
          '<b>Creem</b> — credit purchases (cards, Apple Pay, etc.). See <a href="https://creem.io/privacy" target="_blank" rel="noopener">creem.io/privacy</a>.',
          '<b>WaveSpeed AI / model providers</b> — receive your prompt and any uploaded reference assets only for the duration of generation.',
          '<b>Google Analytics 4</b> — aggregate behavioural data with IP anonymisation enabled.',
          '<b>Cloudfront / OSS</b> — host the videos you generate so you can play and download them.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You can: export your generation history, delete your wallet (any time, from the wallet panel), or request deletion of any specific stored video. Email <a href="mailto:privacy@hpvideo.io">privacy@hpvideo.io</a> with the request and we will respond within 30 days.',
          'If you are an EEA / UK resident you have rights under GDPR (access, rectification, erasure, portability, restriction, objection). Use the same email.',
          'California residents have CCPA rights (access, deletion, opt-out of sale — we do not sell, but you can confirm).',
        ],
      },
      {
        heading: 'Retention',
        paragraphs: [
          'Generation records: 12 months from the date of creation, then anonymised.',
          'Payment records: 7 years (tax/legal).',
          'Wallet data: stored locally in your browser; we never have a copy of your private key.',
        ],
      },
      {
        heading: 'Security',
        paragraphs: [
          'We use TLS 1.3 in transit, AES-256 at rest for any encrypted blobs, and least-privilege access controls on production data. No system is perfectly secure; you are responsible for backing up your wallet private key.',
        ],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'We will post material changes to this page and update the "Last updated" date. Continued use after a change means acceptance.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    updated: 'April 2026',
    sections: [
      {
        heading: 'Acceptance',
        paragraphs: [
          'By using hpvideo.io you agree to these Terms. If you don\'t agree, don\'t use the service.',
        ],
      },
      {
        heading: 'The service',
        paragraphs: [
          'HPVideo Studio is an AI video generation platform. You write a prompt or upload an image, pay credits, and receive a generated video. Service quality and availability depend on upstream model providers.',
        ],
      },
      {
        heading: 'Your account and credits',
        bullets: [
          'You are responsible for safekeeping your wallet private key. <b>Lost key = lost wallet = lost credits.</b> We cannot recover wallets we never had access to.',
          'Credits have no cash value, are non-transferable between accounts, and do not expire.',
          'Buying credits is a final sale. Refunds are governed by the <a href="/refund">Refund Policy</a>.',
        ],
      },
      {
        heading: 'Acceptable use',
        paragraphs: [
          'You may not use HPVideo to generate or distribute content that:',
        ],
        bullets: [
          'sexually exploits minors or any non-consenting person',
          'depicts a real, identifiable individual without their consent for the depicted use',
          'incites violence, terrorism, or genocide',
          'infringes third-party copyright, trademark, or trade secret',
          'misleads, defrauds, or impersonates a person, brand, or government',
          'contains malware or violates applicable law',
        ],
        paragraphs2: [
          'We may suspend or terminate accounts that violate these rules and report serious violations to authorities.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'You retain ownership of the input assets you upload. Subject to upstream model provider terms, you also own the videos you generate. HPVideo retains rights to the platform itself, our brand, and our compiled metrics.',
          'You grant us a limited, world-wide, royalty-free licence to host and serve the videos you generate so we can deliver them to you and (when you make them public via /v/[id]) to the audiences you choose.',
        ],
      },
      {
        heading: 'Disclaimers',
        paragraphs: [
          'The service is provided "as is". AI outputs may be incorrect, low-quality, or unsuitable for your purpose. We don\'t guarantee uptime, availability of any specific model, or any particular generation result.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the maximum extent allowed by law, our liability for any claim is limited to the credits you spent in the 30 days before the claim arose.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These Terms are governed by the laws of the British Virgin Islands, where HPVideoLAB is incorporated, without regard to conflict-of-law principles.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Email <a href="mailto:support@hpvideo.io">support@hpvideo.io</a>.',
        ],
      },
    ],
  },

  refund: {
    title: 'Refund Policy',
    updated: 'April 2026',
    sections: [
      {
        heading: 'Failed generations',
        paragraphs: [
          'If a generation fails on our side (model error, infrastructure outage, timeout) the credits are refunded to your wallet automatically. No action needed; check your balance.',
        ],
      },
      {
        heading: 'Successful generations',
        paragraphs: [
          'Once a video is delivered to your account, the credit spend is final. AI outputs are inherently variable and we cannot offer refunds for "I didn\'t like the result". Use the <b>Remix</b> button to iterate at the same per-generation cost.',
        ],
      },
      {
        heading: 'Credit pack purchases',
        paragraphs: [
          'Credit packs purchased via Creem are refundable within 7 days of purchase if you have spent zero credits since that purchase. Email <a href="mailto:support@hpvideo.io">support@hpvideo.io</a> with your transaction ID and wallet address.',
          'Once any credit from a pack has been spent, the pack is non-refundable.',
        ],
      },
      {
        heading: 'Disputes',
        paragraphs: [
          'If you believe a charge was unauthorised or fraudulent, contact us first at <a href="mailto:support@hpvideo.io">support@hpvideo.io</a>; we will respond within 3 business days. You also retain any chargeback rights from your card issuer.',
        ],
      },
    ],
  },

  contact: {
    title: 'Contact',
    updated: 'April 2026',
    sections: [
      {
        heading: 'How to reach us',
        bullets: [
          'General support: <a href="mailto:support@hpvideo.io">support@hpvideo.io</a> — typically &lt;24h response',
          'Privacy / data requests: <a href="mailto:privacy@hpvideo.io">privacy@hpvideo.io</a>',
          'Press / partnerships: <a href="mailto:hello@hpvideo.io">hello@hpvideo.io</a>',
          'Telegram community: <a href="https://t.me/hpvideoai" target="_blank" rel="noopener">@hpvideoai</a>',
          'X / Twitter: <a href="https://twitter.com/hpvideoai" target="_blank" rel="noopener">@hpvideoai</a>',
        ],
      },
      {
        heading: 'Before you write',
        paragraphs: [
          'Most common questions are answered in the <router-link to="/faqs">FAQ</router-link> and <router-link to="/helpcenter">Help Center</router-link>. Save yourself a round-trip.',
          'If you\'re reporting a generation failure, please include your wallet address and the request ID (visible in the Studio history panel).',
        ],
      },
      {
        heading: 'Operating entity',
        paragraphs: [
          'HPVideoLAB Ltd, registered in the British Virgin Islands. Engineering team operates remotely (UTC+8 / UTC-7 spread).',
        ],
      },
    ],
  },

  pricing: {
    title: 'Pricing',
    updated: 'April 2026',
    sections: [
      {
        heading: 'Pay-as-you-go credits',
        paragraphs: [
          'No subscription, no monthly minimum, no signup. Buy credits, generate videos, save the leftover for next time.',
          '<b>1,000 credits = $1 USD.</b> Generation cost depends on the model + duration + resolution you pick. The Studio shows the exact cost on the Generate button before you spend.',
        ],
      },
      {
        heading: 'Credit packs',
        bullets: [
          '$5 → 5,000 credits',
          '$10 → 10,000 credits',
          '$15 → 15,000 credits',
          '$20 → 20,000 credits',
          '$25 → 25,000 credits',
          '$30 → 30,000 credits',
          '$35 → 35,000 credits',
          '$40 → 40,000 credits',
          '$50 → 50,000 credits',
          '$100 → 100,000 credits',
        ],
        paragraphs: [
          'Payment is processed by Creem (cards, Apple Pay, Google Pay, Alipay, WeChat Pay, and more depending on region).',
        ],
      },
      {
        heading: 'Approximate cost per video',
        bullets: [
          'OVI 5s → 450 credits ($0.45)',
          'Seedance 6s → 600 credits ($0.60)',
          'Hailuo 6s → 690 credits ($0.69)',
          'WAN 2.7 720p / 5s → 1,500 credits ($1.50)',
          'Pixverse V6 5s → 1,200 credits ($1.20)',
          'WAN 2.7 1080p / 10s → 4,500 credits ($4.50)',
          'Veo 3.1 8s → 9,600 credits ($9.60)',
          'Kling 3.0 10s → 8,400 credits ($8.40)',
        ],
        paragraphs: [
          'Costs are recomputed live as you change duration, resolution, or model in Studio. There are no hidden fees.',
        ],
      },
      {
        heading: 'Refunds',
        paragraphs: [
          'Failed generations are auto-refunded. Pack purchases follow the <a href="/refund">Refund Policy</a>.',
        ],
      },
    ],
  },

  notfound: {
    title: 'Not found',
    updated: '',
    sections: [
      {
        paragraphs: [
          'This legal page is not configured. Email <a href="mailto:support@hpvideo.io">support@hpvideo.io</a>.',
        ],
      },
    ],
  },
};
