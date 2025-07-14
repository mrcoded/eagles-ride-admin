import {
  Download,
  LucideIcon,
  PhoneCall,
  MailCheck,
  User2,
} from "lucide-react";

import { SelectedItemInfoProps } from "@/types";

import DriverInfo from "./modals/DriverInfoModal";
import { selectedDriverInfo } from "../constants/selectedDriverInfo";

function SelectedItemInfo({
  user,
  isDriver,
  childData,
  selectedRide,
  selectedDriver,
}: SelectedItemInfoProps) {
  const driverInfo = selectedDriverInfo(selectedDriver);

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-1 w-full px-3 mb-1">
        <h3 className="text-slate-100 text-[9px] font-medium">
          {user?.fullname ?? selectedDriver?.fullname} Information
        </h3>
        <div className="flex items-center gap-2 py-1 px-2 bg-orange-500 rounded-sm w-full">
          <MailCheck className="size-3 stroke-slate-100" />
          <p className="text-slate-200 text-[9px] font-medium tracking-wide">
            {user?.email ?? selectedDriver?.email}
          </p>
        </div>
        <div className="flex items-center gap-2 py-1 px-2 bg-orange-500 rounded-sm w-full">
          <PhoneCall className="size-3 stroke-slate-100" />
          <p className="text-slate-200 text-[9px] font-medium tracking-wide">
            {user?.phone_number ?? selectedDriver?.phone_number}
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
          <>
            {driverInfo.map(
              (item: { label: string; icon: LucideIcon; value: string }) => (
                <DriverInfo key={item.label} item={item} />
              )
            )}
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 py-1 px-2 bg-orange-500 rounded-sm w-full">
              <p className="flex gap-1.5 items-center text-slate-100 text-[9px] font-medium">
                <User2 className="size-3 stroke-slate-100" />
                Child's Name -{" "}
              </p>
              <p className="text-slate-200 text-[10px] capitalize font-medium tracking-wide">
                {childData?.fullname}
              </p>
            </div>
            <div className="flex flex-col items-center h-14 gap-0.5 py-0.5 px-2 bg-orange-500 rounded-sm w-full">
              <p className="flex gap-1 items-center text-slate-100 text-[10px] font-medium">
                <PhoneCall className="size-2.5 stroke-slate-100" />
                Pick Up Location -{" "}
              </p>
              <p className="text-slate-200 text-[9px]">
                {selectedRide?.pick_up_location} by{" "}
                <span>{selectedRide?.pick_up_time}</span>
              </p>
            </div>
            <div className="flex flex-col items-center h-14 gap-0.5 py-0.5 px-2 bg-orange-500 rounded-sm w-full">
              <p className="flex gap-1 items-center text-slate-100 text-[10px] font-medium">
                <Download className="size-2.5 stroke-slate-100" />
                Drop Off Location -{" "}
              </p>
              <p className="text-slate-200 text-[9px]">
                {selectedRide?.drop_off_location} by{" "}
                <span>{selectedRide?.drop_off_time}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SelectedItemInfo;
