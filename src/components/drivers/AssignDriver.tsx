import { useMemo } from "react";

import AssignDriverAction from "./AssignDriverAction";

import { DriverService } from "@/services/driverService";

import { useGlobalContext } from "@/hooks/useGlobalContext";

function AssignDriver() {
  //global context
  const { query, driverId, selectedRideData } = useGlobalContext();

  //GET driver
  const { driver, driversData: drivers } = DriverService(driverId);

  //Get only approved drivers
  const approvedDrivers = drivers?.filter(
    (data: { isDriverApproved?: boolean }) => data.isDriverApproved
  );

  // Filtered list based on search query
  const filteredDrivers = useMemo(() => {
    const querySearch = query.trim().toLowerCase();

    if (!querySearch) return approvedDrivers;

    const searchResult = approvedDrivers?.filter(
      (query: { fullname: string }) => {
        return query.fullname.toLowerCase().includes(querySearch);
      }
    );

    return searchResult;
  }, [query, approvedDrivers]);

  return (
    <div className="block py-0 w-fit">
      {selectedRideData?.status === "assigned" && (
        <p className="text-[6px] pr-2 font-bold pt-1.5 pl-1.5 bg-orange-500 text-slate-200 rounded-s-sm">
          Assigned to {driver?.fullname}
        </p>
      )}

      <AssignDriverAction drivers={filteredDrivers} />
    </div>
  );
}

export default AssignDriver;
