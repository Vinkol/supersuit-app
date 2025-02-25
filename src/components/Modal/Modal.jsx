import React, { useState } from "react";
import styles from "./Modal.module.sass";
import { validateForm } from '../../data/formValidation';

const Modal = ({ isOpen, onClose, costume }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setAgree(checked);
    } else {
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'phone':
          setPhone(value);
          break;
        case 'days':
          setDays(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация всей формы
    const formErrors = validateForm({ name, phone, days, agree });
    setErrors(formErrors); // Обновляем ошибки

    if (Object.keys(formErrors).length === 0) {
      alert('Форма успешно отправлена!');
      // Сбросить форму после отправки
      setName('');
      setPhone('');
      setDays('');
      setAgree(false);
    }
  };

  if (!isOpen) return null; // Если модалка не открыта, не рендерим компонент

  return (
    <div className={styles.overlay} onClick={onClose}>
        <button className={styles.closeButton} onClick={onClose}>
          &#10006;
        </button>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
            <h4 className={styles.title}>Аренда костюма "{costume.name}"</h4>
            <p className={styles.description}>
                Пожалуйста, укажите ваши контактные данные, чтобы мы забронировали
                костюм на ваше имя.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
            <div className="form__label">
                <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                placeholder="Как вас зовут?"
                required
                onInvalid={(e) => e.preventDefault()}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className="form__label">
                <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                placeholder="+7 (977) 325-41-60"
                required
                onInvalid={(e) => e.preventDefault()}
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>

            <div className="form__label">
                <input
                type="number"
                name="days"
                value={days}
                onChange={handleInputChange}
                min="1"
                placeholder="На сколько дней арендуете?"
                required
                onInvalid={(e) => e.preventDefault()}
                />
                 {errors.days && <span className={styles.error}>{errors.days}</span>}
            </div>

            <label>
                <input
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={handleInputChange}
                required
                onInvalid={(e) => e.preventDefault()}
                />
                <p className={styles.checkboxText}>Я согласен на обработку моих персональных данных</p>
                {errors.agree && <span className={styles.error}>{errors.agree}</span>}
            </label>

            <button type="submit" className={styles.submitButton}>
                Оставить заявку
            </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;