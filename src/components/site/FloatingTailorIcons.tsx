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
  { url: scissors.url, left: 4, size: 38, delay: 0, duration: 17 },
  { url: tape.url, left: 15, size: 30, delay: 5.5, duration: 20 },
  { url: spool.url, left: 26, size: 34, delay: 2.5, duration: 15 },
  { url: needle.url, left: 36, size: 28, delay: 9, duration: 22 },
  { url: machine.url, left: 47, size: 42, delay: 6.5, duration: 18 },
  { url: mannequin.url, left: 58, size: 36, delay: 12, duration: 21 },
  { url: alterations.url, left: 68, size: 32, delay: 3.5, duration: 16 },
  { url: fabric.url, left: 78, size: 34, delay: 8, duration: 19 },
  { url: cutting.url, left: 87, size: 30, delay: 14, duration: 23 },
  { url: suit.url, left: 95, size: 36, delay: 11, duration: 20 },
];

/** Hero'da alttan yukarıya süzülen, header'a ulaşmadan kaybolan mürdüm terzi ikonları. */
export function FloatingTailorIcons() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-20 -z-10 overflow-hidden sm:top-24"
      aria-hidden="true"
    >
      {ITEMS.map((item) => (
        <span
          key={item.url + item.left}
          className="tailor-float absolute bottom-0 block bg-primary/25"
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
