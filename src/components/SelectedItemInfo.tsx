import { Car, Download, LucideIcon, PhoneCall, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { selectedDriverInfo } from "./constants/selectedDriverInfo";

function SelectedItemInfo({
  selectedItemData,
  selectedRide,
  isDriver,
  childData,
}: any) {
  const driverInfo = selectedDriverInfo(selectedItemData);

  console.log(selectedRide);
  return (
    <div className="flex flex-col justify-start items-start gap-1 w-full px-3">
      <h3 className="text-slate-200 text-[8px] font-medium">
        {isDriver ? "Driver's Uploaded Information" : "Booked Ride Information"}
      </h3>
      {isDriver ? (
        <>
          {driverInfo.map(
            (item: { label: string; icon: LucideIcon; value: string }) => (
              <div
                key={item.label}
                className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full"
              >
                <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
                  <Car className="size-2.5 stroke-orange-300" />
                  {item.label}
                </p>
                <Link
                  target="_blank"
                  to={item.value}
                  className="text-slate-200 text-[6px] underline font-medium"
                >
                  View
                </Link>
              </div>
            )
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
            <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
              <User2 className="size-2.5 stroke-orange-300" />
              Child's Name -{" "}
            </p>
            <p className="text-slate-200 text-[8px] uppercase font-medium">
              {childData?.fullname}
            </p>
          </div>
          <div className="flex flex-col items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
            <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
              <PhoneCall className="size-2.5 stroke-orange-300" />
              Pick Up location -{" "}
            </p>
            <p className="text-slate-200 text-[8px]">
              {selectedItemData?.pick_up_location} by{" "}
              <span>{selectedItemData?.pick_up_time}</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
            <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
              <Download className="size-2.5 stroke-orange-300" />
              Drop Off location -{" "}
            </p>
            <p className="text-slate-200 text-[8px]">
              {selectedItemData?.drop_off_location} by{" "}
              <span>{selectedItemData?.drop_off_time}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SelectedItemInfo;
