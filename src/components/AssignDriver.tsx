import { useMemo, useState } from "react";
import { CheckCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AssignDriverProps } from "@/types";
import DriverAssignSearch from "./DriverAssignSearch";

function AssignDriver({
  drivers,
  isLoading,
  selectedItemData,
  assignDriverHandler,
}: AssignDriverProps) {
  const [query, setQuery] = useState("");

  //Get only approved drivers
  const approvedDrivers = drivers?.filter(
    (data: { isDriverApproved?: boolean }) => data.isDriverApproved
  );

  // Filtered list based on search query
  const filteredDrivers = useMemo(() => {
    const querySearch = query.trim().toLowerCase();

    if (!querySearch) return approvedDrivers;

    const searchResult = approvedDrivers?.filter((query) => {
      return query.fullname.toLowerCase().includes(querySearch);
    });

    return searchResult;
  }, [query, approvedDrivers]);

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          `flex items-center gap-1 w-18 h-5 bg-slate-200 text-[7px] px-1.5 font-semibold text-primary rounded-sm hover:bg-slate-400`,
          isLoading && "pointer-events-none bg-slate-400 "
        )}
      >
        {selectedItemData?.status === "assigned"
          ? "Change Driver"
          : "Assign Driver"}{" "}
        {isLoading ? (
          <Loader2 className="size-2 animate-spin" />
        ) : (
          <CheckCheck className="size-2" />
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select any available driver</DialogTitle>
          <DialogDescription className="flex justify-between">
            <span>This is a list of only available drivers.</span>
            <button
              onClick={() => {}}
              className="text-red-500 underline font-medium"
            >
              Unassign
            </button>
          </DialogDescription>
        </DialogHeader>
        <div>
          <DriverAssignSearch
            query={query}
            setQuery={setQuery}
            filteredDrivers={filteredDrivers}
            selectedItemData={selectedItemData}
            assignDriverHandler={assignDriverHandler}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AssignDriver;
