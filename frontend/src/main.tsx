import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./layout/DashboardLayout";
import UserProvider from "./context/UserContext";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "settings",
        element: <p>settigns</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    s{" "}
  </React.StrictMode>
);
