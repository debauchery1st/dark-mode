import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, mutation }) => {
  return (
    <div className={mutation("charts")}>
      {coinData.map(coin => (
        <div className={mutation("chart__container")} key={coin.name}>
          <h2 className={mutation("coin__title")}>{coin.name}</h2>
          <h4 className={mutation("coin__symbol")}>{coin.symbol}</h4>
          <div className={mutation("coin__logo")}>
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
