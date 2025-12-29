import { UserService } from "@/services/userService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "@/components/Loading";
import SelectedItemCard from "@/components/SelectedItemCard";
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
          className="max-w-full sm:max-w-3xl dark:bg-gray-900"
          aria-describedby={"rides-modal-content"}
        >
          <DialogHeader>
            <DialogTitle className="text-slate-800 dark:text-slate-50 text-base text-left font-medium">
              Ride's Information
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {userFetching ? (
            <LoadingSpinner className="size-8" />
          ) : (
            <div
              aria-describedby="rides-modal-description"
              className="flex flex-col items-center justify-center space-y-5"
            >
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:space-x-14">
                {/* Selected User Info */}
                <SelectedUserAvatar userData={user} />

                {/* Selected Child Info*/}
                <SelectedUserAvatar childData={selectedRideData?.child} />
              </div>
              {/* Selected Item Card */}
              <SelectedItemCard />

              {/* Selected Item Info */}
              <SelectedItemDetails />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </aside>
  );
};

export default RideTableModal;
