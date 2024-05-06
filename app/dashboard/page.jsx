import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/chart/chart";

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
       
          <Chart />
        </div>
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default Dashboard;
