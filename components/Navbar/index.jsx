import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navItemSection01}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="call button"
            height="32px"
            width="32px"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}> 9786540621 </div>
        </div>
      </div>
      <div className={styles.navItemSection02}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Homepage</li>
          <li className={styles.navListItem}>Products</li>
          <li className={styles.navListItem}>Menu</li>
          <Image src="/img/logo.png" height="69px" width="160px" />
          <li className={styles.navListItem}>Events</li>
          <li className={styles.navListItem}>Blog</li>
          <li className={styles.navListItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.navItemSection03}>
        <div className={styles.cart}>
        <Image src="/img/cart.png" height={"30px"} width={"30px"}/>
        <div className={styles.counter}>
          4
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
