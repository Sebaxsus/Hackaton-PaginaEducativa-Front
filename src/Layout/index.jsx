import { Outlet } from "react-router";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <select name="" id="">
            <option value="">System</option>
            <option value="">Light</option>
            <option value="">Dark</option>
          </select>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
