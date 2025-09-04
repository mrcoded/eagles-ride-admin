import { useEffect, useMemo } from "react";

import { useGlobalContext } from "@/hooks/useGlobalContext";

import { BookingService } from "@/services/bookingService";

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
  const { rides, ridesFetching } = BookingService();

  // Filtered bookings based on search query
  const filteredBookings = useMemo(() => {
    const querySearch = query.trim().toLowerCase();

    if (!querySearch) return rides;

    const searchResult = rides?.filter((item) => {
      return [
        item.user?.fullname,
        item.user?.address,
        item.user?.phone_number,
        item?.pick_up_location,
        item?.drop_off_location,
        item?.status,
      ].some((field) => field?.toLowerCase().includes(querySearch));
    });

    return searchResult;
  }, [query, rides]);

  //Get selected ride data
  const selectedRideData = filteredBookings?.filter(
    (data: { _id: string }) => data._id === selectedItemId
  )[0];

  //Set toolbar title and selected ride data
  useEffect(() => {
    setToolbarTitle("Booking");
    setSelectedRideData(selectedRideData);
  }, [selectedRideData, setToolbarTitle, setSelectedRideData]);

  return (
    <div className="inline-flex gap-3 w-full">
      <section className="w-full flex flex-col flex-1 justify-between">
        {/* Ride Bookings Table*/}
        {filteredBookings.length === 0 ? (
          <div className="text-center h-8 text-slate-800 dark:text-slate-100 font-medium border-b last:border-0 hover:bg-gray-100 dark:hover:bg-slate-800">
            Search not found!
          </div>
        ) : !filteredBookings ? (
          <div className="text-center h-8 text-slate-800 dark:text-slate-100 font-medium border-b last:border-0 hover:bg-gray-100 dark:hover:bg-slate-800">
            Searchs not found!
          </div>
        ) : (
          <DataTable
            data={filteredBookings}
            type="booking"
            isLoading={ridesFetching}
          />
        )}
      </section>

      {/* Modal Section */}
      {isModalOpen && <RideTableModal />}
    </div>
  );
}

export default RideBookings;
