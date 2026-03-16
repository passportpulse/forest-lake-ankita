import { useState, useEffect } from "react";
import { Mail, MapPin, Send, Phone, ArrowRight, Loader2 } from "lucide-react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import CommonHeader from "../../components/Header";
import header5 from "../../../public/header5.webp";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", query: "" });
  const [loadMap, setLoadMap] = useState(false);

  // OPTIMIZATION: Delay map loading until after initial render
  useEffect(() => {
    const timer = setTimeout(() => setLoadMap(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumbers = [
    { label: "Project Inquiry", num: "+91 9147371755" },
    { label: "Project Inquiry (Alt)", num: "+91 9903534695" },
    { label: "Support", num: "+91 9005777009" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Query:*\n${formData.query}`;
    const whatsappURL = `https://wa.me/+919147371755?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL);
  };

  return (
    <div className="bg-slate-50">
      <CommonHeader
        title="Contact Us"
        subtitle="Have a project in mind? Get in touch with our team to discuss swimming pools, water parks, fountains, and resort developments."
        category="Get In Touch"
        image={header5}
      />

      <Section className="py-10 md:py-16">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 bg-white shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
            
            {/* LEFT CONTACT INFO */}
            <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-primary-light/10">
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-secondary-dark/40 mb-6 md:mb-10">
                Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
                {phoneNumbers.map((item, i) => (
                  <div key={i}>
                    <p className="text-[9px] md:text-[10px] uppercase font-bold text-secondary-light/60 mb-1">{item.label}</p>
                    <a href={`tel:${item.num}`} className="flex items-center gap-2 text-secondary-dark font-semibold text-xs md:text-sm hover:text-primary-dark transition">
                      <Phone size={14} className="text-primary-dark" /> {item.num}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
                <Mail className="text-primary-dark mt-1" size={16} />
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-secondary-light/60 mb-1">Email</p>
                  <a href="mailto:forestlakes54@gmail.com" className="text-xs md:text-sm font-semibold text-secondary-dark hover:text-primary-dark transition">
                    forestlakes54@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <MapPin className="text-primary-dark mt-1" size={16} />
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-secondary-light/60 mb-1">Registered Office</p>
                  <p className="text-xs md:text-sm font-semibold text-secondary-dark leading-relaxed">
                    34/1Q, Ballygunge Circular Road <br /> Heritage House, Kolkata – 700069
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-12 p-4 md:p-6 bg-secondary-dark rounded-xl text-primary-light">
                <h3 className="text-base md:text-lg font-bold mb-3">Quick Support</h3>
                <a href="https://wa.me/+919903534695" className="inline-flex items-center gap-2 bg-primary-dark px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-light hover:text-secondary-dark transition shadow-lg">
                  Start WhatsApp Chat <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: OPTIMIZED MAP + FORM */}
            <div className="lg:col-span-7 flex flex-col h-full bg-slate-50">
              
              {/* MAP SECTION with Placeholder */}
              <div className="flex-1 min-h-75 md:min-h-100 relative bg-slate-200 overflow-hidden">
                {!loadMap ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <Loader2 className="animate-spin mb-2" size={24} />
                    <p className="text-[10px] uppercase tracking-widest font-bold">Loading Interactive Map...</p>
                  </div>
                ) : (
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.223846617056!2d88.35821037503837!3d22.5332675795191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276e033333333%3A0x3333333333333333!2sBallygunge%20Circular%20Rd%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1700000000000"
                    className="w-full h-full transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>

              {/* WHATSAPP FORM */}
              <div className="p-4 md:p-8">
                <h3 className="text-base md:text-lg font-bold text-secondary-dark mb-4">Direct WhatsApp Inquiry</h3>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Full Name" required onChange={handleChange}
                    className="p-3 rounded-lg border border-slate-200 text-xs md:text-sm focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition" />
                  
                  <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange}
                    className="p-3 rounded-lg border border-slate-200 text-xs md:text-sm focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition" />
                  
                  <input type="email" name="email" placeholder="Email Address" required onChange={handleChange}
                    className="md:col-span-2 p-3 rounded-lg border border-slate-200 text-xs md:text-sm focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition" />
                  
                  <textarea name="query" rows="2" placeholder="Tell us about your project..." required onChange={handleChange}
                    className="md:col-span-2 p-3 rounded-lg border border-slate-200 text-xs md:text-sm resize-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition" />

                  <button type="submit" className="bg-secondary-dark text-primary-light py-3 px-6 rounded-lg font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-primary-dark hover:scale-[1.02] active:scale-95 transition w-full md:w-fit shadow-md">
                    Send via WhatsApp <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}