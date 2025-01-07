// src/components/FeaturesSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import React from "react";

interface FeaturesProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Our website is fully responsive and optimized for all mobile devices, ensuring a seamless experience for your users on any screen size.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Build trust with potential customers through testimonials, reviews, and case studies that showcase your success stories and satisfied clients.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Create personalized content that speaks directly to your audience's needs, pain points, and desires, increasing engagement and conversion rates.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "Captivate your audience with high-quality images, videos, and graphics that enhance your message and make your content more memorable.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "Guide your visitors towards desired actions with strategically placed, compelling call-to-action buttons that drive conversions.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "Grab attention instantly with powerful, benefit-driven headlines that communicate your value proposition clearly and effectively.",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 sm:px-12 lg:px-24 py-24">
      <div className="text-center">
        <h3 className="text-primary font-medium">Features</h3>
        <h1 className="text-4xl font-bold">What Makes Us Different</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          Discover the key features that set our platform apart and help your
          business succeed in the digital landscape. We combine cutting-edge
          technology with proven strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {featureList.map(({ icon, title, description }) => {
          const Icon = LucideIcons[icon];
          return (
            <Card key={title} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
