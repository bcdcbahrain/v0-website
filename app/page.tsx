import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, FileText, Heart, MapPin, Phone } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero-global.png",
      title: "Welcome to Busaiteen Chat Dialogue Centre (BCDC)",
      subtitle: "Conveying the Correct Creed of Faith in an Era of Division",
      cta: "Discover the Path to Guidance",
      link: "#about"
    },
    {
      image: "/pre-footer-image.png", // Based on Source 35
      title: "Start a Meaningful Conversation",
      subtitle: "Our advisors are ready to talk and answer your questions about Islam.",
      cta: "Chat Now",
      link: "/chat"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="BCDC Logo" className="h-12 w-12 object-contain" />
          <span className="font-bold text-xl text-blue-900 hidden md:block">BCDC Bahrain</span>
        </div>
        <div className="flex gap-6 font-medium">
          <a href="/" className="text-blue-600">Home</a>
          <a href="/chat" className="hover:text-blue-600 transition">Chat</a>
          <a href="/docs" className="hover:text-blue-600 transition">Docs</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
        </div>
      </nav>

      {/* Hero Slider Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover md:object-contain bg-slate-800"
            />
            
            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white">
          <ChevronRight size={32} />
        </button>
      </section>

      {/* Main Content - Mission & Features */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Discover the Path to Guidance</h2> [cite: 8]
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Busaiteen Chat Dialogue Centre, based in the Kingdom of Bahrain, we provide a safe and 
            welcoming space for seekers of truth to engage in meaningful dialogue about Islam. [cite: 11, 12]
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Guidance</h3> [cite: 15]
            <p className="text-slate-600">Sessions led by experienced Da'ees and trainers from IslamReligion.com.</p> [cite: 15]
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Free Resources</h3> [cite: 24]
            <p className="text-slate-600">Browse through authentic, free, and downloadable Islamic materials.</p> [cite: 24]
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Support the Mission</h3> [cite: 26]
            <p className="text-slate-600">Invest in your Hereafter by supporting our Online Da'wah Project.</p> [cite: 27]
          </div>
        </div>
      </main>

      {/* Support Section (Pre-Footer) */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How You Can Help</h2> [cite: 29]
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Donate</h4> [cite: 30]
              <p className="text-blue-100 text-sm">We gratefully accept Zakah and Sadaqah to sustain our mission.</p> [cite: 30]
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Spread the Word</h4> [cite: 31]
              <p className="text-blue-100 text-sm">Share our platform with those seeking guidance globally.</p> [cite: 31]
            </div>
          </div>
          <p className="italic text-blue-200">
            "Whoever guides someone to goodness will have a reward like the one who did it." — Sahih Muslim
          </p> [cite: 28]
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <MapPin size={18} /> Location
            </h4>
            <p>Kingdom of Bahrain</p> [cite: 33]
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Phone size={18} /> Contact Us
            </h4>
            <p>WhatsApp: +973 3937 7497</p> [cite: 34]
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <a href="https://www.islamreligion.com" className="hover:text-blue-400">IslamReligion.com</a> [cite: 37]
            <a href="#" className="hover:text-blue-400">New Muslim Website</a> [cite: 37]
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
