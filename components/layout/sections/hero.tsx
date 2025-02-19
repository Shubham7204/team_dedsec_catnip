"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full px-4 md:px-8 lg:px-16">
      <div className="grid place-items-center gap-8 mx-auto py-20 md:py-32 lg:max-w-screen-xl text-center">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1 className="dark:text-white">
              Empowering Your Health with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                MedNourish AI
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground dark:text-gray-300">
            {`Leverage the power of Generative AI for medical report analysis, food product insights, and medicine queries. Get actionable health insights with ease.`}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button
              asChild
              className="w-full md:w-auto px-8 py-3 font-bold group/arrow dark:bg-primary dark:text-white dark:bg-black dark:hover:bg-primary/90"
            >
              <Link href="/food">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full md:w-auto px-8 py-3 font-bold dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              <Link
                href="https://github.com/Shubham7204/team_dedsec_catnip"
                target="_blank"
              >
                Github Repository
              </Link>
            </Button>
          </div>

          {/* Responsive YouTube Video Container */}
          <div className="w-full max-w-4xl mx-auto mt-12">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/9bBdrQGZQlA"
                title="Team DedSec - MedNourishAI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};