import Link from "next/link";
import { featured, byCollection } from "@/lib/mock-products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const HERO =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=2000&q=80";
const STUDIO =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80";

// separate films / videography site (placeholder until it's live)
const STUDIO_URL = "https://studio.anointedhustlaz.store";

export default function Home() {
  const feat = featured().slice(0, 5);
  const grid = byCollection("All").slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO} alt="AnointedHustlaz Winter drop" />
        </div>
        <div className="frame-ticks" aria-hidden>
          <span className="tl" />
          <span className="tr" />
          <span className="bl" />
          <span className="br" />
        </div>
        <div className="hero-copy">
          <span className="label kick">Drop 03 — Winter ’26</span>
          <h1 className="display">
            Aim <em>true.</em>
          </h1>
          <div className="hero-actions">
            <Link href="/shop" className="btn btn-ghost">
              <span>Shop the drop</span>
            </Link>
            <Link href="/lookbook" className="btn btn-ghost">
              <span>Lookbook</span>
            </Link>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden>
          <div className="bar" />
          <span>Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="strip" aria-hidden>
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              STS Clothing&nbsp;&nbsp;&nbsp;Heavyweight
              Cotton&nbsp;&nbsp;&nbsp;EST.
              2015&nbsp;&nbsp;&nbsp;Anointed&nbsp;Hustlaz&nbsp;&nbsp;&nbsp;Made
              in&nbsp;Mzansi&nbsp;&nbsp;&nbsp;Aim&nbsp;True&nbsp;&nbsp;&nbsp;
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
          <Link href="/shop" className="label link-underline">
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

      {/* STUDIO CTA — the films/videography live on their own site */}
      <section className="studio">
        <Reveal className="studio-media" variant="clip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={STUDIO} alt="AnointedHustlaz Studio" />
        </Reveal>
        <div className="container studio-in">
          <span className="label studio-tag">
            ✦ &nbsp;The Studio &nbsp;✦
          </span>
          <h2 className="display">
            The lens behind <em>the label.</em>
          </h2>
          <p>
            AnointedHustlaz started behind a camera. The short films, music
            videos and photography now live in their own space — same eye,
            bigger screen.
          </p>
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>Enter the Studio ↗</span>
          </a>
        </div>
      </section>

      {/* MORE GRID */}
      <section className="section container">
        <Reveal className="section-head">
          <div>
            <span className="label label-accent">In Stock</span>
            <h2 className="display">The full range</h2>
          </div>
          <Link href="/shop" className="label link-underline">
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
