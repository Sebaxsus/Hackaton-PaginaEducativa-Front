import "./base.css";
import { useTypewriter } from "../../Hooks/Components/Typewrite";
import { memo } from "react";
const Typewriter = ({ text, speed = 100, pause = 5000 }) => {
  const [display] = useTypewriter({ text, speed, pause });
  return (
    <>
      {display}
      <span className="animate-blink">|</span>
    </>
  );
};

export default memo(Typewriter);
