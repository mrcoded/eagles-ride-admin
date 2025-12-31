import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useHandleCheckboxChange } from "@/hooks/useHandleCheckbox";

import { TableRowItemData, TableRowItemProps, TableType } from "@/types/tables";
import { Checkbox } from "@/components/ui/checkbox";
import { DriversDataProps } from "../../types/drivers";

const TableRowItem = <T extends TableType>({
  item,
  type,
  selectedItemId,
}: TableRowItemProps<T>) => {
  const { isModalOpen } = useGlobalContext();

  // Handle checkbox change
  const checkboxHandler = useHandleCheckboxChange();

  // Check if type is "booking"
  const isBooking = type === "booking";
  // Check if type is "booking"
  const bookingItem = isBooking ? (item as unknown as TableRowItemData) : null;
  // Check if type is "driver"
  const driverItem = !isBooking ? (item as unknown as DriversDataProps) : null;

  // Get user data from booked ride
  const user = bookingItem?.user;

  return (
    <tr className="text-center w-full font-medium dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
      <td className="flex items-center justify-center">
        <Checkbox
          checked={selectedItemId === item._id && isModalOpen === true}
          onCheckedChange={(checked: boolean) =>
            checkboxHandler(checked, user?._id || item._id, item._id)
          }
          className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
        />
      </td>
      <td className="p-2 text-xs md:text-sm text-nowrap">
        {isBooking ? user?.fullname : driverItem?.fullname}
      </td>
      <td className="p-2 text-xs sm:text-sm">
        {isBooking ? user?.phone_number : driverItem?.email}
      </td>
      <td className="p-1.5 text-xs sm:text-sm capitalize whitespace-nowrap">
        {isBooking ? bookingItem?.trip_type : driverItem?.phone_number}
      </td>
      <td className="p-1.5 text-xs sm:text-sm uppercase">
        {isBooking
          ? bookingItem?.status
          : driverItem?.isDriverApproved
          ? "Approved"
          : "Not Approved"}
      </td>
      <td className="p-2 text-xs lg:text-sm capitalize">
        {isBooking
          ? (bookingItem as TableRowItemData).ride_type
          : driverItem?.status}
      </td>
    </tr>
  );
};

export default TableRowItem;
