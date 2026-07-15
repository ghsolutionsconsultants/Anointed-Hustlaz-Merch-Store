import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CartButton } from "./cart-button";

const STUDIO_URL = "https://studio.anointedhustlaz.store";

export function Header() {
  return (
    <header className="header">
      <div className="header-in">
        <nav className="nav-links" aria-label="Primary">
          <Link href="/shop" className="link-underline">
            Shop
          </Link>
          <Link href="/lookbook" className="link-underline">
            Lookbook
          </Link>
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            Studio ↗
          </a>
        </nav>
        <Link href="/" className="brand" aria-label="AnointedHustlaz home">
          <span className="mark">AH</span>
          <span className="word">Anointed&nbsp;Hustlaz</span>
        </Link>
        <div className="header-right">
          <ThemeToggle />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
