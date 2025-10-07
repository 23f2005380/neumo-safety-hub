import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import NeuButton from "./NeuButton";

const MicToggle = () => {
  const [isListening, setIsListening] = useState(false);

  const handleToggle = () => {
    setIsListening(!isListening);
  };

  return (
    <NeuButton
      onClick={handleToggle}
      active={isListening}
      size="lg"
      icon={isListening ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
      label={isListening ? "Listening..." : "Voice"}
    />
  );
};

export default MicToggle;
