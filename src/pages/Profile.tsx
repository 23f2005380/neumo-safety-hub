import { User, Bell, Shield, MapPin, Phone, Settings, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 px-6 pt-8 pb-24">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Profile</h1>
        
        {/* User Info Card */}
        <div className="bg-card rounded-2xl p-6 mb-6 card-shadow border border-border/50 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
            <User className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">John Doe</h2>
          <p className="text-sm text-muted-foreground mb-3">john.doe@email.com</p>
          <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:shadow-md transition-all">
            Edit Profile
          </button>
        </div>

        {/* Safety Status */}
        <div className="bg-card rounded-2xl p-5 mb-6 card-shadow border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-semibold text-foreground">Safety Status</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
              Active
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Trips</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Contacts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-success">0</p>
              <p className="text-xs text-muted-foreground">Alerts</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-3">
          {[
            { icon: Bell, label: "Notifications", subtitle: "Alert preferences" },
            { icon: MapPin, label: "Location", subtitle: "GPS and tracking" },
            { icon: Phone, label: "Emergency", subtitle: "Default contacts" },
            { icon: Settings, label: "Settings", subtitle: "App preferences" },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full bg-card rounded-xl p-4 card-shadow border border-border/50 flex items-center gap-4 hover:scale-[1.02] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>
          ))}

          <button className="w-full bg-destructive/10 text-destructive py-3 rounded-xl font-medium hover:bg-destructive/20 transition-all flex items-center justify-center gap-2 mt-4">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
