
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ChartBar, 
  Settings, 
  Search, 
  Package, 
  Store, 
  Users, 
  ArrowLeft, 
  ArrowRight, 
  Trending, 
  Wand,
  Globe
} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

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
      icon: Trending,
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
    <div
      className={cn(
        "flex flex-col h-screen bg-dark-card border-r border-dark-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className={cn("flex items-center p-4", collapsed ? "justify-center" : "justify-between")}>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-tech-blue" />
            <span className="font-bold text-lg">AI Product Lab</span>
          </div>
        )}
        {collapsed && <Globe className="h-6 w-6 text-tech-blue" />}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapse}
          className={cn("h-8 w-8", collapsed ? "ml-0" : "")}
        >
          {collapsed ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        </Button>
      </div>

      <div className="flex flex-col gap-1 p-2 flex-1 overflow-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-tech-blue"
                  : "text-text-secondary hover:bg-secondary/50 hover:text-text-primary"
              )
            }
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-dark-border">
        <div className={cn("flex items-center gap-3", collapsed ? "justify-center" : "")}>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-tech-blue to-purple-600 flex items-center justify-center text-white font-medium">
            A
          </div>
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
