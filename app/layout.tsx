import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import VALUES from "@/constants/values";
import HeaderComponent from "@/components/layout/header.component";
import FooterComponent from "@/components/layout/footer.component";

const inter = Montserrat({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: VALUES.APP_DETAILS.name,
  description: VALUES.APP_DETAILS.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
