import { useEffect, useState } from "react";

import storage from "./storage";

function useStorage(...args) {
  const initialValue = args.pop();
  const getValue = () => {
    const item = storage.get(...args);

    if (item) {
      return item;
    } else {
      storage.set(...args, initialValue);
      return initialValue;
    }
  };

  const [state, setState] = useState(getValue());

  useEffect(() => {
    function handleStorageChange() {
      const value = storage.get(...args);
      setState(value);
    }

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, []);

  return [state];
}

export default useStorage;
