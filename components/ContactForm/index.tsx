"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { IFormData } from "./interface";
import Image from "next/image";

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
        username: "En az 3 karakter girmelisiniz",
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
        message: "En az 5 karakter girmelisiniz",
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
    <form onSubmit={handleSubmit} className="flex justify-center items-center ">
      <div className="flex flex-col items-center gap-9 border border-black p-14 md:p-14 rounded-lg shadow-black shadow-lg lg:p-20 lg:py-24">
        <div className="flex flex-col gap-9 sm:gap-12 sm:flex-row ">
          <div className="relative z-0 w-full group">
            <input
              onChange={handleChange}
              name="username"
              id="username"
              className={`block py-2.5 px-0 w-full  bg-transparent border-b  pl-2 appearance-none focus:outline-none focus:ring-0 peer ${
                error.username ? "border-[#D40000]" : "border-black"
              }`}
              placeholder=" "
              autoComplete="off"
              value={formData.username}
            />
            <label
              htmlFor="username"
              className={`peer-focus:font-medium pl-2 absolute duration-300 transform  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-sm md:text-md lg:text-lg ${
                error.username && "text-[#D40000]"
              }`}
            >
              Ad Soyad
            </label>
            {error.username && (
              <span className="absolute flex items-center gap-1 pt-1.5 text-xs leading-3 text-[#D40000]">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {error.username}
              </span>
            )}
          </div>

          <div className="relative z-0 w-full  group">
            <input
              onChange={handleChange}
              name="email"
              id="email"
              className={`block py-2.5 px-0 w-full  border-b pl-2 bg-transparent appearance-none focus:outline-none focus:ring-0 peer ${
                error.email ? "border-[#D40000]" : "border-black"
              }`}
              placeholder=" "
              autoComplete="off"
              value={formData.email}
            />
            <label
              htmlFor="email"
              className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-sm md:text-md lg:text-lg  ${
                error.email && "text-[#D40000]"
              }`}
            >
              E-posta
            </label>
            {error.email && (
              <span className="absolute pt-2 text-xs leading-4 text-[#D40000] w-full">
                {error.email}
              </span>
            )}
          </div>
        </div>

        <div className="relative z-0 w-full  group">
          <input
            onChange={handleChange}
            name="message"
            id="message"
            className={`block pb-12 py-2.5 px-0 w-full border-b pl-2 bg-transparent  appearance-none focus:outline-none focus:ring-0 peer ${
              error.message ? "border-[#D40000]" : "border-black"
            }`}
            placeholder=" "
            value={formData.message}
            autoComplete="off"
          />
          <label
            htmlFor="message"
            className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-sm md:text-md lg:text-lg  ${
              error.message && "text-[#D40000]"
            }`}
          >
            Mesaj
          </label>
          {error.message && (
            <span className="absolute pt-2 text-xs leading-4 text-[#D40000] w-full">
              {error.message}
            </span>
          )}
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="flex justify-center items-center px-4 py-3 md:px-9 md:py-4 border border-sky-500 bg-sky-500 rounded-lg transition duration-300 text-[#fff] hover:bg-[#fff] hover:text-sky-500"
          >
            Gönder
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
