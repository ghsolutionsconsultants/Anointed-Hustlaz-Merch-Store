"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "./cart-context";
import { formatZAR } from "@/lib/format";

export function CartDrawer() {
  const { items, isOpen, close, subtotal, setQty, remove } = useCart();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        className={`overlay${isOpen ? " open" : ""}`}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <aside
        className={`drawer${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
        aria-label="Shopping bag"
      >
        <div className="drawer-head">
          <h3>Your Bag</h3>
          <button className="icon-btn" onClick={close} aria-label="Close cart">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-body">
            <div className="cart-empty">
              <span className="label">Your bag is empty</span>
              <Link href="/shop" className="btn" onClick={close}>
                Shop the drop
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="drawer-body">
              {items.map((it) => (
                <div className="line" key={`${it.slug}-${it.size}`}>
                  <div className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.image} alt={it.name} loading="lazy" />
                  </div>
                  <div>
                    <div className="line-name">{it.name}</div>
                    <div className="label" style={{ marginTop: 4 }}>
                      Size {it.size}
                    </div>
                    <div className="qty">
                      <button
                        onClick={() => setQty(it.slug, it.size, it.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <span
                        className="price"
                        style={{ minWidth: 14, textAlign: "center" }}
                      >
                        {it.qty}
                      </span>
                      <button
                        onClick={() => setQty(it.slug, it.size, it.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="price">{formatZAR(it.price * it.qty)}</div>
                    <button
                      className="rm"
                      onClick={() => remove(it.slug, it.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="drawer-foot">
              <div className="subtotal">
                <span className="label">Subtotal</span>
                <span className="n">{formatZAR(subtotal)}</span>
              </div>
              <button className="btn btn-accent btn-block">
                Checkout — {formatZAR(subtotal)}
              </button>
              <p className="ship-note">
                Shipping &amp; taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
