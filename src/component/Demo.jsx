import PushButton from "../assets/demopushbutton.png";

const Demo = () => {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between">
          <div className=" flex items-center">
            <a href="#">
              <img src={PushButton} alt="PushButton" className="w-[188px]" />
            </a>
            <h6 className="font-nunito font-semibold text-[24px]/[120%] text-[#545A64]">
              Watch a demo
            </h6>
          </div>
          <div className=" flex items-center ">
            <div className=" pr-[68px]">
              <h2 className="font-openSans font-bold text-[64px] text-[#29313D] ">
                2.8x
              </h2>
              <p className="w-[175px] font-nunito text-[18px]/[180%] font-normal text-[#29313D] ">
                {" "}
                We are ultra faste deal service
              </p>
            </div>
            <div className=" pl-[68px] pr-[68px] border-x-[2.5px] border-[#29313D]">
              <h2 className="font-openSans font-bold text-[64px] text-[#29313D] ">
                68%
              </h2>
              <p className="w-[165px] w-[175px] font-nunito text-[18px]/[180%] font-normal text-[#29313D]">
                {" "}
                More deal closed services
              </p>
            </div>
            <div className=" pl-[68px]">
              <h2 className="font-openSans font-bold text-[64px] text-[#29313D] ">
                2.4x
              </h2>
              <p className="w-[165px] w-[175px] font-nunito text-[18px]/[180%] font-normal text-[#29313D]">
                {" "}
                We slove issue ultra faster
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
