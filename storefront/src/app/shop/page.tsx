import { Suspense } from "react";
import { ShopBrowser } from "@/components/shop-browser";

export const metadata = {
  title: "Shop — AnointedHustlaz",
};

export default function ShopPage() {
  return (
    <section className="section container">
      <Suspense fallback={<div className="label">Loading…</div>}>
        <ShopBrowser />
      </Suspense>
    </section>
  );
}
