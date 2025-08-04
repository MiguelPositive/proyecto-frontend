const Button = ({ text, animation }) => {
  return (
    <div
      className={`rounded-md bg-[#15072F] text-center text-white p-[0.3rem] shadow-md shadow-black/80 hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <p className={`${animation}`}> {text}</p>
    </div>
  );
};

export default Button;
