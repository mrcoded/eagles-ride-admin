import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AssignDriverProps } from "@/types";
import useUnAssignDriver from "@/hooks/useUnassignDriver";
import { useGlobalContext } from "@/context/GlobalContext";

function UnAssignDriver({
  selectedItemId,
  selectedRideData,
}: AssignDriverProps) {
  //get driver id from global context

  const { driverId, isOpen, setIsOpen, setIsLoading } = useGlobalContext();

  //unassign driver to ride
  const unAssignDriverHandler = useUnAssignDriver({
    selectedItemId,
    selectedRideData,
    setIsLoading,
  });

  return (
    <>
      {isOpen && (
        <Dialog>
          <DialogTrigger className="text-red-500 underline font-medium">
            Unassign
          </DialogTrigger>
          <DialogContent className="w-1/4">
            <DialogHeader>
              <DialogTitle className="dark:text-slate-200">
                Confirm Unassign
              </DialogTitle>
              <DialogDescription className="flex justify-between">
                <span>Are you sure you want to unassign driver?</span>
              </DialogDescription>
            </DialogHeader>
            <div className="inline-flex justify-between">
              <button
                onClick={(e) => {
                  setIsOpen(false);
                  unAssignDriverHandler?.(e, driverId);
                }}
                className="bg-green-500 text-slate-200 rounded-sm py-1.5 px-2 text-sm"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-slate-200 rounded-sm py-1.5 px-2 text-sm"
              >
                Cancel
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default UnAssignDriver;
