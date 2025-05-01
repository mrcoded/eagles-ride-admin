import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import UserModal from "@/components/modals/UserModal";
import RideBookingsTable from "@/components/tables/RideBookingsTable";

interface RideBookingsTableProps {
  _id: string;
  fullname: string;
  email: string;
  isDriverApproved: boolean;
  status: string;
}
[];

interface BookingsModalProps {
  users: {
    _id: string;
    fullname: string;
    email: string;
    phone_number: string;
    address: string;
  }[];
}

function Drivers() {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>("");
  const [selectedRideId, setSelectedRideId] = useState<string | null>(null);

  const {
    status,
    data: driversData,
    error,
    isFetching,
  } = useQuery<RideBookingsTableProps>({
    queryKey: ["drivers"],
  });

  const {
    // status,
    data: userData,
    // error,
    isFetching: userFetching,
  } = useQuery<BookingsModalProps>({
    queryKey: ["users"],
  });

  const { users } = userData ?? { user: undefined };
  console.log(users, driversData);
  return (
    <div className="flex-1">
      {/* Main Content */}
      <main className="flex flex-col md:flex-row gap-2 px-2 pt-2">
        {/* Left Section */}
        <section className="flex-1">
          {/* Header */}
          <header className="bg-white shadow py-1 px-6">
            <h1 className="text-xl font-bold">Rent Buddy</h1>
          </header>
          {/* Upcoming Bookings */}
          <h2 className="text-base font-semibold mb-2">Upcoming Bookings</h2>
          <RideBookingsTable
            drivers={driversData}
            // bookings={rides}
            selectedRideId={selectedRideId}
            setSelectedRideId={setSelectedRideId}
            setSelectedUserId={setSelectedUserId}
            setUserModalOpen={setUserModalOpen}
          />
          <header className="bg-white shadow py-2.5 px-6">
            <h1 className="text-xl font-bold">Pagination</h1>
          </header>
        </section>

        {/* Right Section */}
        <section className="w-full md:w-[30%] flex flex-col gap-1">
          {userModalOpen && (
            <UserModal
              userId={selectedUserId}
              selectedRideId={selectedRideId}
              rideData={driversData}
              userFetching={userFetching}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default Drivers;
