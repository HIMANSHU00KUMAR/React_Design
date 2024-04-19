import { FunctionComponent } from "react";

const FrameComponent8: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border top-[0] z-[99] sticky max-w-full">
      <header className="flex-1 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-between pt-4 px-[72px] pb-3.5 box-border max-w-full gap-[20px] text-left text-sm text-dimgray-200 font-ibm-plex-sans mq750:pl-9 mq750:pr-9 mq750:box-border">
        <div className="h-[72px] w-[1440px] relative bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] hidden max-w-full" />
        <div className="w-[207px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
          <img
            className="w-[162.6px] h-6 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/whole.svg"
          />
        </div>
        <div className="w-[360px] rounded-2xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2.5 px-3.5 box-border gap-[14px] max-w-full z-[1] mq750:w-[118px]">
          <div className="h-[42px] w-[360px] relative rounded-2xl bg-whitesmoke-200 hidden max-w-full" />
          <img
            className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
            alt=""
            src="/group-28.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 mq750:hidden">
            <div className="relative font-medium whitespace-nowrap z-[1] mq675:hidden">
              Search for your favorite groups in ATG
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-right text-base text-darkslategray-200">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative whitespace-nowrap z-[1] mq675:hidden">
                <span className="font-medium">{`Create account. `}</span>
                <b className="text-royalblue">It’s free!</b>
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
              alt=""
              src="/baselinearrow-drop-down24px.svg"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent8;
