// Ganti nilai ini sekali sebelum deploy untuk memperbarui email di seluruh halaman.
const TASTEKEEP_SUPPORT_EMAIL = "inggabekerja@gmail.com";

document.querySelectorAll("[data-support-email]").forEach((link) => {
  link.textContent = TASTEKEEP_SUPPORT_EMAIL;
  link.href = `mailto:${TASTEKEEP_SUPPORT_EMAIL}`;
});
