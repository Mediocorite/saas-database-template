import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Upspark.io",
  description: "Web-scraping Solution",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <main className="container">
          <Navigation></Navigation>

          <TRPCReactProvider>{children}</TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
