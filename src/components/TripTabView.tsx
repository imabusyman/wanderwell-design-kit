import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search } from "lucide-react";

const TripTabView = () => {
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [exploreLocation, setExploreLocation] = useState("");

  const handlePlanTrip = () => {
    if (startingPoint && destination) {
      console.log("Planning trip from", startingPoint, "to", destination);
      // Navigate to planner with params
    }
  };

  const handleExplore = () => {
    if (exploreLocation) {
      console.log("Exploring", exploreLocation);
      // Navigate to dashboard with params
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Tabs defaultValue="route" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-background/95 backdrop-blur border border-border/40 rounded-xl shadow-lg">
          <TabsTrigger 
            value="route" 
            className="text-base py-3 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
          >
            Create a Route
          </TabsTrigger>
          <TabsTrigger 
            value="explore" 
            className="text-base py-3 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
          >
            Explore Destinations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="route" className="mt-6">
          <div className="bg-background/95 backdrop-blur border border-border/40 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Starting Point</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Where does your trip begin?"
                      value={startingPoint}
                      onChange={(e) => setStartingPoint(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Where would you like to go?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:items-end md:pb-2">
                <Button 
                  size="lg" 
                  onClick={handlePlanTrip}
                  className="w-full md:w-auto"
                >
                  Go
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="explore" className="mt-6">
          <div className="bg-background/95 backdrop-blur border border-border/40 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium text-foreground">Explore</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Where would you like to explore?"
                    value={exploreLocation}
                    onChange={(e) => setExploreLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex md:items-end md:pb-2">
                <Button 
                  size="lg" 
                  onClick={handleExplore}
                  className="w-full md:w-auto"
                >
                  Go
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TripTabView;
