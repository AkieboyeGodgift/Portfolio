import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '400' // Optional: Specify a weight for non-variable fonts
});

export const metadata: Metadata = {
  title: "Akieboye Godgift | Web Designer at your service.",
  description: "I will build functional and responsive websites for yout brand, Whether you are a freelancer or a small business owner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
