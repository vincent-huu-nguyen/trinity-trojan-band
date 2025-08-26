import "./globals.css";
import Link from "next/link";

export const metadata = { title: "Trinity Trojan Band" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ttblack text-white">
        <header className="bg-ttred">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="font-bold tracking-wide">Trinity Trojan Band</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/about">About</Link>
              <Link href="/events">Events</Link>
              <Link href="/donate">Donate</Link>
              <Link href="/volunteer">Volunteer</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/sponsors">Sponsors</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/admin" className="font-semibold">Admin</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-6">{children}</main>
        <footer className="border-t border-white/10 py-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Trinity Trojan Band
        </footer>
      </body>
    </html>
  );
}
