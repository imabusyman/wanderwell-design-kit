import NavBar from "@/components/NavBar";
import TripCard from "@/components/TripCard";
import BudgetWidget from "@/components/BudgetWidget";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, TrendingUp, Map, Clock } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import cityImage from "@/assets/destination-city.jpg";
import mountainImage from "@/assets/destination-mountains.jpg";

const Dashboard = () => {
  const trips = [
    {
      title: "Summer Beach Getaway",
      destination: "Maldives",
      startDate: "Jun 15, 2025",
      endDate: "Jun 25, 2025",
      budget: "$5,000",
      travelers: 2,
      status: "upcoming" as const,
      image: beachImage,
    },
    {
      title: "European Adventure",
      destination: "Italy, France, Spain",
      startDate: "Sep 1, 2025",
      endDate: "Sep 20, 2025",
      budget: "$8,500",
      travelers: 4,
      status: "upcoming" as const,
      image: cityImage,
    },
    {
      title: "Mountain Hiking Trip",
      destination: "Swiss Alps",
      startDate: "Dec 10, 2024",
      endDate: "Dec 20, 2024",
      budget: "$4,200",
      travelers: 3,
      status: "completed" as const,
      image: mountainImage,
    },
  ];

  const stats = [
    {
      icon: Map,
      label: "Total Trips",
      value: "12",
      change: "+3 this year",
    },
    {
      icon: TrendingUp,
      label: "Countries Visited",
      value: "18",
      change: "+4 this year",
    },
    {
      icon: Clock,
      label: "Days Traveled",
      value: "147",
      change: "+42 this year",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold font-heading mb-2">My Trips</h1>
            <p className="text-muted-foreground">
              Manage your adventures and plan new journeys
            </p>
          </div>
          <Button size="lg" className="group">
            <Plus className="h-5 w-5 mr-2 transition-transform group-hover:rotate-90" />
            Create New Trip
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 card-elegant">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold font-heading">{stat.value}</p>
                <p className="text-xs text-secondary">{stat.change}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trips List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold font-heading">Upcoming Trips</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {trips.map((trip, index) => (
                <TripCard key={index} {...trip} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BudgetWidget total={5000} spent={2450} currency="USD" />
            
            <Card className="p-6 card-elegant">
              <h3 className="text-lg font-bold font-heading mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Map className="h-4 w-4 mr-2" />
                  View All Trips
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Travel Stats
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Recent Activity
                </Button>
              </div>
            </Card>

            <Card className="p-6 card-elegant bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <h3 className="text-lg font-bold font-heading mb-2">Travel Tip</h3>
              <p className="text-sm text-muted-foreground">
                Book flights on Tuesday afternoons for the best deals. Airlines typically release sales on Monday evenings.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
