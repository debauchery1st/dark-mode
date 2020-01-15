import { useState } from "react";

const useToggle = (key, initVal) => {
  const [toggleValue, setToggleValue] = useState({ [key]: initVal });
  const toggle = toggleValue[key];
  const flip = e => {
    e && e.preventDefault();
    const newValue = { [key]: !toggle };
    setToggleValue(newValue);
  };
  return [toggle, flip];
};

export default useToggle;
