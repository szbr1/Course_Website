"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<
  | {
      showToast: (message: string, type?: ToastType) => void;
    }
  | undefined
>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  /* rate‑limit state (max 1 toast per 1s) */
  const lastToastTimeRef = useRef<number>(0);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const now = Date.now();

    // rate limit: ignore if triggered too fast
    if (now - lastToastTimeRef.current < 1000) {
      return;
    }

    lastToastTimeRef.current = now;

    const id = now;
    setToasts((t) => [...t, { id, message, type }]);

    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST STACK */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`relative min-w-[260px] max-w-sm rounded-xl px-5 py-4 shadow-[6px_6px_0_#000] border-2 ${
              toast.type === "success"
                ? "bg-green-50 border-green-700"
                : toast.type === "error"
                ? "bg-red-50 border-red-700"
                : "bg-yellow-50 border-yellow-700"
            }`}
          >
            {/* sketch layer */}
            <div
              className={`absolute -top-2 -right-2 w-full h-full rounded-xl -z-10 rotate-[-1deg] ${
                toast.type === "success"
                  ? "bg-green-200"
                  : toast.type === "error"
                  ? "bg-red-200"
                  : "bg-yellow-200"
              }`}
            />

            <div className="flex items-start gap-3">
              <span className="text-lg">
                {toast.type === "success"
                  ? "✔"
                  : toast.type === "error"
                  ? "✖"
                  : "ℹ"}
              </span>
              <p className="text-sm font-medium text-gray-900">
                {toast.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

