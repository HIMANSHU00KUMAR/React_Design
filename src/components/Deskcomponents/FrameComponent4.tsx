import { FunctionComponent } from "react";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className="w-60 flex flex-row items-start justify-start gap-[28px] text-left text-sm text-black font-ibm-plex-sans">
      <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-9 w-9 relative rounded-2xl object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-6-2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="self-stretch relative">Activism</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-9 w-9 relative rounded-2xl object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-6-3@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="self-stretch relative">MBA</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-9 w-9 relative rounded-2xl object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-6-4@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="self-stretch relative">Philosophy</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs">
        <div className="flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-col items-start justify-start gap-[34px]">
            <div className="rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-3">
              <div className="h-6 w-[60px] relative rounded-sm bg-whitesmoke-300 hidden" />
              <div className="relative inline-block min-w-[36px] z-[1]">
                Follow
              </div>
            </div>
            <div className="rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-3">
              <div className="h-6 w-[60px] relative rounded-sm bg-whitesmoke-300 hidden" />
              <div className="relative inline-block min-w-[36px] z-[1]">
                Follow
              </div>
            </div>
            <div className="rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-3">
              <div className="h-6 w-[60px] relative rounded-sm bg-whitesmoke-300 hidden" />
              <div className="relative inline-block min-w-[36px] z-[1]">
                Follow
              </div>
            </div>
          </div>
          <div className="relative text-royalblue text-right inline-block min-w-[60px]">
            See More...
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
