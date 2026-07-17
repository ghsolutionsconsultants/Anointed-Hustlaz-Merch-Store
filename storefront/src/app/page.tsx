import Link from "next/link";
import { featured, byCollection } from "@/lib/mock-products";
import { ProductCard } from "@/components/product-card";
import { buildLayout } from "@/lib/card-layout";
import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/mask-text";
import { Magnetic } from "@/components/magnetic";
import { CountUp } from "@/components/count-up";

const HERO =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=2200&q=82";
const CAMPAIGN =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=2200&q=82";
const STUDIO =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=82";

const STUDIO_URL = "https://studio.anointedhustlaz.store";

export default function Home() {
  const feat = featured().slice(0, 5);
  const grid = byCollection("All").slice(0, 6);
  const featSizes = buildLayout(feat.length);
  const gridSizes = buildLayout(grid.length);

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
            <Magnetic>
              <Link href="/shop" className="btn btn-ghost">
                <span>Shop the drop</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/lookbook" className="btn btn-ghost">
                <span>Lookbook</span>
              </Link>
            </Magnetic>
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
        <div className="section-head">
          <div>
            <Reveal>
              <span className="label label-accent">The Drop</span>
            </Reveal>
            <MaskText as="h2" className="display">
              Featured pieces
            </MaskText>
          </div>
          <Link href="/shop" className="label link-underline">
            View all →
          </Link>
        </div>
        <div className="grid-ed">
          {feat.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              className={`size-${featSizes[i]}`}
            />
          ))}
        </div>
      </section>

      {/* CAMPAIGN BAND — large editorial image */}
      <section className="campaign">
        <div className="campaign-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CAMPAIGN} alt="AnointedHustlaz Winter ’26 campaign" />
        </div>
        <div className="campaign-copy">
          <span className="label kick">Winter ’26</span>
          <MaskText as="h2">
            Worn in. <em>Never worn out.</em>
          </MaskText>
          <Reveal>
            <p>
              Heavyweight cotton that softens with every wear and holds its
              shape through the seasons. Made to become yours.
            </p>
          </Reveal>
          <Magnetic>
            <Link href="/shop" className="btn btn-ghost">
              <span>Shop the drop</span>
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="section container story">
        <Reveal className="story-eyebrow">
          <span className="ln" />
          <span className="label label-accent">The Ethos</span>
        </Reveal>
        <MaskText as="h2" className="story-statement">
          We don’t chase the trend. We take aim — and <em>hold it.</em>
        </MaskText>
        <div className="story-cols">
          <Reveal>
            <p className="lead">
              AnointedHustlaz is streetwear for people who move with intent.
              Heavyweight cottons, considered cuts, and a monochrome language
              that lets the wearer do the talking.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Every piece is made in small runs out of South Africa — designed
              to outlast the season, worn until it earns its creases. No noise.
              No filler. Just the drop, done right.
            </p>
          </Reveal>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="n">
              <CountUp to={11} />
            </span>
            <div className="label k">Years deep</div>
          </div>
          <div className="stat">
            <span className="n">
              <CountUp to={8097} />
            </span>
            <div className="label k">Community</div>
          </div>
          <div className="stat">
            <span className="n">
              <CountUp to={240} />
              <small>gsm</small>
            </span>
            <div className="label k">Cotton weight</div>
          </div>
          <div className="stat">
            <span className="n">
              <CountUp to={100} />
              <small>%</small>
            </span>
            <div className="label k">Made in Mzansi</div>
          </div>
        </div>
      </section>

      {/* STUDIO CTA — the films/videography live on their own site */}
      <section className="studio">
        <Reveal className="studio-media" variant="clip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={STUDIO} alt="AnointedHustlaz Studio" />
        </Reveal>
        <div className="container studio-in">
          <span className="label studio-tag">The Studio</span>
          <MaskText as="h2" className="display">
            The lens behind <em>the label.</em>
          </MaskText>
          <Reveal>
            <p>
              AnointedHustlaz started behind a camera. The short films, music
              videos and photography now live in their own space — same eye,
              bigger screen.
            </p>
          </Reveal>
          <Magnetic>
            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>Enter the Studio ↗</span>
            </a>
          </Magnetic>
        </div>
      </section>

      {/* MORE GRID */}
      <section className="section container">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="label label-accent">In Stock</span>
            </Reveal>
            <MaskText as="h2" className="display">
              The full range
            </MaskText>
          </div>
          <Link href="/shop" className="label link-underline">
            Shop all →
          </Link>
        </div>
        <div className="grid-ed">
          {grid.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              className={`size-${gridSizes[i]}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
