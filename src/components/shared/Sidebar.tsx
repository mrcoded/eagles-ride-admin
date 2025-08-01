import SidebarNavItems from "./SidebarNavItems";

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex xl:w-64 lg:flex-col bg-white dark:bg-gray-800 p-3 top-0 left-0 h-screen overflow-y-auto w-56">
      <SidebarNavItems />
    </div>
  );
}
