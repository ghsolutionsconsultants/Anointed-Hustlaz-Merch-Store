import Link from "next/link";
import { featured, byCollection } from "@/lib/mock-products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const HERO =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=2000&q=80";
const LOOK =
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  const feat = featured().slice(0, 5);
  const grid = byCollection("All").slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO} alt="AnointedHustlaz Winter drop" />
        <div className="hero-copy">
          <span className="label kick">Drop 03 — Winter ’26</span>
          <h1 className="display">
            Aim <em>true.</em>
          </h1>
          <div className="hero-actions">
            <Link href="/shop" className="btn btn-ghost">
              Shop the drop
            </Link>
            <Link href="/lookbook" className="btn btn-ghost">
              Lookbook
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="strip" aria-hidden>
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              STS Clothing&nbsp;&nbsp;&nbsp;Short Films&nbsp;&nbsp;&nbsp;EST.
              2015&nbsp;&nbsp;&nbsp;Anointed&nbsp;Hustlaz&nbsp;&nbsp;&nbsp;Made
              in&nbsp;Mzansi&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <section className="section container">
        <Reveal className="section-head">
          <div>
            <span className="label label-accent">The Drop</span>
            <h2 className="display">Featured pieces</h2>
          </div>
          <Link href="/shop" className="label">
            View all →
          </Link>
        </Reveal>
        <div className="grid-ed">
          <ProductCard product={feat[0]} className="wide tall" />
          <ProductCard product={feat[1]} className="wide tall" />
          {feat.slice(2, 5).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* LOOKBOOK SPLIT */}
      <section className="split">
        <div className="split-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOOK} alt="Short Films lookbook" />
        </div>
        <div className="split-copy">
          <span className="label label-accent">Short Films</span>
          <h2 className="display">
            Worn on <em>set.</em>
          </h2>
          <p>
            Every drop is shot the way it’s meant to be seen — on the streets of
            Joburg, in motion, under real light. The clothing is the cast; the
            city is the frame.
          </p>
          <Link href="/lookbook" className="btn" style={{ width: "fit-content" }}>
            Watch the lookbook
          </Link>
        </div>
      </section>

      {/* MORE GRID */}
      <section className="section container">
        <Reveal className="section-head">
          <div>
            <span className="label label-accent">In Stock</span>
            <h2 className="display">The full range</h2>
          </div>
          <Link href="/shop" className="label">
            Shop all →
          </Link>
        </Reveal>
        <div className="grid-ed">
          {grid.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
