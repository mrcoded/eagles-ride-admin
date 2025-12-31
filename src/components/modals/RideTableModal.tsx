import { AlertCircle } from "lucide-react";

import { UserService } from "@/services/userService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "@/components/Loading";
import SelectedUserAvatar from "@/components/SelectedUserAvatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SelectedItemDetails from "@/components/SelectedItemDetails";

const RideTableModal = () => {
  const { isModalOpen, setIsModalOpen, selectedUserId, selectedRideData } =
    useGlobalContext();

  //Get selected user data
  const { user, userFetching } = UserService(selectedUserId);

  return (
    <aside className="w-full rounded-2xl shadow">
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent
          className="max-w-full sm:max-w-3xl dark:bg-dark-100"
          aria-describedby={"rides-modal-content"}
        >
          <DialogHeader>
            <DialogTitle className="text-slate-800 dark:text-slate-200 text-base text-left font-medium">
              Ride's Information
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {userFetching ? (
            <LoadingSpinner className="size-8" />
          ) : user ? (
            <div
              aria-describedby="rides-modal-description"
              className="flex flex-col items-center justify-center space-y-5"
            >
              <div className="grid grid-cols-2">
                {/* Selected User Info */}
                <SelectedUserAvatar userData={user} />

                {/* Selected Child Info*/}
                <SelectedUserAvatar childData={selectedRideData?.child} />
              </div>

              {/* Selected Item Info */}
              <SelectedItemDetails />
            </div>
          ) : (
            <p className="text-center text-base font-medium dark:text-primary">
              <AlertCircle className="size-4 inline mr-1" /> Error getting
              user's data!
            </p>
          )}
        </DialogContent>
      </Dialog>
    </aside>
  );
};

export default RideTableModal;
