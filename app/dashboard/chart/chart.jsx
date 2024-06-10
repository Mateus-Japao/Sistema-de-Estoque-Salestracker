import { allFetchTransac, allFetchTransacDashboard } from "../../../lib/data";
import Chart from "./chartIcon";
const ChartPage = async () => {
    const data = await allFetchTransacDashboard();
  return (
    <div>
      <Chart data={data} />
    </div>
  );
};

export default ChartPage
