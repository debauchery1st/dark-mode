import useLocalStorage from "./useLocalStorage";

const useToggle = (key, initVal, mutation) => {
  const [toggleValue, setToggleValue] = useLocalStorage(key, initVal);
  const toggle = toggleValue[key];
  const flip = e => {
    e && e.preventDefault();
    setToggleValue({ [key]: !toggle });
  };
  return [
    toggle,
    flip,
    htmlClassName => (!toggle ? htmlClassName : `${htmlClassName} ${mutation}`)
  ];
};

export default useToggle;
