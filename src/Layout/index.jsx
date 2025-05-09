import { Outlet } from "react-router";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

const Layout = () => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
