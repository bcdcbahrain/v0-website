import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Gamepad2,
  BookOpen,
  Heart,
  Compass,
  ExternalLink,
  Sparkles,
  Languages,
  ShieldQuestion,
  Route,
  BriefcaseBusiness,
} from "lucide-react";

export const metadata = {
  title: 'Play (Learn via Fun & Games) - BCDC',
  description: 'Interactive Islamic educational games, puzzles, journeys, and quizzes designed for New Muslims and beginners.',
};

interface GameModule {
  title: string;
  description: string;
  category: string;
  path: string;
  tag?: string;
  baseUrl?: string;
}

interface LearningSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badgeColor: string;
  modules: GameModule[];
}

const BCDC_BASE_URL = "https://cvemrafi.vercel.app";
const KALAM_BASE_URL = "https://v0-kalam.vercel.app";

const gameSections: LearningSection[] = [
  {
    id: "foundations",
    title: "1. Core Beliefs & Foundations",
    subtitle: "Start here: essential beliefs, Islamic vocabulary, and learning about Allah",
    icon: Heart,
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200",
    modules: [
      {
        title: "Islam Basics",
        description: "Foundational teachings and core creed interactive education engine.",
        category: "Aqeedah",
        path: "/web/ky-islam-basics.html",
        tag: "Recommended First",
      },
      {
        title: "Islam Easy Quiz",
        description: "Accessible beginner quiz module testing essential Islamic knowledge.",
        category: "Quiz",
        path: "/web/ky-islam-easy-quiz.html",
      },
      {
        title: "Islam Match",
        description: "Interactive card-matching educational engine for core Islamic principles.",
        category: "Puzzle",
        path: "/web/islam-match.html",
      },
      {
        title: "Match Islamic Terms",
        description: "A beginner-friendly minimalist matching quiz for key Islamic terms.",
        category: "Matching",
        path: "/web/match-islamic-terms.html",
      },
      {
        title: "Asma-Ul-Husna Puzzle",
        description: "Match jumbled Arabic and English Names of Allah and learn through play.",
        category: "Names of Allah",
        path: "/games/matching/divine-attributes",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Attributes Match (English)",
        description: "Drag-and-drop matching game to learn the 99 Names of Allah in English.",
        category: "Names of Allah",
        path: "/web/attributes-match.html",
      },
      {
        title: "Attributes Match (Tamil)",
        description: "Drag-and-drop game to learn the 99 Names of Allah in Tamil.",
        category: "Names of Allah",
        path: "/web/tamil-attributes.html",
      },
    ],
  },
  {
    id: "quran",
    title: "2. Quran & Short Surahs",
    subtitle: "Build a first connection with the Quran through short, familiar Surahs and playful activities",
    icon: BookOpen,
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200",
    modules: [
      {
        title: "Al-Fatiha Quiz",
        description: "Comprehensive quiz covering the Opening Surah of the Noble Quran in a single session.",
        category: "Surah Quiz",
        path: "/quizzes/surah/1",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Surah Al-Ikhlas Quiz",
        description: "Challenge yourself by testing your knowledge of Surah Al-Ikhlas.",
        category: "Surah Quiz",
        path: "/quizzes/surah/112",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Surah Al-Falaq Quiz",
        description: "Learn vocabulary, related hadeeth, tafsir and reasons for revelation of Surah Al-Falaq.",
        category: "Surah Quiz",
        path: "/quizzes/surah/113",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Surah An-Nas Quiz",
        description: "Test your knowledge and vocabulary from the last chapter: Surah An-Nas.",
        category: "Surah Quiz",
        path: "/quizzes/surah/114",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Make Quranic Ayats",
        description: "Arrange Arabic words in the correct order to form complete Quranic ayats.",
        category: "Quran Puzzle",
        path: "/games/quranic-ayats",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Top 10 Quranic Surahs",
        description: "Listen to beautiful recitations of essential Surahs by Sheikh Mahmoud Khalil Al-Husary.",
        category: "Recitation",
        path: "/web/top-ten-quran.html",
      },
    ],
  },
  {
    id: "worship",
    title: "3. Daily Worship & Living",
    subtitle: "Learn practical worship, the Islamic calendar, and everyday ethical choices",
    icon: Compass,
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200",
    modules: [
      {
        title: "Arkans of Salah",
        description: "Interactive module detailing the 14 essential pillars (Arkans) of prayer with a quiz.",
        category: "Prayer Guide",
        path: "/web/arkans-salah.html",
        tag: "Essential",
      },
      {
        title: "Islamic Months Quiz",
        description: "Learn and test your knowledge of the Hijri calendar and sacred milestones.",
        category: "Calendar",
        path: "/web/islamic-months-quiz.html",
      },
      {
        title: "Life Choices Quiz",
        description: "Interactive scenario quiz training everyday ethical choices and spiritual reflection.",
        category: "Ethics",
        path: "/web/life-choices-quiz.html",
      },
      {
        title: "Islamic Finance Game",
        description: "Navigate ethical financial decisions and learn Islamic principles through interactive scenarios and choices.",
        category: "Finance",
        path: "https://isfin.vercel.app/",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Loan Outcomes & Takaful Quiz",
        description: "Explore Islamic finance principles, cooperative systems, and economic ethics.",
        category: "Finance",
        path: "/web/islam-loan.html",
      },
      {
        title: "For All Moms (Ummi)",
        description: "Animative, heartfelt compendium of supplications (Duas) for mothers.",
        category: "Dua",
        path: "/web/ummi.html",
      },
    ],
  },
  {
    id: "arabic",
    title: "4. Quranic Arabic & Vocabulary",
    subtitle: "Learn useful Arabic words and structures through games, matching, and puzzles",
    icon: Languages,
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200",
    modules: [
      {
        title: "Memory Match",
        description: "Match Arabic words with their English translations to strengthen memory and vocabulary.",
        category: "Vocabulary Game",
        path: "/games/memory",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "General Quiz",
        description: "Comprehensive quiz covering 400 words from the Quranic dictionary in multiple sessions.",
        category: "Vocabulary Quiz",
        path: "/quizzes",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Category Quiz",
        description: "Learn vocabulary organized by categories such as divine attributes, prophets, ethics, and more.",
        category: "Vocabulary Quiz",
        path: "/quizzes/categories",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Reverse Word Quiz",
        description: "Challenge yourself by selecting the correct Arabic word from English meanings.",
        category: "Vocabulary Quiz",
        path: "/quizzes/reverse",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Arabic Pronouns",
        description: "Learn core Arabic pronouns by tapping matching cards.",
        category: "Grammar",
        path: "/web/arabic-pronouns.html",
      },
      {
        title: "Arabic Wordfind",
        description: "Interactive grid puzzle to locate Quranic Arabic words.",
        category: "Word Game",
        path: "/web/arabic-wordfind.html",
      },
      {
        title: "Arabic Cases & Idafah Games",
        description: "Dropdown and drag-and-drop challenges for noun cases and possession constructs.",
        category: "Grammar Drill",
        path: "/web/arabic-idafah-i.html",
      },
    ],
  },
  {
    id: "prophets",
    title: "5. Prophets, Seerah & Islamic History",
    subtitle: "Discover the Prophets, the Prophet's migration, and key events in Islamic history",
    icon: Route,
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200",
    modules: [
      {
        title: "Missions of Prophets",
        description: "Interactive bilingual quiz exploring the missions of 25 Prophets in Islam.",
        category: "Prophets",
        path: "/web/prophets-mission-quiz.html",
      },
      {
        title: "Prophets in the Quran",
        description: "Explore the stories and attributes of the prophets mentioned in the Quran and their significance.",
        category: "Prophets",
        path: "/prophets",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Hijra Journey Quiz",
        description: "Test your knowledge of the key events, locations, and Quranic references pertaining to the Prophet's migration.",
        category: "Seerah Quiz",
        path: "/hijra/quiz",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Hijra Journey",
        description: "Discover the historic journey of Prophet Muhammad (PBUH) with interactive maps and historical context.",
        category: "Interactive Journey",
        path: "/hijra",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "40 Hadith of Imam Nawawi",
        description: "Interactive quiz testing comprehension of essential prophetic sayings.",
        category: "Hadith",
        path: "/web/hadith-40.html",
      },
    ],
  },
  {
    id: "interactive-journeys",
    title: "6. Interactive Islamic Journeys",
    subtitle: "Explore major events and acts of worship through interactive storytelling and guided journeys",
    icon: BriefcaseBusiness,
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200",
    modules: [
      {
        title: "Isra & Miraj",
        description: "Follow the Prophet's journey from Mecca to Jerusalem and ascension to the heavens with interactive storytelling.",
        category: "Interactive Story",
        path: "/isra-miraj",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
      {
        title: "Hajj Tamattu Journey",
        description: "Follow the sacred pilgrimage steps with interactive guidance through Umrah and Hajj rituals.",
        category: "Hajj Journey",
        path: "https://tamatu.vercel.app/",
        external: true,
        tag: "KALAM",
        baseUrl: KALAM_BASE_URL,
      },
    ],
  },
  {
    id: "dawah-interfaith",
    title: "7. Dawah & Interfaith Learning",
    subtitle: "For the New Muslim who is ready to understand, discuss, and share Islam thoughtfully",
    icon: ShieldQuestion,
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200",
    modules: [
      {
        title: "Canary GORAP (Dawah Guide)",
        description: "Interactive guide teaching the GORAP method for sharing Islam in dialogues.",
        category: "Dawah",
        path: "/web/canary-gorap.html",
      },
      {
        title: "Bible Quiz & Comparative Exploration",
        description: "Comparative scriptural knowledge quiz framework for interfaith conversations.",
        category: "Interfaith",
        path: "/web/bible-quiz.html",
      },
    ],
  },
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
            Learn Islam through fun puzzles, quizzes, interactive journeys, games, and language drills.
            Specially organized as a progressive learning path for New Muslims and beginners.
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
                    const href = module.path.startsWith("http")
                      ? module.path
                      : `${module.baseUrl ?? BCDC_BASE_URL}${module.path}`;

                    return (
                      <Card
                        key={`${module.title}-${module.path}`}
                        className="flex flex-col hover:shadow-md transition-shadow"
                      >
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
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                          >
                            <span>
                              {module.category === "Interactive Journey" ||
                              module.category === "Interactive Story" ||
                              module.category === "Hajj Journey"
                                ? "Explore"
                                : "Launch Game"}
                            </span>
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
