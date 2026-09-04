import fabric from "@/assets/icons/fabric-pattern.png.asset.json";
import spool from "@/assets/icons/spool-of-thread.png.asset.json";
import scissors from "@/assets/icons/scissors.png.asset.json";
import cutting from "@/assets/icons/cutting.png.asset.json";
import mannequin from "@/assets/icons/mannequin.png.asset.json";
import needle from "@/assets/icons/needle.png.asset.json";
import alterations from "@/assets/icons/alterations.png.asset.json";
import tape from "@/assets/icons/measuring-tape.png.asset.json";
import machine from "@/assets/icons/sewing-machine.png.asset.json";
import suit from "@/assets/icons/suit.png.asset.json";

type Item = { url: string; left: number; size: number; delay: number; duration: number };

const ITEMS: Item[] = [
  { url: scissors.url, left: 2, size: 34, delay: 0, duration: 17 },
  { url: tape.url, left: 9, size: 26, delay: 5.5, duration: 20 },
  { url: spool.url, left: 16, size: 30, delay: 2.5, duration: 15 },
  { url: needle.url, left: 23, size: 24, delay: 9, duration: 22 },
  { url: machine.url, left: 30, size: 36, delay: 6.5, duration: 18 },
  { url: mannequin.url, left: 37, size: 30, delay: 12, duration: 21 },
  { url: alterations.url, left: 44, size: 28, delay: 3.5, duration: 16 },
  { url: fabric.url, left: 51, size: 30, delay: 8, duration: 19 },
  { url: cutting.url, left: 58, size: 26, delay: 14, duration: 23 },
  { url: suit.url, left: 65, size: 32, delay: 11, duration: 20 },
  { url: scissors.url, left: 72, size: 26, delay: 7.5, duration: 21 },
  { url: spool.url, left: 79, size: 28, delay: 1.5, duration: 18 },
  { url: tape.url, left: 86, size: 32, delay: 10.5, duration: 24 },
  { url: needle.url, left: 92, size: 24, delay: 4.5, duration: 19 },
  { url: mannequin.url, left: 97, size: 30, delay: 13.5, duration: 22 },
  { url: machine.url, left: 6, size: 28, delay: 15.5, duration: 25 },
  { url: fabric.url, left: 20, size: 24, delay: 11.5, duration: 26 },
  { url: cutting.url, left: 41, size: 32, delay: 17, duration: 24 },
  { url: suit.url, left: 62, size: 26, delay: 19, duration: 27 },
  { url: alterations.url, left: 83, size: 26, delay: 16, duration: 25 },
];

/** Hero'da alttan yukarıya süzülen, header'a ulaşmadan kaybolan mürdüm terzi ikonları. */
export function FloatingTailorIcons() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-20 z-0 overflow-hidden sm:top-24"
      aria-hidden="true"
    >

      {ITEMS.map((item) => (
        <span
          key={item.url + item.left}
          className="tailor-float absolute bottom-0 block bg-primary/30"
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
