import React, { useState, useEffect } from "react";
import Countdown from "../Countdown/Countdown";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import introrGif from "../../img/traceit-loader1.gif";

const Hero = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("August 31,2024 10:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(minutes);
        setTimerSecs(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <section id="title">
      <div className="container-fluid">
        <Navbar></Navbar>

        <div className="main-title">
          <div className="intro">
            <h1>
              <small className="text-muted">Introducing...</small>
            </h1>
          </div>
          <img src={introrGif} className="trace-logo" alt="logo" srcSet="" />
          <span>
            <h4>A technical event by the IT Department of MCKVIE</h4>
          </span>
          <div className="btn-div">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5c3waPJAaVx8kxR3dkwzTOXwj0bbFj7K2lyznkzmgeIvJig/viewform"
              className="btn btn-success"
            >
              Register Now &gt;
            </a>
          </div>
        </div>

        <div className="borderBox1">
          <div className="countD">
            <p className="textStyle">
              <b>The event will start in: </b>
            </p>
            <Countdown
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMins={timerMins}
                    timerSecs={timerSecs}
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
