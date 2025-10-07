import { useState } from "react";
import { AlertCircle } from "lucide-react";

interface SOSButtonProps {
  onPress?: () => void;
}

const SOSButton = ({ onPress }: SOSButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress?.();
    
    // Simulate emergency call
    setTimeout(() => {
      setIsPressed(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handlePress}
        disabled={isPressed}
        className={`
          relative w-48 h-48 rounded-full
          transition-neu
          ${isPressed ? 'neu-pressed' : 'neu-flat-xl sos-glow'}
          ${!isPressed && 'animate-pulse-glow hover:scale-105'}
          active:scale-95
          disabled:opacity-70
        `}
        aria-label="Emergency SOS Button"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`
            flex flex-col items-center gap-2
            ${isPressed ? 'scale-95' : 'scale-100'}
            transition-all duration-300
          `}>
            <AlertCircle 
              className={`w-16 h-16 ${isPressed ? 'text-primary/70' : 'text-primary'}`} 
              strokeWidth={2.5}
            />
            <span className={`
              text-3xl font-bold tracking-wider
              ${isPressed ? 'text-primary/70' : 'text-primary'}
            `}>
              SOS
            </span>
          </div>
        </div>

        {/* Ripple effect circles */}
        {!isPressed && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping" 
                 style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </>
        )}
      </button>

      <p className="mt-6 text-sm text-muted-foreground font-medium">
        {isPressed ? 'Emergency Alert Sent!' : 'Press for Emergency'}
      </p>
    </div>
  );
};

export default SOSButton;
