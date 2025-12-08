import { Link } from "react-router-dom";
import { MailCheck, MapPin, PhoneCall, School2, User2 } from "lucide-react";

import { SelectedUserAvatarProps } from "@/types";

const SelectedUserAvatar = ({
  childData,
  userData,
  selectedDriverData,
}: SelectedUserAvatarProps) => {
  const data = { ...userData, ...selectedDriverData, ...childData };

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="border border-primary rounded-full size-14 xl:size-16 ">
        <img
          src={`https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80`}
          alt="profile picture"
          className="rounded-full size-14 xl:size-16 object-cover"
        />
      </div>
      <div className="flex flex-col">
        {childData && (
          <h3 className="text-base font-medium py-1 underline">
            Child's Details
          </h3>
        )}
        <p className="text-left text-base md:text-lg font-bold py-1 tracking-wide">
          {data?.fullname}
        </p>
        <p className="flex items-center gap-1 text-slate-400 text-sm text-left tracking-tight leading-4">
          {childData ? (
            <School2 className="size-3" />
          ) : (
            <MapPin className="size-3" />
          )}
          {data?.address ?? data?.residential_address} {data?.school}
        </p>
        <p className="flex items-center text-slate-400 text-sm gap-1">
          {childData ? (
            <User2 className="size-3" />
          ) : (
            <MailCheck className="size-3" />
          )}
          {childData ? `Age - ${data?.age} years` : data?.email}
        </p>
        <p className="flex items-center text-slate-400 text-sm gap-1 capitalize tracking-tight">
          {childData ? (
            <User2 className="size-3" />
          ) : (
            <PhoneCall className="size-3" />
          )}
          {childData ? (
            `Grade - ${data?.grade}`
          ) : (
            <Link to={`tel:${data?.phone_number}`}>{data?.phone_number}</Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default SelectedUserAvatar;
