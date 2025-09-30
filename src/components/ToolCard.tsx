import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  url: string;
  icon?: string;
}

const ToolCard = ({ name, description, category, url }: ToolCardProps) => {
  return (
    <Card className="gradient-card border-2 border-border/50 transition-smooth hover:scale-105 hover:shadow-card hover:border-primary/50 group">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider">
            {category}
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
        </div>
        <CardTitle className="text-2xl font-bold group-hover:text-gradient transition-smooth">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {name}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-foreground/80">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
