import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import "./admin-sidebar.css";
import AdminSidebar from "./components/AdminSidebar";

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
  title: "Solar Path | Renewable Home Energy Solutions",
  description:
    "Your Sustainability Partner. Renewable Home Energy Solutions providing quality solar PV systems, battery storage & EV chargers. SEAI grants available. Serving residential and commercial customers across Ireland.",
  icons: {
    icon: "/icon.svg",
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
