import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Settings, Bell, Globe, DollarSign } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-heading mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and travel settings
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 card-elegant text-center space-y-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold font-heading">John Doe</h2>
                <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                <Badge className="mt-2">Premium Member</Badge>
              </div>

              <div className="pt-6 border-t border-border space-y-3 text-left">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-semibold">Jan 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Trips</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Countries Visited</span>
                  <span className="font-semibold">18</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Edit Profile Picture
              </Button>
            </Card>

            <Card className="p-6 card-elegant mt-6">
              <h3 className="text-lg font-bold font-heading mb-4">Travel Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Profile Completion</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Bucket List Progress</span>
                    <span className="font-semibold">12/30</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Settings Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="p-6 card-elegant">
              <div className="flex items-center gap-2 mb-6">
                <User className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold font-heading">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input defaultValue="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input defaultValue="Doe" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-10" defaultValue="john.doe@email.com" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-10" defaultValue="New York, USA" />
                  </div>
                </div>
              </div>

              <Button className="mt-6">Save Changes</Button>
            </Card>

            {/* Travel Preferences */}
            <Card className="p-6 card-elegant">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold font-heading">Travel Preferences</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Default Route Type</label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Fastest Route</option>
                    <option>Scenic Route</option>
                    <option>Shortest Distance</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Travel Style</label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Budget Traveler</option>
                    <option>Comfort Seeker</option>
                    <option>Luxury Explorer</option>
                    <option>Adventure Enthusiast</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Currency</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select className="w-full pl-10 px-3 py-2 rounded-md border border-input bg-background">
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                        <option>GBP - British Pound</option>
                        <option>JPY - Japanese Yen</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Language</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select className="w-full pl-10 px-3 py-2 rounded-md border border-input bg-background">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-6">Save Preferences</Button>
            </Card>

            {/* Notifications */}
            <Card className="p-6 card-elegant">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold font-heading">Notifications</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive trip updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Trip Reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified before upcoming trips</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Budget Alerts</p>
                    <p className="text-sm text-muted-foreground">Alert when approaching budget limit</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Collaboration Invites</p>
                    <p className="text-sm text-muted-foreground">Notify when added to shared trips</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">Receive travel tips and promotions</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
