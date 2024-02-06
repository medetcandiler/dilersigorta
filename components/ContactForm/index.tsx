"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { IFormData } from "./interface";
import emailjs from "@emailjs/browser";
import Loader from "../Loader";
import ContactFormError from "../ContactFormError";
import SuccessModal from "../SuccessModal";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = "";

    if (name === "username") {
      if (value.length < 3) {
        errorMessage = "En az 3 karakter girmelisiniz";
      }
    } else if (name === "email") {
      if (!validateEmail(value)) {
        errorMessage = "Geçersiz e-posta adresi";
      }
    } else if (name === "message") {
      if (value.length < 5) {
        errorMessage = "En az 5 karakter girmelisiniz";
      }
    }

    setError((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(error).some((errorMsg) => errorMsg !== "")) {
      return;
    }

    setIsLoading(true);
    setError({});

    const emailData: Record<string, unknown> = {
      name: formData.username,
      message: formData.message,
      email: formData.email,
    };

    emailjs.init("I3AlGHR70MDSofPQ5");

    try {
      await emailjs.send("service_394cpsn", "dilersigortatemplate", emailData);
      setShowModal(true)
      setFormData({
        username: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowModal(false), 3500)
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isSubmitDisabled =
    formData.username.length < 3 ||
    !validateEmail(formData.email) ||
    formData.message.length < 5 ||
    isLoading;

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center ">
      <div className="relative flex flex-col items-center gap-10 border border-black p-14 rounded-lg shadow-black shadow-lg lg:p-20 lg:py-20">
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
            {error.username && <ContactFormError error={error.username} />}
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
            {error.email && <ContactFormError error={error.email} />}
          </div>
        </div>

        <div className="relative z-0 w-full  group">
          <input
            onChange={handleChange}
            name="message"
            id="message"
            className={`block pb-16 py-2.5 px-0 w-full border-b pl-2 bg-transparent  appearance-none focus:outline-none focus:ring-0 peer ${
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
          {error.message && <ContactFormError error={error.message} />}
        </div>

        <div className=" relative flex justify-center md:justify-start">
          <button
            type="submit"
            className="skySqrButton flex items-center justify-center gap-2"
            disabled={isSubmitDisabled}
          >
            {isLoading && <Loader isSectionLoader={false} />}{" "}
            <span>Gönder</span>
          </button>
        </div>
        {showModal && <SuccessModal />}
      </div>
    </form>
  );
};

export default ContactForm;
