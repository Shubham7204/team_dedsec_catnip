import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2 flex items-center">
            <Link href="#" className="flex items-center font-bold text-2xl">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              Shadcn
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <Link href="#" className="opacity-60 hover:opacity-100">Github</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Twitter</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Instagram</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <Link href="#" className="opacity-60 hover:opacity-100">iOS</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Android</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Web</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <Link href="#" className="opacity-60 hover:opacity-100">Contact Us</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">FAQ</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Feedback</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <Link href="#" className="opacity-60 hover:opacity-100">Twitch</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Discord</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Dribbble</Link>
          </div>
        </div>

        <Separator className="my-6" />
        <section>
          <p className="text-center">
            &copy; 2024 Designed and developed by{" "}
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all hover:text-primary/90 border-b-2 border-primary"
            >
              Leo Miranda
            </Link>
          </p>
        </section>
      </div>
    </footer>
  );
};
