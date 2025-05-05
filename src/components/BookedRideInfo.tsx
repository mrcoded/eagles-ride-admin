import { IdCard, MailCheck, PhoneCall } from "lucide-react";

function BookedRideInfo({
  selectedRide,
  user,
}: {
  selectedRide: any;
  user: any;
}) {
  return (
    <div className="flex flex-col justify-start items-start gap-1 w-full px-4">
      <h3 className="text-slate-200 text-[8px]">Booked Ride Information</h3>
      <div className="flex flex-col items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[9px] font-medium">
          <MailCheck className="size-2.5 stroke-orange-300" />
          Child's Name -{" "}
        </p>
        <p className="text-slate-200 text-[9px] font-medium">{user?.email}</p>
      </div>
      <div className="flex flex-col items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[9px] font-medium">
          <PhoneCall className="size-2.5 stroke-orange-300" />
          Pick Up location -{" "}
        </p>
        <p className="text-slate-200 text-[9px] font-medium">
          {selectedRide?.pick_up_location} by{" "}
          <span>{selectedRide?.pick_up_time}</span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[9px] font-medium">
          <PhoneCall className="size-2.5 stroke-orange-300" />
          Drop Off location -{" "}
        </p>
        <p className="text-slate-200 text-[9px] font-medium">
          {selectedRide?.drop_off_location} by{" "}
          <span>{selectedRide?.drop_off_time}</span>
        </p>
      </div>
      <div className="flex items-center gap-1 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <IdCard className="size-2.5 stroke-orange-300" />
        <p className="text-slate-200 text-[9px] font-medium">Class -</p>
        <p className="text-slate-200 text-[9px] font-medium">123456789 </p>
      </div>
    </div>
  );
}

export default BookedRideInfo;
