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
import CvManage from "../candidate/pages/authentication/manage-cv"
// import WriteReview from "../candidate/pages/company/write-review"
// import Setting from "../candidate/pages/authentication/setting"
import MyJobs from "../candidate/pages/authentication/my-jobs"
import SavedJobs from "../candidate/components/my-jobs/saved-jobs";

import JobInvitation from "../candidate/pages/job-invitation/job-invitation";

import RegisterCompany from "../candidate/pages/register-company/register-company";
import JobInvitationTabs from "../candidate/pages/job-invitation/job-invitation";

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
      path: "job-details",
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
      path: "register/verify",
      element: <FormVerify />,
    },

    {
      path: "my-account",
      element: <MyAccount />,
    },
    {
      path: "cv-manage",
      element: <CvManage />,
    },
    {
      path: "register-company",
      element: <RegisterCompany></RegisterCompany>,
    },
    {
      path: "job-invitation",
      element: <JobInvitationTabs></JobInvitationTabs>,
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
    },

    {
      path: "job-invitation",
      element: <JobInvitation />,
    },
    {
      path: "register-company",
      element: <RegisterCompany />,
    },
  ],
};
