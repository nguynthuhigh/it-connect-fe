import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout: React.FC  = () => {
  const location = useLocation();
  const activeTab = location.pathname;
  const isInSetting = activeTab.startsWith("/my-jobs");

  return (
    <div className="w-full flex justify-center items-center min-h-[77vh] py-10">
      <div className="">
        <div className="mb-9">
          <nav className="flex space-x-6">
            <Link
              to="/my-jobs/saved-jobs"
              className={`py-4 px-4 focus:outline-none font-semibold transition-colors duration-300 font-inter ease-in-out  ${
                activeTab === "/my-jobs/saved-jobs" || (isInSetting && activeTab === "/my-jobs")
                  ? "text-blue-600 font-semibold  border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Saved jobs
            </Link>
            <Link
              to="/"
              className={`py-4 px-4 focus:outline-none font-semibold transition-colors duration-300 font-inter ease-in-out ${
                activeTab === "/" ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Applied jobs
            </Link>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
