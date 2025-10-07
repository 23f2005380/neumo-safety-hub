import { MapPin, Users, Phone, UserCircle } from "lucide-react";
import { useState } from "react";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "map", icon: MapPin, label: "Map" },
    { id: "contacts", icon: Users, label: "Contacts" },
    { id: "dial", icon: Phone, label: "Speed Dial" },
    { id: "profile", icon: UserCircle, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 pb-safe">
      <div className="neu-flat mx-4 mb-4 rounded-3xl p-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  flex flex-col items-center gap-1 px-4 py-3 rounded-2xl
                  transition-neu min-w-[70px]
                  ${isActive ? 'neu-pressed-sm' : 'hover:neu-flat-sm'}
                `}
                aria-label={item.label}
              >
                <Icon 
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-accent' : 'text-foreground'
                  }`}
                  strokeWidth={2.5}
                />
                <span className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
