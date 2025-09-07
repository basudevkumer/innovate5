import Button from "./Button";

const Trial = () => {
  return (
    <section className="py-[140px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-openSans font-bold text-[56px]/[140%] text-[#29313D] w-[820px] text-center mx-auto">
          Ready to get started? Start your free trial.
        </h2>
        <div className="flex justify-center  items-center pt-[30px] pb-[50px]">
          <div className="pr-4">
            <p className="font-nunito font-normal text-[20px] text-[#29313D]">
              Free 30 days trial
            </p>
          </div>
          <div className="border-x-[1px] pr-4 pl-4">
            <p className="font-nunito font-normal text-[20px] text-[#29313D]">
              {" "}
              Exclusive Support
            </p>
          </div>
          <div className="pl-4">
            <p className="font-nunito font-normal text-[20px] text-[#29313D]">
              No Fees
            </p>
          </div>
        </div>
        <div className="flex  justify-center  items-center gap-x-[30px]">
          <input type="text" placeholder="Enter Your Email"  className="p-[26px] bg-[#F3EEFE] w-[512px] text-[#29313D] rounded-[18px]"/>
          <Button className={""} buttonName={"Try For Free"} />
        </div>
      </div>
    </section>
  );
};

export default Trial;
