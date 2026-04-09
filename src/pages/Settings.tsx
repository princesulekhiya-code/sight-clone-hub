import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Bell, Lock, Download, Trash2, Shield, Globe } from "lucide-react";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)} className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-primary" : "bg-switch-background"}`}>
      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-foreground transition-transform ${on ? "translate-x-[22px]" : "translate-x-0.5"}`} />
    </button>
  );
}

export default function SettingsPage() {
  return (
    <DashboardLayout title="Settings">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-serif">Account <span className="warm-text">Settings</span></h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your preferences, security and privacy</p>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><Bell className="w-4 h-4 text-primary" /> Notifications</h3>
            <div className="space-y-4">
              {[
                { label: "Email notifications", desc: "Receive updates via email", on: true },
                { label: "Push notifications", desc: "Real-time alerts on device", on: true },
                { label: "Job match alerts", desc: "Notify when new matches found", on: true },
                { label: "Weekly summary", desc: "Weekly digest of activity", on: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div><p className="text-sm text-foreground">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                  <Toggle defaultOn={item.on} />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Security</h3>
            <div className="space-y-3">
              <button className="px-4 py-2.5 rounded-xl border border-border text-sm text-foreground hover:bg-secondary transition-colors">Change Password</button>
              <div className="flex items-center justify-between py-2">
                <div><p className="text-sm text-foreground">Two-factor authentication</p><p className="text-xs text-muted-foreground">Add extra security to your account</p></div>
                <Toggle />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-destructive/20">
            <h3 className="text-destructive font-semibold mb-4 flex items-center gap-2"><Trash2 className="w-4 h-4" /> Danger Zone</h3>
            <p className="text-sm text-muted-foreground mb-3">Permanently delete your account and all data.</p>
            <button className="px-4 py-2.5 rounded-xl bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors">Delete Account</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
