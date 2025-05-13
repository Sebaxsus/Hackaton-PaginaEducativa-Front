//TODO: Hooks
import { useState, useCallback } from "react";

export function useHookContext() {
  const [theme, setTheme] = useState("system");

  const toggleTheme = useCallback(
    (e) => {
      setTheme(e.target.value);
      console.log(theme);
    },
    [theme]
  );

  return [theme, toggleTheme];
}
