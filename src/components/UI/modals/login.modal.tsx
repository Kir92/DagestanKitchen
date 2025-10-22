// Импорты необходимых компонентов
"use client"; // Указываем, что компонент является клиентским (работает на стороне клиента)

import CustomModal from "@/components/common/modal"; // Импортируем кастомный компонент модального окна
import LoginForm from "@/app/forms/login.form"; // Импортируем форму логина (исправлена опечатка "иморт" → "импортируем")

// Определяем интерфейс пропсов компонента
interface IProps {
  isOpen: boolean; // Флаг, определяющий, открыто ли модальное окно
  onClose: () => void; // Функция для закрытия модального окна
}

// Создаем функциональный компонент
const LoginModal = ({ isOpen, onClose }: IProps) => {
  return (
    <CustomModal 
      isOpen={isOpen} // Передаем флаг открытия модального окна
      onClose={onClose} // Передаем функцию закрытия
      title= "Авторизация" // Задаем заголовок модального окна
    >
      <LoginForm onClose = {onClose} />
    </CustomModal>
  );
};

export default LoginModal; // Экспортируем компонент по умолчанию
