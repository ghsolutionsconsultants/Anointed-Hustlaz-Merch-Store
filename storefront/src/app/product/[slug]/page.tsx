import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProduct, byCollection } from "@/lib/mock-products";
import { formatZAR } from "@/lib/format";
import { BuyPanel } from "@/components/buy-panel";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} — AnointedHustlaz` : "Not found" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = byCollection(product.collection)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <section className="section container">
      <div style={{ marginBottom: 28 }}>
        <Link href="/shop" className="label">
          ← Back to shop
        </Link>
      </div>

      <div className="pdp">
        <div className="pdp-gallery">
          {product.images.map((src, i) => (
            <div className="shot" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${product.name} view ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        <div className="pdp-info">
          <span className="label label-accent">{product.collection}</span>
          <h1 className="display">{product.name}</h1>
          <div className="pdp-price">{formatZAR(product.price)}</div>
          <p className="pdp-desc">{product.description}</p>

          <div className="divider" />

          <BuyPanel product={product} />

          <div className="meta-list">
            <div>
              <span>Colourway</span>
              <span>{product.colorway}</span>
            </div>
            <div>
              <span>Fit</span>
              <span>Oversized / true to size</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>2–4 days · South Africa</span>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: "clamp(64px,9vw,120px)" }}>
          <div className="section-head">
            <div>
              <span className="label label-accent">More from</span>
              <h2 className="display">{product.collection}</h2>
            </div>
          </div>
          <div className="grid-ed">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
