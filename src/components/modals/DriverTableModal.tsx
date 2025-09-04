import { useGlobalContext } from "@/hooks/useGlobalContext";

import SelectedItemInfo from "../SelectedItemInfo";
import SelectedItemCard from "../SelectedItemCard";
import ApproveDriver from "../drivers/ApproveDriver";
import SelectedUserAvatar from "../SelectedUserAvatar";

const DriverTableModal = () => {
  const { selectedDriverData } = useGlobalContext();

  //check if item is a driver
  const isDriver =
    selectedDriverData && "isDriverApproved" in selectedDriverData!;

  return (
    <aside className="w-full md:w-[30%] flex flex-col gap-1">
      <div className="flex flex-col items-center justify-center py-3 flex-1 h-screen bg-orange-400 dark:bg-orange-800 rounded-t-2xl shadow space-y-3.5">
        {/* Selected User Avatar */}
        <SelectedUserAvatar data={selectedDriverData} />

        {/* Selected Item Card */}
        <SelectedItemCard selectedItemData={selectedDriverData} />

        {/* Approve Driver */}
        <ApproveDriver isDriver={isDriver} />

        {/* Selected Item Info */}
        <SelectedItemInfo isDriver={isDriver} />
      </div>
    </aside>
  );
};

export default DriverTableModal;
