import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins= Poppins({weight:'400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Switchive Market Place",
  description: "A Blockchain Based E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="sticky top-0 bg-white z-30">
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
