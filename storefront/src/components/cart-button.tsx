"use client";

import { useCart } from "./cart-context";

export function CartButton() {
  const { count, open } = useCart();
  return (
    <button className="icon-btn" onClick={open} aria-label="Open cart">
      <span>Cart</span>
      {count > 0 && (
        <span className="cart-count" suppressHydrationWarning>
          {count}
        </span>
      )}
    </button>
  );
}
