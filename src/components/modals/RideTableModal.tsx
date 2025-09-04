import { UserService } from "@/services/userService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import AssignDriver from "../drivers/AssignDriver";
import SelectedItemInfo from "../SelectedItemInfo";
import SelectedItemCard from "../SelectedItemCard";
import SelectedUserAvatar from "../SelectedUserAvatar";

const RideTableModal = () => {
  const { selectedUserId, selectedRideData } = useGlobalContext();

  //Get selected user data
  const { user, isFetching } = UserService(selectedUserId);

  return (
    <aside className="w-full md:w-[30%] flex flex-col gap-1">
      <div className="flex flex-col items-center justify-center flex-1 h-screen bg-orange-400 py-2.5 rounded-t-2xl shadow space-y-1.5 xl:space-y-3.5 ">
        <SelectedUserAvatar data={user} />

        {/* Selected Item Card */}
        <SelectedItemCard selectedItemData={selectedRideData} />

        {/* Assign Driver */}
        <AssignDriver />

        <SelectedItemInfo />
      </div>
    </aside>
  );
};

export default RideTableModal;
