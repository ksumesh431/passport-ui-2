import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import CustomNav from "@/components/custom-nav";
import CustomFooter from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docoaid",
  description: "Your trusted partner in document authentication and legalization. We specialize in document verification, notary services, translations, and legal documentation. With years of expertise, we provide reliable, efficient, and secure services for individuals and businesses, ensuring your documents meet all necessary standards and requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#f9fafb]`}>
        <div className="contents">
          <Theme className="contents"> {/* Using contents to prevent Theme from creating its own box */}
            <CustomNav />
            <div >{children}</div>
          </Theme>
        </div>
        <CustomFooter />
      </body>
    </html>
  );
}