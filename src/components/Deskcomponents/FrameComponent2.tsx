import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full text-left text-17xl text-white font-ibm-plex-sans">
      <div className="flex-1 flex flex-col items-start justify-end pt-[286px] pb-20 pr-5 pl-[200px] box-border relative gap-[4px] bg-[url('/public/rectangle2@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq725:pl-[100px] mq725:box-border mq450:pl-5 mq450:pt-[186px] mq450:pb-[52px] mq450:box-border">
        <div className="w-[1440px] h-[440px] relative bg-[url('/public/rectangle2@2x.png')] bg-cover bg-no-repeat bg-[top] hidden max-w-full z-[0]" />
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] z-[1]" />
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[2] mq450:text-3xl mq975:text-10xl">
          Computer Engineering
        </h1>
        <div className="relative text-lg inline-block max-w-full z-[2]">
          142,765 Computer Engineers follow this
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
