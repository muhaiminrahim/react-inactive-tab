import { useEffect, useState } from 'react';

export default function InactiveTab({handleInactive, time}) {
  const [count, setCount] = useState(0);
  let seconds = 60 // default 1 min
  if(seconds){
    seconds = time
  }

  useEffect(() => {
    let interval;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // User switched to another tab, start counting
        interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      } else {
        // User switched back to the tab, stop counting and reset
        clearInterval(interval);
        setCount()
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (count >= seconds) {
      handleInactive()
    }
  }, [count, handleInactive]);

  return <div></div>;
}

