import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  networklet?: string;
  article?: string;
  whatIfFamousBrandsHadRegu?: string;
  logicGate?: string;
  sarthakKamra?: string;
  group2?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propLineHeight?: CSSProperties["lineHeight"];
  propMinWidth1?: CSSProperties["minWidth"];
  propOverflow?: CSSProperties["overflow"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  networklet,
  article,
  whatIfFamousBrandsHadRegu,
  logicGate,
  sarthakKamra,
  group2,
  propMinWidth,
  propLineHeight,
  propMinWidth1,
  propOverflow,
  propMinWidth2,
}) => {
  const articleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const whatIfFamousStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth1,
    };
  }, [propLineHeight, propMinWidth1]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const sarthakKamraStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[20px] max-w-full text-left text-lg text-black font-ibm-plex-sans border-[1px] border-solid border-gainsboro-100">
      <div className="self-stretch h-[474px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-100" />
      <img
        className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={networklet}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-3 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px] max-w-full">
          <div
            className="relative font-medium inline-block min-w-[84px] z-[1]"
            style={articleStyle}
          >
            {article}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-3xl mq725:flex-wrap">
            <div
              className="flex-1 relative leading-[134.17%] font-semibold inline-block min-w-[380px] max-w-full z-[1] mq725:min-w-full mq450:text-lg mq450:leading-[24px]"
              style={whatIfFamousStyle}
            >
              {whatIfFamousBrandsHadRegu}
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-7 h-7 relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/baselinemore-vert24px@2x.png"
                style={groupIconStyle}
              />
            </div>
          </div>
          <div className="relative text-lgi leading-[134.17%] text-dimgray-200 z-[1]">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
              loading="lazy"
              alt=""
              src={logicGate}
            />
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div
                className="relative font-semibold inline-block min-w-[125px] z-[1]"
                style={sarthakKamraStyle}
              >
                {sarthakKamra}
              </div>
            </div>
          </div>
          <div className="w-[177px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-right text-sm text-dimgray-300">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/iconactionvisibility-24px@2x.png"
                  />
                  <div className="relative font-medium inline-block min-w-[69px] z-[1]">
                    1.4k views
                  </div>
                </div>
              </div>
              <img
                className="h-9 w-[42px] relative z-[1]"
                loading="lazy"
                alt=""
                src={group2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
