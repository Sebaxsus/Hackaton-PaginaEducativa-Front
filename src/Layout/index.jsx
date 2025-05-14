import { Outlet } from "react-router";
import { useThemeLayout } from "../Hooks/Layout";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

import HeadIcons from "../Components/Layout/HeadIcons";
import ButtonTheme from "../Components/Layout/ButtonTheme";

const Layout = () => {
  const [theme, toggleTheme, switchTheme] = useThemeLayout();

  return (
    <>
      <header className="bg-[var(--Secondary-Color)] w-full h-15 p-2 flex justify-between items-center">
        <HeadIcons />
        <nav className="w-auto">
          {/* <select
            id="themePicker"
            className="bg-[var(--Bg-color)]"
            onChange={toggleTheme}
            value={theme}
          >
            <option value="theme-system">System</option>
            <option value="theme-light">Light</option>
            <option value="theme-dark">Dark</option>
          </select> */}
        </nav>
        <section className="flex justify-around items-center w-20 ">
          <ButtonTheme toggle={switchTheme} />
          <button className="btn-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="[--Buttons-size:1.75rem] hover:[--Buttons-color:#D37676]"
            >
              <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" />
              <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" />
            </svg>
          </button>
        </section>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
