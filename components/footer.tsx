import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Globe, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/bcdc-logo.png"
                alt="BCDC Logo"
                width={56}
                height={56}
                className="rounded-full"
              />
              <span className="text-lg font-semibold">BCDC</span>
            </div>
            <p className="text-sm text-background/70">
              Busaiteen Chat Dialogue Centre - Conveying the correct creed of faith
              to seekers of truth worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.islamreligion.com/chat"
                  className="text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* External Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://islamreligion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  <Globe className="h-4 w-4" />
                  IslamReligion.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.newmuslims.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  <Globe className="h-4 w-4" />
                  New Muslim eLearning  Site
                </a>
              </li>
              <li>
                <a
                  https://mopacademy.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  <Globe className="h-4 w-4" />
                  MOPA.Com
                </a>
              </li>
              <li>
                <a
                  https://dakwah.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  <Globe className="h-4 w-4" />
                  IDTA.Com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Developer's Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0" />
                +917558845528
              </li>
              <li>
                <a
                  href="https://wa.me/917558845528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  +917558845528
                </a>
              </li>
              <li>
                <a
                  href="mailto:bcdcbahrain@gmail.com"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  bcdcbahrain@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Busaiteen Chat Dialogue Centre. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
