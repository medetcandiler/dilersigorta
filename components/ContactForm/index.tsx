"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { IFormData } from "./interface";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({});

    if (formData.username.length < 3) {
      setError((prev) => ({
        ...prev,
        username: "Kullanıcı adı en az 3 karakter olmalıdır",
      }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setError((prev) => ({ ...prev, email: "Geçersiz e-posta adresi" }));
      return;
    }

    if (formData.message.length < 5) {
      setError((prev) => ({
        ...prev,
        message: "Mesaj en az 5 karakter olmalıdır",
      }));
      return;
    }

    console.log(formData);

    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center "
    >
      <div className="flex flex-col items-center gap-7 border border-sky-500 p-14  rounded-3xl shadow-sky-800 shadow-xl lg:p-20 lg:py-24">
        <div className="relative z-0 w-full  group">
          <input
            onChange={handleChange}
            name="username"
            id="username"
            className={`block py-2.5 px-0 w-full  bg-transparent border-b appearance-none focus:outline-none focus:ring-0 peer ${
              error.username ? "border-[#D40000]" : "border-black"
            }`}
            placeholder=" "
            autoComplete="off"
            value={formData.username}
          />
          <label
            htmlFor="username"
            className={`peer-focus:font-medium pl-2 absolute duration-300 transform  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${
              error.username && "text-[#D40000]"
            }`}
          >
            Kullanıcı Adı
          </label>
        </div>

        <div className="relative z-0 w-full  group">
          <input
            onChange={handleChange}
            name="email"
            id="email"
            className={`block py-2.5 px-0 w-full   bg-transparent border-b appearance-none focus:outline-none focus:ring-0 peer ${
              error.email ? "border-[#D40000]" : "border-black"
            }`}
            placeholder=" "
            autoComplete="off"
            value={formData.email}
          />
          <label
            htmlFor="email"
            className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${
              error.email && "text-[#D40000]"
            }`}
          >
            E-posta
          </label>
        </div>

        <div className="relative z-0 w-full  group">
          <input
            onChange={handleChange}
            name="message"
            id="message"
            className={`block h-20 py-2.5 px-0 w-full  bg-transparent border-b appearance-none focus:outline-none focus:ring-0 peer ${
              error.message ? "border-[#D40000]" : "border-black"
            }`}
            placeholder=" "
            value={formData.message}
          />
          <label
            htmlFor="message"
            className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${
              error.message && "text-[#D40000]"
            }`}
          >
            Mesaj
          </label>
        </div>

        <div className="flex justify-center md:justify-start">
          <button type="submit" className="flex justify-center items-center px-4 py-3 md:px-9 md:py-4 border border-sky-500 bg-sky-500 rounded-full transition duration-300 text-[#fff] hover:bg-[#fff] hover:text-sky-500">
            Gönder
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
