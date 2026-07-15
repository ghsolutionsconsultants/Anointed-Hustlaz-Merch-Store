import Link from "next/link";
import type { Product } from "@/lib/mock-products";
import { formatZAR } from "@/lib/format";

const Arrow = () => (
  <span className="card-arrow" aria-hidden>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 12L12 4M12 4H5M12 4V11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export function ProductCard({
  product,
  className = "",
  variant = "default",
}: {
  product: Product;
  className?: string;
  variant?: "default" | "feature";
}) {
  const [primary, secondary] = product.images;

  if (variant === "feature") {
    return (
      <Link
        href={`/product/${product.slug}`}
        className={`card feature ${className}`.trim()}
        data-cursor
        data-cursor-label="View"
      >
        <div className="card-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="primary" src={primary} alt={product.name} loading="lazy" />
          <div className="card-cap">
            <div className="cap-meta">
              <span className="label" style={{ color: "rgba(255,255,255,.75)" }}>
                {product.collection}
              </span>
              <span className="cap-title">{product.name}</span>
            </div>
            <span className="price">{formatZAR(product.price)}</span>
          </div>
          <Arrow />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/product/${product.slug}`}
      className={`card ${className}`.trim()}
      data-cursor
      data-cursor-label="View"
    >
      <div className="card-media">
        {product.soldOut && <span className="card-tag sold">Sold Out</span>}
        {product.feature && !product.soldOut && (
          <span className="card-tag">New</span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="primary" src={primary} alt={product.name} loading="lazy" />
        {secondary && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="secondary"
            src={secondary}
            alt={`${product.name} alternate view`}
            loading="lazy"
          />
        )}
        <Arrow />
      </div>
      <div className="card-row">
        <div>
          <div className="card-name">{product.name}</div>
          <div className="label card-sub">{product.colorway}</div>
        </div>
        <div className="price">{formatZAR(product.price)}</div>
      </div>
    </Link>
  );
}
