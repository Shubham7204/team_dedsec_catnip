import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="relative mt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background to-transparent pointer-events-none" />
      
      <div className="container py-24 sm:py-32 px-6 sm:px-12 lg:px-24 relative">
        <div className="p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
            
            {/* Logo Section */}
            <div className="col-span-full xl:col-span-2 flex items-center">
              <Link 
                href="#" 
                className="group flex items-center font-bold text-2xl text-foreground hover:text-primary/90 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-primary blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <ChevronsDownIcon className="w-9 h-9 mr-2 relative bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-border/40 p-1" />
                </div>
                MedNourish AI
              </Link>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg text-foreground">Contact</h3>
              <Link href="https://github.com/your-github" className="text-muted-foreground hover:text-primary transition-colors duration-300">Github</Link>
              <Link href="https://twitter.com/your-twitter" className="text-muted-foreground hover:text-primary transition-colors duration-300">Twitter</Link>
              <Link href="https://instagram.com/your-instagram" className="text-muted-foreground hover:text-primary transition-colors duration-300">Instagram</Link>
            </div>

            {/* Help Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg text-foreground">Help</h3>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</Link>
              <Link href="/contact-us" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact Us</Link>
            </div>

            {/* About and Project Links */}
            <div className="flex flex-col gap-3 xl:col-span-2">
              <h3 className="font-bold text-lg text-foreground">About MedNourish AI</h3>
              <p className="text-sm text-muted-foreground/90">
                Leveraging Generative AI for medical report and nutrition analysis.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/medical-report-analyzer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Medical Report Analyzer
                </Link>
                <Link href="/medicine-analyzer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Medicine Analyzer
                </Link>
                <Link href="/food-nutrition-analyzer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Food Nutrition Analyzer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};