import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../constants/navigation"; // Import the separated menu
import Container from "./layout/Container";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 md:h-24 transition-all duration-500 border-b z-100 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl py-3 border-secondary-light/10 shadow-lg"
          : "bg-primary-light py-5 border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between ">
        {/* Logo Section */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <img
            src={logo}
            alt="Forest Lakes Logo"
            className="h-12 w-auto object-contain"
          />

          <div className="flex flex-col border-l-2 border-secondary-dark/20 pl-4 py-1">
            <h1 className="text-lg lg:text-xl font-extrabold tracking-[0.15em] text-secondary-dark leading-none uppercase">
              FOREST LAKES
            </h1>

            <p className="text-[8px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-secondary-light/80 mt-1.5 flex items-center gap-1.5">
              <span>Your Passion</span>
              <span className="text-secondary-dark/30 text-[10px]">•</span>
              <span>Our Creation</span>
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center gap-1 mr-8">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.href}
                  className="px-5 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-secondary-dark/70 hover:text-secondary-dark transition-colors"
                >
                  {link.name}
                </a>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary-dark transition-all duration-300 group-hover:w-1/2" />
              </li>
            ))}
          </ul>

          <button
            href="/free-quote"
            className="group flex items-center gap-2 px-6 py-2.5 bg-secondary-dark text-primary-light text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-secondary-light transition-all active:scale-95"
          >
            <a href="/free-quote">Get A Free Quote</a>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-secondary-dark hover:bg-white/50 rounded-full transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-secondary-light/10 lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col p-3 gap-3">
          {NAV_LINKS.map((link, index) => (
            <li
              key={index}
              className="font-semibold text-secondary-dark border-b border-secondary-light/5 pb-4 flex justify-between items-center group cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <a href={link.href}>{link.name}</a>
              <ArrowRight size={18} className="text-primary-dark" />
            </li>
          ))}
          <li
            className="font-semibold text-secondary-dark border-b border-secondary-light/5 pb-4 flex justify-between items-center group cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <a href="/free-quote">Get A Free Qoute</a>
            <ArrowRight size={18} className="text-primary-dark" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
