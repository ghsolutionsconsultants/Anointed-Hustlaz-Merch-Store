import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InlineScript } from "@/components/inline-script";
import { IntroCurtain } from "@/components/intro-curtain";
import { ScrollFX } from "@/components/scroll-fx";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AnointedHustlaz — STS Clothing",
  description:
    "Streetwear out of South Africa. Shop the AnointedHustlaz / STS Clothing drop. Aim true.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${archivo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body>
        <IntroCurtain />
        <SmoothScroll />
        <ScrollFX />
        <ScrollProgress />
        <Cursor />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
