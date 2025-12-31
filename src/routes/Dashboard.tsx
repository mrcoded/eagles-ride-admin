import { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { LargeCard, SmallCard } from "@/components/dashboard/DashboardCards";

function Dashboard() {
  const { setToolbarTitle } = useGlobalContext();

  // Set toolbar once
  useEffect(() => {
    setToolbarTitle("");
  }, []);

  return (
    <div className="flex flex-col w-full space-y-8">
      <div className="flex justify-between sm:flex-row flex-col gap-5 sm:items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-200">
            Welcome back,
            <span className="text-primary"> Admin !</span>
          </h1>
          <p className="text-sm text-slate-700 dark:text-slate-100 mt-1">
            Here is your Dashboard activity
          </p>
        </div>
      </div>

      {/* small cards */}
      <SmallCard />

      {/* large cards */}
      <LargeCard />
    </div>
  );
}

export default Dashboard;
