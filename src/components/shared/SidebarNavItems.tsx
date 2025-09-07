import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

import { Button } from "../ui/button";

import { ToggleTheme } from "../ToggleTheme";
import { useAuthContext } from "@/hooks/useAuthContext";
import { navigationItems } from "@/constants/sidebarNavLinks";

function SidebarNavItems() {
  const urlPath = useLocation();
  const { pathname } = urlPath;

  //logout handler
  const { logout } = useAuthContext();

  return (
    <>
      <div className="h-16 items-center mb-6 p-4 dark:bg-slate-50 border-b">
        <img
          src="/react.svg"
          alt="Nyetir.io Logo"
          className="h-7.5 w-fit object-cover opacity-100"
          style={{ color: "transparent" }}
        />
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-3.5">
          {navigationItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={cn(
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-primary"
                      : "text-slate-800",
                    "flex items-center py-2 px-3 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-semibold hover:text-primary rounded-md transition-colors"
                  )}
                >
                  <span className="size-5">
                    <item.icon className="size-4" />
                  </span>
                  <span className="ml-3 font-medium text-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center w-full mt-14 p-4">
        <ul className="space-y-4">
          <ToggleTheme />
          <Button
            variant="link"
            onClick={() => logout()}
            className="flex items-center py-2 px-3 text-slate-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-semibold hover:text-primary rounded-md transition-colors cursor-pointer"
          >
            <LogOut className="size-3.5" />
            <span className="ml-3 font-medium text-sm">Logout</span>
          </Button>
        </ul>
      </div>
    </>
  );
}

export default SidebarNavItems;
