import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, BookOpen, Heart, Compass, ExternalLink, Sparkles, Languages } from "lucide-react";

export const metadata = {
  title: 'Play (Learn via Play) - BCDC',
  description: 'Interactive Islamic educational games, puzzles, and quizzes designed for New Muslims and learners.',
};

interface GameModule {
  title: string;
  description: string;
  category: string;
  path: string;
  tag?: string;
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

const gameSections: LearningSection[] = [
  {
    id: "foundations",
    title: "1. Core Beliefs & Foundations",
    subtitle: "Start here: Essential creed, basic concepts, and the Beautiful Names of Allah",
    icon: Heart,
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200",
    modules: [
      {
        title: "KY Islam Basics",
        description: "Foundational teachings and core creed interactive education engine.",
        category: "Aqeedah",
        path: "/web/ky-islam-basics.html",
        tag: "Recommended First"
      },
      {
        title: "KY Islam Easy Quiz",
        description: "Accessible beginner quiz module testing essential Islamic knowledge.",
        category: "Quiz",
        path: "/web/ky-islam-easy-quiz.html"
      },
      {
        title: "Islam Match",
        description: "Interactive card-matching educational engine for core Islamic principles.",
        category: "Puzzle",
        path: "/web/islam-match.html"
      },
      {
        title: "Match Islamic Terms",
        description: "A beginner-friendly minimalist matching quiz for key Islamic terms.",
        category: "Matching",
        path: "/web/match-islamic-terms.html"
      },
      {
        title: "Attributes Match (English)",
        description: "Drag-and-drop matching game to learn the 99 Names of Allah in English.",
        category: "Names of Allah",
        path: "/web/attributes-match.html"
      },
      {
        title: "Attributes Match (Tamil)",
        description: "Drag-and-drop game to learn the 99 Names of Allah in Tamil.",
        category: "Names of Allah",
        path: "/web/tamil-attributes.html"
      }
    ]
  },
  {
    id: "worship",
    title: "2. Daily Worship & Living",
    subtitle: "Practical guides on Salah (Prayer), the Islamic Calendar, and Daily Ethics",
    icon: Compass,
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200",
    modules: [
      {
        title: "Arkans of Salah",
        description: "Interactive module detailing the 14 essential pillars (Arkans) of prayer with a quiz.",
        category: "Prayer Guide",
        path: "/web/arkans-salah.html",
        tag: "Essential"
      },
      {
        title: "Islamic Months Quiz",
        description: "Learn and test your knowledge of the Hijri calendar and sacred milestones.",
        category: "Calendar",
        path: "/web/islamic-months-quiz.html"
      },
      {
        title: "Top 10 Quranic Surahs",
        description: "Listen to beautiful recitations of essential Surahs by Sheikh Mahmoud Khalil Al-Husary.",
        category: "Recitation",
        path: "/web/top-ten-quran.html"
      },
      {
        title: "Life Choices Quiz",
        description: "Interactive scenario quiz training everyday ethical choices and spiritual reflection.",
        category: "Ethics",
        path: "/web/life-choices-quiz.html"
      }
    ]
  },
  {
    id: "history",
    title: "3. Prophetic Wisdom & History",
    subtitle: "Discover the lives of the Prophets and key Hadith teachings",
    icon: BookOpen,
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200",
    modules: [
      {
        title: "Missions of Prophets",
        description: "Interactive bilingual quiz exploring the missions of 25 Prophets in Islam.",
        category: "Seerah",
        path: "/web/prophets-mission-quiz.html"
      },
      {
        title: "40 Hadith of Imam Nawawi",
        description: "Interactive quiz testing comprehension of essential prophetic sayings.",
        category: "Hadith",
        path: "/web/hadith-40.html"
      },
      {
        title: "For All Moms (Ummi)",
        description: "Animative, heartfelt compendium of supplications (Duas) for mothers.",
        category: "Dua",
        path: "/web/ummi.html"
      }
    ]
  },
  {
    id: "language",
    title: "4. Quranic Language & Dialogue",
    subtitle: "Fun tools to learn Quranic Arabic grammar and share your faith with others",
    icon: Languages,
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200",
    modules: [
      {
        title: "Arabic Pronouns",
        description: "Learn core Arabic pronouns by tapping matching cards.",
        category: "Grammar",
        path: "/web/arabic-pronouns.html"
      },
      {
        title: "Arabic Wordfind",
        description: "Interactive grid puzzle to locate Quranic Arabic words.",
        category: "Word Game",
        path: "/web/arabic-wordfind.html"
      },
      {
        title: "Arabic Cases & Idafah Games",
        description: "Dropdown and drag-and-drop challenges for noun cases and possession constructs.",
        category: "Grammar Drill",
        path: "/web/arabic-idafah-i.html"
      },
      {
        title: "Canary GORAP (Dawah Guide)",
        description: "Interactive guide teaching the GORAP method for sharing Islam in dialogues.",
        category: "Dawah",
        path: "/web/canary-gorap.html"
      },
      {
        title: "Bible Quiz & Comparative Exploration",
        description: "Comparative scriptural knowledge quiz framework for interfaith conversations.",
        category: "Interfaith",
        path: "/web/bible-quiz.html"
      },
      {
        title: "Loan Outcomes & Takaful Quiz",
        description: "Explore Islamic finance principles, cooperative systems, and economic ethics.",
        category: "Finance",
        path: "/web/islam-loan.html"
      }
    ]
  }
];

export default function PlayPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Banner */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
          <Gamepad2 className="w-4 h-4" />
          <span>Interactive Educational Portal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          La‘ib <span className="text-emerald-600 dark:text-emerald-400">(لَعِب)</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn Islam through fun puzzles, quizzes, interactive games, and language drills.
          Specially organized for New Muslims and beginners.
        </p>
      </div>

      {/* Sections & Game Modules */}
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
                {section.modules.map((module) => (
                  <Card key={module.path} className="flex flex-col hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {module.category}
                        </Badge>
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
                        href={`${BASE_URL}${module.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                      >
                        <span>Launch Game</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
