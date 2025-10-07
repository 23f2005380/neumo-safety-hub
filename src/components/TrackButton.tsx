import { useState } from "react";
import { Navigation } from "lucide-react";
import NeuButton from "./NeuButton";

const TrackButton = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleToggle = () => {
    setIsTracking(!isTracking);
  };

  return (
    <NeuButton
      onClick={handleToggle}
      active={isTracking}
      size="md"
      icon={<Navigation className={`w-5 h-5 ${isTracking ? 'fill-current' : ''}`} />}
      label={isTracking ? "Tracking" : "Track"}
    />
  );
};

export default TrackButton;
