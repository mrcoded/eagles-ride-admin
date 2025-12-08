import { useState } from "react";
import { cn } from "@/lib/utils";
import { Car, Check } from "lucide-react";

import { DriversDataProps } from "@/components/drivers/types";

import useAssignDriver from "@/hooks/useAssignDriver";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useHandleCheckboxChange } from "@/hooks/useHandleCheckbox";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ShiftSelector from "@/components/drivers/ShiftSelector";

function DriverAssignSearch({
  approvedDrivers,
}: {
  approvedDrivers: DriversDataProps[] | undefined;
}) {
  const [itemId, setItemId] = useState<string | null>(null);
  const [shift, setShift] = useState<"morning" | "afternoon" | null>(null);

  //Global context
  const { query, setQuery, setDriverId, selectedRideData, isOpen } =
    useGlobalContext();

  //assign driver(s) handler
  const { isLoading, assignDriverHandler } = useAssignDriver();

  // Handle checkbox change
  const checkboxHandler = useHandleCheckboxChange(setItemId);

  //Get  assigned driver by id
  const acceptedDrivers = selectedRideData?.drivers?.filter(
    (driver) => driver?.id
  );

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      {/* Select shift */}
      <ShiftSelector shift={shift} setShift={setShift} />

      <CommandInput
        value={query}
        onValueChange={(val) => setQuery(val)}
        placeholder="Search a Driver's name..."
      />
      <CommandList>
        <CommandEmpty>No driver found.</CommandEmpty>
        <CommandGroup heading="Drivers Suggestions">
          {approvedDrivers?.map((item, index) => {
            //Check if driver is selected
            const selectedDriver = acceptedDrivers?.find(
              (driver) =>
                driver?.id === item?._id &&
                driver?.assignmentStatus === "accepted" &&
                driver?.shift
            );

            //Check if driver is assigned
            const assignedDriver = selectedDriver?.id === item._id;

            //Assign driver
            const assignDriver = (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              assignDriverHandler(item._id, shift);
            };

            return (
              <CommandItem
                key={index}
                value={item.fullname}
                disabled={isLoading}
                className={cn(
                  "cursor-pointer",
                  assignedDriver && "text-slate-400"
                )}
              >
                <Car />
                <Button
                  variant="link"
                  key={item._id}
                  className="flex justify-between items-center w-full"
                  onClick={assignDriver}
                >
                  {item.fullname}
                  {assignedDriver && <Check className={cn("ml-auto size-5")} />}
                </Button>
                <Checkbox
                  checked={itemId === item._id && isOpen === true}
                  onCheckedChange={(checked: boolean) => {
                    checkboxHandler(checked, "", item._id);
                    setDriverId(item._id);
                  }}
                  className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
                />
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
}

export default DriverAssignSearch;
