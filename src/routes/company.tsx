import AddNewPost from "../company/pages/job/post-job";
import Index from "../company/pages/job";
import Draft from "../candidate/pages/draft/draft";
import EditPostJob from "../company/pages/job/edit-job";
import DetailPostJob from "../company/pages/job/job-detail";
import { Sidebar } from "../shared/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import BuyITC from "../company/pages/buy-itc/buy-itc";

import Invitation from "../company/pages/invitations/invitation";
import { ToastContainer } from "react-toastify";

const RootLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flexGrow: 1 }} className="bg-white lg:pl-[270px] p-[20px]">
      <ToastContainer position="top-right"></ToastContainer>
      <Outlet />
    </div>
  </div>
);
export const CompanyRoute = {
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

    {
      path: "buy-itc",
      element: <BuyITC></BuyITC>,
    },

    {
      path: "invitation",
      element: <Invitation></Invitation>,
    },
  ],
};
