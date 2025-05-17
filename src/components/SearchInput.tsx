import { Command, CommandInput } from "./ui/command";

function SearchInput({
  title,
  setQuery,
}: {
  title: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Command className="flex justify-center rounded-lg border shadow-sm md:max-w-[250px] h-7">
      <CommandInput
        onValueChange={(val) => setQuery(val)}
        placeholder={`Search a ${title}`}
      />
    </Command>
  );
}

export default SearchInput;
