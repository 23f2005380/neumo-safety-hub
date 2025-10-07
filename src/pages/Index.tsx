import SOSButton from "@/components/SOSButton";
import MicToggle from "@/components/MicToggle";
import TrackButton from "@/components/TrackButton";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";
import { Shield } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handleSOSPress = () => {
    toast.success("Emergency Alert Sent!", {
      description: "Your emergency contacts have been notified with your location.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold text-foreground">SafeGuard</h1>
          </div>
          <p className="text-muted-foreground">Your safety companion</p>
        </div>

        {/* Main SOS Button */}
        <div className="mb-12">
          <SOSButton onPress={handleSOSPress} />
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-8">
          <MicToggle />
          <TrackButton />
        </div>

        {/* Quick Stats */}
        <div className="mt-12 neu-flat-sm rounded-3xl px-8 py-4 flex items-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-xs text-muted-foreground">Contacts</p>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">24/7</p>
            <p className="text-xs text-muted-foreground">Protected</p>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">Active</p>
            <p className="text-xs text-muted-foreground">Status</p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
