import { UserPlus, Phone, Mail, Trash2 } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const Contacts = () => {
  const emergencyContacts = [
    { name: "Mom", phone: "+1 234 567 8900", relation: "Family", priority: "High" },
    { name: "John Doe", phone: "+1 234 567 8901", relation: "Friend", priority: "Medium" },
    { name: "Sarah Smith", phone: "+1 234 567 8902", relation: "Colleague", priority: "Medium" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StatusBar />
      
      <main className="flex-1 px-6 pt-8 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Contacts</h1>
          <p className="text-muted-foreground">Manage your trusted contacts</p>
        </div>

        {/* Add Contact Button */}
        <button className="w-full neu-flat rounded-2xl p-4 mb-6 flex items-center justify-center gap-3 hover:neu-pressed transition-neu">
          <UserPlus className="w-5 h-5 text-accent" />
          <span className="font-semibold text-foreground">Add New Contact</span>
        </button>

        {/* Contacts List */}
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="neu-flat-sm rounded-2xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-lg">{contact.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      contact.priority === "High" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-accent/20 text-accent"
                    }`}>
                      {contact.priority}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{contact.relation}</p>
                  <p className="text-sm font-medium text-foreground">{contact.phone}</p>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="flex-1 neu-flat-sm rounded-xl py-2 flex items-center justify-center gap-2 hover:neu-pressed-sm transition-neu">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Call</span>
                </button>
                <button className="flex-1 neu-flat-sm rounded-xl py-2 flex items-center justify-center gap-2 hover:neu-pressed-sm transition-neu">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Message</span>
                </button>
                <button className="neu-flat-sm rounded-xl px-4 py-2 hover:neu-pressed-sm transition-neu">
                  <Trash2 className="w-4 h-4 text-destructive" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-6 neu-pressed-sm rounded-2xl p-4">
          <p className="text-sm text-muted-foreground text-center">
            These contacts will be notified automatically when you trigger an SOS alert
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Contacts;
