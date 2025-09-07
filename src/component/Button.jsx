const Button = ({ className, buttonName }) => {
  return (
    <div>
      <a
        href="#"
        className={`font-nunito font-semibold text-[18px] text-[#fff] leading-[200%] py-[20px] px-[48px] bg-[#8454F5] rounded-[18px] inline-block ${className}`}
      >
        {buttonName}
      </a>
    </div>
  );
};
export default Button;
