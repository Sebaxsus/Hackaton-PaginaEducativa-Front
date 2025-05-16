import { createBrowserRouter } from "react-router";

//TODO: Send a Imports to Elements Or Components
import HomePage from "../App/HomePage";
import ClassRoom from "../App/ClassRoom";
import Layout from "../Layout";
import App from "../App";
import NotFound from "../Components/NotFound";
import ClerkContainer from "../App/ClerkContainer";
import Auth from "./Auth";

// Clerk imports
import { SignUp, SignIn } from "@clerk/clerk-react";

//? Example how make a Structure on React-Router https://reactrouter.com/start/data/routing#configuring-routes
const router = createBrowserRouter([
  { path: "/", Component: App, errorElement: <NotFound /> },
    {
      path: "/log-in",
      element : <ClerkContainer><SignIn/></ClerkContainer>
    },
    {
      path: "/sing-up",
      element : <ClerkContainer><SignUp/></ClerkContainer>
    },
  {
    path: "/home",
    // Component: Layout,
    element: <Auth><Layout /></Auth>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "class",
        Component: ClassRoom,
        // children: [{ path: "/:name" }],
      },
    ],
  },
]);

export default router;
