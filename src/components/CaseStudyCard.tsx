interface CaseStudyCardProps {
  title: string;
  problem: string;
  outcome: string;
  category: string;
}

const CaseStudyCard = ({ title, problem, outcome, category }: CaseStudyCardProps) => {
  return (
    <div className="group border-glow rounded-sm p-8 bg-card transition-all duration-500 hover:bg-secondary">
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
        {category}
      </span>
      <h3 className="text-xl font-semibold text-foreground mt-4 mb-6">{title}</h3>
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-tertiary mb-1">Problem</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
        </div>
        <div className="separator-thin" />
        <div>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-tertiary mb-1">Ishod</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{outcome}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
