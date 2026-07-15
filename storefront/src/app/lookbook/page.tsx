import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata = { title: "Lookbook — AnointedHustlaz" };

const SHOTS = [
  { src: "photo-1483985988355-763728e1935b", tall: true, cap: "Scope Tee · Newtown" },
  { src: "photo-1512436991641-6745cdb1723f", tall: false, cap: "Monogram Hoodie" },
  { src: "photo-1479064555552-3ef4979f8908", tall: false, cap: "On set · Short Films" },
  { src: "photo-1490578474895-699cd4e2cf59", tall: true, cap: "Work Jacket · Maboneng" },
  { src: "photo-1441984904996-e0b6ba687e04", tall: false, cap: "Anointed Cap" },
  { src: "photo-1487222477894-8943e31ef7b2", tall: true, cap: "Crewneck · Golden hour" },
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export default function Lookbook() {
  return (
    <>
      <section className="hero" style={{ height: "min(70vh, 620px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img("photo-1490114538077-0a7f8cb49891")} alt="Lookbook cover" />
        <div className="hero-copy">
          <span className="label kick">Short Films — Vol. 03</span>
          <h1 className="display">The Lookbook</h1>
        </div>
      </section>

      <section className="section container">
        <Reveal className="section-head">
          <div>
            <span className="label label-accent">Winter ’26</span>
            <h2 className="display">Shot on the streets</h2>
          </div>
          <Link href="/shop" className="label">
            Shop the drop →
          </Link>
        </Reveal>

        <div className="grid-ed">
          {SHOTS.map((s, i) => (
            <figure
              key={i}
              className={`card ${i % 3 === 0 ? "wide tall" : ""}`.trim()}
              style={{ margin: 0 }}
            >
              <div className="card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="primary" src={img(s.src)} alt={s.cap} loading="lazy" />
              </div>
              <figcaption className="label card-sub">{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
