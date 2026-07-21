# Fundamental — Landing (fundamental.co.th)

หน้า Landing เดียวของ **Fundamental** — รับทำเว็บ + วางระบบผ่าน LINE ให้ธุรกิจ local
ถูกค้นหาเจอและไม่พลาดโอกาส สร้างด้วย **Astro** (static) เน้น SEO และ performance

## Stack

- [Astro](https://astro.build) `output: static` — เกือบทั้งหน้าเป็น HTML ล้วน, JS แทบเป็นศูนย์
- `@astrojs/sitemap` → `sitemap-index.xml`
- `astro:assets` (`<Image>`) — รูป responsive, แปลงเป็น WebP, กัน CLS ด้วย width/height
- Deploy: **Vercel** (auto-detect Astro, build `astro build` → `dist/`)

## Dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## โครงสร้าง SEO ที่วางไว้

- `<html lang="th">`, H1 เดียว, ไล่ H2 → H3 ไม่ข้ามระดับ, semantic `header/nav/main/section/footer`
- `<title>` + `meta description` + `keywords` เกาะคีย์เวิร์ดหลัก
- Open Graph + Twitter card (+ `public/og-image.png` 1200×630)
- `<link rel="canonical">`, `robots.txt`, `sitemap-index.xml`
- **JSON-LD** `ProfessionalService`/`WebSite` (`src/components/JsonLd.astro`) — ฟิลด์ที่ยังว่างจะถูกตัดออกอัตโนมัติ ไม่ปล่อย schema ที่ไม่สมบูรณ์

## ▶ ค่าที่ต้องเสียบจริงก่อน launch

แก้ไฟล์เดียว: **`src/site.config.ts`** (ค้นคำว่า `FILL BEFORE LAUNCH`)

| ค่า | ทำไมต้องมี | เชื่อมกับ GBP อย่างไร |
| --- | --- | --- |
| `lineUrl`, `lineDisplay` | ปุ่ม "ทักไลน์" ทุกจุดชี้ไปที่นี่ (ตอนนี้เป็น placeholder) | เข้า `contactPoint` + `sameAs` |
| `telephone`, `email` | ช่องทางติดต่อ | ต้องตรงกับ **NAP** ใน Google Business Profile เป๊ะ |
| `address.*`, `geo` | ที่อยู่ธุรกิจ | ต้องตรงกับที่อยู่ใน GBP เพื่อจับคู่ entity |
| `areaServed` | พื้นที่ให้บริการ (ตอนนี้ = ทั้งประเทศ) | ใส่จังหวัด/ย่านที่จะเจาะ เพื่อ local SEO |
| `openingHours` | เวลาเปิด-ปิด | เสริมความครบของ LocalBusiness |
| `sameAs` | ลิงก์โปรไฟล์ทางการ | **ใส่ลิงก์ Google Business Profile / Google Maps ที่นี่ = ตัวเชื่อมเว็บกับ GBP** |

### วิธีเชื่อมเว็บกับ Google Business Profile
1. ใน GBP ตั้งช่อง **Website** = `https://fundamental.co.th` (ต้องตรงกับ `SITE.url`)
2. กรอก `name` / `telephone` / `address` ใน `site.config.ts` ให้ **ตรงกับ GBP ทุกตัวอักษร** (NAP consistency)
3. ใส่ลิงก์ Google Maps/GBP ของธุรกิจลงใน `sameAs`
4. หลัง deploy: ตรวจ schema ด้วย [Rich Results Test](https://search.google.com/test/rich-results) และ submit `sitemap-index.xml` ใน Google Search Console

## กรอบคำสัญญา (ห้ามหลุด)

ถ้อยคำบนหน้ายึดตาม handoff: SEO พูดเชิง "ถูกค้นหาง่ายขึ้น" ไม่รับปากอันดับกับเว็บ fundamental เอง
(เคส dogsanook ติดหน้าแรกเป็นหลักฐานจริง พูดได้), ระบบ LINE ใช้คำแนว "ไม่พลาดทุกโอกาส" ไม่รับประกันยอดขาย
