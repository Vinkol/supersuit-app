import React from "react";
import { useRef, useState,} from 'react';
import { motion } from "framer-motion";
import costumes from "../../data/costumes";
import CostumePreview from "../CostumePreview/CostumePreview";
import styles from "./Home.module.sass";
import logo from "../../assets/images/Group 2.png";

const Home = () => {
  const costumeSectionRef = useRef(null);

  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const radius = 40; // Радиус, на котором будет двигаться логотип относительно его центра

  const handleMouseMove = (e) => {
    if (!isHovering) return; // Двигаем логотип только при наведении

    const { clientX, clientY } = e;
    const logoElement = e.currentTarget;
    const { left, top, width, height } = logoElement.getBoundingClientRect();

    // Определяем центр логотипа
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Вычисляем угол между центром логотипа и курсором
    const angle = Math.atan2(clientY - centerY, clientX - centerX);

    // Позиционируем логотип в пределах радиуса
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    setLogoPosition({ x, y });
  };

  

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
          <motion.img
            src={logo}
            alt="logo"
            className={styles.logo}
            animate={{ x: logoPosition.x, y: logoPosition.y }} // Корректируем для центровки
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setLogoPosition({ x: 0, y: 0 }); // После ухода курсора логотип возвращается на место
            }}
          />
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