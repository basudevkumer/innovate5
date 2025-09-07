import { BiSolidToggleLeft } from "react-icons/bi";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <section className="pt-[120px] pb-[164px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="">
          <h2 className="font-openSans font-bold text-[56px]/[140%] text-[#29313D] w-[689px] text-center mx-auto ">
            Build the right plan for your team.
          </h2>
          <div className="flex items-center justify-center gap-x-[17px] pt-[30px] ">
            <span>
              <h5 className="font-nunito font-bold text-[28px]/[100%] text-[#29313D]">
                Monthly
              </h5>
            </span>
            <span className="">
              <BiSolidToggleLeft className="text-[70px] text-[#8454F5]" />
            </span>
            <span>
              <h5 className="font-nunito font-bold text-[28px]/[100%] text-[#29313D]">
                Monthly
              </h5>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[30px] pt-[160px]">
          <div>
            <PlanCard
              heading={"Intro"}
              textOne={"Hosting Space"}
              textTwo={"Emails"}
              textThree={"Pricing Feature"}
              textFour={"Bonus Plugins"}
              textFive={"Exclusive Support"}
              oppositeTextOne={"300GB"}
              oppositeTextTwo={"Not Avai."}
              oppositeTextThree={"Unlimited"}
              oppositeTextFour={"Not Avai."}
              oppositeTextFive={"Not Avai."}
            />
          </div>
          <div>
            <PlanCard
              heading={"Pro"}
              textOne={"Hosting Space"}
              textTwo={"Emails"}
              textThree={"Pricing Feature"}
              textFour={"Bonus Plugins"}
              textFive={"Exclusive Support"}
              oppositeTextOne={"700GB"}
              oppositeTextTwo={"Unlimited"}
              oppositeTextThree={"Available"}
              oppositeTextFour={"Included"}
              oppositeTextFive={"Yesß"}
            />
          </div>
          <div>
            <PlanCard
              heading={"Exclusive"}
              textOne={"Hosting Space"}
              textTwo={"Emails"}
              textThree={"Pricing Feature"}
              textFour={"Bonus Plugins"}
              textFive={"Exclusive Support"}
              oppositeTextOne={"900GB"}
              oppositeTextTwo={"Unlimited"}
              oppositeTextThree={"Available"}
              oppositeTextFour={"Available"}
              oppositeTextFive={"Available"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
