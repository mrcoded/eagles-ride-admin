import { useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { DriversDataProps } from "@/types";

import SearchInput from "@/components/SearchInput";
import DataTable from "@/components/tables/DataTable";
import { FilterItems } from "@/components/FilterItems";
import DriverTableModal from "@/components/modals/DriverTableModal";

import { useGlobalContext } from "@/context/GlobalContext";

function Drivers() {
  //Get global context
  const { query, selectedItemId, setSelectedRideData, isModalOpen } =
    useGlobalContext();

  const {
    status,
    data: driversData,
    error,
    isFetching,
  } = useQuery<DriversDataProps[]>({
    queryKey: ["drivers"],
  });

  //Get selected item data
  const selectedRideData = driversData?.filter(
    (data: { _id: string }) => data._id === selectedItemId
  )[0];

  //Set selected ride data
  useEffect(() => {
    setSelectedRideData(selectedRideData);
  }, [selectedRideData]);

  // Filtered drivers based on search query
  const filterDrivers = useMemo(() => {
    const querySearch = query.trim().toLowerCase();

    if (!querySearch) return driversData;

    const searchResult = driversData?.filter((item) => {
      return [
        item?.email,
        item?.status,
        item?.fullname,
        item?.phone_number,
        item?.residential_address,
      ].some((field) => field?.toLowerCase().includes(querySearch));
    });

    return searchResult;
  }, [query, driversData]);

  console.log(error, status);
  return (
    <>
      {error && <div className="text-red-500 text-4xl">Error</div>}
      <div className="inline-flex gap-3 w-full">
        <section className="w-full flex flex-col flex-1 justify-between">
          {/* nav */}
          <nav className="flex justify-between items-center gap-2 mb-5">
            <SearchInput title="Driver" />
            <div className="text-slate-200 text-[9px] font-medium">
              <FilterItems title="Drivers" />
            </div>
          </nav>

          {/*Drivers Table*/}
          <div className="overflow-x-auto">
            <DataTable
              data={filterDrivers}
              type="driver"
              isLoading={isFetching}
            />
          </div>

          {/* Pagination */}
          <div className="flex flex-grow bg-white shadow py-2.5 px-6 mt-auto">
            <div className="text-xl font-bold">Pagination</div>
          </div>
        </section>

        {/* Right Section */}
        {isModalOpen && (
          <section className="w-full md:w-[30%] flex flex-col gap-1">
            <DriverTableModal drivers={filterDrivers} />
          </section>
        )}
      </div>
    </>
  );
}

export default Drivers;
