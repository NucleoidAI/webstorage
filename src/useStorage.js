import { useEffect, useState } from "react";

import storage from "./storage";

function useStorage(...args) {
  const initialValue = args.pop();

  const [state, setState] = useState(null);

  useEffect(() => {
    if (storage.get(...args) === null) {
      storage.set(...args, initialValue);
    }

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
