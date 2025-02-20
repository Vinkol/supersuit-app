import React from "react";
import { useParams, Link } from "react-router-dom";
import costumes from "../../data/costumes";
import styles from "./CostumeCard.module.sass";

const CostumeCard = () => {
  const { id } = useParams();
  const costume = costumes.find((item) => item.id === parseInt(id));

  if (!costume) {
    return <h2 className={styles.notFound}>Костюм не найден</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{costume.name}</h1>
      <img className={styles.image} src={costume.image} alt={costume.name} />
      <p className={styles.description}>{costume.description}</p>
      <Link className={styles.backLink} to="/">Назад</Link>
    </div>
  );
};

export default CostumeCard;