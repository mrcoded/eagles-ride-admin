import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";

import useAssignDriver from "@/hooks/useAssignDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "../Loading";
import UnAssignDriver from "./UnassignDriver";
import DriverAssignSearch from "./DriverAssignSearch";

import { DriversDataProps } from "@/components/drivers/types";

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
          `flex items-center gap-1 w-18 h-5 bg-slate-200 text-[8px] px-1.5 font-semibold text-primary rounded-sm hover:bg-slate-400`,
          isLoading && "pointer-events-none bg-slate-400 "
        )}
      >
        {selectedRideData?.status === "assigned"
          ? "Change Driver"
          : "Assign Driver"}
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
