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
import EditPostJob from "./company/pages/job/edit-post-job";
import DetailPostJob from "./company/pages/job/detai-post-job";
import CompanyList from "./admin/pages/company/company-list";
import Setting from "./candidate/pages/setting/setting-layout"
import Overview from "./candidate/components/setting/overview/overview"
import ChangePassword from "./candidate/components/setting/change-password/change-password";
import MyJobs from "./candidate/pages/my-job/my-jobs-layout";
import SavedJobs from "./candidate/components/my-jobs/saved-jobs"

const RootLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flexGrow: 1, padding: "20px" }} className="bg-gray-50">
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
        {
          path: "setting",
          element: <Overview />,
        },
        {
          path: "setting",
          element: <Setting />,
          children: [
            {
              path: "",
              element: <Overview />,
            },
            {
              path: "overview",
              element: <Overview />, 
            },
            {
              path: "change-password",
              element: <ChangePassword />, 
            },
          ],
        },
        {
          path: "my-jobs",
          element: <MyJobs />,
          children: [
            {
              path: "saved-jobs",
              element: <SavedJobs />,
            },
            {
              
              path: "",
              element: <SavedJobs />,
            },
          ],
        }
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
          path: "edit-post-job",
          element: <EditPostJob></EditPostJob>,
        },
        {
          path: "detail-post-job",
          element: <DetailPostJob></DetailPostJob>,
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
      children: [
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
        },

        {
          path: "login-admin",
          element: <LoginAdmin />,
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>,
        },
        {
          path: "company-list",
          element: <CompanyList></CompanyList>,
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
