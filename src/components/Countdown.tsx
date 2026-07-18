'use client';

import { useEffect, useState } from 'react';

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 sm:gap-8 justify-center mt-8 text-foreground">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Minutos', value: timeLeft.minutes },
        { label: 'Segundos', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="text-3xl sm:text-5xl font-light text-salvia">{item.value.toString().padStart(2, '0')}</div>
          <div className="text-xs sm:text-sm uppercase tracking-widest mt-2">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
