import React from "react";
import "./Countdown.css";

const Countdown = ({ timerDays, timerHours, timerMins, timerSecs }) => {
  return (
    <p id="countDown">
      {timerDays} Days, {timerHours} Hours, {timerMins} Minutes, {timerSecs} Seconds.
    </p>
  );
};

Countdown.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMins: 10,
  timerSecs: 10,
};

export default Countdown;
