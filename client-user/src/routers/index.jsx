import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import DashboardPage from "../pages/DashboardPage";
import ViewDetailsModal from "../pages/ViewDetailsModal";
import PagesUnderMaintenance from "../pages/PagesUnderMaintenance";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "movies/:slug",
        element: <ViewDetailsModal />,
      },
      {
        path: "soon",
        element: <PagesUnderMaintenance />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
