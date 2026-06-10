"use client"; 

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlarmClockCheck,
  BookOpen,
  BookOpenCheck,
  BrickWall,
  CircleStop,
  Droplets,
  Download,
  Earth,
  Globe,
  FileText,
  Users,
  Heart,
  Eye,
  ExternalLink,
  ArrowRight,
  Video,
  Bookmark,
  Notebook,
  Sword,
  NotebookPen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";


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
        status: "New",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "https://drive.google.com/file/d/1dUd6L_94qIkW6GLV6X5BFjEa3yebStfs/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1dUd6L_94qIkW6GLV6X5BFjEa3yebStfs",
      },
		{
		title: "Global Polygyny Frameworks",
        description: "Understanding the regulations, rights and precedents of polygyny in Islam and global history",
        category: "Beginner",
        status: "New",
        type: "PPT-PDF",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1uNf7g2OHJUw9OLlpDh0jCrtwSXgdFQo0/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uNf7g2OHJUw9OLlpDh0jCrtwSXgdFQo0",
	  },
      {
        title: "Masteering The Art of Dialogue",
        description: "A structural framework for answering theological questions",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1Xjf5u_kUThQy5Wi1DjuOjISY-OrmZthf/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1Xjf5u_kUThQy5Wi1DjuOjISY-OrmZthf",
      },
	  {
        title: "The Islamic Marriage Blueprint",
        description: "A guide to Islamic Marriage for new Muslims",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "https://drive.google.com/file/d/1JhX0G6sTJ-nmQEOpEW5PJcsztAuswbmM/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1JhX0G6sTJ-nmQEOpEW5PJcsztAuswbmM",
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
        icon: BrickWall,
        driveUrl: "https://drive.google.com/file/d/1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1psU_pQCZeRys-vR3Y-zwV24nWJ49gppA",
      },
		{
        title: "The Worldly Mirage",
        description: "Deceptions of the Worldly Life.",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Earth,
        driveUrl: "https://drive.google.com/file/d/1U8j7gs8ys1xPm_-yPkvGAcSdXTD8i-jV/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1U8j7gs8ys1xPm_-yPkvGAcSdXTD8i-jV",
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
        title: "The Foundation of the Heart",
        description: "Understanding the Six Pillars of Faith or Iman in Islam",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "https://drive.google.com/file/d/1vjU_UgJqQh3wC815GhWRDBO1J_L_p8y-/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1vjU_UgJqQh3wC815GhWRDBO1J_L_p8y-",
      },
      {
        title: "Tahawi's Creed of Monotheism",
        description: "The Fundamental Belief by Iamam Abu Ja'far al-Tahawi",
        category: "Beginner",
        status: "New",
        type: "PPT-PDF",
        icon: BookOpenCheck,
        driveUrl: "https://drive.google.com/file/d/1Q5I-6gW5nY5Y9y-HKLms8T-cSc3FgLA_/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1Q5I-6gW5nY5Y9y-HKLms8T-cSc3FgLA_",
      },
		{
        title: "The Theological Synthesis",
        description: "A Comprehensive Synthesis of the Creed of Imam al-Tahawi",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1WcnGqDPkkFkHIMgN006jMmFkW3BCCxo3/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1WcnGqDPkkFkHIMgN006jMmFkW3BCCxo3",
      },
		{
        title: "The Architecture of Orthodoxy",
        description: "The Creed of Imam al-Tahawi",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: BookOpenCheck,
        driveUrl: "https://drive.google.com/file/d/1nlbA_m1B1vAZfHq9NI3x0OscuKNlnRAf/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1nlbA_m1B1vAZfHq9NI3x0OscuKNlnRAf",
      },
    ],
  },
  {
    id: "scripture-sources",
    title: "Scripture & Sources",
    description: "Resources relating to the Quran and the Prophetic traditions.",
    resources: [
      	  {
	    title: "Reclaiming the Forgotten Sunnah",
	    description: "Reclaiming the greatest service to Humanity",
	    category: "Beginner",
		  status: "New",
	    type: "PDF Guide",
	    icon: FileText,
	    driveUrl: "https://drive.google.com/file/d/1TV-oGKp8cDb_-DMgMkav9ozmy_ASsITM/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=1TV-oGKp8cDb_-DMgMkav9ozmy_ASsITM",
      },
		{
    title: "Muhammad A Mercy to Humanity",
    description: "Get a glimpse of the Noble Prophet of Islam",
    category: "Beginner",
	  status: "New",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1F_bCLKs62fPdhxw875sJVUsx-UV-Em50/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1F_bCLKs62fPdhxw875sJVUsx-UV-Em50",
      },
		{
        title: "Investigating Quranic Authorship",
        description: "A scholarly investigation into the origins of the Quran by Tariq Najeebdeen.",
        category: "Intermediate",
    	status: "New",
        type: "PDF Guide",
        icon: NotebookPen,
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
        title: "The Anatomy of Light",
        description: "Battle and Balance between Heart, Mind, Soul, and Body.",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "https://drive.google.com/file/d/17rFpy0jzKWKv_bvG3IqjpcKU3bmZEyuQ/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=17rFpy0jzKWKv_bvG3IqjpcKU3bmZEyuQ",
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
        status: "New",
        type: "PDF Guide",
        icon: Heart,
        driveUrl: "https://drive.google.com/file/d/10iKdurEJa2ccxuJ1pHF7QYtPnkU0YHCC/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10iKdurEJa2ccxuJ1pHF7QYtPnkU0YHCC",
      },
      {
        title: "Salah: The Sacred Rhythm",
		description: "The Path of Devotion: A Complete Guide to Salah",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1hBD3JS8l9QPI1mivDTRzmZD9SL6F8UQM/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1hBD3JS8l9QPI1mivDTRzmZD9SL6F8UQM",
      },
      {
        title: "Wudu Essentials",
        description: "An essential guide to ritual purification before prayer",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Droplets,
        driveUrl: "https://drive.google.com/file/d/1W-ZwkvbCnzQgLigfm4qNXuwWneFQlx4d/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1W-ZwkvbCnzQgLigfm4qNXuwWneFQlx4d",
      },
		{
        title: "The Prophetic Rhythm",
	    description: "A Day in the Life of the Noble Prophet who changed the world",
	    category: "Beginner",
		status: "New",
	    type: "PPT-PDF",
	    icon: AlarmClockCheck,
	    driveUrl: "https://drive.google.com/file/d/18NNx5H2_gY9ikIZwQV4_HNLUIiori9lz/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=18NNx5H2_gY9ikIZwQV4_HNLUIiori9lz",
      },
      {
        title: "Post Ramadan Depression Syndrome",
	    description: "Maintaining the spiritual momentum beyond Ramadan through Istiqama",
	    category: "Beginner",
		status: "New",
	    type: "PPT-PDF",
	    icon: FileText,
	    driveUrl: "https://drive.google.com/file/d/1RAnWBe_kzWhPjI81IHYoRAAQL_O46thf/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=1RAnWBe_kzWhPjI81IHYoRAAQL_O46thf",
      },
    ],
  },
  {
    id: "dawah-outreach",
    title: "Dawah & Outreach",
    description: "Tools for effectively communicating Islam to others.",
    resources: [
	   {
    title: "Prophetic Strategic Defense",
    description: "Defensive Foundations of the Nine Prophetic Battles",
    category: "Intermediate",
	  status: "New",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1bdwJ4Vn4_FVv9jjuaDW4e8i2gxJpMjbQ/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1bdwJ4Vn4_FVv9jjuaDW4e8i2gxJpMjbQ",
      },
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
    title: "Islamic Foundations of Coexistence",
    description: "Peace & Coexistence: Islamic Foundations for a Global Society",
    category: "Beginner",
	  status: "New",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1o0I7BsSDtuJ_w1dA_m-tprs9xN3oYMqU/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1o0I7BsSDtuJ_w1dA_m-tprs9xN3oYMqU",
      },
       {
        title: "Beyond The Sword",
        description: "Why did Prophet Muhammad (SA) Fight Battles.",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: Sword,
        driveUrl: "https://drive.google.com/file/d/1mjbTxSMJgOoklbIdQ4005UbD5YPIDQkx/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1mjbTxSMJgOoklbIdQ4005UbD5YPIDQkx",
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
		 {
        title: "The Universal Thread",
	    description: "Understanding the rationale history and shared heritage of modesty",
	    category: "Beginner",
		status: "New",
	    type: "PPT-PDF",
	    icon: FileText,
	    driveUrl: "https://drive.google.com/file/d/1rHxAHLExJlSXGKS35RKairka_gO2lZ8B/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=1rHxAHLExJlSXGKS35RKairka_gO2lZ8B",
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
    title: "The Balanced Big Picture",
    description: "The Balanced Big Picture: Foundations for Dawah",
    category: "Beginner",
	  status: "New",
    type: "PDF Guide",
    icon: FileText,
    driveUrl: "https://drive.google.com/file/d/1Ap4UnUkVdbhm2sQW1IWmqx-sVX5h_BSz/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1Ap4UnUkVdbhm2sQW1IWmqx-sVX5h_BSz",
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
        title: "The Constellation of Quranic Signs",
        description: "Quranic Lessons for all generations",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1vNN5vgT1j5HfIPRqCKNGHcQXQgvjKR8y/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1vNN5vgT1j5HfIPRqCKNGHcQXQgvjKR8y",
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
	 {
    id: "dawah-psychology",
    title: "Dawah Psychology",
    description: "Deepen your understanding of Dawah Psychology based on authentic Sunnah.",
    resources: [
      {
        title: "The Prophetic Pause",
        description: "An Islamic Emotional Intelligence(IEI) Framework for Anger Mastery.",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: CircleStop,
        driveUrl: "https://drive.google.com/file/d/1HFidUH-aSlePFTHqi0mk0fZ-MjS2l3tT/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1HFidUH-aSlePFTHqi0mk0fZ-MjS2l3tT",
      },
      {
        title: "Dawah Psychology Field Guide",
        description: "Navigating Setbacks, Sustaining Sincerity, and Following the Prophetic Way",
        category: "Beginner",
         status: "New",
        type: "PDF from PPT",
        icon: Eye,
        driveUrl: "https://drive.google.com/file/d/1U-Z7gUv69QsgYrSXnv3u8H4ZbuyflAta/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1U-Z7gUv69QsgYrSXnv3u8H4ZbuyflAta",
      },
     {
        title: "Mastering Online Dawah",
        description: "Learn COPE technique to deal with 11 types of online encounters ",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "https://drive.google.com/file/d/1qT2gONdTEHFynG9FM2lDnoSlb_fRbULT/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1qT2gONdTEHFynG9FM2lDnoSlb_fRbULT",
      },
	{
        title: "Najwa - What Destroys Dawah",
	    description: "A Diagnostic Frame work for Organizational Health",
	    category: "Beginner",
		status: "New",
	    type: "PPT-PDF",
	    icon: AlarmClockCheck,
	    driveUrl: "https://drive.google.com/file/d/1aurCR3x1AnbQtM2n55IsW6Odkd8TXZjY/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=1aurCR3x1AnbQtM2n55IsW6Odkd8TXZjY",
    	  },
      {
        title: "The Firawnic Archetype",
        description: "Understanding the Negative Archetypes and the Lessons they teach us.",
        category: "Intermediate",
        status: "New",
        type: "PPT-PDF",
        icon: BookOpenCheck,
        driveUrl: "https://drive.google.com/file/d/1E7LyEoeSKRKRWzviT7tZ2LoLmhy0LCec/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1E7LyEoeSKRKRWzviT7tZ2LoLmhy0LCec",
      },
		{
        title: "Secure Your Own Oxygen Mask",
        description: "A Comprehensive Guide to Self Care before others and its Islamic Rationale",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1gZt6_We9IUu27EiJU11P2kauXk71gu8q/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1gZt6_We9IUu27EiJU11P2kauXk71gu8q",
      },
    ],
  },
	{
    id: "science",
    title: "The Science of Signs",
    description: "Signs of our Creator and its Science",
    resources: [
 			{
            title: "Human Genessis",
	    description: "Miracles in the Creation of MAN",
	    category: "Beginner",
		status: "New",
	    type: "PPT-PDF",
	    icon: AlarmClockCheck,
	    driveUrl: "https://drive.google.com/file/d/15TV0iOVdkKu-1Dja43WVTt2jaRgdp4c8/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=15TV0iOVdkKu-1Dja43WVTt2jaRgdp4c8",
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
    ],
  },
	{
    id: "books",
    title: "Dawah Books",
    description: "Dawah Books that are most read by Chat Advisors and Field Daees",
    resources: [
 	{
        title: "A. Foundations-DTC Notes:1-4",
        description: "A starter DTC guide on how to maximize your online learning for Dawah.",
        category: "Beginner",
        status: "New",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "https://drive.google.com/file/d/1-wD8flyBD4lWtO5ezEf6oaJTTwqf4YfX/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1-wD8flyBD4lWtO5ezEf6oaJTTwqf4YfX",
       },
		{
        title: "B. Fiqh-of-Dawah-DTC Notes: 5-8",
        description: "Introducing the Call, the Caller, and the Called.",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "https://drive.google.com/file/d/1s2GvQwIvMogrhFOjSmTDX_HdFxoiuVqn/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1s2GvQwIvMogrhFOjSmTDX_HdFxoiuVqn",
       },
		{
        title: "C. G.O.R.A.P-DTC Notes: 9-21",
        description: "The G.O.R.A.P Approach Before We GO!",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "https://drive.google.com/file/d/1ttsPIKc01CijVVmfdDruRDBbs4rwNcO4/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ttsPIKc01CijVVmfdDruRDBbs4rwNcO4",
       },
		{
        title: "D. Acknowledgement DTC Notes: 22-25",
        description: "Shahadah Developing and Supporting-Call To Action.",
        category: "Intermediate",
        status: "New",
        type: "PDF Guide",
        icon: BookOpen,
        driveUrl: "https://drive.google.com/file/d/1KW62smiccphhAZr0ZIsI8gb1LtiehxsR/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KW62smiccphhAZr0ZIsI8gb1LtiehxsR",
       },
    ],
  },
	{
    id: "mags",
    title: "Dawah Magazines",
    description: "Dawah magazines not available online anymore!",
    resources: [
      {
        title: "Dawah Monthly: Aug 2013",
        description: "The Muslim Jesus(PBUH)",
        category: "Intermediate",
        status: "New",
        type: "PDF Magazine",
        icon: FileText,
        driveUrl: "https://drive.google.com/file/d/1PfjLvTFpVY2apLRQJ0Zkc8CI0QHAQ8_W/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1PfjLvTFpVY2apLRQJ0Zkc8CI0QHAQ8_W",
      },
	   {
        title: "Dawah Monthly: Oct 2013",
	    description: "Who Made You: Religion and Modern Science",
	    category: "Beginner",
		status: "New",
	    type: "PDF Magazine",
	    icon: AlarmClockCheck,
	    driveUrl: "https://drive.google.com/file/d/1Rt1vP0s3-fcnDiVtAcEEwXguYcsvSXzb/view?usp=sharing",
	    downloadUrl: "https://drive.google.com/uc?export=download&id=1Rt1vP0s3-fcnDiVtAcEEwXguYcsvSXzb",
      },
      {
        title: "Dawah Monthly: Nov 2013",
        description: "The Muslim Mary: Mother of Jesus(PBUH)",
        category: "Intermediate",
        status: "New",
        type: "PDF Magazine",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1QcKqLcvMlrZzFBj4rRZPOCUf93QoRJa4/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1QcKqLcvMlrZzFBj4rRZPOCUf93QoRJa4",
      },
	   {
        title: "Dawah Monthly: May 2014",
        description: "Salvation-Blood or Mercy: Yusuf Estes explains",
        category: "Intermediate",
    	status: "New",
        type: "PDF Magazine",
        icon: Notebook,
        driveUrl: "https://drive.google.com/file/d/1CIpv0wrm8v-9elVfLdpQczDJHP6mzaIR/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1CIpv0wrm8v-9elVfLdpQczDJHP6mzaIR",
      },
		{
        title: "Dawah Monthly: Jun 2014",
        description: "Poverty, Famine, War: Where is God and Why does He allow Pain & Suffering",
        category: "Intermediate",
        status: "New",
        type: "PDF Magazine",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/1hSPQgSs3Y_0_g7wF7sfpdHO6lz-_TFXT/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1hSPQgSs3Y_0_g7wF7sfpdHO6lz-_TFXT",
      },
		{
        title: "Dawah Monthly: Jul 2014",
        description: "Have you  taken the Jesus Test?",
        category: "Intermediate",
        status: "New",
        type: "PDF Magazine",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/18WvJJ_C48DzWivIILrVqnhAKbHIBGTqo/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18WvJJ_C48DzWivIILrVqnhAKbHIBGTqo",
      },
		{
        title: "Dawah Monthly: May 2022",
        description: "10 Things You Might Not Know about Jesus in Islam",
        category: "Intermediate",
        status: "New",
        type: "PDF Magazine",
        icon: Users,
        driveUrl: "https://drive.google.com/file/d/18hFkfp6qLR2cqR3MeeeZkV1123PhjRZU/view?usp=sharing",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18hFkfp6qLR2cqR3MeeeZkV1123PhjRZU",
      },
    ],
  },	
];

export default function DocsPage() {
  // Track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
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
                  Explore our curated library. Look for the status badges to find our latest additions and upcoming guides.
                </p>
                
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
        {categories.map((section) => {
          const isExpanded = expandedSections[section.id];
          const displayedResources = isExpanded 
            ? section.resources 
            : section.resources.slice(0, 4); // Only show first 4 initially

          return (
            <section key={section.id} id={section.id} className="py-12 border-t first:border-none">
              <div className="container mx-auto px-4 md:px-6">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-2">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
                  {displayedResources.map((resource, index) => {
                    const IconComponent = resource.icon;
                    return (
                      <Card key={index} className="group transition-all hover:shadow-lg flex flex-col">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge variant={resource.category === "Beginner" ? "default" : "secondary"}>
                                {resource.category}
                              </Badge>
                              {resource.status && (
                                <Badge variant="outline" className="text-[10px] uppercase border-blue-500 text-blue-600">
                                  {resource.status}
                                </Badge>
                              )}
                            </div>
                          </div>
                          {/* Note: line-clamp removed to ensure full title displays */}
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

                {/* View All Button Logic */}
                {section.resources.length > 4 && (
                  <div className="flex justify-center">
                    <Button 
                      onClick={() => toggleSection(section.id)}
                      variant="ghost" 
                      className="text-primary hover:text-primary hover:bg-primary/5"
                    >
                      {isExpanded ? (
                        <>
                          Show Less
                          <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View All {section.title} Resources
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </section>
          );
        })}

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
