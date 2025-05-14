import "./base.css";
const ButtonTheme = ({ toggle }) => {
  return (
    <input
      id="toggleTheme"
      type="checkbox"
      className="theme-checkbox"
      onChange={toggle}
    />
  );
};

export default ButtonTheme;
