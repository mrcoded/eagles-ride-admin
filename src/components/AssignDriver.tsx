import { useMemo } from "react";
import { CheckCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { AssignDriverProps } from "@/types";
import UnAssignDriver from "./UnassignDriver";
import DriverAssignSearch from "./DriverAssignSearch";

import useAssignDriver from "@/hooks/useAssignDriver";
import { useGlobalContext } from "@/context/GlobalContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AssignDriver({
  drivers,
  selectedItemId,
  selectedRideData,
}: AssignDriverProps) {
  const { query } = useGlobalContext();

  //setIsOpen from global context
  const { setIsOpen, isLoading, setIsLoading } = useGlobalContext();

  //assign driver(s) to ride
  const assignDriverHandler = useAssignDriver({
    selectedItemId,
    selectedRideData,
    setIsLoading,
  });

  //Get only approved drivers
  const approvedDrivers = drivers?.filter(
    (data: { isDriverApproved?: boolean }) => data.isDriverApproved
  );

  // Filtered list based on search query
  const filteredDrivers = useMemo(() => {
    const querySearch = query.trim().toLowerCase();

    if (!querySearch) return approvedDrivers;

    const searchResult = approvedDrivers?.filter(
      (query: { fullname: string }) => {
        return query.fullname.toLowerCase().includes(querySearch);
      }
    );

    return searchResult;
  }, [query, approvedDrivers]);

  return (
    <div className="block py-0 w-fit">
      {selectedRideData?.status === "assigned" && (
        <p className="text-[6px] pr-2 font-bold pt-1.5 pl-1.5 bg-orange-500 text-slate-200 rounded-s-sm">
          Assigned to {selectedItemId}
        </p>
      )}

      <Dialog>
        <DialogTrigger
          onClick={() => {
            setIsOpen(true);
            setIsLoading(true);
          }}
          className={cn(
            `flex items-center gap-1 w-18 h-5 bg-slate-200 text-[7px] px-1.5 font-semibold text-primary rounded-sm hover:bg-slate-400`,
            isLoading && "pointer-events-none bg-slate-400 "
          )}
        >
          {selectedRideData?.status === "assigned"
            ? "Change Driver"
            : "Assign Driver"}
          {isLoading ? (
            <Loader2 className="size-2 animate-spin" />
          ) : (
            <CheckCheck className="size-2" />
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
              <UnAssignDriver
                isLoading={isLoading}
                selectedItemId={selectedItemId}
                selectedRideData={selectedRideData}
                setIsLoading={setIsLoading}
              />
            </DialogDescription>
          </DialogHeader>
          <div>
            <DriverAssignSearch
              filteredDrivers={filteredDrivers}
              selectedRideData={selectedRideData}
              setIsLoading={setIsLoading}
              assignDriverHandler={assignDriverHandler}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AssignDriver;
