import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, BookOpen, Heart, Compass, ExternalLink, Sparkles, Languages } from "lucide-react";

export const metadata = {
  title: 'Play (Learn via Fun & Games) - BCDC',
  description: 'Interactive Islamic educational games, puzzles, and quizzes designed for New Muslims and beginners.',
};

interface GameModule {
  title: string;
  description: string;
  category: string;
  path: string;
  tag?: string;
  source?: 'BCDC' | 'KALAM';
}

interface LearningSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badgeColor: string;
  modules: GameModule[];
}

const BASE_URL = "https://cvemrafi.vercel.app";
const KALAM_URL = "https://kalam-iciso.vercel.app"; // KALAM interactive modules base host

const gameSections: LearningSection[] = [
  {
    id: "foundations",
    title: "1. Core Beliefs & Foundations",
    subtitle: "Start here: Essential creed, basic concepts, and the Beautiful Names of Allah",
    icon: Heart,
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200",
    modules: [
      {
        title: "Pillars of Islam Puzzler",
        description: "Interactive drag-and-drop puzzle introducing the 5 Pillars of Islam and 6 Articles of Faith.",
        category: "Foundations",
        path: "/kalam/pillars-puzzle",
        tag: "Start Here",
        source: "KALAM"
      },
      {
        title: "Islam Basics",
        description: "Foundational teachings and core creed interactive education engine.",
        category: "Aqeedah",
        path: "/web/ky-islam-basics.html",
        tag: "Recommended First",
        source: "BCDC"
      },
      {
        title: "Islam Easy Quiz",
        description: "Accessible beginner quiz module testing essential Islamic knowledge.",
        category: "Quiz",
        path: "/web/ky-islam-easy-quiz.html",
        source: "BCDC"
      },
      {
        title: "Islam Match",
        description: "Interactive card-matching educational engine for core Islamic principles.",
        category: "Puzzle",
        path: "/web/islam-match.html",
        source: "BCDC"
      },
      {
        title: "Match Islamic Terms",
        description: "A beginner-friendly minimalist matching quiz for key Islamic terms.",
        category: "Matching",
        path: "/web/match-islamic-terms.html",
        source: "BCDC"
      },
      {
        title: "Attributes Match (English)",
        description: "Drag-and-drop matching game to learn the 99 Names of Allah in English.",
        category: "Names of Allah",
        path: "/web/attributes-match.html",
        source: "BCDC"
      },
      {
        title: "Attributes Match (Tamil)",
        description: "Drag-and-drop game to learn the 99 Names of Allah in Tamil.",
        category: "Names of Allah",
        path: "/web/tamil-attributes.html",
        source: "BCDC"
      }
    ]
  },
  {
    id: "worship",
    title: "2. Daily Worship & Living",
    subtitle: "Practical guides on Prayer (Salah), Purification (Wudu), Calendar, and Daily Ethics",
    icon: Compass,
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200",
    modules: [
      {
        title: "Wudu Step-by-Step",
        description: "Interactive visual game teaching the correct sequence and sunnahs of ablution (Wudu).",
        category: "Purification",
        path: "/kalam/wudu-guide",
        tag: "Essential",
        source: "KALAM"
      },
      {
        title: "Daily Salah Quest",
        description: "Step-by-step interactive simulator practicing prayer positions, recitations, and rakat counts.",
        category: "Prayer Guide",
        path: "/kalam/salah-quest",
        tag: "Essential",
        source: "KALAM"
      },
      {
        title: "Arkans of Salah",
        description: "Interactive module detailing the 14 essential pillars (Arkans) of prayer with a quiz.",
        category: "Prayer Guide",
        path: "/web/arkans-salah.html",
        source: "BCDC"
      },
      {
        title: "Islamic Months Quiz",
        description: "Learn and test your knowledge of the Hijri calendar and sacred milestones.",
        category: "Calendar",
        path: "/web/islamic-months-quiz.html",
        source: "BCDC"
      },
      {
        title: "Top 10 Quranic Surahs",
        description: "Listen to beautiful recitations of essential Surahs by Sheikh Mahmoud Khalil Al-Husary.",
        category: "Recitation",
        path: "/web/top-ten-quran.html",
        source: "BCDC"
      },
      {
        title: "Life Choices Quiz",
        description: "Interactive scenario quiz training everyday ethical choices and spiritual reflection.",
        category: "Ethics",
        path: "/web/life-choices-quiz.html",
        source: "BCDC"
      }
    ]
  },
  {
    id: "history",
    title: "3. Prophetic Wisdom & History",
    subtitle: "Discover the lives of the Prophets, Seerah, and key Hadith teachings",
    icon: BookOpen,
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200",
    modules: [
      {
        title: "Prophet Stories Interactive Quiz",
        description: "Engaging quiz game exploring stories, lessons, and milestones from the lives of the Prophets.",
        category: "Seerah",
        path: "/kalam/prophet-stories",
        tag: "Interactive",
        source: "KALAM"
      },
      {
        title: "Missions of Prophets",
        description: "Interactive bilingual quiz exploring the missions of 25 Prophets in Islam.",
        category: "Seerah",
        path: "/web/prophets-mission-quiz.html",
        source: "BCDC"
      },
      {
        title: "40 Hadith of Imam Nawawi",
        description: "Interactive quiz testing comprehension of essential prophetic sayings.",
        category: "Hadith",
        path: "/web/hadith-40.html",
        source: "BCDC"
      },
      {
        title: "Islamic Trivia Challenge",
        description: "Multi-level trivia game covering Islamic history, companions, and cultural achievements.",
        category: "Trivia",
        path: "/kalam/trivia-challenge",
        source: "KALAM"
      },
      {
        title: "For All Moms (Ummi)",
        description: "Animative, heartfelt compendium of supplications (Duas) for mothers.",
        category: "Dua",
        path: "/web/ummi.html",
        source: "BCDC"
      }
    ]
  },
  {
    id: "language",
    title: "4. Quranic Language & Dialogue",
    subtitle: "Fun tools to learn Arabic vocabulary, Quranic words, and share your faith with others",
    icon: Languages,
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200",
    modules: [
      {
        title: "Arabic Alphabet Basics",
        description: "Interactive phonetic board to learn letter shapes, sounds, and beginner pronunciation.",
        category: "Arabic 101",
        path: "/kalam/arabic-basics",
        tag: "Beginner",
        source: "KALAM"
      },
      {
        title: "Quran Word Match",
        description: "Speed-matching game pairing frequent Quranic Arabic vocabulary with English meanings.",
        category: "Vocabulary",
        path: "/kalam/quran-word-match",
        source: "KALAM"
      },
      {
        title: "Arabic Pronouns",
        description: "Learn core Arabic pronouns by tapping matching cards.",
        category: "Grammar",
        path: "/web/arabic-pronouns.html",
        source: "BCDC"
      },
      {
        title: "Arabic Wordfind",
        description: "Interactive grid puzzle to locate Quranic Arabic words.",
        category: "Word Game",
        path: "/web/arabic-wordfind.html",
        source: "BCDC"
      },
      {
        title: "Arabic Cases & Idafah Games",
        description: "Dropdown and drag-and-drop challenges for noun cases and possession constructs.",
        category: "Grammar Drill",
        path: "/web/arabic-idafah-i.html",
        source: "BCDC"
      },
      {
        title: "Canary GORAP (Dawah Guide)",
        description: "Interactive guide teaching the GORAP method for sharing Islam in dialogues.",
        category: "Dawah",
        path: "/web/canary-gorap.html",
        source: "BCDC"
      },
      {
        title: "Bible Quiz & Comparative Exploration",
        description: "Comparative scriptural knowledge quiz framework for interfaith conversations.",
        category: "Interfaith",
        path: "/web/bible-quiz.html",
        source: "BCDC"
      },
      {
        title: "Loan Outcomes & Takaful Quiz",
        description: "Explore Islamic finance principles, cooperative systems, and economic ethics.",
        category: "Finance",
        path: "/web/islam-loan.html",
        source: "BCDC"
      }
    ]
  }
];

export default function PlayPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
            <Gamepad2 className="w-4 h-4" />
            <span>Interactive Educational Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Learn & Play
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn Islam through fun puzzles, quizzes, interactive games, and language drills.
            Specially organized for New Muslims and beginners.
          </p>
        </div>

        <div className="space-y-12">
          {gameSections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} className="space-y-6">
                <div className="flex items-center gap-3 border-b pb-3">
                  <div className={`p-2 rounded-lg ${section.badgeColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.modules.map((module) => {
                    const targetUrl = module.source === 'KALAM'
                      ? `${KALAM_URL}${module.path}`
                      : `${BASE_URL}${module.path}`;

                    return (
                      <Card key={module.path} className="flex flex-col hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <div className="flex items-center gap-1.5">
                              <Badge variant="outline" className="text-xs">
                                {module.category}
                              </Badge>
                              {module.source === 'KALAM' && (
                                <Badge variant="secondary" className="text-[10px] bg-slate-100 dark:bg-slate-800">
                                  KALAM
                                </Badge>
                              )}
                            </div>
                            {module.tag && (
                              <Badge className="bg-emerald-600 text-white text-xs">
                                <Sparkles className="w-3 h-3 mr-1 inline" />
                                {module.tag}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                          <CardDescription className="text-sm leading-relaxed">
                            {module.description}
                          </CardDescription>
                          
                          <a
                            href={targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                          >
                            <span>Launch Game</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
