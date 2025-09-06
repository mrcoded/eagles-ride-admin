import { DriverService } from "@/services/driverService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { LoadingSpinner } from "../Loading";
import SelectedItemInfo from "../SelectedItemInfo";
import SelectedItemCard from "../SelectedItemCard";
import ApproveDriver from "../drivers/ApproveDriver";
import SelectedUserAvatar from "../SelectedUserAvatar";

const DriverTableModal = () => {
  const { driverId, selectedDriverData } = useGlobalContext();

  //GET driver
  const { driverFetching } = DriverService(driverId);

  //check if item is a driver
  const isDriver =
    selectedDriverData && "isDriverApproved" in selectedDriverData!;

  return (
    <aside className="w-full md:w-[30%] bg-orange-400 dark:bg-orange-800 rounded-t-2xl shadow">
      {driverFetching ? (
        <LoadingSpinner className="size-4" />
      ) : (
        <div className="flex flex-col items-center justify-center py-2.5 space-y-1.5 xl:space-y-3.5">
          {/* Selected User Avatar */}
          <SelectedUserAvatar selectedDriverData={selectedDriverData} />

          {/* Selected Item Card */}
          <SelectedItemCard selectedItemData={selectedDriverData} />

          {/* Approve Driver */}
          <ApproveDriver isDriver={isDriver} />

          {/* Selected Item Info */}
          <SelectedItemInfo isDriver={isDriver} />
        </div>
      )}
    </aside>
  );
};

export default DriverTableModal;
