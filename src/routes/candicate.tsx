import CompanyDetails from "../candidate/pages/company/company-details";
import Home from "../candidate/pages/home";
import JobDetail from "../candidate/pages/job-details/job-details";
import CompanyReviews from "../candidate/pages/company/company-review";
import CompanyWriteReviews from "../candidate/pages/company/company-write-review";
import Register from "../candidate/pages/authentication/register";
import Login from "../candidate/pages/authentication/login";
import Header from "../candidate/components/header/header";
import Footer from "../candidate/components/footer/footer";
import Search from "../candidate/pages/search-job";
import { Outlet } from "react-router-dom";
import FormVerify from "../candidate/pages/authentication/form-verify";
import MyAccount from "../candidate/pages/authentication/my-account";


const HeaderLayout = () => (
  <div style={{ display: "flex" }}>
    <Header />
    <div style={{ flexGrow: 1, paddingTop: 80 }}>
      <Outlet />
      <Footer></Footer>
    </div>
  </div>
);
export const CandidateRoute = {
  path: "/",
  element: <HeaderLayout></HeaderLayout>,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "company/:slug",
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
      path: "form-verify",
      element: <FormVerify />,
    },

    {
      path: "my-account",
      element: <MyAccount />,
    },
  ],
};
