// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMSU Academic",
  description: "Academic Resource Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sky-50 text-gray-800">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-sky-200 shadow-md z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="font-bold text-lg text-sky-900">SMSU Academic</div>

            {/* Center: Menu */}
            <div className="space-x-4 text-sm md:text-base">
              <Link href="/" className="hover:underline text-sky-800">Home</Link>
              <Link href="/about" className="hover:underline text-sky-800">About Us</Link>
              <Link href="/activity" className="hover:underline text-sky-800">Activity</Link>
              <Link href="/resource" className="hover:underline text-sky-800">Resource</Link>
              <Link href="/curriculum" className="hover:underline text-sky-800">Cur Dev</Link>
            </div>

            {/* Right: Edit button */}
            <button className="bg-white text-sky-800 px-3 py-1 rounded hover:bg-sky-100 text-sm border border-sky-300 shadow-sm">Edit</button>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-24 max-w-7xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}