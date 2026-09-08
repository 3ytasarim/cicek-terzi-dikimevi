import fabric from "@/assets/icons/fabric-pattern.png";
import spool from "@/assets/icons/spool-of-thread.png";
import scissors from "@/assets/icons/scissors.png";
import cutting from "@/assets/icons/cutting.png";
import mannequin from "@/assets/icons/mannequin.png";
import needle from "@/assets/icons/needle.png";
import alterations from "@/assets/icons/alterations.png";
import tape from "@/assets/icons/measuring-tape.png";
import machine from "@/assets/icons/sewing-machine.png";
import suit from "@/assets/icons/suit.png";

type Item = { url: string; left: number; size: number; delay: number; duration: number };

const ITEMS: Item[] = [
  { url: scissors, left: 2, size: 34, delay: 0, duration: 17 },
  { url: tape, left: 9, size: 26, delay: 5.5, duration: 20 },
  { url: spool, left: 16, size: 30, delay: 2.5, duration: 15 },
  { url: needle, left: 23, size: 24, delay: 9, duration: 22 },
  { url: machine, left: 30, size: 36, delay: 6.5, duration: 18 },
  { url: mannequin, left: 37, size: 30, delay: 12, duration: 21 },
  { url: alterations, left: 44, size: 28, delay: 3.5, duration: 16 },
  { url: fabric, left: 51, size: 30, delay: 8, duration: 19 },
  { url: cutting, left: 58, size: 26, delay: 14, duration: 23 },
  { url: suit, left: 65, size: 32, delay: 11, duration: 20 },
  { url: scissors, left: 72, size: 26, delay: 7.5, duration: 21 },
  { url: spool, left: 79, size: 28, delay: 1.5, duration: 18 },
  { url: tape, left: 86, size: 32, delay: 10.5, duration: 24 },
  { url: needle, left: 92, size: 24, delay: 4.5, duration: 19 },
  { url: mannequin, left: 97, size: 30, delay: 13.5, duration: 22 },
  { url: machine, left: 6, size: 28, delay: 15.5, duration: 25 },
  { url: fabric, left: 20, size: 24, delay: 11.5, duration: 26 },
  { url: cutting, left: 41, size: 32, delay: 17, duration: 24 },
  { url: suit, left: 62, size: 26, delay: 19, duration: 27 },
  { url: alterations, left: 83, size: 26, delay: 16, duration: 25 },
];

/** Hero'da alttan yukarıya süzülen, header'a ulaşmadan kaybolan mürdüm terzi ikonları. */
export function FloatingTailorIcons() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-20 z-30 overflow-hidden sm:top-24"
      aria-hidden="true"
    >

      {ITEMS.map((item) => (
        <span
          key={item.url + item.left}
          className="tailor-float absolute bottom-0 block bg-primary/45 sm:bg-primary/30"
          style={{
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDelay: `-${item.delay}s`,
            animationDuration: `${item.duration}s`,
            WebkitMaskImage: `url(${item.url})`,
            maskImage: `url(${item.url})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
