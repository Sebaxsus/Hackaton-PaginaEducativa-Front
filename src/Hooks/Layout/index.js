import { useCallback } from "react";
import { useGlobalContext } from "../../Contexts";

export const useThemeLayout = () => {
  const { theme, toggleTheme } = useGlobalContext();

  const switchTheme = useCallback(
    (e) => {
      let data = {
        target: {
          value: "",
        },
      };
      e.target.checked
        ? (data.target.value = "theme-dark")
        : (data.target.value = "theme-light");
      toggleTheme(data);
    },
    [theme]
  );

  return [theme, toggleTheme, switchTheme];
};
