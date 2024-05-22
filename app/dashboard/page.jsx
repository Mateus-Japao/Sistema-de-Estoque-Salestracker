import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Chart from "./chart/page";

import Transactions from "./transactions/page";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <Chart />
          </div>
        <Transactions/>
        </div>
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default Dashboard;
