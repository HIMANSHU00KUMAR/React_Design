import { FunctionComponent } from "react";
import GroupComponent from "../../components/Deskcomponents/GroupComponent";
import FrameComponent7 from "../../components/Deskcomponents/FrameComponent7";
import { Link } from "react-router-dom";

const DesktopJoinGroup: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[149px] box-border gap-[12px] leading-[normal] tracking-[normal]">
      <GroupComponent whole="/whole.svg" />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-500 z-[2]" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full mq825:pl-9 mq825:pr-9 mq825:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-base text-gray-100 font-ibm-plex-sans">
          <div className="self-stretch h-px relative box-border opacity-[0] border-t-[1px] border-solid border-gainsboro-100" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[1040px] flex flex-col items-end justify-start gap-[5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[7px] box-border max-w-full gap-[20px] mq825:flex-wrap">
                <div className="w-[358px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[19.5px] mq450:flex-wrap">
                    <div className="relative text-black inline-block min-w-[93px]">
                      All Posts(32)
                    </div>
                    <div className="relative inline-block min-w-[47px]">
                      Article
                    </div>
                    <div className="relative inline-block min-w-[41px]">
                      Event
                    </div>
                    <div className="relative inline-block min-w-[72px]">
                      Education
                    </div>
                    <div className="relative inline-block min-w-[27px]">
                      Job
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full text-mini text-gray-200 mq450:flex-wrap">
                  <div className="rounded bg-white flex flex-row items-start justify-start py-1.5 px-[9px] gap-[6px] border-[0.8px] border-solid border-silver-200">
                    <div className="h-9 w-[134px] relative rounded bg-white box-border hidden border-[0.8px] border-solid border-silver-200" />
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
                      alt=""
                      src="/outlineexit-to-app24px1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative font-medium inline-block min-w-[86px] z-[1]">
                        Leave Group
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4px] text-black">
                    <div className="rounded bg-whitesmoke-300 flex flex-row items-start justify-start py-[7px] px-2.5 gap-[6px]">
                      <div className="h-9 w-[133px] relative rounded bg-whitesmoke-300 hidden" />
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
                        alt=""
                        src="/baselineedit24px1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative font-medium inline-block min-w-[83px] z-[1]">
                          Write a Post
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-9 w-9 relative min-h-[36px]"
                      loading="lazy"
                      alt=""
                      src="/group-58.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative">
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[0px] left-[0px] box-border w-[94px] h-px border-t-[1px] border-solid border-black" />
              </div>
              <div className="w-[904px] flex flex-row items-start justify-end py-0 px-4 box-border max-w-full text-center text-xs text-black">
                <div className="flex-1 flex flex-col items-end justify-start gap-[14px] max-w-full">
                  <div className="w-[272px] flex flex-row items-start justify-center py-0 px-5 box-border">
                    <img
                      className="h-7 w-7 relative z-[3]"
                      loading="lazy"
                      alt=""
                      src="/group-31.svg"
                    />
                  </div>
                  <div className="self-stretch h-[513px] relative max-w-full mq825:h-auto mq825:min-h-[513]">
                    <div className="absolute top-[52px] left-[632px] rounded bg-white box-border w-[177.8px] h-[35.8px] flex flex-row items-start justify-start py-[7px] px-1.5 gap-[8px] text-left text-sm text-gray-400 border-[0.4px] border-solid border-dimgray-300">
                      <div className="h-[35.8px] w-[177.8px] relative rounded bg-white box-border hidden border-[0.4px] border-solid border-dimgray-300" />
                      <img
                        className="h-[21px] w-[21px] relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/outlinemy-location24px.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="relative z-[1]">
                          Use Current Location
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[152px] left-[852px] w-5 h-5 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/outlinesearch24px.svg"
                    />
                    <div className="absolute top-[361px] left-[811px] rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-2">
                      <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-300 hidden" />
                      <div className="relative inline-block min-w-[45px] z-[1]">
                        Connect
                      </div>
                    </div>
                    <div className="absolute top-[419px] left-[811px] rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-2">
                      <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-300 hidden" />
                      <div className="relative inline-block min-w-[45px] z-[1]">
                        Connect
                      </div>
                    </div>
                    <div className="absolute top-[477px] left-[797px] rounded-sm bg-black flex flex-row items-start justify-start py-1 px-2 text-white">
                      <div className="h-6 w-[75px] relative rounded-sm bg-black hidden" />
                      <div className="relative inline-block min-w-[59px] z-[1]">
                        Connected
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[736px] flex flex-row items-start justify-start max-w-full text-left text-sm">
                      <div className="w-[694px] !m-[0] absolute top-[-18px] left-[-152px] rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full text-lg border-[1px] border-solid border-gainsboro-100">
                        <div className="self-stretch h-[474px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-100" />
                        <img
                          className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                          alt=""
                          src="/rectangle-5@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-[22px] pl-5 box-border max-w-full">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px] max-w-full">
                            <div className="relative font-medium inline-block min-w-[84px] z-[1]">
                              ✍️ Article
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-3xl">
                              <h3 className="m-0 flex-1 relative text-inherit leading-[134.17%] font-semibold font-inherit inline-block min-w-[380px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq825:min-w-full">
                                What if famous brands had regular fonts? Meet
                                RegulaBrands!
                              </h3>
                              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                <img
                                  className="w-7 h-7 relative overflow-hidden shrink-0 object-contain z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/baselinemore-vert24px@2x.png"
                                />
                              </div>
                            </div>
                            <h3 className="m-0 relative text-lgi leading-[134.17%] font-normal font-inherit text-dimgray-200 z-[1]">
                              I’ve worked in UX for the better part of a decade.
                              From now on, I plan to rei…
                            </h3>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-[10px]">
                              <img
                                className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/rectangle-3@2x.png"
                              />
                              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                                <div className="relative font-semibold inline-block min-w-[125px] z-[1]">
                                  Sarthak Kamra
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-right text-sm text-dimgray-300">
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
                          </div>
                        </div>
                      </div>
                      <div className="w-[694px] !m-[0] absolute bottom-[-431px] left-[-152px] rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full text-lg border-[1px] border-solid border-gainsboro-100">
                        <div className="self-stretch h-[474px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-100" />
                        <img
                          className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-5-1@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-[22px] pl-5 box-border max-w-full">
                          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[33px] box-border gap-[11.5px] max-w-full mq825:h-auto">
                            <div className="relative font-medium inline-block min-w-[109px] shrink-0 z-[1]">
                              🔬️ Education
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full shrink-0 text-3xl">
                              <h3 className="m-0 flex-1 relative text-inherit leading-[134.55%] font-semibold font-inherit inline-block min-w-[390px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq825:min-w-full">
                                Tax Benefits for Investment under National
                                Pension Scheme launched by Government
                              </h3>
                              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                <img
                                  className="w-7 h-7 relative overflow-hidden shrink-0 object-contain z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/baselinemore-vert24px@2x.png"
                                />
                              </div>
                            </div>
                            <h3 className="m-0 relative text-lgi leading-[134.17%] font-normal font-inherit text-dimgray-200 z-[1]">
                              I’ve worked in UX for the better part of a decade.
                              From now on, I plan to rei…
                            </h3>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                            <div className="w-[154px] flex flex-row items-start justify-start gap-[10px]">
                              <img
                                className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                                alt=""
                                src="/rectangle-3-1@2x.png"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                                <div className="self-stretch h-6 relative font-semibold inline-block z-[1]">
                                  Sarah West
                                </div>
                              </div>
                            </div>
                            <div className="h-[33px] w-[95px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border text-right text-sm text-dimgray-300">
                              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                                <img
                                  className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[1]"
                                  alt=""
                                  src="/iconactionvisibility-24px@2x.png"
                                />
                                <div className="self-stretch flex-1 relative font-medium z-[1]">
                                  1.4k views
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[0.4px] w-[240.4px] absolute !m-[0] top-[182px] right-[-136.4px] box-border border-t-[0.4px] border-solid border-silver-100" />
                      <div className="absolute !m-[0] top-[153px] right-[-45px] text-gray-500">
                        Enter location manually
                      </div>
                      <div className="w-[220px] absolute !m-[0] top-[214px] right-[-139px] text-xs text-gray-600 inline-block">
                        Your location will help us serve better and extend a
                        personalised experience.
                      </div>
                      <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[130px] inline-block">
                        Sarthak Kamra
                      </div>
                      <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[72px] inline-block">
                        Sarah West
                      </div>
                      <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[14px] inline-block">
                        Joy Lawson
                      </div>
                      <div className="flex-1 rounded-lg bg-white shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-0 px-0 pb-9 box-border gap-[24px] max-w-full z-[3]">
                        <div className="relative text-smi font-medium text-right hidden min-w-[13px]">
                          or
                        </div>
                        <div className="relative tracking-[0.1em] uppercase hidden min-w-[78px]">
                          Location
                        </div>
                        <img
                          className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/outlinelocation-on24px-2.svg"
                        />
                        <img
                          className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/baselineerror-outline24px.svg"
                        />
                        <div className="relative tracking-[0.1em] uppercase hidden min-w-[73px]">
                          connect
                        </div>
                        <img
                          className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/outlinegroup24px.svg"
                        />
                        <img
                          className="w-9 h-9 relative rounded-2xl object-contain hidden"
                          alt=""
                          src="/rectangle-6@2x.png"
                        />
                        <img
                          className="w-9 h-9 relative rounded-2xl object-contain hidden"
                          alt=""
                          src="/rectangle-6@2x.png"
                        />
                        <img
                          className="w-9 h-9 relative rounded-2xl object-contain hidden"
                          alt=""
                          src="/rectangle-6@2x.png"
                        />
                        <div className="self-stretch h-[513px] relative rounded-lg bg-white shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] hidden" />
                        <div className="rounded-t-lg rounded-b-none bg-honeydew flex flex-row items-start justify-start py-[17px] pr-[58px] pl-[59px] box-border max-w-full z-[1] text-center text-seagreen">
                          <div className="h-[50px] w-[736px] relative rounded-t-lg rounded-b-none bg-honeydew hidden max-w-full" />
                          <div className="w-[619px] relative leading-[16px] font-medium inline-block z-[2]">{`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼`}</div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-9 box-border max-w-full text-5xl">
                          <div className="flex-1 flex flex-row flex-wrap items-end justify-center gap-[24px] max-w-full">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[208px]">
                              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                                <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-lgi">
                                  Create Account
                                </h2>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start text-mini text-gray-100">
                                <div className="self-stretch rounded-t-sm rounded-b-none bg-whitesmoke-100 flex flex-row items-start justify-start py-0 px-3 gap-[72px] shrink-0 [debug_commit:1de1738] z-[2] border-[1px] border-solid border-gainsboro-200 mq450:flex-wrap">
                                  <div className="h-[46px] w-80 relative rounded-t-sm rounded-b-none bg-whitesmoke-100 box-border hidden border-[1px] border-solid border-gainsboro-200" />
                                  <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                                    <div className="relative leading-[16px] font-medium inline-block min-w-[76px] z-[1]">
                                      First Name
                                    </div>
                                  </div>
                                  <div className="h-[45px] flex flex-row items-start justify-start gap-[11px]">
                                    <div className="h-[46px] w-px relative box-border z-[1] border-r-[1px] border-solid border-gainsboro-300" />
                                    <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                                      <div className="relative leading-[16px] font-medium inline-block min-w-[73px] z-[1]">
                                        Last Name
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch bg-whitesmoke-100 flex flex-row items-start justify-start py-[13px] px-3 shrink-0 [debug_commit:1de1738] z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-200">
                                  <div className="h-[46px] w-80 relative bg-whitesmoke-100 box-border hidden border-[1px] border-solid border-gainsboro-200" />
                                  <div className="relative leading-[16px] font-medium inline-block min-w-[39px] z-[1]">
                                    Email
                                  </div>
                                </div>
                                <div className="self-stretch bg-whitesmoke-100 flex flex-row items-start justify-between py-3 pr-[18px] pl-3 shrink-0 [debug_commit:1de1738] gap-[20px] z-[2] mt-[-1px] border-[1px] border-solid border-gainsboro-200">
                                  <div className="h-[46px] w-80 relative bg-whitesmoke-100 box-border hidden border-[1px] border-solid border-gainsboro-200" />
                                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                    <div className="relative leading-[16px] font-medium inline-block min-w-[67px] z-[1]">
                                      Password
                                    </div>
                                  </div>
                                  <img
                                    className="h-[18px] w-[18px] relative object-contain min-h-[18px] z-[1]"
                                    alt=""
                                    src="/group-3-1@2x.png"
                                  />
                                </div>
                                <div className="self-stretch rounded-t-none rounded-b-sm bg-whitesmoke-100 flex flex-row items-start justify-start py-[13px] px-3 shrink-0 [debug_commit:1de1738] whitespace-nowrap z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-200">
                                  <div className="h-[46px] w-80 relative rounded-t-none rounded-b-sm bg-whitesmoke-100 box-border hidden border-[1px] border-solid border-gainsboro-200" />
                                  <div className="relative leading-[16px] font-medium inline-block min-w-[126px] z-[1]">
                                    Confirm Password
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-center text-sm text-white">
                                <div className="flex-1 rounded-xl bg-royalblue flex flex-row items-start justify-center py-3 px-5 whitespace-nowrap z-[1]">
                                  <div className="h-10 w-80 relative rounded-xl bg-royalblue hidden" />
                                  <div className="relative leading-[16px] font-semibold inline-block min-w-[100px] z-[1]">
                                    Create Account
                                  </div>
                                </div>
                              </div>
                              <FrameComponent7
                                signUpWithFacebook="Sign up with Facebook"
                                signUpWithGoogle="Sign up with Google"
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start gap-[31px] min-w-[208px] text-right text-smi text-darkslategray-100">
                              <div className="relative z-[1]">
                                <span>{`Already have an account? `}</span>
                                <Link to={"signin"}><span className="font-semibold text-royalblue">
                                  Sign In
                                </span></Link>
                              </div>
                              <div className="self-stretch h-[348px] flex flex-col items-end justify-start gap-[12px] text-[11px] text-gray-500">
                                <img
                                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                  alt=""
                                  src="/group-3-2@2x.png"
                                />
                                <div className="self-stretch relative tracking-[-0.01em] leading-[16px] z-[1]">{`By signing up, you agree to our Terms & conditions, Privacy policy`}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start gap-[48px] text-left text-sm">
                    <div className="flex flex-col items-start justify-start gap-[22px]">
                      <div className="flex flex-row items-start justify-start gap-[27px] mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[12px]">
                          <img
                            className="h-9 w-9 relative rounded-2xl object-cover"
                            loading="lazy"
                            alt=""
                            src="/rectangle-6@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                            <div className="relative">John Doe</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs">
                          <div className="rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-2">
                            <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-300 hidden" />
                            <div className="relative inline-block min-w-[45px] z-[1]">
                              Connect
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[27px] mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[12px]">
                          <img
                            className="h-9 w-9 relative rounded-2xl object-cover"
                            loading="lazy"
                            alt=""
                            src="/rectangle-6@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                            <div className="relative inline-block min-w-[104px]">
                              Siddharth Goyal
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs">
                          <div className="rounded-sm bg-whitesmoke-300 flex flex-row items-start justify-start py-1 px-2">
                            <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-300 hidden" />
                            <div className="relative inline-block min-w-[45px] z-[1]">
                              Connect
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 pr-[8.4px] pl-2 text-royalblue">
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="relative inline-block min-w-[70px] shrink-0 [debug_commit:1de1738]">
                          See More...
                        </div>
                        <img
                          className="h-[18px] w-[13.6px] relative min-h-[18px] shrink-0 [debug_commit:1de1738]"
                          loading="lazy"
                          alt=""
                          src="/subtract.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesktopJoinGroup;
