import { Link } from "react-router-dom";

import { LogOut } from "lucide-react";
import { navigationItems } from "@/constants/sidebarNavLinks";
import { ToggleTheme } from "../ToggleTheme";

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex xl:w-64 lg:flex-col bg-white dark:bg-gray-800 p-3 top-0 left-0 h-screen overflow-y-auto w-56">
      <div className="flex h-14 items-center mb-6 px-4 dark:bg-slate-50 border-b">
        <img
          src="/react.svg"
          alt="Nyetir.io Logo"
          className="h-7.5 w-fit object-cover opacity-100"
          style={{ color: "transparent" }}
        />
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-3.5">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center py-2 px-3 text-slate-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-semibold hover:text-primary rounded-md transition-colors"
              >
                <span className="size-5">
                  <item.icon className="size-4" />
                </span>
                <span className="ml-3 font-medium text-sm">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center w-full mt-14 p-4">
        <ul className="space-y-4">
          <ToggleTheme />
          <li className="flex items-center py-2 px-3 text-slate-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-semibold hover:text-primary rounded-md transition-colors cursor-pointer">
            <LogOut className="size-3.5" />
            <span className="ml-3 font-medium text-sm">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
