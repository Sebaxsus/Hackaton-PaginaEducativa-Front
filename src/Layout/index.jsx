import { Outlet } from "react-router";
import { useGlobalContext } from "../Contexts";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

const Layout = () => {
  const { toggleTheme } = useGlobalContext();

  return (
    <>
      <header>
        <nav className="bg-[var(--Secudary-opt)] flex justify-between w-full p-2">
          <div>
            <h4>User</h4>
          </div>
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
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
