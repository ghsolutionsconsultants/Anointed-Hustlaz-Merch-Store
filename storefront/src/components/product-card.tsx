import Link from "next/link";
import type { Product } from "@/lib/mock-products";
import { formatZAR } from "@/lib/format";

export function ProductCard({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const [primary, secondary] = product.images;
  return (
    <Link href={`/product/${product.slug}`} className={`card ${className}`.trim()}>
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
