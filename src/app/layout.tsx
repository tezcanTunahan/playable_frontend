import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/queryProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Playable Factory",
  description: "Software Engineer Case Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>{children}</QueryProvider>

        <Toaster />
      </body>
    </html>
  );
}
