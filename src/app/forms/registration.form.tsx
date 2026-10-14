"use  client";
import { useState } from "react";
import { Button, Form, Input } from "@heroui/react";
import { registerUser } from "@/actions/register";
import { signIn, useSession } from "next-auth/react";

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
  const { update } = useSession();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /////////////////////////// проводим валидацию Email
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMessage(null);
  console.log("Form submitted:", formData);

  const result = await registerUser(formData);
  console.log("result:", result);

  // Если registerUser вернул ошибку — не закрываем модалку
  if (result && "error" in result && result.error) {
  setErrorMessage(result.error);
  return;
}


  // Автологин после успешной регистрации
  const signInResult = await signIn("credentials", {
    email: formData.email,
    password: formData.password,
    redirect: false,
  });

  console.log("signInResult:", signInResult);

  if (signInResult?.error) {
    console.error("Ошибка автологина:", signInResult.error);
    return;
  }

  await update(); // обновляем навбар
  onClose(); // закрываем модалку
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
      {errorMessage && (
  <p className="text-danger text-sm w-full text-center">
    {errorMessage}
  </p>
)}
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
