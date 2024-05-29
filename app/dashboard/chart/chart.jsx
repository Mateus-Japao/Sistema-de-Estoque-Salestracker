import { allFetchTransac } from "../../../lib/data";
import Chart from "./chartIcon";
const ChartPage = async () => {
    const data = await allFetchTransac();
  return (
    <div>
      <Chart data={data} />
    </div>
  );
};

export default ChartPage
