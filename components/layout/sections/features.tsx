import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="container py-24">
      <div className="text-center">
        <h3 className="text-primary font-medium">Features</h3>
        <h1 className="text-4xl font-bold">What Makes Us Different</h1>
        <p className="mt-4 text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
          facere tenetur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {featureList.map(({ icon, title, description }) => {
          const Icon = LucideIcons[icon as keyof typeof LucideIcons] as React.FC<React.SVGProps<SVGSVGElement>>;
          return (
            <Card key={title}>
              <CardHeader>
                <Icon className="w-14 h-14 text-primary" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};