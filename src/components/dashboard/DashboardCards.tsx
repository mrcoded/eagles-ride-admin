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
        <Card className="w-full dark:bg-dark-100" key={idx}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3 px-5">
            {item.data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col py-4 gap-4 items-center justify-center shadow-md dark:shadow-sm dark:shadow-slate-100 dark:text-slate-200 rounded-md"
              >
                <p className="text-xs text-center dark:text-slate-300">
                  {item.label}
                </p>
                <div className="text-xl font-bold dark:text-slate-500">
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
        <Card key={idx} className="w-full dark:bg-dark-100 ">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="dark:text-slate-200">{item.label}</CardTitle>
            <item.icon className="h-5 w-5 text-primary dark:text-slate-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl dark:text-slate-300 mb-1 font-bold">
              {item.value}
            </div>
            <p className="text-xs dark:text-slate-500 tracking-tight">
              {item.value} {item.label.toLowerCase()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
