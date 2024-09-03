import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountDown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-10-05T10:20:00');
    const now = new Date();
    const difference = +targetDate - +now;
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft === null) {
    return null; // Render nothing on the server side
  }

  return (
    <div className="countdown">
      <div className="countDown">
        {timeLeft.days !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.days}</span>
          </div>
        )}
        {timeLeft.hours !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.hours}</span>
          </div>
        )}
        {timeLeft.minutes !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.minutes}</span>
          </div>
        )}
        {timeLeft.seconds !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.seconds}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountDown;
