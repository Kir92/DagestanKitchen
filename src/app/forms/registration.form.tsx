"use  client";
import { useState } from "react";
import { Button, Form, Input } from "@heroui/react";
import { registerUser } from "@/actions/register";

interface IProps {
  ///////////////////////////////////////////////////////////////////////////////пропс для функции onclose()
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "", ///////////////////////////////////////////Определяем состояние для параметров ввода данных
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /////////////////////////// проводим валидацию Email
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); //валидация и отправка формы
    console.log("Form submitted:", formData);

    const result = await registerUser(formData);
    console.log(result);

    onClose(); //функция автозакрытия при нажатии зарегистрироваться
  };
  return (
    <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Enter your email"
        type="email" //////////////////////////////////////////////////////////////Основной вывод ФОРМЫ Email от HEROUI
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus: outline none",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Почта обязательна!";
          if (!validateEmail(value)) return "Некорректный Email ";
          return null;
        }}
      />
      <Input
        isRequired
        name="password"
        placeholder="Введите пароль"
        type="password"
        value={formData.password} /////////////////////////////////////////////////////Форма ввода пароля
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus: outline none",
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Пароль обязателен!";
          if (value.length < 6)
            return "Пароль должен быть не менее 6 символов!";
          return null;
        }}
      />

      <Input
        isRequired
        name="ConfirmPassword"
        placeholder="Подтвердите пароль"
        type="password"
        value={formData.confirmPassword} ////////////////////////////////////////////////////////Форма подтверждения  пароля
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus: outline none",
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Пароль для подтверждения обязателен!";
          if (value !== formData.password) return "Пароли не совпадают!";
          return null;
        }}
      />
      <div className=" flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};
export default RegistrationForm;
