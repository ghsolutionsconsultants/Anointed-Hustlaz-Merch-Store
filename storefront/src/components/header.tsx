import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CartButton } from "./cart-button";

export function Header() {
  return (
    <header className="header">
      <div className="header-in">
        <nav className="nav-links" aria-label="Primary">
          <Link href="/shop">Shop</Link>
          <Link href="/shop?c=Hoodies">Fleece</Link>
          <Link href="/lookbook">Lookbook</Link>
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
