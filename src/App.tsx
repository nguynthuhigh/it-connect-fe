import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CandidateRoute } from "./routes/candicate";
import { CompanyRoute } from "./routes/company";
import { AdminRoute } from "./routes/admin";

function App() {
  const router = createBrowserRouter([
    CandidateRoute,
    CompanyRoute,
    AdminRoute,
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
