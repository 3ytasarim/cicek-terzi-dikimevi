export const WHATSAPP_MESSAGE =
  "Merhaba Çiçek Terzi, hizmetleriniz hakkında bilgi almak istiyorum.";

export const WHATSAPP_URL = `https://wa.me/905349521759?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const PHONE_DISPLAY = "+90 534 952 17 59";
export const PHONE_HREF = "tel:+905349521759";

export const ADDRESS_LINE_1 = "Aydınlı, Nuray Sokağı No:4 D:1";
export const ADDRESS_LINE_2 = "34953 Tuzla / İstanbul";

export const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Aydınlı, Nuray Sokağı No:4 D:1, 34953 Tuzla/İstanbul");

export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Nuray Sokağı No:4, Aydınlı, 34953 Tuzla/İstanbul") +
  "&output=embed";

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Nasıl Çalışıyoruz?", href: "#nasil-calisiyoruz" },
  { label: "Sık Sorulan Sorular", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];
