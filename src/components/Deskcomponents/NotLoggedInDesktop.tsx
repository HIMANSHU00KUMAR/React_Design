import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import Checkpoints from "./Checkpoints";

const NotLoggedInDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[98px] box-border leading-[normal] tracking-[normal]">
      <GroupComponent whole="/whole@2x.png" />
      <FrameComponent2 />
      <FrameComponent1 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <Checkpoints />
      </main>
    </div>
  );
};

export default NotLoggedInDesktop;
