import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CandidateRoute } from "./routes/candicate";
import { CompanyRoute } from "./routes/company";
import { AdminRoute } from "./routes/admin";
import AdminLogin from "./admin/pages/authentication/admin-login";

function App() {
  const router = createBrowserRouter([
    CandidateRoute,
    CompanyRoute,
    {
      path: "/login-admin",
      element: <AdminLogin />,
    },
    AdminRoute,
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
