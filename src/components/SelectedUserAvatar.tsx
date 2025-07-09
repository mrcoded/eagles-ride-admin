import { UserProps } from "@/types";
import { MapPin } from "lucide-react";

const SelectedUserAvatar = ({ data }: { data: UserProps | undefined }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border border-primary rounded-full w-8 h-8 ">
        <img
          src={data?.image}
          alt="user pic"
          className="rounded-full w-8 h-8"
        />
      </div>
      <p className="text-slate-200 text-xs py-1">{data?.fullname}</p>
      <p className="flex items-center text-slate-200 text-[7px] gap-0.5">
        <MapPin className="size-2" />
        {data?.address}
      </p>
    </div>
  );
};

export default SelectedUserAvatar;
