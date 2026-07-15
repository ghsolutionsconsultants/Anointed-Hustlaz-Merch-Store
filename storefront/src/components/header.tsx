"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CartButton } from "./cart-button";

const STUDIO_URL = "https://studio.anointedhustlaz.store";
const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  const close = () => setMenu(false);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-in">
          <div className="header-left">
            <nav className="nav-links" aria-label="Primary">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="link-underline">
                  {l.label}
                </Link>
              ))}
              <a
                href={STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Studio ↗
              </a>
            </nav>
            <button
              className={`burger${menu ? " open" : ""}`}
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>

          <Link
            href="/"
            className="brand"
            onClick={close}
            aria-label="AnointedHustlaz home"
          >
            <span className="mark">AH</span>
            <span className="word">Anointed&nbsp;Hustlaz</span>
          </Link>

          <div className="header-right">
            <ThemeToggle />
            <CartButton />
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu${menu ? " open" : ""}`}
        aria-hidden={!menu}
      >
        <div className="mobile-menu-top">
          <span className="label">Menu</span>
          <button className="icon-btn" onClick={close} aria-label="Close menu">
            Close
          </button>
        </div>
        <nav aria-label="Mobile">
          <Link href="/" onClick={close}>
            Home
          </Link>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.label}
            </Link>
          ))}
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Studio ↗
          </a>
        </nav>
        <div className="mobile-menu-foot">
          <a
            href="https://www.instagram.com/sean_the_sniper/"
            target="_blank"
            rel="noopener noreferrer"
            className="label"
          >
            @sean_the_sniper
          </a>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
