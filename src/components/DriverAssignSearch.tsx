import { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Car, Check } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

function DriverAssignSearch({
  query,
  setQuery,
  filteredDrivers,
  selectedItemData,
  assignDriverHandler,
}: {
  query: string;
  selectedItemData: {
    driver: {
      _id: string;
      fullname: string;
    };
  };
  assignDriverHandler?: (
    e: MouseEvent<HTMLButtonElement>,
    driverId: string
  ) => Promise<void> | undefined;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredDrivers: Array<{ _id: string; fullname: string }> | undefined;
}) {
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
                disabled={item?._id === selectedItemData?.driver?._id}
              >
                <Car />
                <button
                  key={item._id}
                  className="flex justify-between items-center w-full"
                  onClick={(e) => assignDriverHandler?.(e, item?._id)}
                >
                  {item.fullname}
                  {item?._id === selectedItemData?.driver?._id && (
                    <Check className={cn("ml-auto size-5")} />
                  )}
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
