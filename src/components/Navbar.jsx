import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../constants/navigation"; 
import Container from "./layout/Container";
import logo from "../../public/logo.webp";
import { Link } from "react-router-dom";

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
          ? "bg-white/90 backdrop-blur-xl border-secondary-light/10 shadow-lg"
          : "bg-primary-light border-transparent"
      }`}
    >
      {/* h-full ensures the container fills the 20/24 height for vertical centering */}
      <Container className="flex items-center justify-between h-full">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group cursor-pointer h-full">
          <img
            src={logo}
            alt="Forest Lakes Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />

          <div className="flex flex-col border-l-2 border-secondary-dark/20 pl-4 py-0.5 justify-center">
            <h1 className="text-lg lg:text-xl font-extrabold tracking-[0.15em] text-secondary-dark leading-none uppercase">
              FOREST LAKES
            </h1>

            <p className="text-[8px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-secondary-light/80 mt-1.5 flex items-center gap-1.5">
              <span>Your Passion</span>
              <span className="text-secondary-dark/30 text-[10px]">•</span>
              <span>Our Creation</span>
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          <ul className="flex items-center gap-1 mr-8 h-full">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="relative group flex items-center h-full">
                <a
                  href={link.href}
                  className="px-3 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-secondary-dark/70 hover:text-secondary-dark transition-colors"
                >
                  {link.name}
                </a>
                <span className="absolute mt-6 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary-dark transition-all duration-300 group-hover:w-1/2" />
              </li>
            ))}
          </ul>

          <Link
            to="/free-quote"
            className="group flex items-center gap-2 px-6 py-2.5 bg-secondary-dark text-primary-light text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-secondary-light transition-all active:scale-95 shadow-sm"
          >
            <span>Get A Free Quote</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center h-full">
          <button
            className="p-2 text-secondary-dark hover:bg-white/50 rounded-full transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-secondary-light/10 lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4 bg-white">
          {NAV_LINKS.map((link, index) => (
            <li
              key={index}
              className="font-semibold text-secondary-dark border-b border-secondary-light/5 pb-3 flex justify-between items-center group cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <a href={link.href} className="text-sm uppercase tracking-widest">{link.name}</a>
              <ArrowRight size={16} className="text-primary-dark" />
            </li>
          ))}
          <li
            className="font-bold text-secondary-dark pt-2 flex justify-between items-center group cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <Link to="/free-quote" className="text-sm uppercase tracking-widest">Get A Free Quote</Link>
            <div className="bg-secondary-dark text-white p-2 rounded-full">
                <ArrowRight size={16} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}