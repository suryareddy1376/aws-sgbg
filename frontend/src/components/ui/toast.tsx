"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react"

type ToastType = 'default' | 'success' | 'warning' | 'error';
interface ToastItem { id: string; title: string; description?: string; type: ToastType }

const ToastContext = React.createContext<{ toast: (t: Omit<ToastItem, 'id'>) => void } | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const addToast = (t: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...t, id }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 5000)
  }

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
        {toasts.map((t) => (
          <div key={t.id} className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all mb-4", t.type === 'error' ? 'destructive group border-destructive bg-destructive text-destructive-foreground' : 'bg-background border')} >
            <div className="flex gap-3">
              {t.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
              {t.type === 'warning' && <AlertTriangle className="h-5 w-5 text-aws-orange" />}
              {t.type === 'error' && <XCircle className="h-5 w-5 text-white" />}
              {t.type === 'default' && <Info className="h-5 w-5 text-primary" />}
              <div className="grid gap-1">
                <div className="text-sm font-semibold">{t.title}</div>
                {t.description && <div className="text-sm opacity-90">{t.description}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}