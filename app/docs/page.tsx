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
  Bookmark,
} from "lucide-react";

// Categorized Resources following the recommended structure
const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Foundational knowledge for those beginning their journey.",
    resources: [
      {
        title: "Introduction to Islam",
        description: "A comprehensive guide for those new to learning about fundamental beliefs.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Common Questions About Islam",
        description: "Answers to frequently asked questions about Islam and Muslim practices.",
        category: "Beginner",
        status: "Coming Soon",
        type: "FAQ Document",
        icon: FileText,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Understanding Divine Truth",
        description: "A starter guide on how to approach Islamic theology objectively.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "The Path of a New Muslim",
        description: "First steps and what to expect in your initial days of faith.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "theology-creed",
    title: "Theology & Creed (Aqidah)",
    description: "Deepen your understanding of Islamic core beliefs and articles of faith.",
    resources: [
      {
        title: "The Architecture of Faith",
        description: "An objective framework for understanding claims of divine truth.",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA",
      },
      {
        title: "The 99 Beautiful Names",
        description: "Discover the profound meanings and spiritual depth behind Allah's names.",
        category: "Beginner",
        status: "New",
        type: "MP4 Video",
        icon: Video,
        driveUrl: "https://drive.google.com/file/d/1gkqijiwYyObdEt0z-sTf5ZdTWbpaBOtq/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1gkqijiwYyObdEt0z-sTf5ZdTWbpaBOtq",
      },
      {
        title: "The Pillars of Faith",
        description: "Learn about the six articles that form the foundation of Islamic belief.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Concept of Monotheism",
        description: "A deep dive into Tawhid and its central role in Muslim life.",
        category: "Intermediate",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "scripture-sources",
    title: "Scripture & Sources",
    description: "Resources relating to the Quran and the Prophetic traditions.",
    resources: [
      {
        title: "Investigating Quranic Authorship",
        description: "A scholarly investigation into the origins of the Quran by Tariq Najeebdeen.",
        category: "Intermediate",
    	  status: "New",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1D4epss8oXVLypdDC3ioRmXRVgoaxfHoK/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1D4epss8oXVLypdDC3ioRmXRVgoaxfHoK",
      },
      {
        title: "The Prophetic Presence: Shamail Tirmidhi",
        description: "A visual exploration of his noble presence and character, based on Tirmidhi's Shamail",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1COzaRvKPBHSZZs_LoGchR6hXWFgnrgY7/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1COzaRvKPBHSZZs_LoGchR6hXWFgnrgY7",
      },
      {
        title: "Be Like The Bee",
        description: "Exploring Bio-mimicry, natural mechanics and spiritual reflections in Surah An-Nahl",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1itMSAhT5RwNqGo2Tr7NmuoqopxHWbhoP/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1itMSAhT5RwNqGo2Tr7NmuoqopxHWbhoP",
      },
      {
        title: "Quranic Miracles",
        description: "Exploring the linguistic and scientific signs within the text.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Globe,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "worship-practice",
    title: "Worship & Practice",
    description: "Practical guides on prayer, fasting, and daily rituals.",
    resources: [
      {
        title: "Islamic Worship & Practices",
        description: "A guide to the five pillars and daily practices of a Muslim.",
        category: "Intermediate",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "The Prayer (Salah) Guide",
        description: "Step-by-step visual and text instructions for daily prayers.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Video,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Purification (Wudu)",
        description: "The essential guide to ritual washing before prayer.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Fasting in Ramadan",
        description: "Comprehensive guide to the spiritual and physical aspects of fasting.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "dawah-outreach",
    title: "Dawah & Outreach",
    description: "Tools for effectively communicating Islam to others.",
    resources: [
      {
    title: "Strategic Steps in Da'wah",
    description: "A practical Framework for Inviting to Islam",
    category: "Intermediate",
	  status: "New",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1e9esJ2HHzNNEcS3OBQ3v5yznV5Tylqf1/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1e9esJ2HHzNNEcS3OBQ3v5yznV5Tylqf1",
      },
      {
        title: "Dawah Defense Protocols",
        description: "The Devil's Deceptions & Distractions in Da'wah",
        category: "Beginner",
        status: "New",
        type: "PPT-PDF",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1h7nSlwU3B9SnBWXibK8YCJ1ynS95d2Sg/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1h7nSlwU3B9SnBWXibK8YCJ1ynS95d2Sg",
      },
      {
        title: "Outreach Best Practices",
        description: "Ethics and methods for community engagement and dawah.",
        category: "Intermediate",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Globe,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Articulating Islam: Q&A",
        description: "Master the art of answering difficult questions asked by non-Muslims.",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1fl6pxkL1TKueDoqnjsZNyGFl6znsInxy",
      },
    ],
  },
  {
    id: "support-community",
    title: "Support & Community",
    description: "Resources for finding local support and building faith-based connections.",
    resources: [
      {
        title: "The Illuminated Blueprint",
        description: "A synthesis of Al-Ghazali's book-Begining of Guidance",
        category: "Beginner",
        status: "New",
        type: "PPT-PDF",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1pcUC8FA1inq6qyXNZbDYwdcJ21-xAfvt/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1pcUC8FA1inq6qyXNZbDYwdcJ21-xAfvt",
      },
      {
        title: "Why do bad things happen to me?",
        description: "An Islamic framework for transitioning from despair to divine purpose",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "https://drive.google.com/file/d/1fHJroqUvFNkhxJzqBDqt259wQ7TmpOtH/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1fHJroqUvFNkhxJzqBDqt259wQ7TmpOtH",
      },
      {
        title: "Community Guidelines",
        description: "Fostering inclusive and respectful environments in Islamic centers.",
        category: "Beginner",
        status: "Coming Soon",
        type: "PDF Guide",
        icon: Globe,
        driveUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Aggregating Atomic Habits",
        description: "Based on the concepts of James Clear",
        category: "Beginner",
        status: "New",
        type: "PPT-PDF",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1YUkouNcQYrMUgU8Op3MCpjfYqBWu9b5o/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1YUkouNcQYrMUgU8Op3MCpjfYqBWu9b5o",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Refactored Hero Section in a Card */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-gradient-to-br from-secondary/30 via-background to-secondary/10 border-none shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
                  Islamic Resources & Documentation
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
                  Welcome to our central repository. These materials are curated to support 
                  new Muslims and outreach efforts. Use the links below to jump to a specific area of study.
                </p>
                
                {/* Navigation Bookmarks */}
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((cat) => (
                    <Button key={cat.id} variant="outline" size="sm" asChild className="rounded-full">
                      <a href={`#${cat.id}`}>
                        <Bookmark className="mr-2 h-3 w-3" />
                        {cat.title}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categorized Sections */}
        {categories.map((section) => (
          <section key={section.id} id={section.id} className="py-12 border-t first:border-none">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>

              {/* Grid showing first row of 4 resources */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
                {section.resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card key={index} className="group transition-all hover:shadow-lg flex flex-col">
                      <CardHeader className="pb-4">
                        {/* Refactored Badge Code Begins */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <Badge variant={resource.category === "Beginner" ? "default" : "secondary"}>
                              {resource.category}
                            </Badge>
                            {/* Status Badge Logic */}
                            {resource.status && (
                              <Badge 
                                variant="outline" 
                                className={`text-[10px] uppercase tracking-wider ${
                                  resource.status === 'New' ? 'border-green-500 text-green-600' : 
                                  resource.status === 'Coming Soon' ? 'border-amber-500 text-amber-600' : 
                                  'border-blue-500 text-blue-600'
                                }`}
                              >
                                {resource.status}
                              </Badge>
                            )}
                          </div>
                        </div>
                         {/* End of Refactored Badge Code */}
                        <CardTitle className="mt-4 text-lg">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                        <p className="text-sm text-muted-foreground line">
                          {resource.description}
                        </p>
                        <div className="space-y-3">
                          <span className="text-xs font-medium text-muted-foreground block">
                            {resource.type}
                          </span>
                          <div className="flex items-center gap-2">
                            <Button asChild size="sm" variant="secondary" className="flex-1 opacity-90 transition-opacity group-hover:opacity-100">
                              <a href={resource.driveUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="mr-2 h-4 w-4" /> View
                              </a>
                            </Button>
                            <Button asChild size="sm" variant="outline" className="flex-1 opacity-90 transition-opacity group-hover:opacity-100">
                              <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer" download>
                                <Download className="mr-2 h-4 w-4" /> Download
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* View All Button */}
              <div className="flex justify-center">
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5">
                  View All {section.title} Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Have Questions About What You&apos;ve Read?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our advisors are available to discuss any topics or answer any
                questions that arise from your reading.
              </p>
              <Button asChild size="lg">
                <Link href="/chat">
                  Talk to an Advisor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
