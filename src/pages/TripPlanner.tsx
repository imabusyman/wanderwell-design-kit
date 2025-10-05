import NavBar from "@/components/NavBar";
import BudgetWidget from "@/components/BudgetWidget";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Plus, GripVertical, Calendar, Clock } from "lucide-react";

const TripPlanner = () => {
  const waypoints = [
    {
      id: 1,
      name: "Venice",
      country: "Italy",
      date: "Sep 1, 2025",
      duration: "3 days",
      type: "City",
    },
    {
      id: 2,
      name: "Florence",
      country: "Italy",
      date: "Sep 4, 2025",
      duration: "2 days",
      type: "City",
    },
    {
      id: 3,
      name: "Rome",
      country: "Italy",
      date: "Sep 6, 2025",
      duration: "4 days",
      type: "City",
    },
    {
      id: 4,
      name: "Amalfi Coast",
      country: "Italy",
      date: "Sep 10, 2025",
      duration: "3 days",
      type: "Beach",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>Trip Planner</span>
          </div>
          <h1 className="text-4xl font-bold font-heading mb-2">Italian Summer Tour</h1>
          <p className="text-muted-foreground">
            Plan your route, manage waypoints, and optimize your journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map & Route Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder */}
            <Card className="overflow-hidden card-elegant">
              <div className="relative h-[400px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Navigation className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">Interactive Map View</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      This represents the map component where users can visualize their route.
                      <br />
                      <span className="text-xs italic">(.NET implementation: Use Syncfusion Maps or MapControl)</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <Badge variant="outline">Total Distance: 847 km</Badge>
                    <Badge variant="outline">Est. Time: 12h 15m</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Waypoints List */}
            <Card className="p-6 card-elegant">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-heading">Route Waypoints</h2>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Stop
                </Button>
              </div>

              <div className="space-y-3">
                {waypoints.map((waypoint, index) => (
                  <div
                    key={waypoint.id}
                    className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
                      <GripVertical className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{waypoint.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {waypoint.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{waypoint.country}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{waypoint.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{waypoint.duration}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-dashed border-border text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Drag & drop</span> waypoints to reorder your route
                </p>
              </div>
            </Card>

            {/* Route Options */}
            <Card className="p-6 card-elegant">
              <h3 className="text-lg font-bold font-heading mb-4">Route Preferences</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Route Type</label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Fastest Route</option>
                    <option>Scenic Route</option>
                    <option>Shortest Distance</option>
                    <option>Avoid Highways</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Transport Mode</label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Car</option>
                    <option>Train</option>
                    <option>Flight</option>
                    <option>Mixed</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BudgetWidget total={8500} spent={3200} currency="EUR" />

            <Card className="p-6 card-elegant">
              <h3 className="text-lg font-bold font-heading mb-4">Trip Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Trip Name</label>
                  <Input defaultValue="Italian Summer Tour" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Start Date</label>
                  <Input type="date" defaultValue="2025-09-01" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">End Date</label>
                  <Input type="date" defaultValue="2025-09-13" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Travelers</label>
                  <Input type="number" defaultValue="2" min="1" />
                </div>
                <Button className="w-full">Save Changes</Button>
              </div>
            </Card>

            <Card className="p-6 card-elegant bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
              <h3 className="text-lg font-bold font-heading mb-2">Weather Forecast</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Venice</span>
                  <span className="font-semibold">26°C ☀️</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Florence</span>
                  <span className="font-semibold">28°C ☀️</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Rome</span>
                  <span className="font-semibold">30°C ☀️</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripPlanner;
