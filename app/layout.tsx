import type { Metadata } from "next";
import localFont from "next/font/local";
import ViewCanvas from "./components/view-canvas";
import "./globals.css";
const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Fizzi - Soda for Gutsy People",
  description:
    "Discover the refreshing taste of Fizzi, focused on gut health, featuring low-calorie, big flavor drinks made with natural ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
