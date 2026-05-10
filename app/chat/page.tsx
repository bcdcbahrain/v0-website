import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Phone,
  Globe,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Start a Conversation
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                Have questions about Islam? Want to learn more about the correct
                creed of faith? Our advisors are ready to talk with you.
              </p>
            </div>
          </div>
        </section>

        {/* Chat Options */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4 md:px-6">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        Choose How to Connect 
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* WhatsApp Chat */}
        <Card className="border-2 border-primary/20 transition-all hover:border-primary/40 hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="mt-4 text-xl">WhatsApp Chat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Connect with our advisors directly through WhatsApp for a personal conversation.
            </p>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <a
                    href="https://wa.me/966597581139"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start WhatsApp Chat
                  </a>
            </Button>
          </CardContent>
        </Card>

        {/* Facebook Messenger */}
        <Card className="border-2 border-blue-500/20 transition-all hover:border-blue-500/40 hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="mt-4 text-xl">Facebook</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Reach out to our team via Facebook Messenger for authentic Islamic guidance.
            </p>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <a href="https://m.me/100630161994563?ref=islamreligion_chat_page" target="_blank" rel="noopener noreferrer">
                Chat on Messenger
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Instagram */}
        <Card className="border-2 border-pink-500/20 transition-all hover:border-pink-500/40 hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            <CardTitle className="mt-4 text-xl">Instagram</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Send us a direct message on Instagram to start your journey today.
            </p>
            <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
              <a href="https://ig.me/m/islam.in.3.minutes" target="_blank" rel="noopener noreferrer">
                DM on Instagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Phone Call */}
        <Card className="border-2 border-secondary/30 transition-all hover:border-secondary/50 hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
              <Phone className="h-6 w-6 text-secondary-foreground" /> [cite: 19]
            </div>
            <CardTitle className="mt-4 text-xl">Phone Call</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Prefer to speak directly? Call our centre for a real-time conversation. 
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="tel:+97339377497">
                Call +973 3937 7497
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
        {/* What to Expect */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
                What to Expect
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    Warm Welcome
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Peace be upon you - we welcome all visitors with open hearts
                    and minds.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    Open Dialogue
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ask any questions you have about Islam in a safe, judgment-free
                    environment.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    Authentic Guidance
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Receive answers based on authentic Islamic sources and correct
                    creed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Take the first step today. Our advisors are here to guide you with
                patience, knowledge, and compassion.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/966597581139"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start WhatsApp Chat
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/docs">Browse Resources First</Link>
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
