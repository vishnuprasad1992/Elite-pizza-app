import Image from "next/image";
import styles from "../../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" height="500" width="500" />

      <h1 className={styles.title}> Chicken Pizza</h1>
      <span className={styles.price}> Rs.200.00</span>
      <p className={styles.desc}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
    </div>
  );
};

export default PizzaCard;
