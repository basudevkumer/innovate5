// import for icons

import ToolCard from "./ToolCard";
import { LuAlarmClock } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineRadio } from "react-icons/md";

const Tool = () => {
  return (
    <section className="py-[130px]">
      <div className="max-w-[1320px] mx-auto">
        <div className=" grid grid-cols-2 gap-x-[150px] flex items-center">
          <h2 className="font-openSans font-bold text-[56px]/[140%] text-[#29313D]">
            The best solutions in one tool
          </h2>
          <p className="font-nunito font-normal text-[18px]/[200%] text-[#29313D]  border-l-[8px] border-[#FFC556]  pl-5">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus temporibus autem.
          </p>
        </div>
        <div className="pt-[102px] grid grid-cols-3 gap-[30px]">
          <div>
            <ToolCard
              iconClassName={"bg-[#fec45f33] text-[#FEC35F]"}
              heading={"Set Daily Alarms"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
              }
              toolIcon={<LuAlarmClock />}
            />
          </div>
          <div>
            <ToolCard
              iconClassName={"bg-[#eb5ffe33] text-[#eb5ffe]"}
              heading={"Advanced Search"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
              }
              toolIcon={<SlMagnifier />}
            />
          </div>
          <div>
            <ToolCard
              iconClassName={"bg-[#75ba5235] text-[#75ba52]"}
              heading={"Share Blog Posts"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
              }
              toolIcon={<RiSendPlaneFill />}
            />
          </div>
          <div>
            <ToolCard
              iconClassName={"bg-[#6078ff33] text-[#6078ff]"}
              heading={"Archive Content"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
              }
              toolIcon={<LuAlarmClock />}
            />
          </div>
          <div>
            <ToolCard
              iconClassName={"bg-[#f2786033] text-[#f27860]"}
              heading={"Secure Checkout"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
              }
              toolIcon={<MdOutlineRadio />}
            />
          </div>
          <div>
            <ToolCard
              iconClassName={"bg-[#0d89e733] text-[#0d89e7]"}
              heading={"Faster Response Time"}
              paragraph={
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
              }
              toolIcon={<LuAlarmClock />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tool;
