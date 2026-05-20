---
layout: page
title:  "My Self, Inc: Your Better Life Powered by AI"
subtitle: "Workshop 3 jam yang mengajarkan Anda berpikir seperti CEO kehidupan Anda sendiri — dan memberi Anda seorang advisor AI untuk membantu Anda menjalankannya."
permalink: /my-self-inc/
lang: id
---

<style>
:root {
  --accent: #111;
  --accent-light: #f0f0f0;
  --border-color: #e8e8e8;
  --light-bg: #f9f9f9;
  --text-primary: #111;
  --text-secondary: #666;
  --text-muted: #999;
}

hr{
    margin-top: 35px;
    margin-bottom: 25px;
}

.upgrade-hero {
  margin: 60px 0 80px 0;
  padding: 60px 0;
  border-bottom: 3px solid var(--border-color);
}

.upgrade-hero h1 {
  margin-bottom: 24px;
  font-size: 42px !important;
  line-height: 1.2 !important;
  letter-spacing: -0.5px;
}

.page-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 600px;
  margin: 24px 0 0 0;
}

.upgrade-tagline {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 600px;
  margin: 0;
}

.upgrade-section {
  margin: 80px 0;
  padding: 60px 0;
  border-bottom: 1px solid #f0f0f0;
}

.upgrade-section h2 {
  font-size: 32px !important;
  margin-bottom: 40px;
  color: var(--text-primary);
  line-height: 1.3;
}

.upgrade-section h3 {
  font-size: 18px !important;
  margin-top: 32px;
  margin-bottom: 16px;
  color: var(--text-primary);
  font-weight: 600;
}

.problem-list, .benefits-list {
  margin: 32px 0;
  padding-left: 0;
}

.problem-list li, .benefits-list li {
  margin-bottom: 20px;
  padding-left: 32px;
  position: relative;
  font-size: 17px !important;
  line-height: 1.7;
  color: var(--text-secondary);
}

.problem-list li:before {
  content: "⚠";
  position: absolute;
  left: 0;
  font-size: 18px;
  opacity: 0.7;
}

.benefits-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  font-size: 18px;
  font-weight: bold;
  color: #28a745;
}

.inc-model {
  background: linear-gradient(135deg, #f9f9f9 0%, #fafafa 100%);
  padding: 48px;
  border-radius: 12px;
  margin: 48px 0;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.inc-model h3 {
  margin-top: 0;
  margin-bottom: 32px;
  color: var(--text-primary);
  font-size: 20px !important;
}

.inc-element {
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 2px solid #e8e8e8;
}

.inc-element:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.inc-element strong {
  color: var(--text-primary);
  font-size: 16px;
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
}

.inc-element p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 15px !important;
  line-height: 1.7;
}

.session-flow {
  margin: 20px 0;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.flow-item {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: flex-start;
  padding: 24px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid var(--text-primary);
  transition: all 0.3s ease;
}

.flow-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateX(4px);
}

.flow-item:last-child {
  margin-bottom: 0;
}

.flow-time {
  min-width: 90px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
}

.flow-content {
  flex: 1;
}

.flow-title {
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 16px;
}

.flow-desc {
  font-size: 15px !important;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  margin: 80px 0 60px 0;
  padding: 60px 48px;
  background: linear-gradient(135deg, #111 0%, #2a2a2a 100%);
  color: #fff;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.cta-section h2 {
  color: #fff;
  margin-bottom: 16px;
  font-size: 28px !important;
}

.cta-section p {
  color: #d0d0d0;
  font-size: 16px;
  margin-bottom: 12px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
}

.cta-button {
  display: inline-block;
  padding: 16px 40px;
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.cta-button.primary {
  background: #fff;
  color: #111;
  box-shadow: 0 4px 12px rgba(255,255,255,0.2);
}

.cta-button.primary:hover {
  background: #f5f5f5;
  box-shadow: 0 6px 16px rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.cta-button.secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.cta-button.secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: #fff;
}

.upcoming-sessions {
  margin: 28px 0;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.upcoming-sessions > p {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.session-card {
  background: white;
  padding: 32px;
  border-radius: 10px;
  margin-bottom: 20px;
  border-left: 5px solid var(--text-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.session-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.session-date {
  font-weight: 700;
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 17px;
  margin-bottom: 16px;
}

.session-details {
  font-size: 15px !important;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.8;
}

.session-details strong {
  color: var(--text-primary);
  font-weight: 600;
}

.faq-item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.faq-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.faq-q {
  font-weight: 700;
  color: var(--text-primary);
  font-size: 17px;
  margin-bottom: 16px;
  padding: 12px 0;
}

.faq-a {
  font-size: 15px !important;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.corporate-inquiry {
  background: linear-gradient(135deg, #f9f9f9 0%, #fafafa 100%);
  padding: 48px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 20px;
  border: 2px solid var(--border-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.corporate-inquiry h3 {
  margin-top: 0;
  margin-bottom: 24px;
  color: var(--text-primary);
  font-size: 20px !important;
}

.corporate-inquiry p {
  margin-bottom: 20px;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
}

.corporate-inquiry a {
  color: var(--text-primary);
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 3px solid var(--text-primary);
  transition: all 0.3s ease;
}

.corporate-inquiry a:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .upgrade-hero {
    margin: 40px 0 60px 0;
    padding: 40px 0;
  }

  .upgrade-hero h1 {
    font-size: 32px !important;
  }

  .upgrade-section {
    margin: 60px 0;
    padding: 40px 0;
  }

  .upgrade-section h2 {
    font-size: 26px !important;
    margin-bottom: 24px;
  }

  .session-flow {
    padding: 20px;
  }

  .flow-item {
    flex-direction: column;
    padding: 20px;
  }

  .flow-time {
    min-width: auto;
  }

  .cta-section {
    padding: 40px 24px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }

  .inc-model {
    padding: 32px;
  }

  .upcoming-sessions {
    padding: 24px;
  }

  .session-card {
    padding: 24px;
  }
</style>

<!-- title and subtitle are rendered from frontmatter by the layout -->

<div class="image-wrapper" style="margin: 40px 0; text-align: center;">
  <img src="{{ site.url }}/assets/images/I, Inc.jpeg" alt="My Self, Inc - Sebuah model mental untuk kehidupan yang lebih baik" width="100%" style="border-radius: 8px;"/>
</div>

## Fondasinya

**Semua orang adalah CEO kehidupan mereka sendiri.**

Untuk pertama kalinya dalam sejarah, setiap CEO dapat menyewa konsultan AI untuk memperkuat Board of Directors mereka — secara gratis. Itu berarti: Anda hanya tinggal satu langkah dari kehidupan yang lebih baik.

### Apa Model Mentalnya?

Anda adalah sebuah perusahaan dengan lima elemen:

- **Anda, sebagai kesadaran** — Anda adalah CEO
- **Board of Directors Anda** — Suara-suara di kepala Anda (nilai, logika, ambisi, ketakutan, pengalaman masa lalu)
- **Karyawan Anda** — Emosi Anda (takut, excitement, ragu diri, motivasi)
- **Perbendaharaan Anda** — Waktu dan energi Anda. Alokasi modal.
- **Mesin Anda** — Tubuh Anda dan aset berwujud

**Ide inti:** CEO tidak secara langsung mengelola karyawan. Board of Directors yang melakukannya. Mereka adalah suara-suara di kepala Anda. Beberapa kuat. Beberapa lemah. Beberapa Anda dengarkan. Beberapa Anda abaikan.

**Kehidupan yang indah** adalah ketika suara-suara di kepala Anda aktif, selaras, dan bekerja sama — memungkinkan emosi Anda untuk menggerakkan tubuh Anda menuju kehidupan yang benar-benar Anda inginkan.

Sebagian besar profesional memiliki keterampilan teknis yang solid, tetapi terjebak secara mental. Anda menunggu instruksi, menyalahkan keadaan, dan membiarkan kritikus dalam diri Anda mengendalikan pertunjukan.

Ini bukan kemalasan. **Ini adalah perilaku yang dipelajari.**

<ul class="problem-list">
  <li>Anda menunggu untuk diberitahu apa yang perlu ditingkatkan sebelum mengambil tindakan</li>
  <li>Anda tidak melihat karir Anda sebagai perusahaan yang Anda pimpin. Anda hanya melihatnya sebagai pekerjaan yang Anda datangi</li>
  <li>Emosi Anda (takut, ragu diri, kewalahan) membuat keputusan, bukan Anda</li>
  <li>Pada hari Jumat, Anda merasa seperti hal-hal terjadi *kepada* Anda, bukan *oleh* Anda</li>
</ul>

Dalam workshop ini, Anda akan belajar untuk:
- Melihat diri Anda sebagai CEO, bukan hanya karyawan
- Menyelaraskan Board of Directors internal Anda sehingga mereka berhenti melawan Anda
- Membuat emosi menjadi bagian dari perusahaan Anda, bukan bos
- Membangun advisor AI yang mengenal Anda dan memberi Anda nasihat jujur

---

## Workshop

<div class="session-flow">
  <div class="flow-item">
    <div class="flow-time">0:00–0:30</div>
    <div class="flow-content">
      <div class="flow-title">Opening: Setup Masalah</div>
      <div class="flow-desc">Anda akan memahami mengapa kebanyakan orang tetap terjebak, dan mengapa hari ini mengubah itu.</div>
    </div>
  </div>
  
  <div class="flow-item">
    <div class="flow-time">0:30–1:30</div>
    <div class="flow-content">
      <div class="flow-title">Segment 1: System Thinking Sketching</div>
      <div class="flow-desc">Pelajari model My Self, Inc. Sketsa sistem Anda sendiri. Debrief pasangan dengan peserta lain. Anda akan melihat diri Anda berbeda.</div>
    </div>
  </div>
  
  <div class="flow-item">
    <div class="flow-time">1:30–1:45</div>
    <div class="flow-content">
      <div class="flow-title">Istirahat</div>
      <div class="flow-desc">Istirahat + percakapan informal</div>
    </div>
  </div>
  
  <div class="flow-item">
    <div class="flow-time">1:45–2:15</div>
    <div class="flow-content">
      <div class="flow-title">Segment 2: Demo Konsultan AI</div>
      <div class="flow-desc">Demo langsung dengan masalah nyata dari ruangan. Lihat apa yang berubah ketika Claude mengenal konteks Anda.</div>
    </div>
  </div>
  
  <div class="flow-item">
    <div class="flow-time">2:15–3:00</div>
    <div class="flow-content">
      <div class="flow-title">Segment 3: Bangun Advisor AI Anda Sendiri</div>
      <div class="flow-desc">Hands on keyboard. Anda menyiapkan Board Penasihat Claude pribadi Anda. Anda pergi dengan alat nyata yang akan Anda gunakan Senin pagi.</div>
    </div>
  </div>
</div>

---

## Anda Akan Pergi Dengan

<ul class="benefits-list">
  <li>Model mental yang akan Anda gunakan untuk setiap keputusan untuk sisa karir Anda</li>
  <li>Advisor AI yang berfungsi (Claude) disesuaikan dengan konteks, nilai, dan tujuan Anda</li>
  <li>Satu komitmen spesifik yang akan Anda ambil minggu ini</li>
  <li>Akses ke komunitas alumni orang-orang yang menjalankan hidup mereka seperti CEO</li>
</ul>

---

## Sesi Publik

<div class="upcoming-sessions">
  <p><strong>Sesi publik berikutnya segera hadir.</strong> Daftar di bawah untuk diberitahu ketika tanggal dibuka.</p>
  
  <div class="session-card">
    <div class="session-date">📅 Tanggal akan diumumkan</div>
    <div class="session-details">
      <strong>Format:</strong> 3 jam, tatap muka (area Jakarta)<br>
      <strong>Ukuran:</strong> 8–16 orang maksimal<br>
      <strong>Biaya:</strong> TBA<br>
      <strong>Apa yang harus dibawa:</strong> Laptop, keingintahuan, satu masalah kerja nyata
    </div>
    <a href="https://forms.gle/YOUR_REGISTRATION_LINK_HERE" class="cta-button primary" style="display: inline-block; padding: 10px 24px; margin-top: 12px;">Beri tahu saya ketika dibuka</a>
  </div>
</div>

---

## Untuk Perusahaan: Pelatihan Korporat In-House

**My Self, Inc bekerja bahkan lebih baik untuk tim.**

Ketika tim 8–20 orang Anda menjalani ini bersama-sama, mereka melihat perusahaan mereka berbeda. Kerangka kerja yang sama yang membantu individu menjadi bahasa bersama tentang bagaimana Anda menjalankan departemen Anda.

### Apa yang didapat tim Anda:
- Model mental untuk kepemilikan (bukan menunggu instruksi)
- Alat yang benar-benar akan mereka gunakan (bukan "pelatihan" yang dilupakan pada hari Kamis)
- Output nyata sebelum mereka pergi (semua orang menyiapkan advisor mereka sendiri)
- Kerangka kerja untuk percakapan 1-on-1 dengan manajer

### Bagaimana cara kerjanya:
1. **Kami menjadwalkan:** Satu sesi 3 jam di kantor Anda (on-site atau virtual)
2. **Kami menjalankannya:** Fasilitasi penuh, materi disertakan
3. **Anda mengamati:** Lihat persis apa yang pergi dengan orang-orang Anda
4. **Anda putuskan:** Jika berhasil, mari kita bicarakan program lengkap (pendalaman lebih lanjut, 1-on-1 berkelanjutan, penyegaran triwulanan)

<div class="corporate-inquiry">
  <h3>Tertarik membawa ini ke tim Anda?</h3>
  <p>Mari kita bicarakan tentang waktu, ukuran tim, dan seperti apa kesuksesan bagi Anda.</p>
  <p><strong>Email saya:</strong> <a href="mailto:rizky.syaiful@gmail.com">rizky.syaiful@gmail.com</a></p>
  <p style="font-size: 14px; color: #777; margin-top: 20px;"><em>Sertakan: nama perusahaan, ukuran tim, masalah apa yang Anda coba selesaikan (misalnya, "orang terlalu reaktif," "tidak ada budaya kepemilikan," "orang tidak memiliki pertumbuhan mereka")</em></p>
</div>

---

## FAQ

<div class="faq-item">
  <div class="faq-q">Apakah ini pidato motivasional atau pelatihan sebenarnya?</div>
  <div class="faq-a">Pelatihan sebenarnya. Anda akan keluar dengan model mental dan alat, bukan hanya perasaan terinspirasi. Pada jam kedua, orang sedang membuat sketsa sistem di atas kertas. Pada jam ketiga, mereka menggunakan AI untuk mendapatkan nasihat nyata tentang masalah nyata. Inspirasi itu nyata karena hasilnya nyata.</div>
</div>

<div class="faq-item">
  <div class="faq-q">Bagaimana jika saya sudah sadar diri? Apakah ini akan terlihat jelas?</div>
  <div class="faq-a">Bahkan orang yang paling sadar diri akan terkejut oleh diri mereka sendiri. Kerangka kerja My Self, Inc membuat sesuatu terlihat yang sebelumnya tidak terlihat. Advisor AI bekerja berbeda dari apa pun yang Anda gunakan. Datanglah dengan ragu-ragu — umpan balik terbaik datang dari orang-orang yang tidak yakin sebelumnya.</div>
</div>

<div class="faq-item">
  <div class="faq-q">Apakah advisor AI benar-benar berguna, atau hanya jebakan?</div>
  <div class="faq-a">Itu berguna jika Anda benar-benar menggunakannya. AI hanya sebaik konteks yang Anda berikan kepadanya. Di workshop, saya akan menunjukkan Anda cara menulis konteks yang membuatnya menjadi Board of Directors pribadi Anda. Setelah itu, terserah Anda untuk peduli cukup untuk mengajukan pertanyaan nyata kepadanya.</div>
</div>

<div class="faq-item">
  <div class="faq-q">Apa perbedaan antara ini dan program 10 minggu?</div>
  <div class="faq-a">Ini adalah pintu. Anda belajar modelnya. Anda membangun alatnya. Anda membuat satu komitmen. Program 10 minggu adalah tempat Anda pergi lebih dalam: rencana pertumbuhan pribadi, kemitraan akuntabilitas, 1-on-1 bulanan, dan perubahan perilaku nyata. Workshop ini adalah bagaimana Anda mendapatkan hak untuk melakukan program yang lebih lama dengan percaya diri.</div>
</div>

<div class="faq-item">
  <div class="faq-q">Bisakah ini virtual?</div>
  <div class="faq-a">Ya. Workshop bekerja secara virtual, tetapi tatap muka lebih baik. Anda akan membuat sketsa di atas kertas, berbicara dengan mitra, dan kehadiran penting. Jika Anda membutuhkan virtual, beri tahu saya dan kami akan menyesuaikan.</div>
</div>

---

## Filosofinya

**Semua orang adalah CEO kehidupan mereka sendiri. Setiap CEO membutuhkan Board of Directors.**

Jika Anda menjalankan perusahaan seperti yang Anda jalankan hidup Anda, itu akan bangkrut. Jadi mari kita perbaiki itu. Bukan dengan motivasi. Dengan sistem, kerangka kerja, dan advisor yang mengenal Anda.

Workshop ini bukan tentang menjadi lebih disiplin. Ini tentang menjadi CEO perusahaan Anda sendiri.

**Siap? Mari kita mulai.**

<div class="cta-section">
  <h2>Ambil Langkah Berikutnya</h2>
  <div class="cta-buttons">
    <a href="https://forms.gle/YOUR_REGISTRATION_LINK_HERE" class="cta-button primary">Daftar untuk sesi publik</a>
    <a href="mailto:rizky.syaiful@gmail.com?subject=Pelatihan%20korporat:%20My%20Self,%20Inc" class="cta-button secondary">Inquire tentang pelatihan korporat</a>
  </div>
</div>
