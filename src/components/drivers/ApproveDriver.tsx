import { CheckCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import useApproveDriver from "@/hooks/useApproveDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";

function ApproveDriver({ isDriver }: { isDriver: boolean | undefined }) {
  const { selectedDriverData } = useGlobalContext();

  //approve driver handler
  const { isLoading, approveDriverHandler } = useApproveDriver();

  return (
    <div className="flex items-center justify-center">
      {isDriver && (
        <button
          onClick={approveDriverHandler}
          className={cn(
            `flex items-center justify-center gap-1 bg-primary text-xs p-2 font-medium text-slate-200 rounded-sm hover:bg-slate-400 whitespace-nowrap`,
            isLoading && "pointer-events-none bg-slate-400 "
          )}
        >
          {selectedDriverData?.isDriverApproved
            ? "Disapprove Driver"
            : "Approve Driver"}
          {isLoading ? (
            <Loader2 className="size-3 animate-spin" />
          ) : (
            <CheckCheck className="size-3.5" />
          )}
        </button>
      )}
    </div>
  );
}

export default ApproveDriver;
