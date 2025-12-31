import { useEffect, useMemo } from "react";

import { useGlobalContext } from "@/hooks/useGlobalContext";

import filteredItemFn from "@/utils/filteredItemFn";
import { BookingService } from "@/services/bookingService";

import { LoadingSpinner } from "@/components/Loading";
import DataTable from "@/components/tables/DataTable";
import RideTableModal from "@/components/modals/RideTableModal";

function RideBookings() {
  const {
    query,
    isModalOpen,
    selectedItemId,
    setToolbarTitle,
    setSelectedRideData,
  } = useGlobalContext();

  //Get all rides
  const { rides, ridesFetching, ridesPending, ridesError } = BookingService();

  // Filtered rides based on search query
  const filteredBookings = useMemo(() => {
    return filteredItemFn(query, rides);
  }, [query, rides]);

  //Get selected ride data
  const selectedRideData = filteredBookings?.find(
    (booking) => booking._id === selectedItemId
  );

  // Set toolbar once
  useEffect(() => {
    setToolbarTitle("Booking");
  }, []);

  // Sync selected driver state
  useEffect(() => {
    setSelectedRideData(selectedRideData);
  }, [selectedRideData]);

  return (
    <div className="flex gap-3 w-full">
      <section className="w-full flex flex-col flex-1 justify-between">
        {/* Ride Bookings Table*/}
        {ridesPending ? (
          <LoadingSpinner className="size-10" />
        ) : filteredBookings ? (
          <DataTable
            data={filteredBookings}
            type="booking"
            isLoading={ridesFetching}
            dataError={ridesError}
          />
        ) : (
          <div className="text-center h-8 text-slate-800 dark:text-slate-100 font-medium border-b last:border-0 hover:bg-slate-100 dark:hover:bg-slate-800">
            <LoadingSpinner className="size-10" />
          </div>
        )}

        {/* Modal Section */}
        {isModalOpen && <RideTableModal />}
      </section>
    </div>
  );
}

export default RideBookings;
