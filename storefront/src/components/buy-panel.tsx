"use client";

import { useState } from "react";
import type { Product } from "@/lib/mock-products";
import { useCart } from "./cart-context";

export function BuyPanel({ product }: { product: Product }) {
  const { add } = useCart();
  const singleSize = product.sizes.length === 1;
  const [size, setSize] = useState<string | null>(
    singleSize ? product.sizes[0] : null,
  );
  const [nudge, setNudge] = useState(false);

  const onAdd = () => {
    if (!size) {
      setNudge(true);
      return;
    }
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      image: product.images[0],
    });
  };

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {!singleSize && (
        <div style={{ display: "grid", gap: 10 }}>
          <div
            className="label"
            style={{ color: nudge ? "var(--accent-ink)" : undefined }}
          >
            {nudge ? "Select a size" : "Size"}
          </div>
          <div className="size-row">
            {product.sizes.map((s) => (
              <button
                key={s}
                className="size"
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setNudge(false);
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        className="btn btn-block"
        onClick={onAdd}
        disabled={product.soldOut}
      >
        {product.soldOut ? "Sold Out" : "Add to Bag"}
      </button>
    </div>
  );
}
