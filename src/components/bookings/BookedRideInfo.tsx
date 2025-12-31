import { Car, CarFront, Clock } from "lucide-react";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import AssignDriver from "@/components/drivers/AssignDriver";

import { getRideShifts } from "@/utils/selectedRide";
import { SelectedBookedRideProps } from "@/types/bookings";

function BookedRideInfo() {
  const { selectedRideData } = useGlobalContext();
  const rideData =
    selectedRideData as unknown as Partial<SelectedBookedRideProps>;

  // Get ride shifts
  const shifts = getRideShifts(rideData);
  //  pickup days
  const pickupDays = rideData?.pickup_days?.join(", ");

  return (
    <section className="space-y-2 w-full">
      {/* Header Info */}
      <div className="flex flex-col text-sm space-y-2">
        <div className="flex justify-between">
          <div className="capitalize dark:text-slate-200">
            Subscription Start Date -{" "}
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {rideData?.start_date}
            </span>
          </div>
          <div className="capitalize dark:text-slate-200">
            Subscription Duration -{" "}
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {rideData?.schedule_type}
            </span>
          </div>
        </div>
        <div className="capitalize dark:text-slate-200">
          Pick Up days -{" "}
          <span className="font-medium text-slate-900 dark:text-slate-200">
            {pickupDays}
          </span>
        </div>
      </div>

      {/* Shifts Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {shifts.map((shift) => (
          <div
            key={shift.id}
            className="flex flex-col gap-4 p-4 border rounded-lg bg-white shadow-sm dark:border-slate-800 dark:bg-dark-100"
          >
            {/* Ride Shift Header */}
            <div className="border-b dark:border-b-slate-800 pb-2 mb-2">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                {shift.label}
              </h3>
              <p className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <Clock className="size-3" /> {shift.time}
              </p>
            </div>

            {/* Pick Up Info */}
            <div className="flex flex-col items-start">
              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-500 text-sm font-medium">
                <CarFront className="size-4 text-slate-400" />
                Pick Up: {shift.pickup.location}
              </p>
              <p className="text-slate-500 text-xs pl-6 mt-0.5 dark:text-slate-400">
                {shift.pickup.address}
              </p>
            </div>

            {/* Drop Off Info */}
            <div className="flex flex-col items-start">
              <p className="flex items-center gap-2 capitalize text-slate-600 text-sm font-medium dark:text-slate-500">
                <Car className="size-4 text-slate-400" />
                Drop Off: {shift.dropoff.location}
              </p>
              <p className="text-slate-500 text-xs pl-6 mt-0.5 dark:text-slate-400">
                {shift.dropoff.address}
              </p>
            </div>

            {/* Assigned Driver */}
            <div className="mt-auto pt-4 border-t dark:border-t-slate-800 flex items-center justify-between">
              <div className="text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Driver:{" "}
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-400">
                  {shift.driverName || "Not assigned"}
                </span>
              </div>
              <AssignDriver />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookedRideInfo;
