import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div className="footer-brand">
          <div className="display">
            Anointed<em>Hustlaz</em>
          </div>
          <p style={{ marginTop: 14 }}>
            Streetwear &amp; short films out of South Africa. STS Clothing —
            established 2015.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link href="/shop">All Products</Link></li>
            <li><Link href="/shop?c=T-Shirts">T-Shirts</Link></li>
            <li><Link href="/shop?c=Hoodies">Hoodies</Link></li>
            <li><Link href="/shop?c=Headwear">Headwear</Link></li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li><Link href="/lookbook">Lookbook</Link></li>
            <li><Link href="/shop">Shipping</Link></li>
            <li><Link href="/shop">Returns</Link></li>
            <li><Link href="/shop">Size Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <ul>
            <li style={{ color: "var(--muted)", fontSize: 13 }}>
              First access to every drop.
            </li>
            <li>
              <a
                href="https://www.instagram.com/sean_the_sniper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram → @sean_the_sniper
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AnointedHustlaz</span>
        <span>Made in Mzansi 🇿🇦</span>
      </div>
    </footer>
  );
}
