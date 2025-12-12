import { Car, CarFront } from "lucide-react";

import AssignDriver from "@/components/drivers/AssignDriver";

import { SELECTED_RIDE } from "@/constants/selectedRide";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { SelectedBookedRideProps } from "@/types/bookings";

function BookedRideInfo() {
  const { selectedRideData } = useGlobalContext();

  //Get selected ride data
  const selectedItemData = selectedRideData as Partial<SelectedBookedRideProps>;

  //Get pickup days
  const days = selectedItemData?.pickup_days?.map((day) => day).join(", ");

  //Get  assigned driver by id
  const acceptedDrivers = selectedRideData?.drivers?.filter(
    (driver) => driver?.id
  );

  //Get assigned morning driver
  const acceptedMorningDriver = acceptedDrivers?.find(
    (driver) =>
      driver?.assignmentStatus === "accepted" && driver?.shift === "morning"
  )?.fullname;

  //Get assigned afternoon driver
  const acceptedAfternoonDriver = acceptedDrivers?.find(
    (driver) =>
      driver?.assignmentStatus === "accepted" && driver?.shift === "afternoon"
  )?.fullname;

  //Get assigned both shift driver
  const acceptedBothShiftDriver = acceptedDrivers?.find(
    (driver) =>
      driver?.assignmentStatus === "accepted" && driver?.shift === null
  )?.fullname;

  return (
    <section className="space-y-4 w-full">
      <div className="flex flex-col text-sm">
        <div className="capitalize">
          Subscription Start Date -{" "}
          <span className="font-medium">{selectedItemData?.start_date}</span>
        </div>
        <div className="capitalize">
          Pick Up days - <span className="font-medium">{days}</span>
        </div>
      </div>

      {SELECTED_RIDE(
        selectedItemData,
        acceptedMorningDriver,
        acceptedAfternoonDriver
      ).map((ride, index) => (
        <div key={index} className="grid grid-cols-2 w-full md:gap-4">
          <div className="flex flex-col items-start dark:bg-orange-600 w-full">
            <p className="flex items-center gap-1 text-slate-500 text-sm font-medium">
              <CarFront className="size-3.5 stroke-slate-400" />
              {ride?.label_from} Location - {ride?.location_from}
            </p>
            <p className="text-slate-500 text-xs">{ride?.address_from}</p>
            <p className="text-slate-500 text-xs mb-1">
              time - <span>{ride?.time}</span>
            </p>
            <span className="flex items-center justify-between w-full">
              <p className="text-slate-800 text-sm">
                Assigned to{" "}
                {acceptedBothShiftDriver ? (
                  <span className="font-medium">{acceptedBothShiftDriver}</span>
                ) : ride?.driver_from ? (
                  <span className="font-medium">{ride?.driver_from}</span>
                ) : ride?.driver_to ? (
                  <span className="font-medium">{ride?.driver_to}</span>
                ) : (
                  "no driver yet"
                )}
              </p>

              {/* Assign driver */}
              <AssignDriver />
            </span>
          </div>

          <div className="flex flex-col items-start dark:bg-orange-600 w-full">
            <p className="flex items-center gap-1 text-slate-500 text-sm font-medium">
              <Car className="size-3.5 stroke-slate-400" />
              {ride?.label_to} Location - {ride?.location_to}
            </p>
            <p className="text-slate-500 text-xs tracking-tight">
              {ride?.address_to}
            </p>
            <p className="text-slate-500 text-xs">
              time - <span>{ride?.time}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BookedRideInfo;
