import { useDashboardStats } from "@/hooks/useDashboardStats";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function LargeCard() {
  const { largeCardData } = useDashboardStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 xl:gap-6">
      {largeCardData.map((item, idx) => (
        <Card className="w-full dark:bg-slate-800" key={idx}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3">
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

export default LargeCard;
