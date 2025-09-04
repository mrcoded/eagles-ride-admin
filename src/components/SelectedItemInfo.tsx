import { PhoneCall, MailCheck } from "lucide-react";

import BookedRideInfo from "./bookings/BookedRideInfo";
import DriverInfoModal from "./modals/DriverInfoModal";

import { UserService } from "@/services/userService";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { selectedDriverInfo } from "../utils/selectedDriverInfo";

function SelectedItemInfo({ isDriver }: { isDriver?: boolean | undefined }) {
  // GET global context
  const { selectedUserId, selectedDriverData } = useGlobalContext();

  // GET driver info
  const driverInfo = selectedDriverInfo(selectedDriverData);

  // GET user data
  const { user } = UserService(selectedUserId);

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-1 w-full px-3 mb-1">
        <h3 className="text-slate-100 text-[9px] font-medium">
          {user?.fullname ?? selectedDriverData?.fullname} Information
        </h3>
        <div className="flex items-center gap-2 py-0.5 lg:py-1 px-2 bg-orange-500 dark:bg-orange-600 rounded-sm w-full">
          <MailCheck className="size-3 stroke-slate-100" />
          <p className="text-slate-200 text-[9px] font-medium tracking-wide">
            {user?.email ?? selectedDriverData?.email}
          </p>
        </div>
        <div className="flex items-center gap-2 py-0.5 lg:py-1 px-2 bg-orange-500 dark:bg-orange-600 rounded-sm w-full">
          <PhoneCall className="size-3 stroke-slate-100" />
          <p className="text-slate-200 text-[9px] font-medium tracking-wide">
            {user?.phone_number ?? selectedDriverData?.phone_number}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-1 w-full px-3">
        <h3 className="text-slate-100 text-[9px] font-medium">
          {isDriver
            ? "Driver's Uploaded Information"
            : "Booked Ride Information"}
        </h3>
        {isDriver ? (
          <DriverInfoModal driverInfo={driverInfo} />
        ) : (
          <BookedRideInfo />
        )}
      </div>
    </>
  );
}

export default SelectedItemInfo;
