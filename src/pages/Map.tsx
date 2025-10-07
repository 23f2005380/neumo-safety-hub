import { MapPin, Navigation, Phone } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const Map = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 px-6 pt-8 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Nearby Safety</h1>
          <p className="text-muted-foreground">Find nearest police stations and safe zones</p>
        </div>

        {/* Map Placeholder */}
        <div className="neu-flat rounded-3xl p-6 mb-6 h-[400px] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
            <p className="text-muted-foreground">Map integration coming soon</p>
          </div>
        </div>

        {/* Nearby Locations */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground mb-4">Nearest Police Stations</h2>
          
          {[
            { name: "Central Police Station", distance: "0.8 km", time: "3 min" },
            { name: "North District HQ", distance: "1.2 km", time: "5 min" },
            { name: "Highway Patrol Unit", distance: "2.1 km", time: "8 min" },
          ].map((station, index) => (
            <div key={index} className="neu-flat-sm rounded-2xl p-4 flex items-center gap-4">
              <div className="neu-pressed-sm rounded-full p-3">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{station.name}</h3>
                <p className="text-sm text-muted-foreground">{station.distance} away</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm font-medium text-accent">{station.time}</span>
                <button className="neu-flat-sm rounded-full p-2 hover:neu-pressed-sm transition-neu">
                  <Navigation className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call */}
        <button className="mt-6 w-full neu-flat rounded-2xl p-4 flex items-center justify-center gap-3 hover:neu-pressed transition-neu">
          <Phone className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Call Emergency (911)</span>
        </button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Map;
