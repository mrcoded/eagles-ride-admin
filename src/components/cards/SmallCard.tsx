import { useDashboardStats } from "@/hooks/useDashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function SmallCard() {
  const { smallCardData } = useDashboardStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 xl:gap-6">
      {smallCardData.map((item, idx) => (
        <Card key={idx} className="w-full dark:bg-slate-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{item.label}</CardTitle>
            <item.icon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl mb-1 font-bold text-muted-foreground">
              {item.value}
            </div>
            <p className="text-xs text-muted-foreground tracking-tight">
              {item.value} {item.label.toLowerCase()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default SmallCard;
