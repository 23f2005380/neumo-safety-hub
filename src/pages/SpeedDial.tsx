import { Phone, Plus } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const SpeedDial = () => {
  const speedDialNumbers = [
    { number: "911", label: "Emergency", color: "primary" },
    { number: "1", label: "Mom", color: "accent" },
    { number: "2", label: "Dad", color: "accent" },
    { number: "3", label: "Friend", color: "accent" },
    { number: "4", label: "Work", color: "accent" },
    { number: "5", label: "Doctor", color: "accent" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 px-6 pt-8 pb-24">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Speed Dial</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {speedDialNumbers.map((item, index) => (
            <button
              key={index}
              className={`bg-card rounded-2xl p-6 card-shadow border border-border/50 hover:scale-105 transition-all active:scale-95 ${
                item.color === "primary" ? "ring-2 ring-primary/50" : ""
              }`}
            >
              <div className={`w-16 h-16 rounded-full ${
                item.color === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
              } flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground text-center mb-1">{item.label}</h3>
              <p className={`text-2xl font-bold text-center ${
                item.color === "primary" ? "text-primary" : "text-accent"
              }`}>{item.number}</p>
            </button>
          ))}
        </div>

        <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-medium hover:shadow-md transition-all flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          Add Speed Dial
        </button>

        <div className="mt-6 bg-muted rounded-xl p-4 border border-border/50">
          <p className="text-sm text-muted-foreground">
            💡 Tap and hold any number to make a quick call
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SpeedDial;
