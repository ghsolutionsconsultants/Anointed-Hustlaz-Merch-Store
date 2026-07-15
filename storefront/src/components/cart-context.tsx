"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  open: () => void;
  close: () => void;
  add: (item: Omit<CartItem, "qty">) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "ah-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const add = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const i = prev.findIndex(
        (x) => x.slug === item.slug && x.size === item.size,
      );
      if (i > -1) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((x) =>
          x.slug === slug && x.size === size ? { ...x, qty: Math.max(0, qty) } : x,
        )
        .filter((x) => x.qty > 0),
    );
  }, []);

  const remove = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((x) => !(x.slug === slug && x.size === size)));
  }, []);

  const value = useMemo<CartState>(() => {
    const count = items.reduce((n, x) => n + x.qty, 0);
    const subtotal = items.reduce((n, x) => n + x.qty * x.price, 0);
    return {
      items,
      isOpen,
      count,
      subtotal,
      open: () => setOpen(true),
      close: () => setOpen(false),
      add,
      setQty,
      remove,
    };
  }, [items, isOpen, add, setQty, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
