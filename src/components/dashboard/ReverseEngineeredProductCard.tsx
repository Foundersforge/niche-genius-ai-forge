
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ReverseEngineeredProductCardProps = {
  title: string;
  platform: string;
  revenue: string;
  sales: number;
  keywords: string[];
  imageUrl: string;
};

export function ReverseEngineeredProductCard({
  title,
  platform,
  revenue,
  sales,
  keywords,
  imageUrl,
}: ReverseEngineeredProductCardProps) {
  return (
    <Card className="overflow-hidden border border-dark-border bg-dark-card transition-all duration-300 hover:shadow-md hover:shadow-tech-blue/10">
      <div className="relative h-48 w-full bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="shimmer-bg h-full w-full"></div>
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <Badge variant="secondary" className="absolute top-2 right-2 bg-dark-bg/80 backdrop-blur-sm">
            {platform}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg truncate" title={title}>
          {title}
        </CardTitle>
        <div className="flex justify-between">
          <CardDescription className="text-text-secondary">
            {sales.toLocaleString()} sales
          </CardDescription>
          <CardDescription className="font-medium text-success-green">
            {revenue}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Top Keywords</p>
          <div className="flex flex-wrap gap-1">
            {keywords.map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs bg-secondary/30">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            Analyze
          </Button>
          <Button size="sm" className="flex-1 bg-tech-blue hover:bg-tech-blue/90">
            Clone
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
