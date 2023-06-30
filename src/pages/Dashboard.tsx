import { FunctionComponent } from "react";
import "./Dashboard.css";

import Navbar from "./Navbar";
import "../global.css";
import Course from "./Course";
import Plan from "./Plan";
const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard">
         <div className="relative bg-default-white w-full h-[3007px] overflow-hidden text-left text-xl text-default-white font-heading-heading-3">
      
      <div className="header-container ">
    <div className="absolute top-0 left-0 w-[100vw] border-2px stroke-orange-500">
        <img
        className="absolute top-[0px] left-[0px] w-[inherit]"
        alt=""
        src="/group-1.svg"
      />
    </div>
    <div className=" learn-more w-[90vw] h-[652px]  text-base">
    <div className="absolute top-[94px] left-[175px] w-[580px] h-[371px]">
      <div className="absolute top-[0px] left-[0px] w-[580px] h-[214.45px]">
        <div className="absolute top-[151.7px] left-[0px] inline-block w-[433px] h-[62.75px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          in ustry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </div>
        <b className="absolute top-[0px] left-[0px] text-29xl inline-block w-[580px] h-[127.7px]">
          Learn how to launch a successful podcast
        </b>
      </div>
      <div className="absolute top-[296.14px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[74.86px] text-xl font-text-20-bold">
        <b className="absolute top-[19px] left-[55px]">Sign up Now</b>
      </div>
    </div>
      <div className="image-container">
      <img
      className="absolute top-[153.96px] left-[774.1px] w-[550px] h-[370px]"
      alt=""
      src="/group-75.svg"
    />
    <img
      className="absolute top-[94px] left-[773px] rounded-3xs w-[491px] h-[281px] object-cover"
      alt=""
      src="/everyoneissmilinglistensgrouppeoplebusinessconferencemodernclassroomdaytime-1@2x.png"
    />
    <img
      className="absolute top-[184px] left-[720px] rounded-3xs w-[491px] h-[281px] object-cover"
      alt=""
      src="/groupbusinessworkerssmilinghappyconfidentworkingtogetherwithsmilefaceapplaudingonethemoffice-1@2x.png"
    />
      </div>
    <div className="absolute top-[431px] left-[1253.19px] rounded-8xs bg-default-white shadow-[0px_10px_40px_rgba(154,_148,_148,_0.25)] w-[63px] h-[62px] flex flex-row py-0.5 px-[7px] box-border items-center justify-center [transform:_rotate(15.14deg)] [transform-origin:0_0]">
      <img
        className="relative w-[46.6px] h-[54.14px]"
        alt=""
        src="/group.svg"
      />
    </div>
    <div className="absolute top-[264.82px] left-[1295px] rounded-8xs bg-default-white shadow-[0px_10px_40px_rgba(154,_148,_148,_0.25)] w-[65px] h-[65px] overflow-hidden flex flex-col py-[7px] px-[3px] box-border items-center justify-center [transform:_rotate(-16.83deg)] [transform-origin:0_0]">
      <img
        className="relative w-[44.79px] h-[34.39px]"
        alt=""
        src="/vector.svg"
      />
    </div>
  </div>

      </div>
      <img
        className="absolute top-[577px] right-[0] w-[508px] h-[441px] object-cover"
        alt=""
        src="/pngwing-1@2x.png"
      />
      {/* Navbar */}
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[100px] overflow-hidden">
        <b className="absolute top-[36px] left-[175px]">Logo</b>
        <div className="absolute top-[36px] left-[898px] flex flex-row items-start justify-start gap-[107px] text-base">
          <div className="relative text-xl">About</div>
          <div className="relative">Pricing</div>
          <div className="relative">Review</div>
        </div>
      </div>

      <div className="absolute top-[800px] left-[0px] w-[90vw] h-[525px] overflow-hidden text-black font-text-20-bold">
        <div className="absolute top-[49px] left-[175.5px] w-[552px] h-[397px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
            <b className="relative">Interactive Features</b>
            <div className="relative text-xs inline-block w-52">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
          <div className="absolute top-[214px] left-[0px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
            <b className="relative">Interactive Features</b>
            <div className="relative text-xs inline-block w-52">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
          <div className="absolute top-[23px] left-[284px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
            <b className="relative">Interactive Features</b>
            <div className="relative text-xs inline-block w-52">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
          <div className="absolute top-[237px] left-[284px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
            <b className="relative">Interactive Features</b>
            <div className="relative text-xs inline-block w-52">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
        </div>
        <div className="absolute top-[125.5px] left-[847.5px] flex flex-col items-start justify-start gap-[48px] text-29xl font-heading-heading-3">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <b className="relative">About the Course</b>
            <div className="relative text-sm font-text-20-bold inline-block w-[367px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unkno
            </div>
          </div>
          <div className="relative rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[60px] text-xl text-default-white font-text-20-bold">
            <b className="absolute top-[15px] left-[56px]">Explore Now</b>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[1219px] left-[2px] w-[1440px] h-[714px] overflow-hidden text-[140px] text-whitesmoke font-text-20-bold">
        <div className="absolute top-[0px] left-[1px] w-[1441px] h-[568px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1439px] h-[531.08px]"
            alt=""
            src="/line-1.svg"
          />
          <img
            className="absolute top-[17.94px] left-[1px] w-[1439px] h-[531.14px]"
            alt=""
            src="/line-2.svg"
          />
          <img
            className="absolute top-[36.94px] left-[2px] w-[1439px] h-[531.14px]"
            alt=""
            src="/line-2.svg"
          />
          <b className="absolute top-[115px] left-[853px] inline-block w-[588px] h-[180px]">
            Podcast
          </b>
        </div>
        <div className="absolute top-[76px] left-[175px] w-[1090px] h-[577px] text-13xl text-black font-heading-heading-3">
          <div className="absolute top-[0px] left-[317px] flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[24px]">
              <b className="relative">Choose your plan</b>
              <div className="relative text-sm font-text-20-bold text-center inline-block w-[455px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</div>
            </div>
            <div className="rounded-3xs bg-default-white shadow-[0px_10px_30px_rgba(154,_148,_148,_0.25)] h-[37px] flex flex-row py-1.5 pr-4 pl-1.5 box-border items-center justify-start gap-[10px] text-center text-sm font-text-20-bold">
              <div className="rounded-3xs bg-light flex flex-row py-[3px] px-[9px] items-center justify-center">
                <div className="relative">monthly</div>
              </div>
              <div className="relative">yearly</div>
            </div>
          </div>
          <div className="absolute top-[220px] left-[0px] w-[1090px] h-[357px] text-xs">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-default-white flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] border-[0.5px] border-solid border-ghost">
              <div className="w-[249px] flex flex-col items-start justify-start gap-[16px] text-base">
                <b className="relative">Basic Plan</b>
                <div className="relative text-xs font-text-20-bold inline-block w-[264px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[19px] text-13xl text-ghost">
                <b className="relative">$ 54</b>
                <div className="relative text-sm font-text-20-bold">/month</div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
              </div>
              <div className="relative rounded-8xs box-border w-[149px] h-11 text-ghost font-text-20-bold border-[0.5px] border-solid border-ghost">
                <div className="absolute top-[14px] left-[31px]">
                  Start Free Trial
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[787px] rounded-3xs bg-default-white flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] border-[0.5px] border-solid border-ghost">
              <div className="w-[249px] flex flex-col items-start justify-start gap-[16px] text-base">
                <b className="relative">Basic Plan</b>
                <div className="relative text-xs font-text-20-bold inline-block w-[264px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[19px] text-13xl text-ghost">
                <b className="relative">$ 54</b>
                <div className="relative text-sm font-text-20-bold">/month</div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
              </div>
              <div className="relative rounded-8xs box-border w-[149px] h-11 text-ghost font-text-20-bold border-[0.5px] border-solid border-ghost">
                <div className="absolute top-[14px] left-[31px]">
                  Start Free Trial
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[393px] rounded-3xs bg-ghost flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] text-default-white">
              <div className="w-[249px] flex flex-col items-start justify-start gap-[16px] text-base">
                <b className="relative">Premium Plan</b>
                <div className="relative text-xs font-text-20-bold inline-block w-[264px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[19px] text-13xl">
                <b className="relative">$ 54</b>
                <div className="relative text-sm font-text-20-bold">/month</div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector2.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector2.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[4.75px] h-[4.75px]"
                    alt=""
                    src="/vector2.svg"
                  />
                  <b className="relative">Free access to video class</b>
                </div>
              </div>
              <div className="relative rounded-8xs bg-default-white w-[149px] h-11 text-ghost font-text-20-bold">
                <div className="absolute top-[14px] left-[31px]">
                  Start Free Trial
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1959px] left-[99px] w-[1322px] h-[482px] text-21xl text-black">
        <div className="absolute top-[467px] left-[630px] flex flex-row items-start justify-start gap-[24px]">
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <img
              className="relative w-[15px] h-[15px]"
              alt=""
              src="/vector3.svg"
            />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <img
              className="relative w-[15px] h-[15px]"
              alt=""
              src="/vector4.svg"
            />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <img
              className="relative w-[15px] h-[15px]"
              alt=""
              src="/vector4.svg"
            />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <img
              className="relative w-[15px] h-[15px]"
              alt=""
              src="/vector4.svg"
            />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <img
              className="relative w-[15px] h-[15px]"
              alt=""
              src="/vector4.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[64px] w-[1411px] h-[378px]">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
            <b className="relative">Review from customers</b>
            <div className="relative text-xs font-text-20-bold inline-block w-[399px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </div>
          </div>
          <div className="absolute top-[140px] left-[0px] w-[1365px] h-[262px] text-base">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-default-white shadow-[0px_16px_40px_rgba(154,_148,_148,_0.25)] flex flex-col py-9 px-12 items-center justify-center border-[0.5px] border-solid border-light">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-row items-center justify-start gap-[24px]">
                  <img
                    className="relative rounded-37xl-5 w-[70px] h-[70px] object-cover"
                    alt=""
                    src="/lolla-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <b className="relative inline-block w-[88px] h-4 shrink-0">
                        Lolla Smith
                      </b>
                      <div className="relative text-sm font-text-20-bold inline-block w-[65px] h-4 shrink-0">
                        Microsoft
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative text-xs font-text-20-bold inline-block w-[369px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[497px] rounded-3xs bg-default-white flex flex-col py-9 px-12 items-center justify-center border-[0.5px] border-solid border-light">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-row items-center justify-start gap-[24px]">
                  <img
                    className="relative rounded-37xl-5 w-[70px] h-[70px] object-cover"
                    alt=""
                    src="/lolla-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <b className="relative inline-block w-[88px] h-4 shrink-0">
                        Lolla Smith
                      </b>
                      <div className="relative text-sm font-text-20-bold inline-block w-[65px] h-4 shrink-0">
                        Microsoft
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative text-xs font-text-20-bold inline-block w-[369px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[994px] rounded-3xs bg-default-white flex flex-col py-9 px-12 items-center justify-center border-[0.5px] border-solid border-light">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-row items-center justify-start gap-[24px]">
                  <img
                    className="relative rounded-37xl-5 w-[70px] h-[70px] object-cover"
                    alt=""
                    src="/lolla-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <b className="relative inline-block w-[88px] h-4 shrink-0">
                        Lolla Smith
                      </b>
                      <div className="relative text-sm font-text-20-bold inline-block w-[65px] h-4 shrink-0">
                        Microsoft
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative text-xs font-text-20-bold inline-block w-[369px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
              </div>
            </div>
            <div className="absolute top-[81px] left-[994px] rounded-[100px] bg-light shadow-[0px_16px_40px_rgba(154,_148,_148,_0.25)] overflow-hidden flex flex-row p-[5px] items-center justify-center">
              <img
                className="relative rounded-[80px] w-10 h-10 overflow-hidden shrink-0"
                alt=""
                src="/pepiconspencilarrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" Footer-container absolute bottom-0 text-xs font-text-20-bold">
        <img
          className="w-[99vw] h-[513.44px]"
          alt=""
          src="/polygon-2.svg"
        />
        <div className="absolute bottom-2 z-50 left-[222px]  w-[995px] h-[74px] overflow-hidden flex flex-row  px-0 items-center justify-center gap-[192px] border-t-[0.5px]  "style={{borderTop:"solid rgb(113 83 136)",}}>
          <div className="relative">All Right Reserved @Copyright 2023</div>
          <div className="flex flex-row items-center justify-start gap-[64px]">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <div className="relative">Terms of Service</div>
              <div className="relative">Privacy Policy</div>
              <div className="relative">Product</div>
            </div>
            <div className="w-36 flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/mdifacebook.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/uilyoutube.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/basilinstagramsolid.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/uiltwitter.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[68px] left-[422px] flex flex-col items-center justify-start gap-[64px] text-13xl text-black font-heading-heading-3">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <b className="relative">We have what you’re looking for</b>
            <div className="relative text-xs font-text-20-bold  text-cyan-600  [-webkit-background-clip:text]  text-center inline-block w-[596px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type a
            </div>
          </div>
          <div className="relative rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[60px] text-xl text-default-white font-text-20-bold">
            <b className="absolute top-[15px] left-[36px]">Get Started Now</b>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Dashboard;
