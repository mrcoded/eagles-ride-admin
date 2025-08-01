import { SelectedItemInfoProps } from "@/types";
import { Download, PhoneCall, User2 } from "lucide-react";

function BookedRideInfo({
  selectedRide,
  childData,
  childError,
}: SelectedItemInfoProps) {
  return (
    <>
      <div className="flex items-center gap-2 py-1 px-2 bg-orange-500 dark:bg-orange-600 rounded-sm w-full">
        <p className="flex gap-1.5 items-center text-slate-100 text-[9px] font-medium">
          <User2 className="size-3 stroke-slate-100" />
          Child's Name -{" "}
        </p>
        <p className="text-slate-200 text-[10px] capitalize font-medium tracking-wide">
          {childData?.fullname}
          {childError && "No child found!"}
        </p>
      </div>
      <div className="flex flex-col items-center h-14 gap-0.5 py-0.5 px-2 bg-orange-500 dark:bg-orange-600 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-100 text-[8.5px] lg:text-[10px] font-medium">
          <PhoneCall className="size-2.5 stroke-slate-100" />
          Pick Up Location -{" "}
        </p>
        <p className="text-slate-200 text-[8.5px] lg:text-[9px] tracking-tight">
          {selectedRide?.pick_up_location} by{" "}
          <span>{selectedRide?.pick_up_time}</span>
        </p>
      </div>
      <div className="flex flex-col items-center h-14 gap-0.5 py-0.5 px-2 bg-orange-500 dark:bg-orange-600 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-100 text-[8.5px] lg:text-[10px] font-medium">
          <Download className="size-2.5 stroke-slate-100" />
          Drop Off Location -{" "}
        </p>
        <p className="text-slate-200 text-[8.5px] lg:text-[9px] tracking-tight">
          {selectedRide?.drop_off_location} by{" "}
          <span>{selectedRide?.drop_off_time}</span>
        </p>
      </div>
    </>
  );
}

export default BookedRideInfo;
