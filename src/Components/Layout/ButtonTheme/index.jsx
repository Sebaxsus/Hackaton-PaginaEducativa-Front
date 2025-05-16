import "./base.css";
import { memo } from "react";
const ButtonTheme = ({ toggle, theme }) => {
  return (
    <input
      id="toggleTheme"
      type="checkbox"
      className="theme-checkbox"
      value={theme}
      onChange={toggle}
    />
  );
};

export default memo(ButtonTheme);
