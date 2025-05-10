
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Wand } from "lucide-react";

type TrendingNicheCardProps = {
  title: string;
  category: string;
  searchVolume: number;
  competition: number;
  pricing: {
    low: number;
    high: number;
    average: number;
  };
  growth: number;
  tags: string[];
};

export function TrendingNicheCard({
  title,
  category,
  searchVolume,
  competition,
  pricing,
  growth,
  tags,
}: TrendingNicheCardProps) {
  const competitionColor = 
    competition < 30 ? "bg-success-green" : 
    competition < 60 ? "bg-alert-orange" : 
    "bg-destructive";

  const growthColor = growth > 20 ? "text-success-green" : "text-alert-orange";

  return (
    <Card className="overflow-hidden border border-dark-border bg-dark-card transition-all duration-300 hover:shadow-md hover:shadow-tech-blue/10">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">
              {category}
            </Badge>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-text-secondary">
              Monthly Search Volume: {searchVolume.toLocaleString()}
            </CardDescription>
          </div>
          <Badge variant="secondary" className={`${growthColor} bg-transparent`}>
            +{growth}% Growth
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Competition Level</span>
            <span className="font-medium">{competition}%</span>
          </div>
          <Progress value={100 - competition} className="h-2">
            <div 
              className={`h-full ${competitionColor}`} 
              style={{ width: `${100 - competition}%` }}
            />
          </Progress>
        </div>
        
        <div className="space-y-1">
          <span className="text-sm">Price Range</span>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">${pricing.low}</span>
            <span className="text-sm font-medium">${pricing.average} avg</span>
            <span className="text-xs text-muted-foreground">${pricing.high}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-secondary/30">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between pt-2">
          <Button size="sm" variant="outline">
            Research
          </Button>
          <Button size="sm" className="bg-tech-blue hover:bg-tech-blue/90">
            <Wand className="mr-2 h-4 w-4" />
            Generate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
