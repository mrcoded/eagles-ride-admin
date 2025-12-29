import { useDashboardStats } from "@/hooks/useDashboardStats";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LargeCard() {
  const { largeCardData } = useDashboardStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6">
      {largeCardData.map((item, idx) => (
        <Card className="w-full dark:bg-slate-900" key={idx}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3 px-5">
            {item.data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col py-4 gap-4 items-center justify-center shadow-md dark:shadow-sm dark:shadow-slate-100 rounded-md"
              >
                <p className="text-xs text-muted-foreground text-center">
                  {item.label}
                </p>
                <div className="text-xl font-bold text-muted-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function SmallCard() {
  const { smallCardData } = useDashboardStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 xl:gap-6">
      {smallCardData.map((item, idx) => (
        <Card key={idx} className="w-full dark:bg-slate-900">
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
