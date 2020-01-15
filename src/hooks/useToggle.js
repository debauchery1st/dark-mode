import { useState } from "react";

const useToggle = (key, initVal, mutation) => {
  const [toggleValue, setToggleValue] = useState({ [key]: initVal });
  const toggle = toggleValue[key];
  const flip = e => {
    e && e.preventDefault();
    const newValue = { [key]: !toggle };
    setToggleValue(newValue);
  };
  return [
    toggle,
    flip,
    htmlClassName => (!toggle ? htmlClassName : `${htmlClassName} ${mutation}`)
  ];
};

export default useToggle;
