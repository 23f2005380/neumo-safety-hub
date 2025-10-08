import { useState } from "react";
import { Mic, MicOff } from "lucide-react";

const MicToggle = () => {
  const [isListening, setIsListening] = useState(false);

  const handleToggle = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleToggle}
        className={`
          w-16 h-16 rounded-full transition-all duration-300
          flex items-center justify-center
          ${isListening 
            ? 'bg-warning text-warning-foreground shadow-lg shadow-warning/30 scale-105' 
            : 'bg-secondary text-secondary-foreground hover:shadow-md'
          }
        `}
        aria-label={isListening ? "Stop listening" : "Start voice command"}
      >
        {isListening ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
      </button>
      <span className="text-xs text-muted-foreground font-medium">
        {isListening ? "Listening..." : "Voice"}
      </span>
    </div>
  );
};

export default MicToggle;
