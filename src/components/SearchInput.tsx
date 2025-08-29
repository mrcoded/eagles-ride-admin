import { useGlobalContext } from "@/hooks/useGlobalContext";

import { Input } from "./ui/input";

function SearchInput({ title }: { title: string }) {
  const { setQuery } = useGlobalContext();

  return (
    <div className="flex justify-center rounded-lg border shadow-sm md:max-w-[350px]">
      <Input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        className="text-primary font-medium text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        placeholder={`Search a ${title}`}
      />
    </div>
  );
}

export default SearchInput;
