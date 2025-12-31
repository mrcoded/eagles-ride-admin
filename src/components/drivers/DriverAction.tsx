import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useAssignDriver from "@/hooks/useAssignDriver";
import useUnAssignDriver from "@/hooks/useUnassignDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";

function DriverAction() {
  //get driver id from global context
  const { driverId, shift, isOpen, setIsOpen, setDriverId, selectedRideData } =
    useGlobalContext();

  //unassign driver to ride
  const { unassignDriverHandler } = useUnAssignDriver();

  //assign driver(s) handler
  const { assignDriverHandler } = useAssignDriver();

  //Assign driver
  const assignDriver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setDriverId("");
    assignDriverHandler(driverId, shift);
  };

  //UnAssign driver Function
  const unAssignDriver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setDriverId("");
    unassignDriverHandler(driverId);
  };

  //Get assigned driver by id
  const acceptedDrivers = selectedRideData?.drivers?.filter(
    (driver) => driver?.id
  );

  //Check if driver is selected
  const selectedDriver = acceptedDrivers?.find(
    (driver) =>
      driver?.id === driverId && driver?.assignmentStatus === "accepted"
  );

  return (
    <>
      {isOpen && (
        <Dialog>
          <DialogTrigger className="flex items-center bg-orange-200 text-xs px-1.5 py-1 font-semibold text-primary rounded-sm hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 whitespace-nowrap">
            {selectedDriver ? "Unassign" : "Assign"}
          </DialogTrigger>
          <DialogContent className="w-2/4 lg:w-1/4 dark:bg-dark-100">
            <DialogHeader>
              <DialogTitle className="dark:text-slate-200">
                Confirm {selectedDriver ? "Unassign" : "Assign"}
              </DialogTitle>
              <DialogDescription className="flex justify-between">
                <span>
                  Are you sure you want to{" "}
                  {selectedDriver ? "unassign" : "assign"} this driver?
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="inline-flex justify-between">
              <button
                onClick={selectedDriver ? unAssignDriver : assignDriver}
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

export default DriverAction;
