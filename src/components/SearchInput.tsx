import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import { Input } from "@/components/ui/input";
import { DEBOUNCE_DELAY } from "@/constants/config";

function SearchInput({ title }: { title: string }) {
  const { setQuery } = useGlobalContext();

  //local state for search value
  const [searchTerm, setSearchTerm] = useState("");

  //update global context
  const updateSearchQuery = useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery]
  );

  //debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      updateSearchQuery(searchTerm);
    }, DEBOUNCE_DELAY);

    //clear timeout
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, updateSearchQuery]);

  return (
    <div className="flex justify-center rounded-lg border dark:border-slate-600 shadow-sm md:min-w-[350px]">
      <Input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-primary font-medium text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        placeholder={`Search a ${title}`}
      />
    </div>
  );
}

export default SearchInput;
