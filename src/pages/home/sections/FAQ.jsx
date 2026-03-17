import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a swimming pool?",
      answer: "Typically, a residential project takes 8-12 weeks, while larger commercial water parks can take 6-12 months depending on complexity and scale.",
    },
    {
      question: "Do you provide maintenance services after construction?",
      answer: "Yes, we offer comprehensive AMC (Annual Maintenance Contracts) to ensure your pool remains crystal clear and all equipment stays in top condition.",
    },
    {
      question: "What areas do you serve in India?",
      answer: "We are headquartered in West Bengal and serve clients across India, with major projects in Kolkata, Durgapur, and neighboring regions.",
    },
    {
      question: "Do you handle the necessary government permits?",
      answer: "Absolutely. We guide you through the documentation and technical compliance required for local municipal approvals and safety certifications.",
    },
  ];

  return (
    <Section className="py-12 md:py-24 bg-slate-50">
      <Container>
        {/* Centered Header - Matches Process Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 px-4">
          <span className="text-primary-dark font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-12 md:w-16 h-1 bg-primary-dark rounded-full mb-4 md:mb-6" />
        </div>

        {/* FAQ Accordion - Compact Design */}
        <div className="max-w-3xl mx-auto space-y-3 px-2">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className=" cursor-pointer w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-sm md:text-base font-bold text-secondary-dark pr-4">
                  {faq.question}
                </span>
                <div className={`shrink-0 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                  {activeIndex === i ? (
                    <Minus size={20} className="text-primary-dark" />
                  ) : (
                    <Plus size={20} className="text-slate-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}