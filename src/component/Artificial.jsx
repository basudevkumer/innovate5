import ArtificialImage from "../assets/artificialimage.png";
import Button from "./Button";

const Artificial = () => {
  return (
    <section className="pt-[80px] pb-[120px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="p-[30px] bg-[#dbccfc33] rounded-lg flex justify-between items-center ">
          <div>
            <a
              href="#"
              className=" py-[20px] px-[48px]  rounded-[18px] font-nunito  font-semibold text-[18px] text-[#8454F5] leading-[200%] hover:text-white hover:bg-[#8454F5] transition duration-300 ease-in-out"
            >
              Artificial Intelligence
            </a>
          </div>
          <div>
            <a
              href="#"
              className=" py-[20px] px-[48px]  rounded-[18px] font-nunito  font-semibold text-[18px] text-[#8454F5] leading-[200%] hover:text-white hover:bg-[#8454F5] transition duration-300 ease-in-out"
            >
              Header Builder
            </a>
          </div>
          <div>
            <a
              href="#"
              className=" py-[20px] px-[48px]  rounded-[18px] font-nunito  font-semibold text-[18px] text-[#8454F5] leading-[200%] hover:text-white hover:bg-[#8454F5] transition duration-300 ease-in-out"
            >
              Safe and Private
            </a>
          </div>
          <div>
            <a
              href="#"
              className=" py-[20px] px-[48px]  rounded-[18px] font-nunito  font-semibold text-[18px] text-[#8454F5] leading-[200%] hover:text-white hover:bg-[#8454F5] transition duration-300 ease-in-out"
            >
              Mobility Solutions
            </a>
          </div>
        </div>

        <div className="pt-[120px] grid grid-cols-2 gap-x-[155px] flex items-center">
          <div className="">
            <img src={ArtificialImage} alt="ArtificialImage" />
          </div>
          <div className="">
            <h2 className="font-openSans font-bold text-[56px]/[140%] text-[#29313D] w-[689px]">
              No more messy distribution lists.
            </h2>
            <p className="font-nunito font-normal text-[18px]/[180%] text-[#29313D] pt-[24px] pb-[48px]">
             Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.
            </p>
            <Button buttonName={"Get started"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artificial;
