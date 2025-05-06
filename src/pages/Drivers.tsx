import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import UserModal from "@/components/modals/UserModal";
import RideBookingsTable from "@/components/tables/RideBookingsTable";
import { BookingsModalProps, BookingsTableProps } from "@/types";
import { useAPIMutation } from "@/components/hooks/useAPIMutation";
import toast from "react-hot-toast";

function Drivers() {
  const [isLoading, setIsLoading] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const {
    status,
    data: driversData,
    error,
    isFetching,
  } = useQuery<BookingsTableProps["drivers"]>({
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

  // Use the useAPImutation hook for logging in
  const mutation = useAPIMutation({
    endpoint: `admin/approve-driver/${selectedItemId}`,
    method: "PATCH",
    onMutate: () => {
      console.log("Approving Driver request...");
      setIsLoading(true);
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error);
    },
  });

  const { users } = userData ?? { user: undefined };
  console.log(users, driversData);
  return (
    <div className="flex-1 ">
      {/* Main Content */}
      <main className="flex flex-col md:flex-row gap-2 px-2 pt-2">
        {/* Left Section */}
        <section className="w-full flex-1">
          {/* Header */}
          <header className="bg-white shadow py-1 px-6">
            <h1 className="text-xl font-bold">Rent Buddy</h1>
          </header>
          {/* Upcoming Bookings */}
          <h2 className="text-base font-semibold mb-2">Upcoming Bookings</h2>
          {/* <div className="flex flex-col flex-1"> */}
          <RideBookingsTable
            drivers={driversData}
            // bookings={rides}
            selectedItemId={selectedItemId}
            setSelectedItemId={setSelectedItemId}
            setSelectedUserId={setSelectedUserId}
            setUserModalOpen={setUserModalOpen}
          />
          <div className="bg-white shadow py-2.5 px-6 mt-auto">
            <div className="text-xl font-bold">Pagination</div>
          </div>
          {/* </div> */}
        </section>

        {/* Right Section */}
        {userModalOpen && (
          <section className="w-full md:w-[30%] flex flex-col gap-1">
            <UserModal
              mutation={mutation}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              userId={selectedUserId}
              dataSource={driversData}
              userFetching={userFetching}
              selectedItemId={selectedItemId}
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default Drivers;
