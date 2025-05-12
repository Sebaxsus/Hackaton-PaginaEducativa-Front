import { createBrowserRouter } from "react-router";

//TODO: Send a Imports to Elements Or Components
import HomePage from "../App/HomePage";

//? Example how make a Structure on React-Router https://reactrouter.com/start/data/routing#configuring-routes
const router = createBrowserRouter([
  {
    index: true,
    element : <HomePage />,
    // Component: HomePage
  },
  {
    path: "/log-in",
    // element : Login
  },
  {
    path: "/sing-up",
    // element : SingUp
  },
  // {
  //   path: "/home",
  //   // errorElement : Error
  //   // element : Layout,
  //   children: [
  //     {
  //       path: "/class/:name",
  //       // element : ClassRom
  //     },
  //   ],
  // },
]);

export default router;
