import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AntdStyledComponentsRegistry from "@/components/AntddStyledComponentRegistry";

export const metadata: Metadata = {
  title: "Karunendu Mishra's Porfolio",
  description: "Karunendu Mishra's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <AntdStyledComponentsRegistry>
          <Navbar />
          <div className="flex min-h-screen flex-col justify-between">
            <main className="px-5 xl:px-12 py-5 xl:px-32">{children}</main>
            <Footer />
          </div>
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
