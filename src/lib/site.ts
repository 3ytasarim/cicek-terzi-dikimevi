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

export type NavChild = { label: string; to: string };
export type NavLink = {
  label: string;
  to: string;
  children?: NavChild[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Ana Sayfa", to: "/" },
  {
    label: "Biz Kimiz?",
    to: "/hakkimizda",
    children: [
      { label: "Nasıl Çalışıyoruz?", to: "/nasil-calisiyoruz" },
      { label: "Sık Sorulan Sorular", to: "/sss" },
    ],
  },
  { label: "Hizmetlerimiz", to: "/hizmetler" },
  { label: "Galeri", to: "/galeri" },
  { label: "İletişim", to: "/iletisim" },
];
