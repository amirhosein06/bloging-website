import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Theme from '../theme-provider';

const popins = Poppins({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "AZ-blog",
  description: "Created by Amirhosein Zolfaghari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${popins.className} w-full h-[100vh] relative bg-white dark:bg-black`} suppressHydrationWarning={true}>
        <Theme>
        <Navbar />
        <div className="px-3">
        {children}
        </div>
        <Footer />
        </Theme>
      </body>
    </html>
  );
}
