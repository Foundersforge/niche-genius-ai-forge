
/**
 * Sidebar.tsx
 * 
 * This component creates the navigation sidebar for the application.
 * It includes the app logo, navigation menu items, and user profile.
 * Features a collapsible design that can be toggled between wide and narrow modes.
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ChartBar,   // Dashboard icon
  Settings,   // Settings icon
  Search,     // Market Research icon
  Package,    // Products icon
  Store,      // Store icon
  Users,      // Competitor Analysis icon
  ArrowLeft,  // Collapse sidebar icon
  ArrowRight, // Expand sidebar icon
  TrendingUp, // Trend Alerts icon
  Wand,       // AI Generator icon
  Globe       // App logo icon
} from "lucide-react";
import { NavLink } from "react-router-dom";

// Define props for the sidebar component
type AppSidebarProps = {
  className?: string;  // Optional CSS class to apply
};

export function AppSidebar({ className }: AppSidebarProps) {
  // State to track whether sidebar is collapsed or expanded
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle sidebar between collapsed and expanded states
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Array of navigation items with their names, icons, and paths
  const navItems = [
    {
      name: "Dashboard",
      icon: ChartBar,
      path: "/",
    },
    {
      name: "Market Research",
      icon: Search,
      path: "/research",
    },
    {
      name: "AI Generator",
      icon: Wand,
      path: "/generator",
    },
    {
      name: "Competitor Analysis",
      icon: Users,
      path: "/competitors",
    },
    {
      name: "Products",
      icon: Package,
      path: "/products",
    },
    {
      name: "Trend Alerts",
      icon: TrendingUp,
      path: "/trends",
    },
    {
      name: "Store",
      icon: Store,
      path: "/store",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    // Main sidebar container with responsive width based on collapsed state
    <div
      className={cn(
        "flex flex-col h-screen bg-dark-card border-r border-dark-border transition-all duration-300",
        collapsed ? "w-16" : "w-64", // Width changes based on collapsed state
        className
      )}
    >
      {/* App logo and collapse toggle button area */}
      <div className={cn("flex items-center p-4", collapsed ? "justify-center" : "justify-between")}>
        {/* Only show logo text when sidebar is expanded */}
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-tech-blue" /> {/* App logo */}
            <span className="font-bold text-lg">AI Product Lab</span>
          </div>
        )}
        {/* Only show logo icon when sidebar is collapsed */}
        {collapsed && <Globe className="h-6 w-6 text-tech-blue" />}
        
        {/* Button to toggle sidebar collapse/expand */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapse}
          className={cn("h-8 w-8", collapsed ? "ml-0" : "")}
        >
          {collapsed ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        </Button>
      </div>

      {/* Navigation links section */}
      <div className="flex flex-col gap-1 p-2 flex-1 overflow-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-tech-blue" // Active link styling
                  : "text-text-secondary hover:bg-secondary/50 hover:text-text-primary" // Inactive link styling
              )
            }
          >
            <item.icon size={20} /> {/* Icon for the navigation item */}
            {!collapsed && <span>{item.name}</span>} {/* Only show text when sidebar is expanded */}
          </NavLink>
        ))}
      </div>

      {/* User profile section at bottom of sidebar */}
      <div className="p-4 border-t border-dark-border">
        <div className={cn("flex items-center gap-3", collapsed ? "justify-center" : "")}>
          {/* User avatar circle with gradient */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-tech-blue to-purple-600 flex items-center justify-center text-white font-medium">
            A
          </div>
          {/* Only show user details when sidebar is expanded */}
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">AI Product Pro</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
