import styles from "../../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> The Best Pizza in the town</h1>
      <div className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
        consequatur magnam! Quidem animi, expedita sit tempore, nisi beatae
        neque modi reiciendis dolor doloribus aut cum, deserunt voluptatum
        dolorem repellat reprehenderit?
      </div>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
