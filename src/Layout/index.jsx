import { Outlet } from "react-router";
import { useState,useEffect } from "react";
// import { useGlobalContext } from "../Contexts";

//* Example how use Layout... We can make More
//? Link https://reactrouter.com/start/data/routing#nested-routes

const Layout = () => {
  // const { theme, toggleTheme } = useGlobalContext()
  const [theme, setTheme] = useState("theme-system")

  useEffect(() => {
    console.log("Cambio el tema a: ", theme)
  }, [theme])
  return (
    <>
      <header>
        <nav className="bg-[var(--Secudary-opt)] flex justify-between w-full p-2">
          <div>
            <h4>User</h4>
          </div>
          {/* Cambiar estilos | Para obtener el value del select solo toca usar un onChange dentro del select con un lambda (e) => {themePicked(e.target.value)}*/}
          <select name="" id="themePicker" className="bg-[var(--Bg-color)]" onChange={(e) => {setTheme(e.target.value)}}>
            <option value="theme-system" selected>System</option>
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
