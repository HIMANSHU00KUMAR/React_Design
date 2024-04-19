import { FunctionComponent } from "react";

const FrameComponent5: FunctionComponent = () => {
  return (
    <header className="absolute top-[0px] left-[0px] bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] w-full flex flex-row items-start justify-start pt-4 px-[72px] pb-3.5 box-border gap-[162px] max-w-full z-[3] text-left text-sm text-dimgray-200 font-ibm-plex-sans lg:gap-[81px] lg:pl-9 lg:pr-9 lg:box-border mq450:gap-[20px] mq750:gap-[40px]">
      <div className="h-[72px] w-[1440px] relative bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] hidden max-w-full" />
      <div className="w-[306px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <img
          className="w-[162.6px] h-6 relative overflow-hidden shrink-0 z-[4]"
          alt=""
          src="/whole.svg"
        />
      </div>
      <div className="w-[360px] rounded-2xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2.5 px-3.5 box-border gap-[14px] max-w-full z-[4] mq1050:w-[118px]">
        <div className="h-[42px] w-[360px] relative rounded-2xl bg-whitesmoke-200 hidden max-w-full" />
        <img
          className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
          alt=""
          src="/group-28.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 mq1050:hidden">
          <div className="relative font-medium whitespace-nowrap z-[1] mq750:hidden">
            Search for your favorite groups in ATG
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-black">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <img
              className="w-9 h-9 relative rounded-2xl object-cover z-[4]"
              alt=""
              src="/rectangle-6@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="relative inline-block min-w-[104px] whitespace-nowrap z-[4]">
              Siddharth Goyal
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[4]"
              alt=""
              src="/baselinearrow-drop-down24px.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
