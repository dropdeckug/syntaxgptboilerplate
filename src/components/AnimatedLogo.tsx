import React, { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative">
        <div className={`transition-all duration-1000 ${isAnimating ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_20px_rgba(29,185,84,0.5)]"
          >
            {/* Outer circle */}
            <circle
              cx="60"
              cy="60"
              r="55"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            
            {/* Code brackets */}
            <path
              d="M35 40 L25 60 L35 80"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={`transition-all duration-500 ${isAnimating ? 'translate-x-[-4px]' : 'translate-x-0'}`}
            />
            <path
              d="M85 40 L95 60 L85 80"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={`transition-all duration-500 ${isAnimating ? 'translate-x-[4px]' : 'translate-x-0'}`}
            />
            
            {/* Center slash */}
            <path
              d="M70 35 L50 85"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
            />
            
            {/* Inner glow circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="hsl(var(--primary))"
              opacity="0.1"
              className={`transition-all duration-1000 ${isAnimating ? 'scale-110' : 'scale-100'}`}
            />
          </svg>
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-primary rounded-full" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 -mb-1 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
