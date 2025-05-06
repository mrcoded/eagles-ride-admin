import { DriverInfoProps } from "@/types";
import { Car, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function DriverInfo({ selectedDriver }: DriverInfoProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-1 w-full px-3">
      <h3 className="text-slate-200 text-[8px] font-medium">
        Driver's Uploaded Information
      </h3>
      <div className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
          <Car className="size-2.5 stroke-orange-300" />
          Car Insurance
        </p>
        <Link
          target="_blank"
          to={selectedDriver?.car_insurance}
          className="text-slate-200 text-[6px] underline font-medium"
        >
          View
        </Link>
      </div>
      <div className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
          <PhoneCall className="size-2.5 stroke-orange-300" />
          Background Check record
        </p>
        <Link
          target="_blank"
          to={selectedDriver?.background_check}
          className="text-slate-200 text-[6px] underline font-medium"
        >
          View
        </Link>
      </div>
      <div className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
          <PhoneCall className="size-2.5 stroke-orange-300" />
          Criminal Record Check
        </p>
        <Link
          target="_blank"
          to={selectedDriver?.criminal_check_rec}
          className="text-slate-200 text-[6px] underline font-medium"
        >
          View
        </Link>
      </div>
      <div className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
          <PhoneCall className="size-2.5 stroke-orange-300" />
          Driver Abstract
        </p>
        <Link
          target="_blank"
          to={selectedDriver?.driver_abstract}
          className="text-slate-200 text-[6px] underline font-medium"
        >
          View
        </Link>
      </div>
      <div className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full">
        <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
          <PhoneCall className="size-2.5 stroke-orange-300" />
          Child Intervention Record
        </p>
        <Link
          target="_blank"
          to={selectedDriver?.child_intervention_rec}
          className="text-slate-200 text-[6px] underline font-medium"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default DriverInfo;
