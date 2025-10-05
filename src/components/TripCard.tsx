import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Users } from "lucide-react";

interface TripCardProps {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  travelers: number;
  status: "upcoming" | "ongoing" | "completed";
  image: string;
}

const TripCard = ({
  title,
  destination,
  startDate,
  endDate,
  budget,
  travelers,
  status,
  image,
}: TripCardProps) => {
  const statusColors = {
    upcoming: "bg-secondary text-secondary-foreground",
    ongoing: "bg-accent text-accent-foreground",
    completed: "bg-muted text-muted-foreground",
  };

  return (
    <Card className="overflow-hidden card-elegant hover-lift">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold font-heading mb-1">{title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{destination}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">{startDate}</div>
              <div className="text-muted-foreground text-xs">to {endDate}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">{budget}</div>
              <div className="text-muted-foreground text-xs">Budget</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{travelers} traveler(s)</span>
        </div>

        <Button className="w-full" variant="outline">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default TripCard;
