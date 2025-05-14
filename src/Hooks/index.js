//TODO: Hooks
import { useState, useCallback } from "react";

export function useHookContext() {
  const [theme, setTheme] = useState("theme-system");

  const toggleTheme = useCallback(
    (e) => {
      setTheme(e.target.value);
    },
    [theme]
  );

  return [theme, toggleTheme];
}
