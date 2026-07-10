import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "jotai";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damien Chabanier",
  description:
    "Damien Chabanier, développeur web passionné, crée des expériences numériques uniques. Découvrez mes projets innovants et ma vision créative pour le futur du web.",
  openGraph: {
    title: "Damien Chabanier",
    description:
      "Damien Chabanier, développeur web passionné, crée des expériences numériques uniques. Découvrez mes projets innovants et ma vision créative pour le futur du web.",
    url: "https://damienchabanier.vercel.app",
    siteName: "Damien Chabanier",
    images: [
      {
        url: "/ogImage.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/logoFolio.svg" sizes="any" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-my-background selection:bg-(--main-color) selection:text-(--sec-color) `}
        >
          <Provider>
            <ThemeProvider enableSystem disableTransitionOnChange>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </>
  );
}
