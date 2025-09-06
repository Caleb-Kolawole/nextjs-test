import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js Test Landing Page",
  description:
    "A simple, responsive landing page built with Next.js, TypeScript, and Tailwind CSS. Includes API integration, accessibility, and SEO best practices.",
  openGraph: {
    title: "Next.js Test Landing Page",
    description:
      "Responsive landing page with API integration and SEO best practices.",
    url: "https://caleb-nextjs-test.netlify.app",
    siteName: "Next.js Test",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js Test Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Test Landing Page",
    description:
      "Responsive landing page with API integration and SEO best practices.",
    images: ["/og-image.png"],
    creator: "@TechSavvyCaleb",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-gray-50 text-gray-900`}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b bg-white sticky top-0 z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
              <h1 className="text-xl font-bold">Next.js Test</h1>
              <nav className="flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/posts" className="hover:text-blue-600">Posts</Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-white">
            <div className="mx-auto max-w-6xl p-4 text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Next.js Test. From Caleb Kolawole.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
