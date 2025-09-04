import SidebarNavItems from "./SidebarNavItems";

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:flex xl:w-64 lg:flex-col bg-white dark:bg-gray-800 px-3 top-0 left-0 min-h-screen overflow-y-auto w-56">
      <SidebarNavItems />
    </div>
  );
}
