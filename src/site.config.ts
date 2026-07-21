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
}

// ── PLACEHOLDER SENTINEL ──────────────────────────────────────────────
// Anything still equal to a "FILL BEFORE LAUNCH" value below is a stub.
export const PLACEHOLDER_LINE = 'https://line.me/R/ti/p/@REPLACE_WITH_LINE_OA_ID'; // ▶ FILL BEFORE LAUNCH

export const SITE: SiteConfig = {
  brandName: 'FUNDAMENTAL',
  legalName: 'Fundamental',
  url: 'https://fundamental.co.th',
  lang: 'th',
  locale: 'th_TH',

  // ── On-page SEO copy (keyword-anchored, promise-frame compliant) ──
  title: 'รับทำเว็บ + ระบบ LINE ให้ธุรกิจถูกค้นหาเจอ | Fundamental',
  description:
    'รับทำเว็บธุรกิจโหลดเร็ว เปิดบนมือถือสวย พร้อมวางระบบผ่าน LINE — จองคิว ติดตามงาน แจ้งเตือน ' +
    'ช่วยให้ลูกค้าในพื้นที่ค้นหาเจอธุรกิจคุณง่ายขึ้น และไม่พลาดทุกโอกาสที่เข้ามา ปรึกษาผ่าน LINE ได้ทันที',

  keywords: [
    'รับทำเว็บ',
    'รับทำเว็บไซต์',
    'เว็บธุรกิจ',
    'รับทำเว็บธุรกิจ',
    'ทำเว็บให้ลูกค้าหาเจอ',
    'ระบบ LINE',
    'ระบบจองคิวผ่าน LINE',
    'ระบบติดตามผ่าน LINE',
    'ระบบแจ้งเตือนผ่าน LINE',
    'ธุรกิจในพื้นที่',
  ],

  // ── Contact / LINE ──  ▶ FILL BEFORE LAUNCH: real LINE OA link
  lineUrl: PLACEHOLDER_LINE,
  lineDisplay: '@fundamental', // ▶ FILL BEFORE LAUNCH: real LINE OA id

  // ▶ FILL BEFORE LAUNCH — must match your Google Business Profile (NAP)
  telephone: '', // e.g. '+66-8x-xxx-xxxx' (leave '' to omit from schema)
  email: '', // e.g. 'hello@fundamental.co.th'
  address: {
    streetAddress: '',
    addressLocality: '', // อำเภอ/เขต
    addressRegion: '', // จังหวัด
    postalCode: '',
    addressCountry: 'TH',
  },
  geo: null, // e.g. { latitude: '13.7563', longitude: '100.5018' }

  // Default: national coverage. Set the target จังหวัด/ย่าน once locked.
  areaServed: ['ประเทศไทย'],

  openingHours: [
    // e.g. { days: ['Mo','Tu','We','Th','Fr'], opens: '09:00', closes: '18:00' }
  ],
  priceRange: '฿฿',

  // ▶ FILL BEFORE LAUNCH — add your Google Business Profile / Maps URL first;
  // this is the link that ties the site to your GBP entity.
  sameAs: [
    // 'https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID',
    // 'https://www.facebook.com/yourpage',
  ],

  ogImage: '/og-image.png',
};

/** Convenience: is a value still an unfilled placeholder? */
export const isPlaceholderLine = (u: string): boolean =>
  !u || u === PLACEHOLDER_LINE || u === '#';
