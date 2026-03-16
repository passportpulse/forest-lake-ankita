import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function FinalCTA() {
  return (
    <Section className="py-8 md:py-20"> {/* Reduced section padding on mobile */}
      <Container>
        <div className="relative overflow-hidden bg-secondary-dark rounded-3xl md:rounded-[3rem] shadow-2xl px-4">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/10 skew-x-12 translate-x-1/4" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-dark/20 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10 py-10 md:p-16 flex flex-col items-center text-center">
            {/* Tag - Smaller on mobile */}
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-primary-dark text-[10px] md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 border border-white/10">
              Start Your Journey
            </span>

            {/* Heading - Significantly tightened for mobile */}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 max-w-3xl leading-tight px-2">
              Ready to Build Your <span className="text-primary-dark">Dream Water</span> Project?
            </h2>

            {/* Description - Compacted */}
            <p className="text-slate-300 text-xs md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed opacity-90 px-4">
              From luxury private retreats to commercial water parks, we bring 
              world-class engineering to your doorstep.
            </p>

            {/* Buttons Group - Side by side on small mobile if possible, or tight stack */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
              {/* Primary Shining Button */}
              <Link
                to="/free-quote"
                className="group relative w-full sm:w-auto overflow-hidden bg-primary-dark text-secondary-dark px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>

              {/* Secondary Ghost Button */}
              <Link
                to="/contact-us"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold px-8 py-3.5 md:py-4 text-sm md:text-base rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                <PhoneCall size={16} />
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </Section>
  );
}