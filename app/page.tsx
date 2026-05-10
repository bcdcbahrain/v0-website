import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  MessageCircle,
  BookOpen,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[500px] overflow-hidden md:min-h-[550px] lg:min-h-[600px]">
          <div className="w-full relative overflow-hidden">
            <img 
              src="/hero-global.png" 
              alt="BCDC Global Connection Header"
              className="w-full h-auto object-contain max-h-[500px]" 
              // "object-contain" ensures the full width image is visible without clipping.
              // "h-auto" allows the height to adjust based on the wide aspect ratio.
            />
          </div>
        </div>

          <div className="container relative mx-auto flex min-h-[500px] items-center px-4 py-16 md:min-h-[550px] md:px-6 md:py-20 lg:min-h-[600px] lg:py-24">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl">
                Welcome to Busaiteen Chat Dialogue Centre
              </h1>
              <p className="text-pretty text-lg text-background/80 md:text-xl">
                Conveying the Correct Creed of Faith in an Era of Division
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/about">
                    Discover the Path to Guidance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-background/30 bg-transparent text-background hover:bg-background/10"
                >
                  <Link href="/chat">Start a Conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                At Busaiteen Chat Dialogue Centre, based in the Kingdom of Bahrain,
                we are dedicated to fulfilling the mission of our beloved Prophet
                (peace be upon him). Through our online platform, we provide a safe
                and welcoming space for seekers of truth to engage in meaningful
                dialogue about Islam.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                To convey the gift of Islam and be a cause for Hidaya (guidance) for
                thousands of non-Muslims globally.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 bg-card shadow-lg">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                    Global Reach
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    We connect with visitors from all corners of the globe, breaking
                    down barriers and building bridges of understanding.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card shadow-lg">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30">
                    <Users className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                    Expert Guidance
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Our sessions are led by experienced Da&apos;ees and trainers,
                    including senior advisors from IslamReligion.com.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Start a Conversation */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <MessageCircle className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Start a Conversation
                </h2>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Have questions about Islam? Want to learn more about the correct
                  creed of faith? Our advisors are ready to talk.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/30">
                      <span className="text-xs font-bold text-secondary-foreground">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">{"Let's Talk:"}</strong> Connect
                      with a Chat Advisor today to begin your journey.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/30">
                      <span className="text-xs font-bold text-secondary-foreground">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Peace be upon you:</strong> We
                      welcome all visitors with open hearts and minds.
                    </p>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link href="/chat">
                    Chat with an Advisor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <MessageCircle className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browse Resources */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative order-2 aspect-square overflow-hidden rounded-2xl bg-card lg:order-1 lg:aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-primary/20">
                  <BookOpen className="h-24 w-24 text-primary/40" />
                </div>
              </div>

              <div className="order-1 space-y-6 lg:order-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <BookOpen className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Browse Islamic Resources
                </h2>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Want to learn about Islam on your own? Want to browse through the
                  correct and authentic details of faith? Our resources are free and
                  downloadable.
                </p>
                <Button size="lg" asChild variant="outline">
                  <Link href="/docs">
                    Explore Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support the Mission */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/support-mission.jpg"
              alt="Support the mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/90 to-foreground/85" />
          </div>

          <div className="container relative mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-background md:text-4xl">
                Support the Mission
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-background/80">
                Every good deed is an investment in your Hereafter. We invite you to
                support our Online Da&apos;wah Project to help us reach even more
                seekers across the globe.
              </p>

              <blockquote className="mt-8 border-l-4 border-secondary pl-6 text-left">
                <p className="text-lg italic text-background/90">
                  {'"Whoever guides someone to goodness will have a reward like the one who did it."'}
                </p>
                <cite className="mt-2 block text-sm text-secondary">
                  — Sahih Muslim
                </cite>
              </blockquote>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-background">
                  How You Can Help:
                </h3>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <div className="flex items-center gap-2 text-background/80">
                    <Heart className="h-5 w-5 text-secondary" />
                    <span>
                      <strong className="text-background">Donate:</strong> We gratefully
                      accept Zakah and Sadaqah
                    </span>
                  </div>
                  <div className="hidden h-1 w-1 rounded-full bg-background/40 sm:block" />
                  <div className="flex items-center gap-2 text-background/80">
                    <Globe className="h-5 w-5 text-secondary" />
                    <span>
                      <strong className="text-background">Spread the Word:</strong> Share
                      our platform
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href="/about#contact">Contact Us to Support</Link>
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
