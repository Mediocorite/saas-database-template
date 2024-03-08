import "@/styles/globals.css";
import background from "public/images/background-hue.svg";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Saas Template product",
  description: "Saas Template page",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} background-gradient`}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "repeat",
        }}
      >
        <Navigation></Navigation>
        <main className="container ">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
