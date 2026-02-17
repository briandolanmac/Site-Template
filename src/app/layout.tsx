import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import "./admin-sidebar.css";
import AdminSidebar from "./components/AdminSidebar";
import seoData from "./data/seo.json";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: seoData.defaultTitle,
    template: "%s",
  },
  description: seoData.defaultDescription,
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL(seoData.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoData.defaultTitle,
    description: seoData.defaultDescription,
    url: seoData.siteUrl,
    siteName: seoData.siteName,
    images: [
      {
        url: seoData.defaultImage,
        width: 1200,
        height: 630,
        alt: seoData.siteName,
      },
    ],
    locale: seoData.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.defaultTitle,
    description: seoData.defaultDescription,
    images: [seoData.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${leagueSpartan.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          {children}
          <AdminSidebar />
        </ThemeProvider>
      </body>
    </html>
  );
}
