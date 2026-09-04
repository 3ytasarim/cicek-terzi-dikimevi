import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Review = { name: string; when: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Nesrin Kuru",
    when: "2 ay önce",
    text: "O kadar tatlı bir hanımefendi ki. Ben nikah elbisemin tadilatı için tanıştım kendisi ile, hem iletişimi hem de işçiliği çok güzel. Elbisemi kime nasıl emanet edeceğim diye düşünüyordum ama Emine Hanım sağolsun tüm endişemi aldı. Tekrardan elinize ve emeğinize sağlık.",
  },
  {
    name: "Sedef Çetin",
    when: "3 ay önce",
    text: "Emine Hanım'a 10 yılı aşkın süredir gidiyorum, artık aileden biri gibi oldu. İşçiliği gerçekten çok güzel, her şeyi tam istediğim gibi yapıyor. Ne zaman teslim tarihi verse mutlaka yetiştiriyor. Hem dürüst hem de çok ilgili biri. Gönül rahatlığıyla tavsiye ederim.",
  },
  {
    name: "Hanife Akman",
    when: "1 ay önce",
    text: "Çekmeköy'den geldim, birkaç tane onarılacak ürünüm vardı; gerçekten çok mükemmel. Kaç tane terzi dolaştım ama böyle bir terzilik görmedim. Meğerse sadece tamirat değil, çok güzel elbise de dikiyor. Herkese tavsiye ederim.",
  },
  {
    name: "Dilek Yıldırım",
    when: "4 ay önce",
    text: "Harika el işçiliği ve harika ilgi. Tuzla Aydınlı'nın en kaliteli terzisi bence; hiç çekinmeden, düşünmeden en narin ürünlerinizi bile gönül rahatlığı ile teslim edebilirsiniz.",
  },
  {
    name: "Funda Erhal",
    when: "2 ay önce",
    text: "İyi ki Çiçek Terzi'yi tercih etmişim. Hem güler yüzleri hem de titiz çalışmalarıyla beklentimin çok üstünde bir hizmet aldım. Her detayı özenle düşünüyorlar. Kaliteli hizmet arayan herkese gönülden tavsiye ederim.",
  },
  {
    name: "Şuğra Korkmaz",
    when: "2 ay önce",
    text: "Elbisemin boyunu kestirmek için başka bir terziye sorduğumda çok yüksek bir ücret söylendi. Çiçek Terzi ile karşılaştım, daha makul bir fiyata kestirdim. Müşteri memnuniyeti harika, bundan sonra hep buraya geleceğim.",
  },
  {
    name: "Hülya Ovalı Yıldırım",
    when: "6 ay önce",
    text: "Montumun kolunda yırtık olmuştu, öyle güzel yapılmış ki yapılan yeri bulmakta zorlandık. Emine Hanım'a çok teşekkür ederim.",
  },
  {
    name: "Tuğba Söğüt",
    when: "7 ay önce",
    text: "Yıllardır Emine Hanım'a giderim tadilat işlerim için, her zaman mükemmel işler çıkarır. Ellerinize sağlık; güler yüzünüz ve ilginiz için de ayrıca teşekkür ederim.",
  },
  {
    name: "Nilüfer Yılmaz",
    when: "1 yıl önce",
    text: "Emine Hanım işinde çok becerikli. Ayrıca iletişimi güçlü, güler yüzlü. Çok kere kendisiyle çalıştık, çalışmaya devam ediyoruz ve her zaman mutlu ayrıldım. İhtiyaç duyduğunuzda gönül rahatlığıyla tercih edebilirsiniz.",
  },
  {
    name: "Simge Aydoğdu",
    when: "1 yıl önce",
    text: "Emine Hanım ve ekibi işinin ehli. Hem dikiş hem kalıp konusunda doğru yönlendirmeleri sonucunda mükemmel işler çıkarıyorlar; hepsinin eline emeğine sağlık.",
  },
  {
    name: "Eray Kamaşak",
    when: "10 ay önce",
    text: "Gayet ilgili bir işletme; en ince detayına kadar montumu harika sonlandırdılar. Telefonda detay almak için birkaç defa görüşme yaptık, çok ilgili. Tavsiye ediyorum.",
  },
  {
    name: "Evren Kırdanoğlu",
    when: "2 yıl önce",
    text: "Müthiş bir işçilik, müthiş bir misafirperverlik. Sanki ürünü mağaza çıkışı almış gibi gidiyorum. Her şey için teşekkürler, mutlaka tercih etmelisiniz.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="w-[19rem] shrink-0 sm:w-[22rem]">
      <figure className="flex h-full flex-col rounded-xl border border-border/70 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-lift">
        <Quote className="h-5 w-5 text-primary/60" aria-hidden="true" />
        <div className="mt-3 flex gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {review.text}
        </blockquote>
        <figcaption className="mt-5 border-t border-border/60 pt-4">
          <span className="block font-display text-lg leading-tight">{review.name}</span>
          <span className="mt-0.5 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Google · {review.when}
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

export function Testimonials() {
  const half = Math.ceil(REVIEWS.length / 2);
  const rows = [REVIEWS.slice(0, half), REVIEWS.slice(half)];

  return (
    <section className="border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Müşterilerimizin Deneyimleri"
          description="Google üzerinden gelen gerçek müşteri yorumlarından bir seçki."
        />
      </div>

      <div className="review-marquee mt-12 space-y-5">
        {rows.map((row, r) => (
          <div
            key={r}
            className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          >
            <ul
              className="review-track flex w-max gap-5 px-4 sm:px-6"
              style={
                {
                  "--marquee-duration": r === 0 ? "72s" : "88s",
                  animationDirection: r === 0 ? "normal" : "reverse",
                } as React.CSSProperties
              }
            >
              {[...row, ...row].map((review, i) => (
                <ReviewCard key={`${review.name}-${i}`} review={review} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
