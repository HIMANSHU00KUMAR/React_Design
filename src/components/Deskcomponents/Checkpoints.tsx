import { FunctionComponent } from "react";
import DeadEnds from "./DeadEnds";

const Checkpoints: FunctionComponent = () => {
  return (
    <section className="w-[1040px] flex flex-row items-start justify-start gap-[105px] max-w-full text-left text-lg text-black font-ibm-plex-sans mq725:gap-[26px] mq975:flex-wrap mq1050:gap-[52px]">
      <DeadEnds />
      <div className="w-[243px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[243px] text-sm mq975:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[31.6px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/outlinelocation-on24px-2.svg"
                  />
                  <div className="relative inline-block min-w-[77px]">
                    Noida, India
                  </div>
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/baselineedit24px.svg"
              />
            </div>
            <div className="self-stretch h-[0.4px] relative box-border border-t-[0.4px] border-solid border-silver-100" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-gray-600">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/baselineerror-outline24px1@2x.png"
              />
            </div>
            <div className="flex-1 relative">
              Your location will help us serve better and extend a personalised
              experience.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkpoints;
