import { useState } from "react";
import { Mail, MapPin, Send, Phone, ArrowRight } from "lucide-react";

import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const phoneNumbers = [
    { label: "Project Inquiry", num: "+91 7710942995" },
    { label: "Project Inquiry (Alt)", num: "+91 7710941885" },
    { label: "Support", num: "+91 9147371755" },
    { label: "Landline", num: "034 23005000" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Inquiry from Website

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Query:
${formData.query}
`;

    const whatsappURL = `https://wa.me/917710941885?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL);
  };

  return (
    <div className="bg-slate-50">
      {/* HERO SECTION */}
      <Section className="bg-secondary-dark relative overflow-hidden">
        <Container className="pb-6">
          <p className="text-[11px] tracking-[0.4em] text-primary-light/60 uppercase font-bold mb-6">
            Get In Touch
          </p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-light leading-tight">
            Let's Build <br />
            <span className="text-primary-light/40">
              Something Great Together
            </span>
          </h1>
        </Container>

        <div className="absolute right-0 top-0 w-[40%] h-full bg-primary-light/5 skew-x-12 translate-x-32 pointer-events-none" />
      </Section>

      {/* CONTACT CARD SECTION */}
      <Container className="-mt-10 pb-24 relative z-10">
        <div className="grid lg:grid-cols-12 bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* LEFT CONTACT INFO */}
          <div className="lg:col-span-5 p-8 md:p-10 border-r border-slate-100 bg-white">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-dark/40 mb-10">
              Contact Us
            </h2>

            {/* PHONE NUMBERS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {phoneNumbers.map((item, i) => (
                <div key={i}>
                  <p className="text-[10px] uppercase font-bold text-secondary-light/60 mb-1">
                    {item.label}
                  </p>

                  <a
                    href={`tel:${item.num}`}
                    className="flex items-center gap-2 text-secondary-dark font-semibold text-sm hover:text-primary-dark transition"
                  >
                    <Phone size={15} />
                    {item.num}
                  </a>
                </div>
              ))}
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 mb-8">
              <Mail className="text-primary-dark mt-1" size={18} />

              <div>
                <p className="text-[10px] uppercase font-bold text-secondary-light/60 mb-1">
                  Email
                </p>

                <a
                  href="mailto:forestlakes54@gmail.com"
                  className="text-sm font-semibold text-secondary-dark hover:text-primary-dark"
                >
                  forestlakes54@gmail.com
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex gap-4">
              <MapPin className="text-primary-dark mt-1" size={18} />

              <div>
                <p className="text-[10px] uppercase font-bold text-secondary-light/60 mb-1">
                  Registered Office
                </p>

                <p className="text-sm font-semibold text-secondary-dark leading-relaxed">
                  34/1Q, Ballygunge Circular Road <br />
                  Heritage House <br />
                  Kolkata – 700019
                </p>
              </div>
            </div>
            {/* WHATSAPP CTA */}
            <div className="mt-12 p-6 bg-secondary-dark rounded-xl text-primary-light">
              <p className="text-xs uppercase tracking-widest mb-2 opacity-70">
                Need quick help?
              </p>

              <h3 className="text-lg font-bold mb-4">
                Chat with us on WhatsApp
              </h3>

              <a
                href="https://wa.me/917710942995"
                className="inline-flex items-center gap-2 bg-primary-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light hover:text-secondary-dark transition"
              >
                Start Chat
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* MAP */}
            <div className="flex-1 min-h-65">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29472.12877248966!2d88.40159602566067!3d22.57850128717209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKB%2021%2C%20Salt%20Lake%20Bypass%2C%20BN%20Block%2C%20Sector%203%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700058!5e0!3m2!1sen!2sin!4v1773154797657!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            {/* WHATSAPP FORM */}
            <div className="flex-1 p-6 bg-slate-50 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-secondary-dark mb-4">
                WhatsApp Inquiry
              </h3>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="p-2.5 rounded-lg border border-slate-200 text-sm focus:border-primary-dark focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="p-2.5 rounded-lg border border-slate-200 text-sm focus:border-primary-dark focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="md:col-span-2 p-2.5 rounded-lg border border-slate-200 text-sm focus:border-primary-dark focus:outline-none"
                />
                <textarea
                  name="query"
                  rows="2"
                  placeholder="Your Query"
                  required
                  onChange={handleChange}
                  className="md:col-span-2 p-2.5 rounded-lg border border-slate-200 text-sm resize-none focus:border-primary-dark focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-secondary-dark text-primary-light py-2 px-6 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-primary-dark transition w-fit"
                >
                  Send on WhatsApp
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
