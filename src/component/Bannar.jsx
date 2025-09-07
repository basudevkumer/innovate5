import Button from "./Button";
import BannarImage from "../assets/bannarCard.png";

const Bannar = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-x-[160px] flex items-center">
          <div className="">
            <h1 className="font-openSans font-bold text-[64px] text-[#29313D] w-[700px]  pb-[40px]">
              Professional task manager tool to grow{" "}
            </h1>
            <p className="font-nunito font-normal text-[18px]/[200%] text-[#29313D]  border-l-[8px] border-[#FFC556]  pl-5">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime.
            </p>
            <div className=" relative mt-[48px] ">
              <div className="">
                <input
                  type="text"
                  className="py-[37px] px-[28px] w-[630px] bg-[#8454f50d] rounded-[24px]"
                  placeholder="Join with us using your gmail address"
                />
              </div>
              <div className="absolute top-[50%] translate-y-[-50%] right-[-18px]">
                <Button buttonName={"Sign up"} />
              </div>
            </div>
          </div>
          <div className="">
            <img src={BannarImage} alt="BannarImage" className="w-[689px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
