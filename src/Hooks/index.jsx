//TODO: Example
import { useState, useCallback } from "react";

const useHook = () => {
  // const [is, set] = useState();
  // const function = useCallBack(()=> {}, [])
  // useEffect(()=>{},[])
  //return []
};

export function useHookContext() {
  const [theme, setTheme] = useState("system")

  const toggleTheme = useCallback((value) => {
    return e
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export default useHook;
