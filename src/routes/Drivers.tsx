import { useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import DataTable from "@/components/tables/DataTable";
import DriverTableModal from "@/components/modals/DriverTableModal";

import { DriversDataProps } from "@/types/drivers";
import { useGlobalContext } from "@/hooks/useGlobalContext";

function Drivers() {
  //Get global context
  const {
    query,
    selectedItemId,
    setToolbarTitle,
    setSelectedRideData,
    isModalOpen,
  } = useGlobalContext();

  const {
    data: driversData,
    error,
    isFetching,
  } = useQuery<DriversDataProps[]>({
    queryKey: ["drivers"],
  });

  //Set toolbar title
  useEffect(() => {
    setToolbarTitle("Driver");
  }, [setToolbarTitle]);

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

  return (
    <>
      {error && <div className="text-red-500 text-4xl">Error</div>}
      <div className="inline-flex gap-3 w-full">
        <section className="w-full flex flex-col flex-1 justify-between">
          {/*Drivers Table*/}
          <div className="overflow-x-auto">
            <DataTable
              data={filterDrivers}
              type="driver"
              isLoading={isFetching}
            />
          </div>
        </section>

        {/* Right Section */}
        {isModalOpen && <DriverTableModal drivers={filterDrivers} />}
      </div>
    </>
  );
}

export default Drivers;
