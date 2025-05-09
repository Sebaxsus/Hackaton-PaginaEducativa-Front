import { createRoot } from "react";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import router from "./Router";
import MainContext from "./Contexts";

import "./base.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      {
        //? If wanna see More About react Router with DataMode see => https://reactrouter.com/start/data/installation
      }
      <RouterProvider router={router} />
    </MainContext>
  </StrictMode>
);
