import { MapPin, Users, Phone, UserCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "map", icon: MapPin, label: "Map", path: "/map" },
    { id: "contacts", icon: Users, label: "Contacts", path: "/contacts" },
    { id: "dial", icon: Phone, label: "Speed Dial", path: "/dial" },
    { id: "profile", icon: UserCircle, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 pb-safe z-50">
      <div className="neu-flat-lg mx-4 mb-4 rounded-3xl p-2 border border-border/50">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
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
