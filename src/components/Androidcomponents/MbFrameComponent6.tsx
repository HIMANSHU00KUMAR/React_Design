import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent6Type = {
  prop?: string;
  meetup?: string;
  financeInvestmentEliteSoc?: string;
  baselineToday24px?: string;
  fri12Oct2018?: string;
  ahmedabadIndia?: string;
  visitWebsite?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propFlex1?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propFlex2?: CSSProperties["flex"];
  propFlex3?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propFlex4?: CSSProperties["flex"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propWidth4?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
};

const MbFrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  prop,
  meetup,
  financeInvestmentEliteSoc,
  baselineToday24px,
  fri12Oct2018,
  ahmedabadIndia,
  visitWebsite,
  propFlex,
  propFlex1,
  propWidth,
  propFlex2,
  propFlex3,
  propAlignSelf,
  propWidth1,
  propHeight,
  propFlex4,
  propWidth2,
  propWidth3,
  propWidth4,
  propColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const meetupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex3,
    };
  }, [propFlex3]);

  const financeInvestmentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
      height: propHeight,
      flex: propFlex4,
    };
  }, [propAlignSelf, propWidth1, propHeight, propFlex4]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const visitWebsiteStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
      color: propColor,
    };
  }, [propWidth4, propColor]);

  return (
    <div
      className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-sm text-black font-ibm-plex-sans"
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[6px]"
        style={frameDiv1Style}
      >
        <div
          className="w-[70px] h-[19px] relative font-medium inline-block z-[2]"
          style={meetupStyle}
        >
          <span>{prop}</span>
          <span className="text-darkslategray-200">{meetup}</span>
        </div>
        <div
          className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base"
          style={frameDiv2Style}
        >
          <div
            className="self-stretch flex-1 flex flex-row items-start justify-start gap-[18px]"
            style={frameDiv3Style}
          >
            <div
              className="self-stretch w-[280px] relative font-semibold inline-block shrink-0 z-[2]"
              style={financeInvestmentStyle}
            >
              {financeInvestmentEliteSoc}
            </div>
            <img className="h-7 w-7 relative z-[2]" alt="" src="/group-3.svg" />
          </div>
          <div
            className="w-[300px] h-4 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] text-xs text-gray-200"
            style={frameDiv4Style}
          >
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                alt=""
                src={baselineToday24px}
              />
              <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                {fri12Oct2018}
              </div>
            </div>
            <div
              className="self-stretch w-[118px] flex flex-row items-start justify-start gap-[2px]"
              style={frameDiv5Style}
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                alt=""
                src="/outlinelocation-on24px.svg"
              />
              <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                {ahmedabadIndia}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[34px] rounded-lg bg-white box-border flex flex-row items-start justify-center py-2 px-5 whitespace-nowrap max-w-full z-[2] text-center text-smi text-tomato border-[0.7px] border-solid border-darkgray">
        <div className="h-[34px] w-[328px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray" />
        <div
          className="self-stretch w-20 relative leading-[140.4%] font-semibold inline-block z-[1]"
          style={visitWebsiteStyle}
        >
          {visitWebsite}
        </div>
      </div>
    </div>
  );
};


export default MbFrameComponent6;
