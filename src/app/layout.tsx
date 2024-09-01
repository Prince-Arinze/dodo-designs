import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SecondarySidebar from "@/components/SecondarySidebar";
import Head from "next/head";
import ContextProvider from "../../AppContext";


export const metadata: Metadata = {
  title: "Zadwax",
  description: "Zadwax web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/z.svg" />
      </Head>
      <body className="w-screen h-auto flex">
        <ContextProvider>
            <div className="flex gap-5">
              <SecondarySidebar />
              <Sidebar />
            </div>
            {children}
        </ContextProvider>
      </body>
    </html>
  );
}
