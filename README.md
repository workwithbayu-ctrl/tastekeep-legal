# Tastekeep Legal

Situs statis untuk Privacy Policy, dukungan, dan instruksi penghapusan akun Tastekeep.

## Preview lokal

Jalankan dari root repository:

```sh
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000/`. Tidak ada dependency, build step, atau konfigurasi server yang diperlukan.

## Konfigurasi email

Ganti `TASTEKEEP_SUPPORT_EMAIL` pada `site-config.js`. Semua halaman memakai nilai itu untuk teks dan tautan email dukungan.

## Checklist sebelum deploy

- [ ] Ganti email sementara `inggabekerja@gmail.com` dengan email support/privacy resmi.
- [ ] Periksa semua klaim privasi sesuai implementasi rilis.
- [ ] Periksa URL publik privacy, support, dan delete account.
- [ ] Pastikan tautan account deletion dari App Store Connect mengarah ke delete-account.html.
- [ ] Tinjau tampilan mobile dan aksesibilitas sebelum push.

Jangan push atau publish sebelum konten dan tautan telah ditinjau serta disetujui.
