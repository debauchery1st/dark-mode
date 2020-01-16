import { useState } from "react";

const useLocalStorage = (key, initVal) => {
  const store = window.localStorage;
  const [localState, setLocalState] = useState({
    [key]: JSON.parse(store.getItem(key)) || initVal
  });
  const setValue = value => {
    setLocalState(value); // state
    store.setItem(key, JSON.stringify(value));
  };
  return [localState, setValue];
};

export default useLocalStorage;
