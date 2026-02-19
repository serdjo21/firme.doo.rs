import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  index: number;
}

const ServiceCard = ({ title, description, slug, index }: ServiceCardProps) => {
  return (
    <Link to={`/usluge/${slug}`} className="group block">
      <div className="border-glow rounded-sm p-8 h-full bg-card transition-all duration-500 hover:bg-secondary">
        <div className="flex items-start justify-between mb-6">
          <span className="text-xs font-mono text-text-tertiary">
            0{index + 1}
          </span>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
