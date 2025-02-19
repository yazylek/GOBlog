import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const inter = Inter({
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// const pixelifySans = Pixelify_Sans({
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-pixel",
//   subsets: ["latin"],
// });

const vt323 = VT323({
  weight: "400",
});

export const metadata: Metadata = {
  title: "GOblog",
  description: "Blog created with golang and next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        <main className="m-auto container max-w-[80rem] shadow-2xl shadow-blue-400/30  min-h-screen ">
          <Header />
          <div className="mt-20 mb-20 p-5">{children}</div>
        </main>
      </body>
    </html>
  );
}
