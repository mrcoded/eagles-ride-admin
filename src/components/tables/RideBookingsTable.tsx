import { Checkbox } from "@/components/ui/checkbox";
import { BookingsTableProps } from "@/types";

const RideBookingsTable = ({
  drivers,
  bookings,
  selectedItemId,
  setSelectedUserId,
  setSelectedItemId,
  setUserModalOpen,
}: BookingsTableProps) => {
  console.log(bookings);
  const handleCheckboxChange = (
    checked: boolean,
    userId: string,
    itemId: string
  ) => {
    if (checked) {
      setSelectedItemId(itemId);
      setSelectedUserId(userId);
      setUserModalOpen(true);
    } else {
      // If you want to close modal or reset id when unchecked
      setSelectedItemId(null);
      setUserModalOpen(false);
      setSelectedUserId("");
    }
  };

  return (
    <table className="w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
        <tr>
          <th className="p-1.5 text-left"></th>
          <th className="p-1.5 text-left">Name</th>
          <th className="p-1.5 text-left"></th>
          <th className="p-1.5 text-left"></th>
          <th className="p-1.5 text-left"></th>
          <th className="p-1.5 text-left"></th>
          <th className="p-1.5 text-left"></th>
          <th className="p-1.5 text-left"></th>
        </tr>
      </thead>
      <tbody>
        {bookings?.map((booking, idx) => {
          return (
            <tr
              key={idx}
              className="h-8 border-b last:border-0 hover:bg-gray-100"
            >
              <Checkbox
                key={idx}
                checked={selectedItemId === booking._id}
                onCheckedChange={(checked: boolean) =>
                  handleCheckboxChange(checked, booking.user._id, booking._id)
                }
                className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
              />
              <td className="p-1.5 text-[11px] text-nowrap tracking-tighter font-medium">
                {booking.user.fullname}
              </td>
              {!selectedItemId && (
                <>
                  <td className="p-1.5 text-[8px] uppercase tracking-tighter">
                    {booking.status}
                  </td>

                  <td className="p-1.5 text-[8px] capitalize tracking-tight ">
                    {booking.trip_type}
                  </td>
                </>
              )}
              <td className="p-1.5 text-[8px] tracking-tighter">
                {booking.start_date}
              </td>
              {/* {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tight">
                  {booking.user.phone_number}
                </td>
              )} */}
              {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tight ">
                  {booking.pick_up_location}
                </td>
              )}
              {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tight">
                  {booking.drop_off_location}
                </td>
              )}
              {/* {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tight">
                  {booking.pick_up_location}
                </td>
              )} */}
              {/* {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tighter">View</td>
              )} */}
            </tr>
          );
        })}
        {drivers?.map((driver, idx) => {
          console.log(selectedItemId, driver._id);
          return (
            <tr key={idx} className="border-b last:border-0 hover:bg-gray-100">
              <Checkbox
                key={idx}
                checked={selectedItemId === driver._id}
                onCheckedChange={(checked: boolean) =>
                  handleCheckboxChange(checked, driver._id, driver._id)
                }
                className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
              />
              <td className="p-1.5 text-[10px] tracking-tighter font-medium">
                {driver.fullname}
              </td>
              <td className="p-1.5 text-[10px] tracking-tighter">
                {driver.email}
              </td>
              {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tight">
                  {driver.phone_number}
                </td>
              )}
              <td className="p-1.5 text-[8px] uppercase">{driver.status}</td>
              <td className="p-1.5 text-[8px]">
                {driver?.isDriverApproved ? "Approved" : "Not Approved"}
              </td>

              {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tighter">
                  {driver.fullname}
                </td>
              )}
              {!selectedItemId && (
                <td className="p-1.5 text-[8px] tracking-tighter">
                  {driver.fullname}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RideBookingsTable;
