import { Menu } from "lucide-react";

import SearchInput from "@/components/SearchInput";
import { FilterItems } from "@/components/FilterItems";

import { useGlobalContext } from "@/hooks/useGlobalContext";

function Header() {
  const { sidebarOpen, setSidebarOpen, toolbarTitle } = useGlobalContext();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between px-4 lg:px-6 gap-2 bg-white border-b space-x-5">
      {!sidebarOpen && (
        <Menu
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex lg:hidden items-center text-slate-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-semibold hover:text-primary rounded-md transition-colors"
        />
      )}

      {/* toolbar */}
      {toolbarTitle && (
        <div className="flex justify-between items-center gap-2 flex-grow">
          <SearchInput title={toolbarTitle} />
          <div className="text-slate-200 text-[9px] font-medium">
            <FilterItems title={toolbarTitle} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
