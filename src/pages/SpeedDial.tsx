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
      
      <main className="flex-1 px-6 pt-8 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Speed Dial</h1>
          <p className="text-muted-foreground">Quick access to important numbers</p>
        </div>

        {/* Speed Dial Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {speedDialNumbers.map((item, index) => (
            <button
              key={index}
              className={`neu-flat rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 hover:neu-pressed transition-neu ${
                item.color === "primary" ? "ring-2 ring-primary/30" : ""
              }`}
            >
              <div className={`neu-pressed-sm rounded-full w-12 h-12 flex items-center justify-center ${
                item.color === "primary" ? "bg-primary/10" : ""
              }`}>
                <span className={`text-2xl font-bold ${
                  item.color === "primary" ? "text-primary" : "text-accent"
                }`}>
                  {item.number}
                </span>
              </div>
              <span className="text-xs font-medium text-foreground">{item.label}</span>
            </button>
          ))}
          
          {/* Add More Button */}
          {[...Array(3)].map((_, index) => (
            <button
              key={`empty-${index}`}
              className="neu-flat rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 hover:neu-pressed transition-neu opacity-50"
            >
              <Plus className="w-8 h-8 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Add</span>
            </button>
          ))}
        </div>

        {/* Instructions */}
        <div className="neu-pressed-sm rounded-2xl p-6">
          <h3 className="font-semibold text-foreground mb-3">How to use Speed Dial</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Press and hold any number to quickly call that contact</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Customize your speed dial numbers by tapping the Add button</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Emergency services (911) is always available at position 0</span>
            </li>
          </ul>
        </div>

        {/* Quick Call Emergency */}
        <button className="mt-6 w-full neu-flat rounded-2xl p-4 flex items-center justify-center gap-3 hover:neu-pressed transition-neu bg-primary/5">
          <Phone className="w-5 h-5 text-primary" />
          <span className="font-semibold text-primary">Emergency Call (911)</span>
        </button>
      </main>

      <BottomNav />
    </div>
  );
};

export default SpeedDial;
