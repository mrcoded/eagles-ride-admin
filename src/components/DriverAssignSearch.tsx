import { cn } from "@/lib/utils";
import { Car, Check } from "lucide-react";

import { DriverAssignSearchProps } from "@/types";
import { useGlobalContext } from "@/context/GlobalContext";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Checkbox } from "./ui/checkbox";

function DriverAssignSearch({
  filteredDrivers,
  selectedRideData,
  assignDriverHandler,
}: DriverAssignSearchProps) {
  //Global context
  const {
    setDriverId,
    selectedItemId,
    setSelectedItemId,
    setIsLoading,
    setIsOpen,
    query,
    setQuery,
  } = useGlobalContext();

  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean, itemId: string) => {
    if (checked) {
      setIsOpen(true);
      setDriverId(itemId);
      setSelectedItemId(itemId);
    } else {
      setSelectedItemId(null);
    }
  };

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
          {filteredDrivers?.map((item: { _id: string; fullname: string }) => {
            return (
              <CommandItem
                key={item._id}
                value={item.fullname}
                className="cursor-pointer"
                disabled={selectedItemId === item._id}
              >
                <Car />
                <button
                  key={item._id}
                  className="flex justify-between items-center w-full"
                  onClick={(e) => assignDriverHandler(e, item._id)}
                >
                  {item.fullname}
                  {selectedDriverIds.includes(item._id) && (
                    <Check className={cn("ml-auto size-5")} />
                  )}
                  <Checkbox
                    checked={selectedItemId === item._id}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckboxChange(checked, item._id)
                    }
                    className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
                  />
                </button>
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
