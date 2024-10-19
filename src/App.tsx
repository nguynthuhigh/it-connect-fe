import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./admin/pages/home/dashboard";
import LoginAdmin from "./admin/pages/authentication/login";
import ManageUser from "./admin/pages/manage-user/manage-user";
import CompanyDetails from "./candidate/pages/company/company-details";
import Home from "./candidate/pages/home";
import JobDetail from "./candidate/pages/job-details/job-details";
import CompanyReviews from "./candidate/pages/company/company-review";
import Draft from "./candidate/pages/draft/draft";
import CompanyWriteReviews from "./candidate/pages/company/company-write-review";
import Register from "./candidate/pages/authentication/register";
import Login from "./candidate/pages/authentication/login";
import { Sidebar } from "./shared/components/sidebar/sidebar";
import Header from "./candidate/components/header/header";
import Footer from "./candidate/components/footer/footer";
import Invitations from "./company/pages/invitations";
import Search from "./candidate/pages/search-job";
import AddNewPost from "./company/pages/job/post-new-job";
import Index from "./company/pages/job";
import { SidebarAdmin } from "./shared/components/sidebar/sidebar-admin";
import Role from "./admin/pages/role/system-role";
import User from "./admin/pages/user";
import CompanyRole from "./admin/pages/role/company-role";
const RootLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flexGrow: 1, padding: "20px" }} className="bg-gray-50">
      <Outlet />
    </div>
  </div>
);
const RootLayoutAdmin = () => (
  <div style={{ display: "flex" }}>
    <SidebarAdmin />
    <div style={{ flexGrow: 1 }} className="bg-gray-50">
      <Outlet />
    </div>
  </div>
);
const HeaderLayout = () => (
  <div style={{ display: "flex" }}>
    <Header />
    <div style={{ flexGrow: 1, paddingTop: 80 }}>
      <Outlet />
      <Footer></Footer>
    </div>
  </div>
);
function App() {
  const router = createBrowserRouter([
    //customer site
    {
      path: "/",
      element: <HeaderLayout></HeaderLayout>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "company",
          element: <CompanyDetails />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "reviews",
          element: <CompanyReviews />,
        },
        {
          path: "write-review",
          element: <CompanyWriteReviews />,
        },
        {
          path: "job",
          element: <JobDetail />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    //company site
    {
      path: "/company",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "draft",
          element: <Draft></Draft>,
        },
        {
          path: "dashboard",
          element: <Draft></Draft>,
        },
        {
          path: "invitations",
          element: <Invitations></Invitations>,
        },
        {
          path: "post-new-job",
          element: <AddNewPost></AddNewPost>,
        },
        {
          path: "jobs",
          element: <Index></Index>,
        },
      ],
    },
    //admin site
    {
      path: "/admin",
      element: <RootLayoutAdmin></RootLayoutAdmin>,
      children: [
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "sys-roles",
          element: <Role></Role>,
        },
        {
          path: "company-roles",
          element: <CompanyRole></CompanyRole>,
        },
        {
          path: "users",
          element: <User></User>,
        },
        {
          path: "login-admin",
          element: <LoginAdmin />,
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>,
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
