
import { ChartBar, Package, Search, Trending } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { TrendingNicheCard } from "@/components/dashboard/TrendingNicheCard";
import { ReverseEngineeredProductCard } from "@/components/dashboard/ReverseEngineeredProductCard";

// Mock data for trending niches
const trendingNiches = [
  {
    title: "AI Coloring Books for Therapists",
    category: "Mental Health",
    searchVolume: 12500,
    competition: 25,
    pricing: { low: 9.99, high: 29.99, average: 17.99 },
    growth: 42,
    tags: ["Therapy Tools", "Mental Health", "AI Generated", "Low Competition"],
  },
  {
    title: "Plant-Care Journals for Gamers",
    category: "Home & Lifestyle",
    searchVolume: 8700,
    competition: 18,
    pricing: { low: 12.99, high: 34.99, average: 22.99 },
    growth: 37,
    tags: ["Niche Journals", "Plant Care", "Gaming Community", "Low Competition"],
  },
  {
    title: "AI Productivity Planners for Students",
    category: "Education",
    searchVolume: 23400,
    competition: 45,
    pricing: { low: 7.99, high: 24.99, average: 14.99 },
    growth: 28,
    tags: ["Productivity", "Student Tools", "AI Generated", "Medium Competition"],
  },
  {
    title: "Stoic Philosophy Flashcard Templates",
    category: "Self-Development",
    searchVolume: 9200,
    competition: 12,
    pricing: { low: 5.99, high: 19.99, average: 11.99 },
    growth: 56,
    tags: ["Mindfulness", "Philosophy", "Flashcards", "Very Low Competition"],
  },
  {
    title: "Van Life Budget & Route Planners",
    category: "Travel",
    searchVolume: 14600,
    competition: 22,
    pricing: { low: 14.99, high: 39.99, average: 24.99 },
    growth: 62,
    tags: ["Digital Nomad", "Travel Planning", "Budget Tools", "Growing Trend"],
  },
  {
    title: "Remote Team Building Activity Books",
    category: "Business",
    searchVolume: 17800,
    competition: 33,
    pricing: { low: 19.99, high: 49.99, average: 29.99 },
    growth: 31,
    tags: ["Team Building", "Remote Work", "Activities", "Medium Competition"],
  },
];

// Mock data for reverse engineered products
const reverseEngineeredProducts = [
  {
    title: "Ultimate Productivity Planner 2025",
    platform: "Etsy",
    revenue: "$128,450",
    sales: 8563,
    keywords: ["productivity", "planner", "minimal", "2025"],
    imageUrl: "https://placehold.co/300x200/1a1a1a/3a86ff?text=Planner",
  },
  {
    title: "Digital Recipe Book Template Bundle",
    platform: "Shopify",
    revenue: "$94,230",
    sales: 6282,
    keywords: ["recipe", "cookbook", "digital", "template"],
    imageUrl: "https://placehold.co/300x200/1a1a1a/3a86ff?text=Recipe+Book",
  },
  {
    title: "Social Media Content Calendar",
    platform: "Gumroad",
    revenue: "$76,510",
    sales: 5101,
    keywords: ["social media", "calendar", "content", "scheduler"],
    imageUrl: "https://placehold.co/300x200/1a1a1a/3a86ff?text=Calendar",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Product Lab Dashboard</h1>
          <p className="text-muted-foreground">
            Your market insights and product opportunities in one place
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search opportunities..."
              className="w-full bg-background pl-9 md:w-[200px] lg:w-[300px]"
            />
          </div>
          <Button className="bg-tech-blue hover:bg-tech-blue/90">New Product</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Niche Opportunities"
          value="1,248"
          description="across 28 categories"
          icon={<Search className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Trending Products"
          value="347"
          description="in the last 30 days"
          icon={<Trending className="h-4 w-4" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Your Products"
          value="16"
          description="5 need optimization"
          icon={<Package className="h-4 w-4" />}
        />
        <StatsCard
          title="Revenue Potential"
          value="$42,750"
          description="estimated monthly"
          icon={<ChartBar className="h-4 w-4" />}
          trend={{ value: 23, isPositive: true }}
        />
      </div>

      <Tabs defaultValue="low-competition" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="bg-dark-card">
            <TabsTrigger value="low-competition">Low Competition</TabsTrigger>
            <TabsTrigger value="high-growth">High Growth</TabsTrigger>
            <TabsTrigger value="high-margin">High Margin</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <TabsContent value="low-competition" className="space-y-4">
          <h2 className="text-xl font-semibold">High-Opportunity Niches</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingNiches.map((niche, i) => (
              <TrendingNicheCard key={i} {...niche} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="high-growth" className="space-y-4">
          <h2 className="text-xl font-semibold">Fastest Growing Niches</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingNiches
              .sort((a, b) => b.growth - a.growth)
              .map((niche, i) => (
                <TrendingNicheCard key={i} {...niche} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="high-margin" className="space-y-4">
          <h2 className="text-xl font-semibold">Best Profit Margin Niches</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingNiches
              .sort((a, b) => b.pricing.average - a.pricing.average)
              .map((niche, i) => (
                <TrendingNicheCard key={i} {...niche} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Clone-Worthy Products</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reverseEngineeredProducts.map((product, i) => (
            <ReverseEngineeredProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
