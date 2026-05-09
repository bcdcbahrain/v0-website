import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  Heart,
  Target,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To convey the gift of Islam and be a cause for Hidaya (guidance) for thousands of non-Muslims globally through meaningful dialogue and authentic teachings.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We connect with seekers of truth from all corners of the globe, breaking down barriers and building bridges of understanding through our online platform.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our sessions are led by experienced Da'ees and trainers, including senior advisors from IslamReligion.com, ensuring authentic and knowledgeable guidance.",
  },
  {
    icon: Heart,
    title: "Welcoming Spirit",
    description:
      "We provide a safe and welcoming space for all visitors, greeting everyone with open hearts and minds, regardless of their background or beliefs.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                About BCDC
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                Busaiteen Chat Dialogue Centre - Conveying the Correct Creed of
                Faith in an Era of Division
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-pretty leading-relaxed">
                    At Busaiteen Chat Dialogue Centre, based in the Kingdom of
                    Bahrain, we are dedicated to fulfilling the mission of our
                    beloved Prophet Muhammad (peace be upon him).
                  </p>
                  <p className="text-pretty leading-relaxed">
                    Through our online platform, we provide a safe and welcoming
                    space for seekers of truth to engage in meaningful dialogue
                    about Islam. Our centre serves as a beacon of guidance for those
                    searching for authentic knowledge about the Islamic faith.
                  </p>
                  <p className="text-pretty leading-relaxed">
                    We believe that every person deserves access to the true
                    teachings of Islam, presented with compassion, patience, and
                    understanding. Our team of dedicated advisors works tirelessly
                    to answer questions, address concerns, and guide individuals on
                    their spiritual journey.
                  </p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
                <Image
                  src="/images/bcdc-logo.jpg"  
                  alt="BCDC Logo"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Values & Mission
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border-0 bg-card shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            {value.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Our Partners
              </h2>
              <p className="mt-4 text-muted-foreground">
                We work alongside respected organizations to ensure the authenticity
                and quality of our guidance.
              </p>

              <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <Card className="w-full max-w-sm border-2 transition-all hover:border-primary/30">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Globe className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">
                      IslamReligion.com
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Senior advisors and comprehensive Islamic resources
                    </p>
                    <Button asChild variant="link" className="mt-4">
                      <a
                        href="https://islamreligion.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="w-full max-w-sm border-2 transition-all hover:border-primary/30">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Users className="h-12 w-12 text-secondary-foreground" />
                    <h3 className="mt-4 font-semibold text-foreground">
                      New Muslim Support
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Dedicated resources for those who have embraced Islam
                    </p>
                    <Button asChild variant="link" className="mt-4">
                      <a
                        href="https://newmuslim.net"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Get in Touch
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-0 bg-card shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-card-foreground">
                      Location
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Kingdom of Bahrain
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-card-foreground">
                      WhatsApp / Phone
                    </h3>
                    <a
                      href="https://wa.me/97339377497"
                      className="mt-2 text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      +973 3937 7497
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="mt-4 font-semibold text-card-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:bcdcbahrain@gmail.com"
                      className="mt-2 text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      bcdcbahrain@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you have questions, want to learn more, or simply want to
                connect, we&apos;re here for you.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/chat">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/docs">
                    Browse Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
