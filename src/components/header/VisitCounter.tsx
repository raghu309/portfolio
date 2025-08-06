import { useEffect, useState } from "react";
import { incrementCounter } from "../../firebase/service";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  // counter
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await incrementCounter();
        setVisitCount(count);
      } catch(err) {
        setVisitCount(0);
        console.log(err);
      }
    }
    
    fetchCount();
  }, []);
  


  return (
    <div className="ml-4 flex items-center space-x-2 bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span
        className="font-mono font-bold text-white tracking-widest"
        aria-label="Website visit count"
      >
        {visitCount != 0 ? visitCount.toString().padStart(5, "0") : "..."}
      </span>
    </div>
  );
};

export default VisitCounter;
