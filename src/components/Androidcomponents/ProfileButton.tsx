import { FunctionComponent } from "react";

const ProfileButton: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[12px]">
      <button className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-sm flex flex-row items-start justify-center gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-200">
        <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-200" />
        <img
          className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
          alt=""
          src="/f-logo-rgbblue-1024@2x.png"
        />
        <div className="relative text-smi leading-[16px] font-ibm-plex-sans text-black text-left inline-block min-w-[127px] z-[1]">
          Sign in with Facebook
        </div>
      </button>
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <img
          className="h-7 w-7 absolute !m-[0] right-[-2px] bottom-[-23px] z-[2]"
          loading="lazy"
          alt=""
          src="/group-3.svg"
        />
        <button className="cursor-pointer py-2.5 px-5 bg-white flex-1 rounded-sm flex flex-row items-start justify-center gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-200">
          <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-200" />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
            alt=""
            src="/search.svg"
          />
          <div className="relative text-smi leading-[16px] font-ibm-plex-sans text-black text-left inline-block min-w-[112px] z-[1]">
            Sign in with Google
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProfileButton;
