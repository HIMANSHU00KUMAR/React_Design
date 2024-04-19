import { FunctionComponent } from "react";
import FrameComponent9 from "../../components/Androidcomponents/MbFrameComponent9";
import TimesjobsButton from "../../components/Androidcomponents/TimesjobsButton";
import ProfileButton from "../../components/Androidcomponents/ProfileButton";
import SocialMediaIcons from "../../components/Androidcomponents/SocialMediaIcons";

const AndroidSignin: FunctionComponent = () => {
  return (
    <div className="w-full h-[640px] relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-black font-ibm-plex-sans">
      <img
        className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
        alt=""
        src="/group-4.svg"
      />
      <main className="self-stretch h-[627px] relative shrink-0 [debug_commit:1de1738] max-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-[360px] h-[236px] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <FrameComponent9 iconnavigationarrowBack24="/iconnavigationarrow-back-24px.svg" />
        <section className="absolute top-[302px] left-[0px] bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] w-[360px] h-[307px] z-[1]" />
        <img
          className="absolute top-[302px] left-[0px] rounded-t rounded-b-none w-[360px] h-[120px] object-cover z-[2]"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <form className="m-0 absolute top-[154px] left-[0px] rounded-t-lg rounded-b-none bg-white shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] w-full flex flex-col items-start justify-start pt-[22px] px-5 pb-28 box-border gap-[19px] max-w-full z-[5]">
          <div className="w-[360px] h-1.5 relative bg-whitesmoke-400 hidden max-w-full z-[0]" />
          <b className="relative text-mid hidden font-ibm-plex-sans text-white text-left z-[1]">
            Computer Engineering
          </b>
          <div className="relative text-xs font-ibm-plex-sans text-white text-left hidden z-[2]">
            142,765 Computer Engineers follow this
          </div>
          <div className="w-[106px] h-8 relative hidden z-[3]">
            <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-300 w-full h-full" />
            <div className="absolute top-[8px] left-[10px] text-smi font-medium font-ibm-plex-sans text-gray-200 text-left inline-block min-w-[55px]">
              Filter: All
            </div>
            <img
              className="absolute top-[6px] left-[76px] w-5 h-5 overflow-hidden"
              alt=""
              src="/baselinearrow-drop-down24px.svg"
            />
          </div>
          <b className="relative text-sm tracking-[0.01em] hidden font-ibm-plex-sans text-gray-200 text-left min-w-[73px] z-[4]">
            Posts(368)
          </b>
          <div className="relative text-sm font-medium font-ibm-plex-sans text-left hidden min-w-[65px] z-[5]">
            <span className="text-black">{`✍️ `}</span>
            <span className="text-darkslategray-200">Article</span>
          </div>
          <div className="w-[280px] relative text-base font-semibold font-ibm-plex-sans text-gray-200 text-left hidden z-[6]">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </div>
          <div className="relative text-sm font-ibm-plex-sans text-darkslategray-100 text-left hidden z-[7]">
            I’ve worked in UX for the better part of a decade. F..
          </div>
          <img
            className="w-[37px] h-[37px] absolute !m-[0] bottom-[27px] left-[16px] rounded-3xl object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/rectangle-31@2x.png"
          />
          <div className="relative text-smi font-semibold font-ibm-plex-sans text-gray-200 text-left hidden min-w-[91px] z-[9]">
            Sarthak Kamra
          </div>
          <div className="relative text-xs font-medium font-ibm-plex-sans text-darkslategray-100 text-left hidden min-w-[59px] z-[10]">
            1.4k views
          </div>
          <div className="w-[70px] h-9 relative hidden z-[11]">
            <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-300 w-full h-full" />
            <img
              className="absolute top-[9px] left-[8px] w-[18px] h-[18px] overflow-hidden"
              alt=""
              src="/baselineshare24px.svg"
            />
            <div className="absolute top-[10px] left-[30px] text-xs font-ibm-plex-sans text-gray-200 text-left inline-block min-w-[32px]">
              Share
            </div>
          </div>
          <img
            className="w-[54px] h-[54px] absolute !m-[0] right-[18px] bottom-[25px] object-contain z-[3]"
            loading="lazy"
            alt=""
            src="/group-61@2x.png"
          />
          <div className="w-[360px] h-[462px] relative rounded-t-lg rounded-b-none bg-white shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] hidden max-w-full z-[13]" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <h3 className="m-0 relative text-lg font-bold font-ibm-plex-sans text-black text-left z-[1]">
              Welcome back!
            </h3>
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-32.svg"
            />
          </div>
          <TimesjobsButton />
          <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[3px] gap-[20px]">
            <button className="cursor-pointer [border:none] py-2.5 pr-[53px] pl-[54px] bg-royalblue rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1]">
              <div className="h-9 w-[150px] relative rounded-xl bg-royalblue hidden" />
              <div className="relative text-smi leading-[16px] font-semibold font-ibm-plex-sans text-white text-center inline-block min-w-[43px] z-[1]">
                Sign In
              </div>
            </button>
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="relative text-smi [text-decoration:underline] font-medium font-ibm-plex-sans text-darkslategray-100 text-right inline-block min-w-[110px] z-[1]">
                or, Create Account
              </div>
            </div>
          </div>
          <ProfileButton />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[43px] pl-[37px]">
            <div className="flex-1 relative text-2xs tracking-[-0.01em] leading-[16px] font-medium font-ibm-plex-sans text-gray-200 text-center z-[1]">
              Forgot Password?
            </div>
          </div>
        </form>
      </main>
      <SocialMediaIcons />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[4]" />
      <div className="self-stretch h-[629px] flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full">
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <div className="self-stretch flex-1 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] flex flex-col items-start justify-start pt-3 px-0 pb-5 box-border gap-[14px] max-w-full z-[1]">
          <div className="self-stretch h-[374px] relative bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] hidden" />
          <img
            className="self-stretch relative rounded-t rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[2]"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[6px]">
                  <div className="w-[70px] h-[19px] relative font-medium inline-block z-[2]">
                    <span>{`🗓️ `}</span>
                    <span className="text-darkslategray-200">Meetup</span>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[18px]">
                      <div className="self-stretch w-[280px] relative font-semibold inline-block shrink-0 z-[2]">{`Finance & Investment Elite Social Mixer @Lujiazui`}</div>
                      <img
                        className="h-7 w-7 relative z-[2]"
                        alt=""
                        src="/group-3.svg"
                      />
                    </div>
                    <div className="w-[300px] h-4 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] text-xs text-gray-200">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2px]">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                          alt=""
                          src="/baselinetoday24px.svg"
                        />
                        <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                          Fri, 12 Oct, 2018
                        </div>
                      </div>
                      <div className="self-stretch w-[118px] flex flex-row items-start justify-start gap-[2px]">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                          alt=""
                          src="/outlinelocation-on24px.svg"
                        />
                        <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                          Ahmedabad, India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[34px] rounded-lg bg-white box-border flex flex-row items-start justify-center py-2 px-5 whitespace-nowrap max-w-full z-[2] text-center text-smi text-tomato border-[0.7px] border-solid border-darkgray">
                  <div className="h-[34px] w-[328px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray" />
                  <div className="self-stretch w-20 relative leading-[140.4%] font-semibold inline-block z-[1]">
                    Visit Website
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between py-0 pr-0.5 pl-0 gap-[20px] text-smi text-gray-200">
                <div className="w-[123px] flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="h-[37px] w-[37px] relative rounded-3xl object-cover min-h-[37px] z-[2]"
                    alt=""
                    src="/rectangle-38@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch h-[17px] relative font-semibold inline-block z-[2]">
                        Ronal Jones
                      </div>
                      <div className="w-14 h-4 relative text-xs font-medium text-darkslategray-100 inline-block z-[3]">
                        800 views
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[70px] rounded bg-whitesmoke-300 flex flex-row items-start justify-start py-[9px] px-2 box-border gap-[4px] z-[2] text-xs">
                  <div className="h-9 w-[70px] relative rounded bg-whitesmoke-300 hidden" />
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                    alt=""
                    src="/baselineshare24px.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="self-stretch h-4 relative inline-block z-[1]">
                      Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <div className="self-stretch bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] flex flex-col items-start justify-start py-5 px-4 box-border gap-[32px] max-w-full z-[1]">
          <div className="w-[360px] h-[237px] relative bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[6px]">
              <div className="w-[47px] h-[19px] relative font-medium inline-block z-[2]">
                <span>{`💼️ `}</span>
                <span className="text-darkslategray-200">Job</span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-base">
                <div className="self-stretch flex flex-row items-start justify-start gap-[18px]">
                  <div className="h-[21px] flex-1 relative font-semibold inline-block z-[2]">
                    Software Developer - II
                  </div>
                  <img
                    className="h-7 w-7 relative z-[2]"
                    alt=""
                    src="/group-3.svg"
                  />
                </div>
                <div className="w-[267px] h-4 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] text-xs text-gray-200">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                      alt=""
                      src="/outlinework-outline24px.svg"
                    />
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                      Innovaccer Analytic...
                    </div>
                  </div>
                  <div className="self-stretch w-[85px] flex flex-row items-start justify-start gap-[2px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                      alt=""
                      src="/outlinelocation-on24px.svg"
                    />
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                      Noida, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[34px] rounded-lg bg-white box-border flex flex-row items-start justify-center py-2 px-5 whitespace-nowrap max-w-full z-[2] text-center text-smi text-mediumseagreen border-[0.7px] border-solid border-darkgray">
              <div className="h-[34px] w-[328px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray" />
              <div className="self-stretch w-[118px] relative leading-[140.4%] font-semibold inline-block z-[1]">
                Apply on Timesjobs
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-row items-end justify-between py-0 pr-0.5 pl-0 gap-[20px] text-left text-smi text-gray-200 font-ibm-plex-sans">
            <div className="w-[124px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[37px] w-[37px] relative rounded-3xl object-cover min-h-[37px] z-[2]"
                alt=""
                src="/rectangle-310@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch h-[17px] relative font-semibold inline-block z-[2]">
                    Joseph Gray
                  </div>
                  <div className="w-[59px] h-4 relative text-xs font-medium text-darkslategray-100 inline-block z-[3]">
                    1.7k views
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70px] rounded bg-whitesmoke-300 flex flex-row items-start justify-start py-[9px] px-2 box-border gap-[4px] z-[2] text-xs">
              <div className="h-9 w-[70px] relative rounded bg-whitesmoke-300 hidden" />
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                alt=""
                src="/baselineshare24px.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch h-4 relative inline-block z-[1]">
                  Share
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
      </div>
    </div>
  );
};

export default AndroidSignin;
