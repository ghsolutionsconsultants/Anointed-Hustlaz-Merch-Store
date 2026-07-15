import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata = { title: "Lookbook — AnointedHustlaz" };

const SHOTS = [
  { src: "photo-1483985988355-763728e1935b", cap: "Scope Tee · Newtown" },
  { src: "photo-1512436991641-6745cdb1723f", cap: "Monogram Hoodie" },
  { src: "photo-1479064555552-3ef4979f8908", cap: "Work Jacket · Maboneng" },
  { src: "photo-1490578474895-699cd4e2cf59", cap: "Crewneck · Golden hour" },
  { src: "photo-1441984904996-e0b6ba687e04", cap: "Anointed Cap" },
  { src: "photo-1487222477894-8943e31ef7b2", cap: "Longsleeve · On the block" },
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export default function Lookbook() {
  return (
    <>
      <section className="hero" style={{ height: "min(72vh, 660px)" }}>
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img("photo-1490114538077-0a7f8cb49891")} alt="Lookbook cover" />
        </div>
        <div className="frame-ticks" aria-hidden>
          <span className="tl" />
          <span className="tr" />
          <span className="bl" />
          <span className="br" />
        </div>
        <div className="hero-copy">
          <span className="label kick">Winter ’26 Campaign</span>
          <h1 className="display">The Lookbook</h1>
        </div>
      </section>

      <section className="section container">
        <Reveal className="section-head">
          <div>
            <span className="label label-accent">Worn in Mzansi</span>
            <h2 className="display">Shot on the streets</h2>
          </div>
          <Link href="/shop" className="label link-underline">
            Shop the drop →
          </Link>
        </Reveal>

        <div className="grid-ed">
          {SHOTS.map((s, i) => (
            <Reveal
              key={i}
              as="figure"
              variant="clip"
              className={`card ${i % 3 === 0 ? "wide tall" : ""}`.trim()}
            >
              <div className="card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="primary" src={img(s.src)} alt={s.cap} loading="lazy" />
              </div>
              <figcaption className="label card-sub">{s.cap}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
