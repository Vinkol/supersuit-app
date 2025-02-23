import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import costumes from "../../data/costumes";
import styles from "./CostumeCard.module.sass";

const CostumeCard = () => {
  const { id } = useParams(); // Получаем id из URL
  const costume = costumes.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(costume.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const descriptionParagraphs = costume.description.split("\n");

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  if (!costume) {
    return <h2 className={styles.notFound}>Костюм не найден</h2>;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumbs}>
        <Link to="/">Главная</Link> / {costume.name}
      </nav>

      <div className={styles.content}>
        <div className={styles.gallery}>
          <div className={styles.thumbnails}>
            <img
              src={costume.image}
              alt="Миниатюра"
              onClick={() => setSelectedImage(costume.image)}
            />
          </div>
          <div className={styles.mainImage}>
            <img src={selectedImage} alt={costume.name} />
          </div>
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{costume.name}</h1>
          <p className={styles.article}>0123238313</p>
          <p className={styles.price}>{costume.price}₽/сутки</p>
          <h4 className={styles.boldTitle}>
            <strong>Комплектация:</strong> {costume.equipment}
          </h4>
          <h4 className={styles.boldText}>
            <strong>Размер:</strong> {costume.size}
          </h4>
          <button className={styles.orderButton} onClick={handleOpenModal}>Оставить заявку</button>
          <p className={costume.stock > 0 ? styles.stock : `${styles.stock} ${styles.outOfStock}`}>
            {costume.stock > 0 ? `В наличии: ${costume.stock}` : "Нет в наличии"}
          </p>
        </div>
      </div>

      <div className={styles.descriptionBlock}>
        <h2 className={styles.descriptionTitle}>Описание</h2>
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index} className={styles.description}>{paragraph}</p>
        ))}
      </div>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} costume={costume} /> 
    </div>
  );
};

export default CostumeCard;