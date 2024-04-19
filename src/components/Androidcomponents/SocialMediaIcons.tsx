import { FunctionComponent } from "react";
import FrameComponent7 from "./MbFrameComponent7";

const SocialMediaIcons: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[14px] shrink-0 [debug_commit:1de1738] max-w-full z-[1]">
      <div className="self-stretch h-[328px] relative bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] hidden" />
      <img
        className="self-stretch relative rounded-t rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[2]"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <FrameComponent7 />
    </div>
  );
};

export default SocialMediaIcons;
