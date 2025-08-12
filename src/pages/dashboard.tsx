import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDashboardStats } from "@/hooks/useDashboardStats";

function Dashboard() {
  const { largeCardData, smallCardData } = useDashboardStats();

  return (
    <div className="flex flex-col w-full space-y-8">
      <div className="flex justify-between sm:flex-row flex-col gap-5 sm:items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back,
            <span className="text-primary"> Admin !</span>
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Here is your Dashboard activity
          </p>
        </div>

        <div className="flex gap-2 flex-col sm:flex-row sm:items-center w-fit">
          <button className="bg-primary text-slate-50 rounded-sm py-1.5 px-2 text-sm">
            Create Ride
          </button>
          <button className="bg-slate-600 text-slate-50 font-medium rounded-sm py-1.5 px-2 text-sm">
            Create Driver
          </button>
        </div>
      </div>

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
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <div className="text-xl font-bold text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
