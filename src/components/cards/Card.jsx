const Card = ({ children }) => {
  return (
    <div className="bg-[#F78732] shadow-md shadow-black/80 w-full rounded-md p-[1rem] opacity-95 transition-all duration-100 600:p-[2rem]">
      {children}
    </div>
  );
};

export default Card;
