export const validateName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s'-]{2,50}$/; // Допустимые символы
    if (name === '') {
      return 'Имя не может быть пустым';
    }
    if (!nameRegex.test(name)) {
      return 'Имя может содержать только буквы, пробелы и быть от 3 до 50 символов';
    }
    return '';
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[\d\s()-]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return 'Введите корректный номер телефона';
    }
    return '';
  };
  
  export const validateDays = (days) => {
    if (!days) {
      return 'Укажите, на сколько дней арендуете костюм.';
    } else if (days < 1) {
      return 'Минимальное количество дней аренды — 1.';
    }
    return '';
  };
  
  export const validateAgree = (agree) => {
    if (!agree) {
      return 'Вы должны согласиться на обработку персональных данных.';
    }
    return '';
  };
  
  // Функция для валидации всей формы
  export const validateForm = ({ name, phone, days, agree }) => {
    const errors = {};
  
    // Валидация полей формы
    errors.name = validateName(name);
    errors.phone = validatePhone(phone);
    errors.days = validateDays(days);
    errors.agree = validateAgree(agree);
  
    // Убираем пустые ошибки
    Object.keys(errors).forEach(key => {
      if (!errors[key]) {
        delete errors[key];
      }
    });
  
    return errors;
  };