// Импорты необходимых компонентов
"use client"; // Указывает, что компонент является клиентским (работает на стороне клиента)
import CustomModal from "@/components/common/modal"; // Импортируем кастомный компонент модального окна
import RegistrationForm from "@/app/forms/registration.form"; // Импортируем форму регистрации

// Определяем интерфейс пропсов компонента
interface IProps {
  isOpen: boolean; // Флаг, определяющий, открыто ли модальное окно
  onClose: () => void; // Функция для закрытия модального окна
}

// Создаем функциональный компонент
const RegistrationModal = ({ isOpen, onClose }: IProps) => {
  return (
    <CustomModal
      isOpen={isOpen} // Передаем флаг открытия модального окна
      onClose={onClose} // Передаем функцию закрытия
      title="Создать аккаунт" // Задаем заголовок модального окна
    >
      <RegistrationForm
        onClose={onClose} // Передаем функцию закрытия в форму регистрации
      />
    </CustomModal>
  );
};

export default RegistrationModal; // Экспортируем компонент по умолчанию
