import { FunctionComponent } from "react";

const TimesjobsButton: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
      <div className="self-stretch rounded-t-sm rounded-b-none bg-whitesmoke-200 flex flex-row items-start justify-start py-2.5 px-3 z-[2] border-[1px] border-solid border-gainsboro-100">
        <div className="h-10 w-80 relative rounded-t-sm rounded-b-none bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
        <input
          className="w-[34px] [border:none] [outline:none] font-medium font-ibm-plex-sans text-smi bg-[transparent] h-4 relative leading-[16px] text-gray-100 text-left inline-block p-0 z-[1]"
          placeholder="Email"
          type="text"
        />
      </div>
      <div className="self-stretch rounded-t-none rounded-b-sm bg-whitesmoke-200 flex flex-row items-start justify-between py-2.5 pr-[13px] pl-[11px] gap-[20px] z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
        <div className="h-10 w-80 relative rounded-t-none rounded-b-sm bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
        <input
          className="w-[59px] [border:none] [outline:none] font-medium font-ibm-plex-sans text-smi bg-[transparent] h-4 relative leading-[16px] text-gray-100 text-left inline-block p-0 z-[1]"
          placeholder="Password"
          type="text"
        />
        <img
          className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
          alt=""
          src="/group-3-2@2x.png"
        />
      </div>
    </div>
  );
};

export default TimesjobsButton;
