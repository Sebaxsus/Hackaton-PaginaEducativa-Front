import { Outlet } from "react-router";
// import { useGlobalContext } from "../Contexts";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

const Layout = () => {
  // const { theme, toggleTheme } = useGlobalContext()
  return (
    <>
      <header>
        <nav>
          {/* Cambiar estilos */}
          <select name="" id="themePicker" className="bg-[var(--Bg-color)]">
            <option value="theme-system">System</option>
            <option value="theme-light" selected>Light</option>
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
