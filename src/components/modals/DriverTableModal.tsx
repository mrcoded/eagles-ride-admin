import { BookingsModalProps } from "@/types";
import { useGlobalContext } from "@/context/GlobalContext";

import SelectedItemInfo from "../SelectedItemInfo";
import SelectedItemCard from "../SelectedItemCard";
import ApproveDriver from "../drivers/ApproveDriver";
import SelectedUserAvatar from "../SelectedUserAvatar";

const DriverTableModal = ({ drivers }: BookingsModalProps) => {
  const { selectedItemId } = useGlobalContext();

  //Get selected driver data
  const selectedDriverData = drivers?.filter(
    (data: { _id: string }) => data._id === selectedItemId
  )[0];

  //check if item is a driver
  const isDriver =
    selectedDriverData && "isDriverApproved" in selectedDriverData!;

  return (
    <div className="flex flex-col items-center justify-center py-3 flex-1 h-screen bg-orange-400 dark:bg-orange-800 rounded-t-2xl shadow space-y-3.5">
      <SelectedUserAvatar data={selectedDriverData} />

      {/* Selected Item Card */}
      <SelectedItemCard selectedItemData={selectedDriverData} />

      <ApproveDriver
        isDriver={isDriver}
        selectedItemId={selectedItemId}
        selectedDriverData={selectedDriverData}
      />

      <SelectedItemInfo
        isDriver={isDriver}
        selectedDriver={selectedDriverData}
      />
    </div>
  );
};

export default DriverTableModal;
