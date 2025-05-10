
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatsCardProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
};

export function StatsCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("border border-dark-border bg-dark-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-tech-blue">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          {trend && (
            <span
              className={cn(
                "mr-1 text-xs",
                trend.isPositive ? "text-success-green" : "text-destructive"
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {trend.value}%
            </span>
          )}
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
