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
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

function DriverAssignSearch({
  approvedDrivers,
}: {
  approvedDrivers: DriversDataProps[] | undefined;
}) {
  const [itemId, setItemId] = useState<string | null>(null);

  //Global context
  const { query, setQuery, selectedRideData } = useGlobalContext();

  //assign driver(s) handler
  const { isLoading, assignDriverHandler } = useAssignDriver();

  // Handle checkbox change
  const checkboxHandler = useHandleCheckboxChange(setItemId);

  //Get existing assign driver IDs
  const selectedDriverIds =
    selectedRideData?.drivers?.map((driver: { _id: string }) => driver._id) ||
    [];

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        value={query}
        onValueChange={(val) => setQuery(val)}
        placeholder="Search a Driver's name..."
      />
      <CommandList>
        <CommandEmpty>No driver found.</CommandEmpty>
        <CommandGroup heading="Drivers Suggestions">
          {approvedDrivers?.map((item: { _id: string; fullname: string }) => {
            //Check if driver is selected
            const selectedDriver = selectedDriverIds.includes(item._id);

            //Assign driver
            const assignDriver = (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              assignDriverHandler(item._id);
            };

            return (
              <CommandItem
                key={item._id}
                value={item.fullname}
                disabled={isLoading}
                className={cn(
                  "cursor-pointer",
                  selectedDriver && "text-slate-400"
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
                  {selectedDriver && <Check className={cn("ml-auto size-5")} />}
                </Button>
                <Checkbox
                  checked={itemId === item._id}
                  onCheckedChange={(checked: boolean) =>
                    checkboxHandler(checked, "", item._id)
                  }
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
