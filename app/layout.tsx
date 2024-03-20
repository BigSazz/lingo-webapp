import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duolingo | Web-App",
  description: "Start learning a new language easily today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" type="images/x-icon" href="/mascot.svg" />
        </head>
        <body className={font.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
