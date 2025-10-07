import { MapPin, Navigation, Phone } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const Map = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 px-6 pt-8 pb-24">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Nearby Police Stations</h1>
        
        <div className="bg-card rounded-2xl p-6 mb-4 card-shadow border border-border/50">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 text-accent" />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Interactive map showing nearest emergency services will appear here
          </p>
        </div>

        <div className="space-y-3">
          {[
            { name: "Central Police Station", distance: "0.5 km", address: "Main Street" },
            { name: "North District Station", distance: "1.2 km", address: "Park Avenue" },
            { name: "Highway Patrol Unit", distance: "2.1 km", address: "Highway 101" },
          ].map((station, index) => (
            <div key={index} className="bg-card rounded-xl p-4 card-shadow border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{station.name}</h3>
                <p className="text-sm text-muted-foreground">{station.distance} • {station.address}</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all">
                <Navigation className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Call Emergency (911)
        </button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Map;
