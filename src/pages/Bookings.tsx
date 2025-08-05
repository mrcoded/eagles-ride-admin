import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { useGlobalContext } from "@/context/GlobalContext";
import { BookingsDataProps, BookingsTableProps } from "@/types";

import SearchInput from "@/components/SearchInput";
import DataTable from "@/components/tables/DataTable";
import { FilterItems } from "@/components/FilterItems";
import RideTableModal from "@/components/modals/RideTableModal";

function RideBookings() {
  const { query, isModalOpen } = useGlobalContext();

  const { data: { rides } = { rides: [] }, isFetching } = useQuery<{
    rides: BookingsDataProps["rides"][];
  }>({
    queryKey: ["book/all-rides"],
  });

  //Get all drivers
  const { data: driversData } = useQuery<BookingsTableProps["drivers"]>({
    queryKey: ["drivers"],
  });

  // Filtered bookings based on search query
  const filteredBookings = useMemo(() => {
    const querySearch = query.trim().toLowerCase();

    if (!querySearch) return rides;

    const searchResult = rides?.filter((item) => {
      console.log(item);
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
        {/* nav */}
        <nav className="flex justify-between items-center gap-2 mb-5">
          <SearchInput title="Booking" />
          <div className="text-slate-200 text-[9px] font-medium">
            <FilterItems title="Bookings" />
          </div>
        </nav>

        {/* Ride Bookings Table*/}
        <DataTable
          data={filteredBookings}
          type="booking"
          isLoading={isFetching}
        />

        {/* Pagination */}
        <div className="flex flex-grow bg-white shadow py-2.5 px-6 mt-auto">
          <div className="text-xl font-bold">Pagination</div>
        </div>
      </section>

      {/* Modal Section */}
      {isModalOpen && (
        <aside className="w-full md:w-[30%] flex flex-col gap-1">
          <RideTableModal drivers={driversData} bookings={filteredBookings} />
        </aside>
      )}
    </div>
  );
}

export default RideBookings;
