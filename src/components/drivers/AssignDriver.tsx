import { useMemo } from "react";

import AssignDriverAction from "@/components/drivers/AssignDriverAction";

import filteredItemFn from "@/utils/filteredItemFn";
import { DriverService } from "@/services/driverService";

import { useGlobalContext } from "@/hooks/useGlobalContext";

function AssignDriver() {
  //global context
  const { query, driverId } = useGlobalContext();

  //GET driver
  const { driversData: drivers } = DriverService(driverId);

  //Get only approved drivers
  const approvedDrivers = drivers?.filter(
    (data: { isDriverApproved?: boolean }) => data.isDriverApproved
  );

  // show only approved drivers
  const approvedDriversList = useMemo(() => {
    return filteredItemFn(query, approvedDrivers);
  }, [query, approvedDrivers]);

  return (
    <div className="block py-0 w-fit">
      <AssignDriverAction drivers={approvedDriversList} />
    </div>
  );
}

export default AssignDriver;
