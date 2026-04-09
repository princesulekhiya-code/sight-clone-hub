import { DashboardLayout } from "@/components/DashboardLayout";
import { Mail, Phone, MapPin, Briefcase, Save, Camera, User } from "lucide-react";

export default function ProfilePage() {
  return (
    <DashboardLayout title="Profile">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-serif">Profile <span className="warm-text">Settings</span></h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your personal information and career goals</p>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-6 flex items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">MV</div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center"><Camera className="w-3.5 h-3.5 text-primary-foreground" /></button>
          </div>
          <div><p className="text-foreground font-semibold">Marcus Vane</p><p className="text-sm text-muted-foreground">marcus.vane@email.com</p></div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Personal Info</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[["First Name", "Marcus"], ["Last Name", "Vane"], ["Email", "marcus.vane@email.com"], ["Phone", "+1 (555) 123-4567"]].map(([label, val], i) => (
                <div key={i}><label className="text-xs text-muted-foreground mb-1 block">{label}</label><input defaultValue={val} className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50" /></div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Professional</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[["Job Title", "Senior Product Designer"], ["Company", "TechCorp Inc."], ["Location", "San Francisco, CA"], ["Experience", "8 years"]].map(([label, val], i) => (
                <div key={i}><label className="text-xs text-muted-foreground mb-1 block">{label}</label><input defaultValue={val} className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50" /></div>
              ))}
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"><Save className="w-4 h-4" /> Save Changes</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
