import { Home, MapPin, Users, Phone, UserCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "map", icon: MapPin, label: "Map", path: "/map" },
    { id: "contacts", icon: Users, label: "Contacts", path: "/contacts" },
    { id: "dial", icon: Phone, label: "Dial", path: "/dial" },
    { id: "profile", icon: UserCircle, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 pb-safe z-50">
      <div className="bg-card border-t border-border backdrop-blur-lg bg-card/95">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`
                  flex flex-col items-center gap-1 px-3 py-2 rounded-xl
                  transition-all duration-200 min-w-[60px]
                  ${isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}
                `}
                aria-label={item.label}
              >
                <Icon 
                  className="w-5 h-5"
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-medium">
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
