import { useMemo, useEffect } from "react";

import { DriverService } from "@/services/driverService";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import filteredItemFn from "@/utils/filteredItemFn";
import { LoadingSpinner } from "@/components/Loading";
import DataTable from "@/components/tables/DataTable";
import DriverTableModal from "@/components/modals/DriverTableModal";

function Drivers() {
  //Get global context
  const {
    query,
    setDriverId,
    isModalOpen,
    selectedItemId,
    setToolbarTitle,
    setSelectedDriverData,
  } = useGlobalContext();

  //Get all drivers
  const { driversData, driversFetching, driversPending, driversError } =
    DriverService();

  // Filtered drivers based on search query
  const filteredDrivers = useMemo(() => {
    return filteredItemFn(query, driversData);
  }, [query, driversData]);

  // Get selected driver
  const selectedDriverData = filteredDrivers?.find(
    (driver) => driver._id === selectedItemId
  );

  // Set toolbar once
  useEffect(() => {
    setToolbarTitle("Driver");
  }, []);

  // Sync selected driver state
  useEffect(() => {
    setDriverId(selectedDriverData?._id);
    setSelectedDriverData(selectedDriverData);
  }, [selectedDriverData]);

  return (
    <>
      {driversError && <div className="text-red-500 text-4xl">Error</div>}
      <div className="flex gap-3 w-full">
        <section className="w-full flex flex-col flex-1 justify-between">
          {/*Drivers Table*/}
          <div className="overflow-x-auto">
            {driversPending ? (
              <LoadingSpinner className="size-10" />
            ) : (
              filteredDrivers && (
                <DataTable
                  data={filteredDrivers}
                  type="driver"
                  isLoading={driversFetching}
                />
              )
            )}
          </div>

          {/* Modal Section */}
          {isModalOpen && <DriverTableModal />}
        </section>
      </div>
    </>
  );
}

export default Drivers;
