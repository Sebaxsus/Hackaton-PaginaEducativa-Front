import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import router from "./Router";
import MainContext from "./Contexts";

// Clerk SDK Import
import { ClerkProvider } from "@clerk/clerk-react";

import "./base.css";

// TODO: Toca importar el .env, Se me olvido lo de vite.env SJJS
const PUBLISHALBE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      {
        //? If wanna see More About react Router with DataMode see => https://reactrouter.com/start/data/installation
      }
      <ClerkProvider publishableKey={PUBLISHALBE_KEY} afterSignOutUrl={"/"}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </MainContext>
  </StrictMode>
);
