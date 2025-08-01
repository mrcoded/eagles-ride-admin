import { UserProps } from "@/types";
import { MapPin } from "lucide-react";

const SelectedUserAvatar = ({ data }: { data: UserProps | undefined }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border border-primary rounded-full size-14 xl:size-16 ">
        <img
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt="user pic"
          className="rounded-full size-14 xl:size-16 object-cover"
        />
      </div>
      <p className="text-slate-50 text-sm py-0.5 tracking-wide">
        {data?.fullname}
      </p>
      <p className="flex items-center text-slate-200 text-[10px] gap-0.5">
        <MapPin className="size-2.5" />
        {data?.address ?? data?.residential_address}
      </p>
    </div>
  );
};

export default SelectedUserAvatar;
