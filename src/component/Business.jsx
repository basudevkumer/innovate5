import BusinessImagesOne from "../assets/businessimg2.png";
import BusinessImagesTwo from "../assets/businessimg.png";
import Button from "./Button";

const Business = () => {
  return (
    <section className="py-[100px] relative">
      <img
        src={BusinessImagesOne}
        alt="BusinessImagesOne"
        className="absolute top-0 left-0  h-[733px]"
      />
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-x-[120px] flex items-center">
          <div className="flex justify-end ">
            <img
              src={BusinessImagesTwo}
              alt="BusinessImagesTwo"
              className="w-[488px] mx-start "
            />
          </div>
          <div className="">
            <h2 className="font-openSans font-bold text-[56px]/[140%] text-[#29313D] w-[689px]">
              Join with any business tasks and any goals
            </h2>
            <p className="font-nunito font-normal text-[18px]/[180%] text-[#29313D] pt-[24px] pb-[48px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus temporibus
              autem.
            </p>
            <Button buttonName={"Sign up"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
