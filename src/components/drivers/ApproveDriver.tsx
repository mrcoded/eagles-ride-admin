import { cn } from "@/lib/utils";
import { CheckCheck, Loader2 } from "lucide-react";

import { ApproveDriverProps } from "@/types";

import useApproveDriver from "@/hooks/useAprroveDriver";
import { useGlobalContext } from "@/context/GlobalContext";

function ApproveDriver({
  isLoading,
  selectedDriverData,
  selectedItemId,
  isDriver,
}: ApproveDriverProps) {
  const { selectedRideData, setIsLoading } = useGlobalContext();

  //approve driver handler
  const approveDriverHandler = useApproveDriver({
    selectedItemId,
    selectedRideData,
    setIsLoading,
  });

  return (
    <div className="flex py-2">
      {isDriver && (
        <button
          onClick={approveDriverHandler}
          className={cn(
            `flex items-center gap-1 w-18 h-[22px] bg-slate-200 text-[7px] px-1.5 font-semibold text-primary rounded-sm hover:bg-slate-400`,
            isLoading && "pointer-events-none bg-slate-400 "
          )}
        >
          {selectedDriverData?.isDriverApproved
            ? "Disapprove Driver"
            : "Approve Driver"}
          {isLoading ? (
            <Loader2 className="size-2 animate-spin" />
          ) : (
            <CheckCheck className="size-2" />
          )}
        </button>
      )}
    </div>
  );
}

export default ApproveDriver;
