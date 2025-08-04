import { useState } from "react";

const Input = ({ type, placeholder, icon }) => {
  const [activeEye, setActiveEye] = useState(type);

  const handleEyeClick = () => {
    if (activeEye == "password") {
      setActiveEye("text");
    } else {
      setActiveEye("password");
    }
  };

  return (
    <div className="relative">
      <input
        type={activeEye}
        placeholder={placeholder}
        className="w-full border-white border-[1px] rounded-md p-[0.3rem] pr-[2rem]  focus:outline-none"
      />

      <i
        onClick={type === "password" ? handleEyeClick : null}
        className={`absolute text-xl text-white right-[0.5rem] top-[0.3rem] transition-all duration-100 ${
          activeEye == "password" ? "bi bi-eye-slash-fill" : icon
        } ${type === "password" ? "cursor-pointer" : ""}`}
      ></i>
    </div>
  );
};

export default Input;
