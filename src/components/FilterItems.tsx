"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { useGlobalContext } from "@/hooks/useGlobalContext";

import { Button } from "@/components/ui/button";
import { bookingFilters, driverFilters } from "../constants/filterItems";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function FilterItems({ title }: { title: string }) {
  const [open, setOpen] = useState(false);

  const { query, setQuery } = useGlobalContext();

  const filters = title === "bookings" ? bookingFilters : driverFilters;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between h-8 text-slate-900 dark:text-slate-50 dark:bg-slate-900"
        >
          {query
            ? filters.find((filter) => filter.value === query)?.label
            : `Filter ${title}...`}
          <ChevronsUpDown className="opacity-50 dark:fill-slate-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {filters.map((filter) => (
                <CommandItem
                  key={filter.value}
                  value={filter.value}
                  onSelect={(currentValue) => {
                    console.log(currentValue, query);
                    if (currentValue === "none") {
                      setQuery("");
                    }
                    if (currentValue !== "none") {
                      setQuery(currentValue === query ? "" : currentValue);
                    }
                    setOpen(false);
                  }}
                  className="cursor-pointer hover:font-medium"
                >
                  {filter.label}
                  {query == "none" ? (
                    <X className="ml-auto" />
                  ) : (
                    <Check
                      className={cn(
                        "ml-auto",
                        query === filter.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
