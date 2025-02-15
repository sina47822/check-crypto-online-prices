import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Check Crypto Prices Online",
  description: "if you want to check most popular crypto prices you can be with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ResponsiveNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
