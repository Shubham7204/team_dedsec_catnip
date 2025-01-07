import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://i.pravatar.cc/250?img=58",
      firstName: "Leo",
      lastName: "Miranda",
      positions: ["Vue Fronted Developer", "Creator Of This Website"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    // ... rest of the team members remain the same ...
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-lg text-primary font-medium tracking-wider">
            Team
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold">
            The Company Dream Team
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          {teamList.map(({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
            <Card
              key={index}
              className="group bg-muted/50 dark:bg-card border-border/50 hover:border-border/100 transition-colors duration-200"
            >
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover saturate-0 transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                    priority={index < 4}
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl">
                    {firstName}
                    <span className="text-primary ml-2">{lastName}</span>
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="space-y-1">
                  {positions.map((position, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {position}
                      {idx < positions.length - 1 && <span>,</span>}
                    </p>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex items-center gap-4">
                  {socialNetworks.map(({ name, url }, idx) => (
                    <Link
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label={`${firstName}'s ${name}`}
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};