import { useMemo, useEffect } from "react";

import { DriverService } from "@/services/driverService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import DataTable from "@/components/tables/DataTable";
import DriverTableModal from "@/components/modals/DriverTableModal";

function Drivers() {
  //Get global context
  const {
    query,
    isModalOpen,
    selectedItemId,
    setToolbarTitle,
    setSelectedDriverData,
  } = useGlobalContext();

  //Get all drivers
  const { driversData, driversFetching, driversError } = DriverService();

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

  //Get selected driver data
  const selectedDriverData = filterDrivers?.filter(
    (data: { _id: string }) => data._id === selectedItemId
  )[0];

  //Set toolbar title, and selectedDriverData
  useEffect(() => {
    setToolbarTitle("Driver");
    setSelectedDriverData(selectedDriverData);
  }, [setToolbarTitle, selectedDriverData, setSelectedDriverData]);

  return (
    <>
      {driversError && <div className="text-red-500 text-4xl">Error</div>}
      <div className="inline-flex gap-3 w-full">
        <section className="w-full flex flex-col flex-1 justify-between">
          {/*Drivers Table*/}
          <div className="overflow-x-auto">
            {filterDrivers && (
              <DataTable
                data={filterDrivers}
                type="driver"
                isLoading={driversFetching}
              />
            )}
          </div>
        </section>

        {/* Modal Section */}
        {isModalOpen && <DriverTableModal />}
      </div>
    </>
  );
}

export default Drivers;
