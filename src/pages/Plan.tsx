import React from 'react'
import "../global.css";
import "./Dashboard.css";
function Plan() {
  return (
    <div className="group-parent" id="group-parent">
    <div className="vector-parent">
      <img className="group-child" alt="" src="/line-1.svg" />
      <img className="group-item" alt="" src="/line-2.svg" />
      <img className="group-inner" alt="" src="/line-2.svg" />
      <b className="podcast">Podcast</b>
    </div>

    <div className="frame-parent">
      <div className="title-group">
        <div className="we-have-what-youre-looking-fo-parent">
          <b className="about">Choose your plan</b>
          <div className="lorem-ipsum-is6">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</div>
        </div>
        <div className="radio">
          <div className="monthly-wrapper">
            <div className="about">monthly</div>
          </div>
          <div className="about">yearly</div>
        </div>
      </div>
      <div className="plan-parent">
        <div className="plan">
          <div className="basic-plan-parent">
            <b className="about">Basic Plan</b>
            <div className="lorem-ipsum-is7">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting
            </div>
          </div>
          <div className="parent">
            <b className="about">$ 54</b>
            <div className="month">/month</div>
          </div>
          <div className="frame-group">
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <b className="about">Free access to video class</b>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <b className="about">Free access to video class</b>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <b className="about">Free access to video class</b>
            </div>
          </div>
          <div className="start-free-trial-wrapper">
            <div className="start-free-trial">Start Free Trial</div>
          </div>
        </div>
        <div className="plan1">
          <div className="basic-plan-parent">
            <b className="about">Basic Plan</b>
            <div className="lorem-ipsum-is7">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting
            </div>
          </div>
          <div className="parent">
            <b className="about">$ 54</b>
            <div className="month">/month</div>
          </div>
          <div className="frame-group">
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <b className="about">Free access to video class</b>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <b className="about">Free access to video class</b>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <b className="about">Free access to video class</b>
            </div>
          </div>
          <div className="start-free-trial-wrapper">
            <div className="start-free-trial">Start Free Trial</div>
          </div>
        </div>
        <div className="plan2">
          <div className="basic-plan-parent">
            <b className="about">Premium Plan</b>
            <div className="lorem-ipsum-is7">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting
            </div>
          </div>
          <div className="container">
            <b className="about">$ 54</b>
            <div className="month">/month</div>
          </div>
          <div className="frame-group">
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector2.svg" />
              <b className="about">Free access to video class</b>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector2.svg" />
              <b className="about">Free access to video class</b>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector2.svg" />
              <b className="about">Free access to video class</b>
            </div>
          </div>
          <div className="start-free-trial-frame">
            <div className="start-free-trial">Start Free Trial</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Plan
