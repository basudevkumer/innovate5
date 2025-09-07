import { CiSquareCheck } from "react-icons/ci";

const PlanCard = ({
  heading,
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  oppositeTextOne,
  oppositeTextTwo,
  oppositeTextThree,
  oppositeTextFour,
  oppositeTextFive,
  mainClassName,
}) => {
  return (
    <div
      className={`shadow-2xl rounded-[30px] relative hover:translate-y-[-80px] transition duration-400 ease-in-out group ${mainClassName}`}
    >
      <div className="p-[48px] group-hover:bg-[#181059] rounded-[30px] transition duration-300 ease-in-out ">
        <h3 className="font-openSans font-bold text-[36px]/[140%] text-[#29313D] group-hover:text-[#fff] transition duration-300 ease-in-out ">
          {heading}
        </h3>
        <div className="pt-[48px]">
          <div className="flex flex-col gap-y-[28px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-[14px]">
                <span>
                  <CiSquareCheck className="text-[30px] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out" />
                </span>
                <p className="font-nunito font-normal text-[20px]/[120%] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {textOne}
                </p>
              </div>
              <div>
                <p className="font-nunito font-bold text-[20px]/[120%] text-[#8454F5] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {oppositeTextOne}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-[14px]">
                <span>
                  <CiSquareCheck className="text-[30px] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out" />
                </span>
                <p className="font-nunito font-normal text-[20px]/[120%] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {textTwo}
                </p>
              </div>
              <div>
                <p className="font-nunito font-bold text-[20px]/[120%] text-[#8454F5] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {oppositeTextTwo}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-[14px] ">
                <span>
                  <CiSquareCheck className="text-[30px] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out" />
                </span>
                <p className="font-nunito font-normal text-[20px]/[120%] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {textThree}
                </p>
              </div>
              <div>
                <p className="font-nunito font-bold text-[20px]/[120%] text-[#8454F5] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {oppositeTextThree}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-[14px]">
                <span>
                  <CiSquareCheck className="text-[30px] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out" />
                </span>
                <p className="font-nunito font-normal text-[20px]/[120%] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {textFour}
                </p>
              </div>
              <div>
                <p className="font-nunito font-bold text-[20px]/[120%] text-[#8454F5] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {oppositeTextFour}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-[14px]">
                <span>
                  <CiSquareCheck className="text-[30px] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out" />
                </span>
                <p className="font-nunito font-normal text-[20px]/[120%] text-[#545A64] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {textFive}
                </p>
              </div>
              <div>
                <p className="font-nunito font-bold text-[20px]/[120%] text-[#8454F5] group-hover:text-[#fff] transition duration-300 ease-in-out">
                  {oppositeTextFive}
                </p>
              </div>
            </div>
            <div className="pt-[68px]">
              <a
                href="#"
                className="font-nunito font-semibold text-[18px] text-[#8454F5] leading-[200%] py-[20px] px-[48px] bg-[#8454f51a] rounded-[18px] group-hover:bg-[#8454F5] group-hover:text-[#fff] transition duration-300 ease-in-out"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
