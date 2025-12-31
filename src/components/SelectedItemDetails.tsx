import DriverInfoModal from "@/components/modals/DriverInfoModal";
import BookedRideInfo from "@/components/bookings/BookedRideInfo";

function SelectedItemDetails({ isDriver }: { isDriver?: boolean | undefined }) {
  return (
    <div className="flex flex-col justify-start items-start w-full px-3 gap-2">
      <h3 className="flex items-center justify-center gap-2 p-1.5 text-sm font-medium text-slate-200 capitalize tracking-wide bg-slate-600 dark:bg-slate-900 rounded-sm w-full">
        {isDriver ? "Driver's Uploaded Information" : "Booked Ride Information"}
      </h3>
      {isDriver ? <DriverInfoModal /> : <BookedRideInfo />}
    </div>
  );
}

export default SelectedItemDetails;
