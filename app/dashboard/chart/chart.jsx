import { allFetchTransac } from "../../../lib/data";
import Chart from "./chartIcon";
const ChartPage = () => {
    const {dateBuy, dateSell} = allFetchTransac();
    const data = [
    { date: "Página A", Sell: 4000, Buy: 2400, amt: 2400 },
    { name: "Página B", Sell: 3000, Buy: 1398, amt: 2210 },
    { name: "Página C", Sell: 2000, Buy: 9800, amt: 2290 },
    { name: "Página D", Sell: 2780, Buy: 3908, amt: 2000 },
    { name: "Página E", Sell: 1890, Buy: 4800, amt: 2181 },
    { name: "Página F", Sell: 2390, Buy: 3800, amt: 2500 },
    { name: "Página G", Sell: 3490, Buy: 4300, amt: 2100 },
  ];
  return (
    <div>
      <Chart data={dateBuy} />
    </div>
  );
};

export default ChartPage
