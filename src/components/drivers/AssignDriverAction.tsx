import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";

import useAssignDriver from "@/hooks/useAssignDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "@/components/Loading";
import DriverAction from "@/components/drivers/DriverAction";
import DriverAssignSearch from "@/components/drivers/DriverAssignSearch";

import { DriversDataProps } from "@/types/drivers";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AssignDriverAction({
  drivers,
}: {
  drivers: DriversDataProps[] | undefined;
}) {
  const { setIsOpen, selectedRideData } = useGlobalContext();

  //assign driver(s) to ride
  const { isLoading } = useAssignDriver();

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => {
          setIsOpen(true);
        }}
        className={cn(
          `flex items-center gap-1 bg-orange-200 text-xs px-1.5 py-1 font-semibold text-primary rounded-sm hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 whitespace-nowrap`,
          isLoading && "pointer-events-none bg-slate-400 "
        )}
      >
        {selectedRideData?.status === "assigned" ? "Change" : "Assign"}
        {isLoading ? (
          <LoadingSpinner className="size-4" />
        ) : (
          <CheckCheck className="size-3" />
        )}
      </DialogTrigger>
      <DialogContent className="dark:bg-dark-100">
        <DialogHeader>
          <DialogTitle className="dark:text-slate-200">
            Select any available driver
          </DialogTitle>
          <DialogDescription className="flex justify-between">
            <span>This is a list of only available drivers.</span>
            {/* Assign / UnAssign Driver */}
            <DriverAction />
          </DialogDescription>
        </DialogHeader>
        <div>
          <DriverAssignSearch approvedDrivers={drivers} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AssignDriverAction;
