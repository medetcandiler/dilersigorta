import { FC } from "react";

const SuccessModal: FC = () => {
  return (
    <div className="absolute bottom-1  bg-[#f2f2f2] text-slate-800 px-4 py-3 shadow-md left-1/2 -translate-x-1/2 flex items-center gap-1 z-50 border border-slate-400 rounded md:bottom-1.5 lg:bottom-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width="20px"
        height="20px"
      >
        <path
          fill="#bae0bd"
          d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"
        />
        <path
          fill="#5e9c76"
          d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M11.2,20.1l5.8,5.8l13.2-13.2"
        />
      </svg>
      <span className="whitespace-nowrap text-sm">Mesajınız başarıyla gönderildi!</span>
    </div>
  );
};

export default SuccessModal;
