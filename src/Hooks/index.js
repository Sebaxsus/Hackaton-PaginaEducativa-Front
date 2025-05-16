//TODO: Hooks
import { useState, useCallback } from "react";

export function useHookContext() {
  const [theme, setTheme] = useState("theme-system");
  const [popUp, setPopUp] = useState(false);

  const showPopUp = useCallback(() => {
    setPopUp(true);
    // setTimeout(() => {
    //   setPopUp(false);
    // }, 2000);
  }, [popUp]);

  const toggleTheme = useCallback(
    (e) => {
      setTheme(e.target.value);
    },
    [theme]
  );

  return [theme, toggleTheme, popUp, showPopUp];
}
