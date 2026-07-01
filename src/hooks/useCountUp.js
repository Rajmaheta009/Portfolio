import { useState, useEffect } from "react";

function useCountUp(endValue, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return count;
}

export default useCountUp;