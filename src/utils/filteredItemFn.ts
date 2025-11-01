import { BookingsDataProps } from "@/components/bookings/types";
import { DriversDataProps } from "@/components/drivers/types";

export type RideItem = BookingsDataProps["rides"];
export type FilterableItem = RideItem | DriversDataProps;

const filteredItemFn = <T extends FilterableItem>(
  query: string,
  data: T[]
): T[] => {
  const querySearch = query?.trim().toLowerCase();

  if (!querySearch) return data;

  const searchResult = data.filter((item) => {
    return [
      item?.email,
      item?.status,
      item?.fullname,
      "user" in item ? item.user?.address : undefined,
      "user" in item ? item.user?.fullname : undefined,
      "user" in item ? item.user?.phone_number : undefined,
      "phone_number" in item ? item?.phone_number : undefined,
      "residential_address" in item ? item?.residential_address : undefined,
    ].some((field) => field?.toString().toLowerCase().includes(querySearch));
  });

  return searchResult;
};

export default filteredItemFn;
