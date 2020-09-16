import React from "react";
import "./BodyRight.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";
const BodyRight = () => {
  return (
    <div className="bodyRight">
      <div className="heading">
        <p>Today's news and views</p>
        <InfoIcon />
      </div>

      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>React 17 to Ease Migration</h5>
          <p>The React 17 release</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Google Analytics for Android</h5>
          <p>A major update for the Analytics</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Firebase Mobile App Success Made Simple</h5>
          <p>Firebase Helps You Build, Improve</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Firebase authentication </h5>
          <p>It is make life simpler</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Authentication got a KTX library</h5>
          <p>General Availability of the KTX</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Firebase Crashlytics SDK </h5>
          <p>Firebase announced a new Crashlytics SDK</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>The Realtime Time Database</h5>
          <p>Make use of Cloud Functions </p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Firebase iOS SDK</h5>
          <p>Like the Android SDK</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Firebase Youtube Channel</h5>
          <p>Sign in with iOS using Firebase</p>
        </div>
      </div>
      <div className="bodyRight__row">
        <FiberManualRecordIcon />
        <div className="bodyRight__content">
          <h5>Firebase Virtual Meetups</h5>
          <p>This is the first one of the series</p>
        </div>
      </div>
    </div>
  );
};

export default BodyRight;
