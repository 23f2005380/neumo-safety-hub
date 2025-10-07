import { User, Bell, Shield, MapPin, Phone, Settings, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 px-6 pt-8 pb-32">
        {/* Profile Header */}
        <div className="neu-flat rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="neu-pressed rounded-full w-20 h-20 flex items-center justify-center">
              <User className="w-10 h-10 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@email.com</p>
            </div>
          </div>
          <button className="w-full neu-flat-sm rounded-xl py-3 font-medium text-foreground hover:neu-pressed-sm transition-neu">
            Edit Profile
          </button>
        </div>

        {/* Safety Status */}
        <div className="neu-flat-sm rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-semibold text-foreground">Safety Status</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
              Active
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Safe Trips</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Contacts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">0</p>
              <p className="text-xs text-muted-foreground">Alerts</p>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground mb-4">Settings</h3>
          
          {[
            { icon: Bell, label: "Notifications", subtitle: "Manage alert preferences" },
            { icon: MapPin, label: "Location Services", subtitle: "GPS and tracking" },
            { icon: Phone, label: "Emergency Numbers", subtitle: "Default contacts" },
            { icon: Settings, label: "App Settings", subtitle: "Preferences and privacy" },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full neu-flat-sm rounded-2xl p-4 flex items-center gap-4 hover:neu-pressed-sm transition-neu"
            >
              <div className="neu-pressed-sm rounded-full p-3">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
              <div className="text-muted-foreground">›</div>
            </button>
          ))}

          {/* Logout Button */}
          <button className="w-full neu-flat-sm rounded-2xl p-4 flex items-center justify-center gap-3 hover:neu-pressed-sm transition-neu mt-6">
            <LogOut className="w-5 h-5 text-destructive" />
            <span className="font-semibold text-destructive">Logout</span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
