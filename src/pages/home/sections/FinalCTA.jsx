import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function FinalCTA() {
  return (
    <Section className="py-12 md:py-20">
      <Container>
        <div className="relative overflow-hidden bg-secondary-dark rounded-4xl md:rounded-[3rem] shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/10 skew-x-12 translate-x-1/4" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-dark/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-6 py-12 md:p-16 flex flex-col items-center text-center">
            {/* Small Tag */}
            <span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-primary-dark text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border border-white/10"
            >
              Start Your Journey
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Ready to Build Your <span className="text-primary-dark">Dream Water</span> Project?
            </h2>

            <p className="text-slate-300 text-sm md:text-lg mb-10 max-w-xl leading-relaxed">
              From luxury private retreats to commercial water parks, we bring 
              world-class engineering to your doorstep.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary Shining Button */}
              <Link
                to="/free-quote"
                className="group relative w-full sm:w-auto overflow-hidden bg-primary-dark text-secondary-dark px-10 py-4 rounded-full font-extrabold transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shining Effect */}
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>

              {/* Secondary Ghost Button */}
              <Link
                to="/contact-us"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                <PhoneCall size={18} />
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Tailwind Custom Animation for the Shining Effect */}
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </Section>
  );
}