'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Blocks, 
  LineChart, 
  Wallet, 
  Sparkle,
  LucideIcon 
} from "lucide-react";

interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefitList: BenefitProps[] = [
  {
    icon: Blocks,
    title: "Build Brand Trust",
    description:
      "Establish credibility and trust with your audience through consistent branding and professional presentation of your products or services.",
  },
  {
    icon: LineChart,
    title: "More Leads",
    description:
      "Attract high-quality leads and expand your customer base with targeted marketing strategies and optimized conversion funnels.",
  },
  {
    icon: Wallet,
    title: "Higher Conversions",
    description:
      "Transform interested visitors into loyal customers with persuasive content and streamlined user experiences that drive action.",
  },
  {
    icon: Sparkle,
    title: "Test Marketing Ideas",
    description:
      "Experiment with different marketing approaches and messaging to discover what resonates best with your target audience.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left side content */}
        <div className="flex flex-col space-y-4 lg:sticky lg:top-24">
          <h2 className="text-lg text-primary font-medium tracking-wider">
            Benefits
          </h2>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Your Shortcut to Success
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Transform your business potential with our proven strategies and tools. 
            We help you accelerate growth, increase efficiency, and achieve your goals faster.
          </p>
        </div>

        {/* Right side cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {benefitList.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-colors duration-200 group/number"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <Icon
                    size={28}
                    className="text-primary"
                  />
                  <span className="text-4xl text-muted-foreground/15 font-medium transition-colors duration-200 group-hover/number:text-muted-foreground/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <CardTitle className="text-xl mt-4">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-sm sm:text-base">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};