import { useState } from "react";

const useLocalStorage = (key, initVal) => {
  const store = window.localStorage;
  const stored = JSON.parse(store.getItem(key));
  const [localState, setLocalState] = useState({
    [key]: stored.darkMode || initVal
  });
  const setValue = value => {
    setLocalState(value); // state
    store.setItem(key, JSON.stringify(value));
  };
  return [localState, setValue];
};

export default useLocalStorage;
