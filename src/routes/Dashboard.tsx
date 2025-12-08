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

      {/* small cards */}
      <SmallCard />

      {/* large cards */}
      <LargeCard />
    </div>
  );
}

export default Dashboard;
