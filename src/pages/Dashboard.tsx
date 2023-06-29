import { FunctionComponent } from "react";
import "./Dashboard.css";

import Navbar from "./Navbar";
import "../global.css";
import Course from "./Course";
import Plan from "./Plan";
const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard">
      <img className="dashboard-child" alt="" src="/group-1.svg" />
      <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
      {/* navbar */}
      <Navbar/>
      {/* fram-2 */}
      <div className="content-parent" id="content-parent">
        <div className="content">
          <div className="title1">
            <div className="lorem-ipsum-is5">
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                in ustry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s</p>
            </div>
              <p className="learn-how-to">
              Learn how to launch a successful podcast
              </p>
          </div>
          <div className="button1">
            <b className="sign-up-now">Sign up Now</b>
          </div>

        </div>
        <img className="frame-child" alt="" src="/group-75.svg" />
        <img
          className="group-first-image"
          alt=""
          src="/everyoneissmilinglistensgrouppeoplebusinessconferencemodernclassroomdaytime-1@2x.png"
        />
        <img
          className="group-sec-image"
          alt=""
          src="/groupbusinessworkerssmilinghappyconfidentworkingtogetherwithsmilefaceapplaudingonethemoffice-1@2x.png"
        />
        <div className="streamlinecomputer-voice-mail">
          <img className="group-icon" alt="" src="/group.svg" />
        </div>
        <div className="solarpodcast-outline">
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
      </div>

    {/* course */}
        <Course/>
    {/* fram-4 */}
      <Plan/>
    {/* fram -5 */}
      <div className="frame-parent2">
        <div className="radix-iconsdot-filled-parent">
          <div className="radix-iconsdot-filled">
            <img className="vector-icon10" alt="" src="/vector3.svg" />
          </div>
          <div className="radix-iconsdot-filled">
            <img className="vector-icon10" alt="" src="/vector4.svg" />
          </div>
          <div className="radix-iconsdot-filled">
            <img className="vector-icon10" alt="" src="/vector4.svg" />
          </div>
          <div className="radix-iconsdot-filled">
            <img className="vector-icon10" alt="" src="/vector4.svg" />
          </div>
          <div className="radix-iconsdot-filled">
            <img className="vector-icon10" alt="" src="/vector4.svg" />
          </div>
        </div>
        <div className="frame-parent3">
          <div className="review-from-customers-parent">
            <b className="about">Review from customers</b>
            <div className="lorem-ipsum-is10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </div>
          </div>
          <div className="instance-parent">
            <div className="frame-wrapper">
              <div className="title">
                <div className="lolla-1-parent">
                  <img className="lolla-1-icon" alt="" src="/lolla-1@2x.png" />
                  <div className="frame-group">
                    <div className="frame-group">
                      <b className="lolla-smith">Lolla Smith</b>
                      <div className="microsoft">Microsoft</div>
                    </div>
                    <div className="fluent-emoji-flatstar-parent">
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="lorem-ipsum-is11">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="title">
                <div className="lolla-1-parent">
                  <img className="lolla-1-icon" alt="" src="/lolla-1@2x.png" />
                  <div className="frame-group">
                    <div className="frame-group">
                      <b className="lolla-smith">Lolla Smith</b>
                      <div className="microsoft">Microsoft</div>
                    </div>
                    <div className="fluent-emoji-flatstar-parent">
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="lorem-ipsum-is11">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="title">
                <div className="lolla-1-parent">
                  <img className="lolla-1-icon" alt="" src="/lolla-1@2x.png" />
                  <div className="frame-group">
                    <div className="frame-group">
                      <b className="lolla-smith">Lolla Smith</b>
                      <div className="microsoft">Microsoft</div>
                    </div>
                    <div className="fluent-emoji-flatstar-parent">
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                      <img
                        className="fluent-emoji-flatstar-icon"
                        alt=""
                        src="/fluentemojiflatstar1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="lorem-ipsum-is11">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
              </div>
            </div>
            <div className="pepicons-pencilarrow-right-wrapper">
              <img
                className="pepicons-pencilarrow-right"
                alt=""
                src="/pepiconspencilarrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    {/* fram -6 */}
      <div className="vector-parent7">
        <img className="frame-item" alt="" src="/polygon-2.svg" />
        <div className="all-right-reserved-copyright-parent">
          <div className="about">All Right Reserved @Copyright 2023</div>
          <div className="frame-parent10">
            <div className="terms-of-service-parent">
              <div className="about">Terms of Service</div>
              <div className="about">Privacy Policy</div>
              <div className="about">Product</div>
            </div>
            <div className="mdifacebook-parent">
              <img className="mdifacebook-icon" alt="" src="/mdifacebook.svg" />
              <img className="mdifacebook-icon" alt="" src="/uilyoutube.svg" />
              <img
                className="mdifacebook-icon"
                alt=""
                src="/basilinstagramsolid.svg"
              />
              <img className="mdifacebook-icon" alt="" src="/uiltwitter.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent11">
          <div className="we-have-what-youre-looking-fo-parent">
            <b className="about">We have what you’re looking for</b>
            <div className="lorem-ipsum-is14">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type a
            </div>
          </div>
          <div className="button">
            <b className="get-started-now">Get Started Now</b>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
