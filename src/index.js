import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useToggle from "./hooks/useToggle";
import useLocalStorage from "./hooks/useLocalStorage";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [readCookie, writeCookie] = useLocalStorage("darkMode");
  const localStore = { read: readCookie, write: writeCookie };
  const [darkMode, toggleMode, mutation] = useToggle(
    "darkMode",
    false,
    "dark-mode",
    localStore
  );
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={mutation("App")}>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} mutation={mutation} />
      <Charts coinData={coinData} darkMode={darkMode} mutation={mutation} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
