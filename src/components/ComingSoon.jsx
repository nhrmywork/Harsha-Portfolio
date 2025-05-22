import { useState, useEffect } from "react";

const ComingSoon = () => {
  // Set your launch date here (YYYY-MM-DDTHH:MM:SS)
  const launchDate = new Date("2025-07-01T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d545e] text-[#e1b382] px-4">
        <h1 className="text-5xl font-extrabold mb-4">We're Live!</h1>
        <p className="text-xl">Thanks for your patience — check back now.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-white via-gray-100 to-white text-black px-4">
      <h1 className="text-5xl font-extrabold mb-4">Coming Soon</h1>
      <p className="mb-10 text-center max-w-md">
        Our website is under construction, but we're launching soon. Stay tuned!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>

      {/* Optional: Email subscription form */}
      {/* <form className="mt-12 flex max-w-md w-full">
        <input
          type="email"
          placeholder="Your email"
          className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
        />
        <button
          type="submit"
          className="bg-white text-purple-700 font-bold px-6 rounded-r-md hover:bg-purple-100 transition"
        >
          Notify Me
        </button>
      </form> */}
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="bg-black bg-opacity-10 rounded-lg px-6 py-4 min-w-[80px] backdrop-blur-sm">
      <span className="text-2xl font-mono font-bold">{value.toString().padStart(2, "0")}</span>
    </div>
    <div className="mt-2 uppercase text-sm tracking-widest font-medium">{label}</div>
  </div>
);

export default ComingSoon;
