"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { COLLECTIONS, byCollection } from "@/lib/mock-products";
import { ProductCard } from "./product-card";

const FILTERS = ["All", ...COLLECTIONS] as const;

// give the grid an editorial rhythm: every 5th item runs wide
function spanFor(index: number): string {
  return index % 5 === 0 ? "wide tall" : "";
}

export function ShopBrowser() {
  const params = useSearchParams();
  const c = params.get("c");
  const active =
    c && FILTERS.includes(c as (typeof FILTERS)[number]) ? c : "All";
  const products = byCollection(active);

  return (
    <>
      <div className="section-head">
        <div>
          <span className="label label-accent">Winter ’26</span>
          <h2 className="display">The Collection</h2>
        </div>
        <span className="label">
          {products.length} {products.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <nav
        aria-label="Filter by collection"
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: "clamp(28px,4vw,44px)",
        }}
      >
        {FILTERS.map((f) => (
          <Link
            key={f}
            href={f === "All" ? "/shop" : `/shop?c=${encodeURIComponent(f)}`}
            className="size"
            aria-pressed={active === f}
            style={{ minWidth: 0 }}
          >
            {f}
          </Link>
        ))}
      </nav>

      <div className="grid-ed">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} className={spanFor(i)} />
        ))}
      </div>
    </>
  );
}
