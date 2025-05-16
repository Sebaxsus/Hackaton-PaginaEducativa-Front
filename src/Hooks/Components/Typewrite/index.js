import { useEffect, useState } from "react";

export const useTypewriter = ({ text, speed = 100, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && index <= text.length) {
      setDisplayedText(text.slice(0, index));
      typingTimeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      setDisplayedText(text.slice(0, index));
      typingTimeout = setTimeout(() => {
        setIndex(index - 1);
      }, speed / 2);
    } else if (!isDeleting && index > text.length) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
        setIndex(text.length - 1);
      }, pause);
    } else if (isDeleting && index < 0) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting]);

  return [displayedText];
};
