import { useEffect, useState } from "react";

export const useTimer = (start: number = 60) => {
  const [seconds, setSeconds] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return seconds;
};
