import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./admin/pages/home/dashboard";
import Login from "./admin/pages/authentication/login";
import ManageUser from "./admin/pages/manage-user/manage-user";
import CompanyDetails from "./client/pages/company/company-details";
import CompanyReviews from "./client/pages/company/company-review";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "login",
          element: (
            <div className="flex w-full h-screen">
              <div className="w-full flex items-center justify-center">
                <Login />
              </div>
            </div>
          ),
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>,
        },
        {
          path: "company",
          element: <CompanyDetails></CompanyDetails>,
        },
        {
          path: "company-review",
          element: <CompanyReviews></CompanyReviews>
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
