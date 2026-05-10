import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Download,
  Globe,
  FileText,
  Users,
  Heart,
  Eye,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
     title: "The Architecture of Faith",
    description:
      "An objective framework for understanding Islam's claims of divine truth and its principles for religious tolerance.",
    category: "Intermediate",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA",
  },
  {
     title: "Articulating Islam: Questions & Answers",
    description:
      "Master the art of answering questions asked about Islam by Non-Muslims.",
    category: "Beginner",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy",
  },
  // Added the new resource here
  {
    title: "Articulating Islam: Questions & Answers",
    description:
      "Master the art of answering questions asked about Islam by Non-Muslims.",
    category: "Beginner",
    type: "PDF Guide",
    icon: FileText,
    downloadUrl: "https://drive.google.com/uc?export=download&id=1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy",
  },
  {
    title: "Understanding the Quran",
    description:
      "An introduction to the Holy Quran, its revelation, and its significance in Islam.",
    category: "Intermediate",
    type: "PDF Guide",
    icon: BookOpen,
  },
  {
    title: "The Life of Prophet Muhammad",
    description:
      "A biographical overview of the Prophet Muhammad (peace be upon him) and his teachings.",
    category: "Beginner",
    type: "PDF Guide",
    icon: Users,
  },
  {
    title: "Islamic Worship & Practices",
    description:
      "A guide to the five pillars of Islam and daily practices of a Muslim.",
    category: "Intermediate",
    type: "PDF Guide",
    icon: Heart,
  },
  {
    title: "Common Questions About Islam",
    description:
      "Answers to frequently asked questions about Islam, Muslims, and Islamic practices.",
    category: "Beginner",
    type: "FAQ Document",
    icon: FileText,
  },
];

const externalResources = [
  {
    title: "IslamReligion.com",
    description:
      "Comprehensive website with articles, videos, and resources about Islam in multiple languages.",
    url: "https://islamreligion.com",
    icon: Globe,
  },
  {
    title: "New Muslim Website",
    description:
      "Dedicated resources and support for those who have recently embraced Islam.",
    url: "https://newmuslim.net",
    icon: Users,
  },
];

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/20 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <BookOpen className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Islamic Resources
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                Explore our collection of authentic Islamic materials. All resources
                are free and available for view or download.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
              Downloadable Resources
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card
                    key={index}
                    className="group transition-all hover:shadow-lg"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <Badge
                          variant={
                            resource.category === "Beginner"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {resource.category}
                        </Badge>
                      </div>
                      <CardTitle className="mt-4 text-lg">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      <div className="flex flex-col gap-3">
                        <span className="text-xs text-muted-foreground">
                          {resource.type}
                        </span>
                        <div className="flex items-center gap-2">
                          {/* View Button for Online Reading */}
                          <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="flex-1 opacity-80 transition-opacity group-hover:opacity-100"
                          >
                            <a href={resource.driveUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </a>
                          </Button>
                          {/* Original Download Button */}
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1 opacity-80 transition-opacity group-hover:opacity-100"
                          >
                            <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                More resources coming soon. Contact us if you&apos;re looking for
                specific materials.
              </p>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
              Recommended External Resources
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {externalResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="border-2 transition-all hover:border-primary/30">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-foreground">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                        <Button asChild variant="link" className="h-auto p-0">
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                Have Questions About What You&apos;ve Read?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our advisors are available to discuss any topics or answer any
                questions that arise from your reading.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/chat">
                    Talk to an Advisor
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
