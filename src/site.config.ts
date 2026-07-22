/**
 * site.config.ts — single source of truth for everything the owner fills in.
 *
 * Fields marked  ▶ FILL BEFORE LAUNCH  are placeholders. Search this file for
 * "FILL BEFORE LAUNCH" to find every value that still needs a real one. Empty
 * strings / empty arrays are intentionally omitted from the JSON-LD output, so
 * an unfilled field never emits invalid structured data — it just doesn't
 * appear until you set it.
 *
 * Why this matters for Google Business Profile (GBP):
 *  - `url` must be exactly the URL you set as the "Website" in your GBP.
 *  - `name`, `telephone`, `address` (NAP) must match your GBP letter-for-letter.
 *  - `sameAs` should include your public GBP / Google Maps link so Google can
 *    tie this site to that Business Profile entity.
 */

export interface SiteConfig {
  brandName: string;
  legalName: string;
  url: string;
  /** Canonical origin without trailing slash, used for OG/canonical. */
  lang: string;
  locale: string;
  title: string;
  description: string;
  keywords: string[];
  /** LINE Official Account deep link — every "ทักไลน์" button uses this. */
  lineUrl: string;
  lineDisplay: string;
  telephone: string;
  telephoneDisplay: string;
  email: string;
  /** Postal address — must match GBP exactly for entity matching. */
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  /** Geo-coordinates of the business (optional; helps local relevance). */
  geo: { latitude: string; longitude: string } | null;
  /** Areas the service covers — drives areaServed in schema + local keywords. */
  areaServed: string[];
  /** Opening hours in schema.org OpeningHoursSpecification-friendly form. */
  openingHours: Array<{ days: string[]; opens: string; closes: string }>;
  priceRange: string;
  /**
   * sameAs — authoritative profiles for this business. The GBP / Google Maps
   * URL here is what links the site to the Business Profile. Add socials too.
   */
  sameAs: string[];
  ogImage: string;
  /** Blog author entity — a real person strengthens E-E-A-T. */
  author: { name: string; url: string; credential: string };
}

// ── PLACEHOLDER SENTINEL ──────────────────────────────────────────────
// Anything still equal to a "FILL BEFORE LAUNCH" value below is a stub.
export const PLACEHOLDER_LINE = 'https://line.me/R/ti/p/@REPLACE_WITH_LINE_OA_ID'; // ▶ FILL BEFORE LAUNCH

export const SITE: SiteConfig = {
  brandName: 'FUNDAMENTAL',
  legalName: 'Fundamental Co., Ltd.',
  url: 'https://fundamental.co.th',
  lang: 'th',
  locale: 'th_TH',

  // ── On-page SEO copy (local-first, keyword-anchored, promise-frame compliant) ──
  title: 'รับทำเว็บ + ระบบ LINE ย่านกรุงเทพกรีฑา–รามคำแหง–ลาดกระบัง | Fundamental',
  description:
    'รับทำเว็บธุรกิจ + วางระบบผ่าน LINE (จองคิว ติดตามงาน แจ้งเตือน) สำหรับธุรกิจย่านกรุงเทพกรีฑา ' +
    'รามคำแหง ลาดกระบัง สุวรรณภูมิ และสมุทรปราการ — ช่วยให้ลูกค้าในพื้นที่ค้นหาเจอธุรกิจคุณง่ายขึ้น ' +
    'และไม่พลาดทุกโอกาสที่เข้ามา ปรึกษาผ่าน LINE ได้ทันที',

  keywords: [
    'รับทำเว็บ',
    'รับทำเว็บ กรุงเทพกรีฑา',
    'รับทำเว็บ รามคำแหง',
    'รับทำเว็บ ลาดกระบัง',
    'รับทำเว็บ สมุทรปราการ',
    'รับทำเว็บธุรกิจ',
    'เว็บธุรกิจ',
    'ทำเว็บให้ลูกค้าหาเจอ',
    'ระบบ LINE',
    'ระบบจองคิวผ่าน LINE',
    'ระบบติดตามผ่าน LINE',
    'ระบบแจ้งเตือนผ่าน LINE',
    'ธุรกิจย่านกรุงเทพกรีฑา',
    'ธุรกิจในพื้นที่',
  ],

  // ── Contact / LINE ──
  lineUrl: 'https://line.me/R/ti/p/@291snlia',
  lineDisplay: '@291snlia',

  // NAP — ควรตรงกับ Google Business Profile ทุกตัวอักษร (postalCode 10250 = แขวงทับช้าง เขตสะพานสูง; โปรดยืนยันให้ตรง GBP)
  telephone: '+66818890911',
  telephoneDisplay: '081-889-0911',
  email: '', // e.g. 'hello@fundamental.co.th'
  address: {
    streetAddress: 'บ้านกลางเมือง กรุงเทพกรีฑา',
    addressLocality: 'แขวงทับช้าง เขตสะพานสูง', // อำเภอ/เขต
    addressRegion: 'กรุงเทพมหานคร', // จังหวัด
    postalCode: '10250',
    addressCountry: 'TH',
  },
  geo: null, // e.g. { latitude: '13.7563', longitude: '100.5018' }

  // Target service area (โซนเดียวกับเคส dogsanook — กรุงเทพฝั่งตะวันออก + สมุทรปราการ).
  areaServed: ['กรุงเทพกรีฑา', 'รามคำแหง', 'ลาดกระบัง', 'สุวรรณภูมิ', 'สมุทรปราการ'],

  openingHours: [
    // จ–ศ 10:00–18:00 (ส–อา ปิด) — ตรงกับ Google Business Profile
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
  ],
  priceRange: '฿฿',

  // Google Business Profile link — ties this site to the GBP entity (+ LINE is
  // appended automatically in JsonLd.astro). Add socials (Facebook/IG) here too.
  sameAs: [
    'https://g.page/r/CXYbNr_NfV8AEBM',
  ],

  ogImage: '/og-image.png',

  // ▶ ปรับชื่อที่จะแสดงได้ (ไทย/อังกฤษ) — url ชี้ blog ส่วนตัวเพื่อ E-E-A-T
  author: {
    name: 'Chaivoot',
    url: 'https://chaivoot.com',
    credential: 'Local Guide ระดับ 7 ใน Google Maps · เขียนเรื่อง local business ที่ chaivoot.com',
  },
};

/** Convenience: is a value still an unfilled placeholder? */
export const isPlaceholderLine = (u: string): boolean =>
  !u || u === PLACEHOLDER_LINE || u === '#';
