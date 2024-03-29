'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';
import "/style/timer.css"

// Random component
const Completionist = () => <span>You are good to go!</span>;

const Contador = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const target = new Date("10/22/2024 21:00:00");
  
      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
  
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
  
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
  
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
  
        if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
          setPartyTime(true);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="">

       
          <>
            <div className="timer-wrapper">
              <div className="timer-inner">
                <div className="timer-segment">
                  <span className="time">{days}</span>
                  <span className="label">Days</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                  <span className="time">{hours}</span>
                  <span className="label">Hours</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                  <span className="time">{minutes}</span>
                  <span className="label">Minutes</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                  <span className="time">{seconds}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            </div>

          </>

      </div>
    );
  };

export default Contador