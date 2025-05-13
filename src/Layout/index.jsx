import { Outlet } from "react-router";
import { useGlobalContext } from "../Contexts";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

import HeadIcons from "./HeadIcons";

const Layout = () => {
  const { toggleTheme } = useGlobalContext();

  return (
    <>
      <header className="bg-[var(--Secondary-Color)] w-full h-15 p-2 flex justify-between items-center">
        <HeadIcons />
        <nav className="w-auto">
          <select
            name=""
            id="themePicker"
            className="bg-[var(--Bg-color)]"
            onChange={toggleTheme}
          >
            <option value="theme-system">System</option>
            <option value="theme-light">Light</option>
            <option value="theme-dark">Dark</option>
          </select>
        </nav>
        <section>
          <div>Log In</div>
          <div>Sign Up</div>
        </section>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
