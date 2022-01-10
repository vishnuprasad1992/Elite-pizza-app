import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Featured.module.css";


const Featured = () => {
  const [index, setIndex] = useState(0)
  const images = [
    "/img/pizza1.jpg",
    "/img/pizza2.jpg",
    "/img/pizza3.jpg",
    "/img/pizza4.jpg",
  ];

  const handleArrow=(direction)=>{
    if(direction === "left"){
      setIndex(index !==0 ? index-1 :3)
    }
    if(direction==="right"){
      setIndex(index !==3 ? index+1 :0)
    }
  }
  console.log(index)
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("left")}>
        <Image
          src="/img/arrowl.png"
          alt="left-arrow"
          layout="fill"
        />
      </div>
      <div className={styles.wrapper}  style={{transform:`translateX(${-100*index}vw)`}} >
        {images.map((image, i) => (
          <div key={i} className={styles.imageContainer}>
            <Image src={image} alt="pizza" layout="fill" objectFit="cover"/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("right")}>
        <Image
          src="/img/arrowr.png"
          alt="right-arrow"
         layout="fill"
        />
      </div>
    </div>
  );
};

export default Featured;
