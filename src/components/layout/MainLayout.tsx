
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Toaster } from "@/components/ui/sonner";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="container mx-auto max-w-7xl">{children}</div>
        <Toaster position="top-right" />
      </main>
    </div>
  );
}
