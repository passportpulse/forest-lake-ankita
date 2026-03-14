import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Container from "./layout/Container";
import { NAV_LINKS } from "../constants/navigation";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-secondary-dark to-[#0f172a] text-primary-light pt-12 pb-8 border-t border-primary-light/5">
      <Container>
        {/* Main Grid: Using tight gaps for mobile, broader for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
          {/* 1. Brand Section - Compacted spacing */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Forest Lakes Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-lg tracking-wider leading-none mb-1">
                  FOREST LAKES
                </h2>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-primary-light/40">
                  Your Passion • Our Creation
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-light/60 leading-snug max-w-sm">
              Premium swimming pool construction and landscaping solutions
              delivered with precision across India.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 border border-primary-light/10 rounded-md hover:bg-primary-light hover:text-secondary-dark transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - Condensed list */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-primary-light/30 mb-4">
              Explore
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-light/70 hover:text-primary-light transition-all flex items-center gap-2"
                  >
                    <span className="h-px w-2 bg-primary-light/20"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact - Focused on clear icons and tight alignment */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-primary-light/30 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+917710942995"
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={14}
                  className="text-primary-light/40 group-hover:text-primary-light"
                />
                <span className="text-sm font-medium">+91 77109 42995</span>
              </a>
              <a
                href="mailto:forestlakes54@gmail.com"
                className="flex items-center gap-3 group"
              >
                <Mail
                  size={14}
                  className="text-primary-light/40 group-hover:text-primary-light"
                />
                <span className="text-sm font-medium">
                  forestlakes54@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-primary-light/40 mt-1" />
                <p className="text-sm text-primary-light/70 leading-tight">
                  34/1Q, Ballygunge Circular Road,
                  <br />
                  Heritage House, Kolkata – 700019
                </p>
              </div>
            </div>
          </div>

          {/* 4. CTA Card - Smaller padding for mobile */}
          <div className="lg:col-span-3 bg-primary-light/5 p-6 rounded-2xl border border-primary-light/10">
            <h4 className="text-base font-bold mb-2">Ready to Start?</h4>
            <p className="text-xs text-primary-light/50 mb-5">
              Get a free quote for your next project.
            </p>
            <Link
              to="/free-quote"
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary-light text-secondary-dark text-[10px] font-black uppercase tracking-widest rounded-lg hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Request Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar - Clean and minimal */}
        <div className="border-t border-primary-light/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-primary-light/30">
            © {new Date().getFullYear()} Forest Lakes Pvt. Ltd.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-primary-light/30 hover:text-primary-light transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-primary-light/30 hover:text-primary-light transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
