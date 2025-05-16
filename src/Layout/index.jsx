import { Outlet } from "react-router";
import { useThemeLayout } from "../Hooks/Layout";
import { useGlobalContext } from "../Contexts";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

import HeadIcons from "../Components/Layout/HeadIcons";
import ButtonTheme from "../Components/Layout/ButtonTheme";
import Typewriter from "../Components/Typewriter";
import PopUp from "../Components/Layout/PopUp";

const Layout = () => {
  const [theme, switchTheme] = useThemeLayout();
  const { showPopUp } = useGlobalContext();

  return (
    <>
      <PopUp />
      <header className="fixed w-[97.5%] h-auto bg-[var(--Secondary-Color))] m-[1rem] rounded-t-lg flex flex-col gap-[5rem]">
        <section className="w-[100%] h-20 p-10 border-b-1 flex items-center justify-between">
          <h1 className="font-Limelight text-4xl font-extrabold w-150">
            <Typewriter text="Classroom" />
          </h1>
          <nav className="flex flex-row items-center gap-[1rem]">
            <ButtonTheme toggle={switchTheme} value={theme} />
            <HeadIcons popUp={showPopUp} />
          </nav>
        </section>
      </header>
      <main className="h-40"></main>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
