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
  Video,
  Star,
  Info,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

// Categorized resources based on the user-centric strategy
const categories = [
  {
    id: "getting-started",
    title: "1. Getting Started: The Basics",
    description: "Foundational knowledge for those exploring Islam for the first time.",
    resources: [
      {
        title: "Introduction to Islam",
        description: "A comprehensive guide for those new to learning about Islam.",
        category: "Beginner",
        type: "PDF Guide",
        icon: Info,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Articulating Islam: Q&A",
        description: "Master answering difficult questions asked about Islam.",
        category: "Beginner",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy",
      },
      // ... more items would be added here
    ]
  },
  {
    id: "core-beliefs",
    title: "2. Core Beliefs: The Pillars of Faith",
    description: "Deep dive into the structural and spiritual foundations of Islamic belief.",
    resources: [
      {
        title: "The Architecture of Faith",
        description: "An objective framework for understanding Islam's claims of divine truth.",
        category: "Intermediate",
        type: "PDF Guide",
        icon: ShieldCheck,
        driveUrl: "https://drive.google.com/file/d/1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA",
      },
      {
        title: "The 99 Beautiful Names",
        description: "Discover the profound meanings and spiritual depth behind the names of Allah.",
        category: "Beginner",
        type: "MP4 Video",
        icon: Video,
        driveUrl: "https://drive.google.com/file/d/1gkqijiwYyObdEt0z-sTf5ZdTWbpaBOtq/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1gkqijiwYyObdEt0z-sTf5ZdTWbpaBOtq",
      },
    ]
  },
  {
    id: "scripture-history",
    title: "3. Scripture & History",
    description: "Understanding the Quran and the life of the Prophet (pbuh).",
    resources: [
      {
        title: "Understanding the Quran",
        description: "An introduction to the Holy Quran and its significance.",
        category: "Intermediate",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "The Life of Prophet Muhammad",
        description: "A biographical overview and his essential teachings.",
        category: "Beginner",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ]
  },
  {
    id: "daily-practice",
    title: "4. Daily Practice: Living Islam",
    description: "Practical guides on worship, prayer, and daily routines.",
    resources: [
      {
        title: "Islamic Worship & Practices",
        description: "A guide to the five pillars and daily practices.",
        category: "Intermediate",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ]
  },
  {
    id: "common-questions",
    title: "5. Common Questions & Clarifications",
    description: "Addressing myths and providing clarity on complex topics.",
    resources: [
      {
        title: "Common Questions About Islam",
        description: "Answers to frequently asked questions about Muslims and practices.",
        category: "Beginner",
        type: "FAQ Document",
        icon: HelpCircle,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ]
  },
  {
    id: "external-growth",
    title: "6. External Resources for Growth",
    description: "Recommended platforms for further learning and community support.",
    resources: [] // This will be populated by the externalResources array logic
  }
];

const externalResources = [
  {
    title: "IslamReligion.com",
    description: "Comprehensive website with articles and videos in multiple languages.",
    url: "https://islamreligion.com",
    icon: Globe,
  },
  {
    title: "New Muslim Website",
    description: "Dedicated resources and support for those who have recently embraced Islam.",
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
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Star className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">Islamic Learning Center</h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              A curated journey from foundational basics to advanced understanding, designed for seekers and new Muslims alike.
            </p>
          </div>
        </section>

        {/* Dynamic Categorized Sections */}
        {categories.map((category) => (
          <section key={category.id} className="py-12 border-b last:border-0">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">{category.title}</h2>
                <p className="text-muted-foreground mt-1">{category.description}</p>
              </div>

              {category.id === "external-growth" ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {externalResources.map((resource, index) => (
                    <Card key={index} className="border-2 transition-all hover:border-primary/30">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <resource.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-foreground">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <Button asChild variant="link" className="h-auto p-0">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Showing only the first 6 items (2 rows) per section as requested */}
                    {category.resources.slice(0, 6).map((resource, index) => (
                      <Card key={index} className="group transition-all hover:shadow-lg">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <resource.icon className="h-5 w-5 text-primary" />
                            </div>
                            <Badge variant={resource.category === "Beginner" ? "default" : "secondary"}>
                              {resource.category}
                            </Badge>
                          </div>
                          <CardTitle className="mt-4 text-lg">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground h-10 line-clamp-2">{resource.description}</p>
                          <div className="flex flex-col gap-3">
                            <span className="text-xs text-muted-foreground font-medium">{resource.type}</span>
                            <div className="flex items-center gap-2">
                              <Button asChild size="sm" variant="secondary" className="flex-1">
                                <a href={resource.driveUrl} target="_blank" rel="noopener noreferrer">
                                  <Eye className="mr-2 h-4 w-4" /> View
                                </a>
                              </Button>
                              <Button asChild size="sm" variant="outline" className="flex-1">
                                <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer" download>
                                  <Download className="mr-2 h-4 w-4" /> Download
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {category.resources.length > 6 && (
                    <div className="mt-8 text-center">
                      <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5">
                        See all resources in {category.title.split(":")[1]} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Have Questions About What You&apos;ve Read?</h2>
              <p className="mt-4 text-muted-foreground">Our advisors are available to discuss any topics or answer any questions that arise from your reading.</p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/chat">
                    Talk to an Advisor <ArrowRight className="ml-2 h-4 w-4" />
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
