import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  const isInSetting = activeTab.startsWith('/setting');

  return (
    <div className="w-full flex justify-center items-center min-h-[77vh]">
      <div className="w-full max-w-4xl p-6">
        <div className="mb-9">
          <nav className="flex space-x-6">
            <Link
              to="/setting/overview"
              className={`py-4 px-4 focus:outline-none font-semibold transition-colors duration-300 font-inter ease-in-out ${
                activeTab === '/setting/overview' || (isInSetting && activeTab === '/setting') ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Overview
            </Link>
            <Link
              to="/"
              className={`py-4 px-4 focus:outline-none font-semibold transition-colors duration-300 font-inter ease-in-out ${
                activeTab === '/' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Reviews
            </Link>
            <Link
              to="/setting/change-password"
              className={`py-4 px-4 focus:outline-none font-semibold transition-colors duration-300 font-inter ease-in-out ${
                activeTab === '/setting/change-password' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Change Password
            </Link>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
