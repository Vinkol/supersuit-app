import React from "react";
import { useRef } from 'react';
import costumes from "../../data/costumes";
import CostumePreview from "../CostumePreview/CostumePreview";
import styles from "./Home.module.sass";
import logo from "../../assets/images/Group 2.png";

const Home = () => {
  const costumeSectionRef = useRef(null);

  const scrollToCostumeSection = () => {
    if (costumeSectionRef.current) {
      costumeSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.main__title__container}>
          <h1 className={styles.main__title}>
            <span className={styles.title__highlight}>Аренда костюмов</span> 
              высшего качества по доступной цене
          </h1>
          <button className={styles.button} onClick={scrollToCostumeSection}>Подобрать костюм</button>
        </div>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.costumeSection} ref={costumeSectionRef}>
        <h2 className={styles.title_costume}>Костюмы в наличии</h2>
        <div className={styles.costumeGrid}>
          {costumes.map((costume) => (
            <CostumePreview
              key={costume.id}
              id={costume.id}
              image={costume.image}
              name={costume.name}
              size={costume.size}
              price={costume.price}
              stock={costume.stock} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;