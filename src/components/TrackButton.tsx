import { useState } from "react";
import { Navigation } from "lucide-react";

const TrackButton = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleToggle = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleToggle}
        className={`
          w-16 h-16 rounded-full transition-all duration-300
          flex items-center justify-center
          ${isTracking 
            ? 'bg-success text-success-foreground shadow-lg shadow-success/30 scale-105' 
            : 'bg-secondary text-secondary-foreground hover:shadow-md'
          }
        `}
        aria-label={isTracking ? "Stop tracking" : "Start tracking"}
      >
        <Navigation className={`w-5 h-5 ${isTracking ? 'fill-current' : ''}`} />
      </button>
      <span className="text-xs text-muted-foreground font-medium">
        {isTracking ? "Tracking" : "Track"}
      </span>
    </div>
  );
};

export default TrackButton;
