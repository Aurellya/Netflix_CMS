import { createBrowserRouter, redirect } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import BaseLayout from "../layout/BaseLayout";
import DashboardPage from "../pages/DashboardPage";
import ViewDetailsModal from "../pages/ViewDetailsModal";
import AddMovieModal from "../pages/AddMovieModal";
import EditMovieModal from "../pages/EditMovieModal";
import GenresPage from "../pages/GenresPage";
import AddGenreModal from "../pages/AddGenreModal";
import EditGenreModal from "../pages/EditGenreModal";
import RegisterAdminPage from "../pages/RegisterAdminPage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
        children: [
          {
            path: "movies/add",
            element: <AddMovieModal />,
          },
          {
            path: "movies/:id",
            element: <ViewDetailsModal />,
          },
          {
            path: "movies/:id/edit",
            element: <EditMovieModal />,
          },
        ],
      },
      {
        path: "/genres",
        element: <GenresPage />,
        children: [
          {
            path: "add",
            element: <AddGenreModal />,
          },
          {
            path: ":id/edit",
            element: <EditGenreModal />,
          },
        ],
      },
      {
        path: "/register-admin",
        element: <RegisterAdminPage />,
      },
    ],
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
