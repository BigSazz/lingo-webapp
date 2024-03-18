import React from "react";
import { Header } from "@/app/(marketing)/header";
import { Footer } from "@/app/(marketing)/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
