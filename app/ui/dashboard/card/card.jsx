import { MdMonetizationOn, MdOutlineMonetizationOn, MdShoppingCart } from "react-icons/md";
import styles from "./card.module.css";
import { allFetchTransacCard } from "../../../../lib/data";

const Card = async() => {
  const cardData = await allFetchTransacCard();
  return (
    <div className={styles.container}>
      <MdShoppingCart size={24} />
      <div className={styles.texts}>
        <span className={styles.texts}> Total Buy</span>
        <span className={styles.number}>{cardData.totalBuy}</span>
      
      </div>
    </div>
  );
};
export default Card;

export const Card2 = async () => {
  const cardData = await allFetchTransacCard();
  return (
    <div className={styles.container}>
      <MdMonetizationOn size={24} />
      <div className={styles.texts}>
        <span className={styles.texts}> Total Sell</span>
        <span className={styles.number}>{cardData.totalSell}</span>
       
      </div>
    </div>
  );
};
export const Card3 = async () => {
  const cardData = await allFetchTransacCard();
  return (
    <div className={styles.container}>
      <MdOutlineMonetizationOn size={24} />
      <div className={styles.texts}>
        <span className={styles.texts}> Total Profit </span>
        <span className={styles.number}>{cardData.totalProfit}</span>
        
      </div>
    </div>
  );
};

