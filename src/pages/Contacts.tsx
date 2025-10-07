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
      
      <main className="flex-1 px-6 pt-8 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Emergency Contacts</h1>
          <button className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-md hover:shadow-lg transition-all">
            <UserPlus className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-3">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-card rounded-xl p-4 card-shadow border border-border/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{contact.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      contact.priority === "High" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-accent/20 text-accent"
                    }`}>
                      {contact.priority}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{contact.relation}</p>
                  <p className="text-sm text-foreground mt-1">{contact.phone}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Text
                </button>
                <button className="w-10 h-10 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-all flex items-center justify-center">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-muted rounded-xl p-4 border border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            💡 These contacts will be notified when you trigger an SOS alert
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Contacts;
