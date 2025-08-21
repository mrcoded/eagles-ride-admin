import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { useGlobalContext } from "@/context/GlobalContext";
import { BookingsDataProps, BookingsTableProps } from "@/types/bookings";

import DataTable from "@/components/tables/DataTable";
import RideTableModal from "@/components/modals/RideTableModal";

function RideBookings() {
  const { data: { rides } = { rides: [] }, isFetching } = useQuery<{
    rides: BookingsDataProps["rides"][];
  }>({
    queryKey: ["book/all-rides"],
  });

  //Get all drivers
  const { data: driversData } = useQuery<BookingsTableProps["drivers"]>({
    queryKey: ["drivers"],
  });

  const { query, isModalOpen, paginationData, setToolbarTitle } =
    useGlobalContext();

  //Set toolbar title
  useEffect(() => {
    setToolbarTitle("Booking");
  }, [setToolbarTitle]);

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

  return (
    <div className="inline-flex gap-3 w-full">
      <section className="w-full flex flex-col flex-1 justify-between">
        {/* Ride Bookings Table*/}
        {filteredBookings.length === 0 ? (
          <div className="text-center h-8 text-slate-800 dark:text-slate-100 font-medium border-b last:border-0 hover:bg-gray-100 dark:hover:bg-slate-800">
            Search not found!
          </div>
        ) : (
          <DataTable
            data={paginationData}
            type="booking"
            isLoading={isFetching}
          />
        )}
      </section>

      {/* Modal Section */}
      {isModalOpen && (
        <RideTableModal drivers={driversData} bookings={filteredBookings} />
      )}
    </div>
  );
}

export default RideBookings;
