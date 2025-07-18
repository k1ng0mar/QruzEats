import Link from "next/link";
import {
  User,
  MapPin,
  CreditCard,
  Languages,
  HelpCircle,
  FileText,
  Gift,
  KeyRound,
  Shield,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const profileLinks = [
  { href: "#", icon: User, label: "Your Profile" },
  { href: "#", icon: CreditCard, label: "Wallet & Payment" },
  { href: "#", icon: MapPin, label: "Saved Addresses" },
  { href: "#", icon: Languages, label: "Language" },
  { href: "#", icon: HelpCircle, label: "Help & Support" },
  { href: "#", icon: FileText, label: "Terms & Conditions" },
  { href: "#", icon: Gift, label: "Referrals" },
  { href: "#", icon: KeyRound, label: "Change Password" },
  { href: "#", icon: Shield, label: "Privacy Policy" },
  { href: "#", icon: LogOut, label: "Logout", color: "text-destructive" },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 md:p-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://placehold.co/100x100.png" alt="User profile" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-headline font-bold">Aisha Bello</h1>
            <p className="text-muted-foreground">aisha.bello@example.com</p>
          </div>

          <Card>
            <div className="divide-y divide-border">
              {profileLinks.map(({ href, icon: Icon, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center p-4 transition-colors hover:bg-muted/50 ${color || ''}`}
                >
                  <Icon className={`w-5 h-5 mr-4 ${color || 'text-primary'}`} />
                  <span className="font-headline font-medium">{label}</span>
                  <ChevronRight className="w-5 h-5 ml-auto text-muted-foreground" />
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
