"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Currency, detectCurrency, isCurrency } from "@/lib/pricing";

const STORAGE_KEY = "krets-currency";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (next: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // SSR + first paint default to USD. Locale + storage applied on mount.
  const [currency, setCurrencyState] = useState<Currency>("usd");

  useEffect(() => {
    let resolved: Currency | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isCurrency(stored)) resolved = stored;
    } catch {
      // localStorage unavailable; ignore
    }
    if (!resolved) resolved = detectCurrency();
    setCurrencyState(resolved);
  }, []);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable; ignore
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside <CurrencyProvider>");
  }
  return ctx;
}
