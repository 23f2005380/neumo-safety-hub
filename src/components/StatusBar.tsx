import { Battery, Signal, Wifi } from "lucide-react";

const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="flex items-center justify-between px-6 py-4 text-sm">
      <span className="font-semibold text-foreground">{currentTime}</span>
      
      <div className="flex items-center gap-3">
        <Signal className="w-4 h-4 text-foreground" />
        <Wifi className="w-4 h-4 text-foreground" />
        <div className="flex items-center gap-1">
          <Battery className="w-4 h-4 text-foreground" />
          <span className="text-xs text-muted-foreground">85%</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
