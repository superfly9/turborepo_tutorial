"use client";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "components/Header";
import Footer from "components/Footer";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import HomeLoading from "./loading";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Instagram",
  description: "Practice For Turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SessionProvider>
          <AntdRegistry>
            <div className="layout_container">{children}</div>
          </AntdRegistry>
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
