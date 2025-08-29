import { cn } from "@/lib/utils";
import { CheckCheck, Loader2 } from "lucide-react";

import { ApproveDriverProps } from "@/types/drivers";

import useApproveDriver from "@/hooks/useApproveDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";

function ApproveDriver({
  selectedDriverData,
  selectedItemId,
  isDriver,
}: ApproveDriverProps) {
  const { selectedRideData, isLoading, setIsLoading } = useGlobalContext();

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
            `flex items-center gap-1 h-[22px] bg-slate-200 text-[9px] px-1.5 font-semibold text-primary rounded-sm hover:bg-slate-400`,
            isLoading && "pointer-events-none bg-slate-400 "
          )}
        >
          {selectedDriverData?.isDriverApproved
            ? "Disapprove Driver"
            : "Approve Driver"}
          {isLoading ? (
            <Loader2 className="size-3 animate-spin" />
          ) : (
            <CheckCheck className="size-3" />
          )}
        </button>
      )}
    </div>
  );
}

export default ApproveDriver;
