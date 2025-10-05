import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  country: string;
}

const DestinationCard = ({ image, title, description, country }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden card-elegant hover-lift cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{country}</span>
          </div>
        </div>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};

export default DestinationCard;
