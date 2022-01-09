import Image from "next/image";
import styles from "../../styles/Featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="left-arrow" />
      <div className={styles.container}>
        
      </div>
      <Image src="/img/arrowr.png" alt="right-arrow" />
    </div>
  );
};

export default Featured;
