import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent7Type = {
  signUpWithFacebook?: string;
  signUpWithGoogle?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  signUpWithFacebook,
  signUpWithGoogle,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const signUpWithStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-sm text-black font-ibm-plex-sans"
      style={frameDivStyle}
    >
      <div className="self-stretch rounded-sm bg-white flex flex-row items-start justify-start py-2.5 pr-[75px] pl-[76px] gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-300">
        <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-300" />
        <img
          className="h-4 w-4 relative object-contain min-h-[16px] z-[1]"
          alt=""
          src="/f-logo-rgbblue-1024@2x.png"
        />
        <div className="relative leading-[16px] z-[1]">
          {signUpWithFacebook}
        </div>
      </div>
      <div className="self-stretch rounded-sm bg-white flex flex-row items-start justify-center py-2.5 pr-5 pl-[21px] gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-300">
        <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-300" />
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
          alt=""
          src="/search.svg"
        />
        <div
          className="relative leading-[16px] inline-block min-w-[125px] z-[1]"
          style={signUpWithStyle}
        >
          {signUpWithGoogle}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
