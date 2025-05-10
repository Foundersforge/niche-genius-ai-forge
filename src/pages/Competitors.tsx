
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Eye } from "lucide-react";
import { ReverseEngineeredProductCard } from "@/components/dashboard/ReverseEngineeredProductCard";

// Mock data for top competitors
const competitorProducts = [
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
  {
    title: "Personal Finance Tracker Template",
    platform: "Etsy",
    revenue: "$63,890",
    sales: 4259,
    keywords: ["finance", "budget", "tracker", "money"],
    imageUrl: "https://placehold.co/300x200/1a1a1a/3a86ff?text=Finance",
  },
  {
    title: "Digital Wedding Planner",
    platform: "Shopify",
    revenue: "$112,340",
    sales: 3745,
    keywords: ["wedding", "planner", "digital", "bridal"],
    imageUrl: "https://placehold.co/300x200/1a1a1a/3a86ff?text=Wedding",
  },
  {
    title: "Meal Prep & Grocery List Bundle",
    platform: "Etsy",
    revenue: "$58,720",
    sales: 3915,
    keywords: ["meal prep", "grocery", "food", "planning"],
    imageUrl: "https://placehold.co/300x200/1a1a1a/3a86ff?text=Meal+Prep",
  },
];

export default function Competitors() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Competitor Analysis</h1>
        <p className="text-muted-foreground">
          Analyze and clone successful competitor products
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search competitor products, URLs, or keywords..."
            className="w-full bg-background pl-9"
          />
        </div>
        <Button className="bg-tech-blue hover:bg-tech-blue/90">
          <Eye className="mr-2 h-4 w-4" />
          Track New Competitor
        </Button>
      </div>

      <Tabs defaultValue="bestsellers" className="space-y-4">
        <TabsList className="bg-dark-card">
          <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="recently-analyzed">Recently Analyzed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bestsellers" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitorProducts.map((product, i) => (
              <ReverseEngineeredProductCard key={i} {...product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="trending">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitorProducts
              .slice()
              .sort(() => Math.random() - 0.5)
              .map((product, i) => (
                <ReverseEngineeredProductCard key={i} {...product} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recently-analyzed">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitorProducts
              .slice()
              .reverse()
              .map((product, i) => (
                <ReverseEngineeredProductCard key={i} {...product} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="border border-dark-border bg-dark-card overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Bulk Analysis</CardTitle>
              <CardDescription>
                Upload competitor URLs to analyze in bulk
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-tech-blue/20 text-tech-blue">
              Premium Feature
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Enter URLs (one per line) or upload a CSV file"
              className="min-h-24"
            />
            <div className="absolute right-2 top-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Download className="h-4 w-4" />
                <span className="sr-only">Upload file</span>
              </Button>
            </div>
          </div>
          <Button className="w-full">Analyze Competitors</Button>
        </CardContent>
      </Card>
    </div>
  );
}
