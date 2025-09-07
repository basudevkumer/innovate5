

const ToolCard = ({ iconClassName, toolIcon, heading, paragraph }) => {
  return (
    <div className="group">
      <div className="p-[24px] border border-[#8454f568] rounded-lg group-hover:bg-[#8454F5] transition duration-500 ease-in-out ">
        <div className="flex items-center gap-x-[18px]">
          <span
            className={`p-[20px]  rounded-lg group-hover:bg-[#fcfcfe26]  group-hover:text-[#fff] transition duration-500 ease-in-out text-[30px] ${iconClassName}`}
          >
            {toolIcon}
          </span>
          <h5 className="font-openSans font-bold text-[28px]/[140%] text-[#29313D]  group-hover:text-[#fff] transition duration-500 ease-in-out">
            {heading}
          </h5>
        </div>
        <p className="font-nunito font-normal text-[18px]/[180%] text-[#29313D] pt-[31px] pb-[24px] group-hover:text-[#fff] transition duration-500 ease-in-out">
          {paragraph}
        </p>
        <a
          href="#"
          className="font-nunito font-semibold text-[20px]/[100%] text-[#29313D] group-hover:text-[#fff] transition duration-500 ease-in-out"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
