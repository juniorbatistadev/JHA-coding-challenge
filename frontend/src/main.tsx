import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./layout/DashboardLayout";
import UserProvider from "./context/UserContext";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewJHA from "./pages/ViewJHA";
import TechStack from "./pages/TechStack";

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
        path: "jha/:id",
        element: <ViewJHA />,
      },
      {
        path: "tech",
        element: <TechStack />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
