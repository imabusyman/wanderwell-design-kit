import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Users, Sparkles, Shield } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import cityImage from "@/assets/destination-city.jpg";
import mountainImage from "@/assets/destination-mountains.jpg";

const Index = () => {
  const destinations = [
    {
      image: beachImage,
      title: "Tropical Paradise",
      description: "Crystal clear waters and pristine beaches await your discovery.",
      country: "Maldives",
    },
    {
      image: cityImage,
      title: "Historic Europe",
      description: "Explore centuries of culture, art, and architecture.",
      country: "Italy",
    },
    {
      image: mountainImage,
      title: "Mountain Adventures",
      description: "Breathtaking peaks and unforgettable hiking experiences.",
      country: "Switzerland",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Smart Routing",
      description: "AI-powered route optimization that finds the best paths between destinations.",
    },
    {
      icon: Calendar,
      title: "Itinerary Planning",
      description: "Drag-and-drop timeline builder with collaborative editing features.",
    },
    {
      icon: DollarSign,
      title: "Budget Tracking",
      description: "Real-time expense monitoring with smart spending recommendations.",
    },
    {
      icon: Users,
      title: "Group Planning",
      description: "Invite friends and family to plan together in real-time.",
    },
    {
      icon: Sparkles,
      title: "AI Suggestions",
      description: "Get personalized recommendations based on your preferences.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your travel data is encrypted and never shared with third parties.",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Everything You Need for Perfect Trips
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features that make travel planning effortless and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg card-elegant hover-lift space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Featured Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover popular destinations that inspire wanderlust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Explore All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of travelers who trust TravelAI to plan their perfect adventures
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="text-lg">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-lg font-bold">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-heading">TravelAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 TravelAI. Design reference for .NET MAUI Blazor implementation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
