import type { ReactNode } from 'react'

export function Main({ children }: { children: ReactNode }) {
  return <main className="site-main">{children}</main>
}
