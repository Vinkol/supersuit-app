import React from "react";
import { Link } from "react-router-dom";
import styles from "./CostumePreview.module.sass";
import { motion } from "framer-motion";

const CostumePreview = (props) => {
    const { id, image, name, size, price, stock } = props;
  
    return (
      <motion.div
        className={styles.card}
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        >
        <div className={styles.card}>
          <img className={styles.image} src={image} alt={name} />
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.size}>Размер: {size}</p>
          <h5 className={styles.price}>{price}₽/день</h5>
          <Link to={`/costume/${id}`} className={styles.quickView}>
            Быстрый просмотр
          </Link>
          <p className={stock > 0 ? styles.stock : `${styles.stock} ${styles.outOfStock}`}>
              {stock > 0 ? `В наличии: ${stock}` : "Нет в наличии"}
          </p>
        </div>
      </motion.div>
    );
  };
  
  export default CostumePreview;