import { DriverService } from "@/services/driverService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "@/components/Loading";
import ApproveDriver from "@/components/drivers/ApproveDriver";
import SelectedUserAvatar from "@/components/SelectedUserAvatar";
import SelectedItemDetails from "@/components/SelectedItemDetails";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DriverTableModal = () => {
  const {
    driverId,
    isModalOpen,
    selectedDriverData: data,
    setIsModalOpen,
  } = useGlobalContext();

  //GET driver
  const { driverFetching } = DriverService(driverId);

  //check if item is a driver
  const isDriver = data && "isDriverApproved" in data!;

  return (
    <aside className="w-full rounded-2xl shadow">
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent
          className="container dark:bg-gray-900"
          aria-describedby="driver-modal-content"
        >
          <DialogHeader>
            <DialogTitle className="text-slate-800 dark:text-slate-50 text-base text-left font-medium">
              Driver's Information
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          {driverFetching ? (
            <LoadingSpinner className="size-8" />
          ) : (
            <div
              aria-describedby="driver-modal-description"
              className="flex flex-col items-center justify-center space-y-5"
            >
              <div className="flex flex-col items-center justify-center gap-4 w-full">
                {/* Selected User Info */}
                <SelectedUserAvatar selectedDriverData={data} />

                {/* Approve Driver */}
                <ApproveDriver isDriver={isDriver} />
              </div>

              {/* Selected Item Info */}
              <SelectedItemDetails isDriver={isDriver} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </aside>
  );
};

export default DriverTableModal;
