
/**
 * MainLayout.tsx
 * 
 * This is the main layout component that wraps around all pages.
 * It sets up the basic structure with a sidebar and main content area.
 */

import { ReactNode } from "react";
import { AppSidebar } from "./Sidebar";
import { Toaster } from "@/components/ui/sonner";

// Define the props for the MainLayout component
type MainLayoutProps = {
  children: ReactNode;  // Children will be the page content to display
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    // Main container with flex layout and overflow handling
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar navigation component */}
      <AppSidebar />
      
      {/* Main content area with scrolling and padding */}
      <main className="flex-1 overflow-auto p-6">
        {/* Container to center content with max width */}
        <div className="container mx-auto max-w-7xl">{children}</div>
        
        {/* Toast notifications that appear in the top-right corner */}
        <Toaster position="top-right" />
      </main>
    </div>
  );
}
