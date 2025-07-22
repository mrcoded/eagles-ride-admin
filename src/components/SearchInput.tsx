import { useGlobalContext } from "@/context/GlobalContext";
import { Command, CommandInput } from "./ui/command";

function SearchInput({ title }: { title: string }) {
  const { setQuery } = useGlobalContext();

  return (
    <Command className="flex justify-center rounded-lg border shadow-sm md:max-w-[250px] h-8">
      <CommandInput
        onValueChange={(val) => setQuery(val)}
        placeholder={`Search a ${title}`}
      />
    </Command>
  );
}

export default SearchInput;
