
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
  duration?: number;
}

const StatCounter = ({ value, label, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(value * percentage));
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{value >= 100 ? "+" : ""}
      </div>
      <div className="text-sm md:text-base text-gray-200">{label}</div>
    </div>
  );
};

const PlacementStats = () => {
  return (
    <div className="relative w-full bg-black/90 py-12">
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-cse-accent clip-diagonal-edge"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          <StatCounter value={22} label="Years of Excellence" />
          <StatCounter value={9} label="UG Programmes" />
          <StatCounter value={6} label="PG Programmes" />
          <StatCounter value={85} label="Placement Records %" />
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
