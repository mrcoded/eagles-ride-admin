import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";

import useAssignDriver from "@/hooks/useAssignDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "@/components/Loading";
import UnAssignDriver from "@/components/drivers/UnassignDriver";
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
          `flex items-center gap-1 h-5 bg-orange-200 text-xs p-1.5 font-semibold text-primary rounded-sm hover:bg-slate-400 whitespace-nowrap`,
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="dark:text-slate-200">
            Select any available driver
          </DialogTitle>
          <DialogDescription className="flex justify-between">
            <span>This is a list of only available drivers.</span>
            {/* UnAssign Driver */}
            <UnAssignDriver />
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
