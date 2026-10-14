"use  client";
import { useState } from "react";
import { Button, Form, Input } from "@heroui/react";
import { signInWithCredentials } from "@/actions/sign-in";
import { useSession } from "next-auth/react";

interface IProps {
  ///////////////////////////////////////////////////////////////////////////////пропс для функции onclose()
  onClose: () => void;
}


const LoginForm = ({ onClose }: IProps) => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "", ///////////////////////////////////////////Определяем состояние для параметров ввода данных
    
  });
  const { update } = useSession();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMessage(null);
  console.log("Form submitted:", formData);

  const result = await signInWithCredentials(
    formData.email,
    formData.password
  );
  console.log("result:", result);

  if (result && typeof result === "object" && "error" in result && result.error) { 
    setErrorMessage("Неверный email или пароль");
    return;
  }

  await update();
  onClose();
};
  return (
    <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Введите Ваш Email"
        type="email" //////////////////////////////////////////////////////////////Основной вывод ФОРМЫ Email от HEROUI
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus: outline none",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Почта обязательна!";

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

          return null;
        }}
      />
{errorMessage && (
  <p className="text-danger text-sm w-full text-center">
    {errorMessage}
  </p>
)}
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Войти
        </Button>
      </div>
    </Form>
  );
};
export default LoginForm;
