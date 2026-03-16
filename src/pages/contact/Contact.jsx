import { useState } from "react";
import { Mail, MapPin, Send, Phone, ArrowRight } from "lucide-react";

import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import CommonHeader from "../../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const phoneNumbers = [
    { label: "Project Inquiry", num: "+91 9147371755" },
    { label: "Project Inquiry (Alt)", num: "+91 9903534695" },
    { label: "Support", num: "+91 9005777009" },
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

    const whatsappURL = `https://wa.me/+919147371755?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL);
  };

  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <CommonHeader
        title="Contact Us"
        subtitle="Have a project in mind? Get in touch with our team to discuss swimming pools, water parks, fountains, landscapes, resort developments, and more."
        category="Get In Touch"
        image="https://img.freepik.com/free-photo/swimming-pool-resort_74190-2100.jpg?w=740"
      />

      {/* CONTACT SECTION */}
      <Section className="py-10 md:py-16">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 bg-white shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
            {/* LEFT CONTACT INFO */}
            <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-primary-light/20">
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-secondary-dark/40 mb-6 md:mb-10">
                Contact Us
              </h2>

              {/* PHONE NUMBERS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
                {phoneNumbers.map((item, i) => (
                  <div key={i}>
                    <p className="text-[9px] md:text-[10px] uppercase font-bold text-secondary-light/60 mb-1">
                      {item.label}
                    </p>

                    <a
                      href={`tel:${item.num}`}
                      className="flex items-center gap-2 text-secondary-dark font-semibold text-xs md:text-sm hover:text-primary-dark transition"
                    >
                      <Phone size={14} />
                      {item.num}
                    </a>
                  </div>
                ))}
              </div>

              {/* EMAIL */}
              <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
                <Mail className="text-primary-dark mt-1" size={16} />

                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-secondary-light/60 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:forestlakes54@gmail.com"
                    className="text-xs md:text-sm font-semibold text-secondary-dark hover:text-primary-dark"
                  >
                    forestlakes54@gmail.com
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-3 md:gap-4">
                <MapPin className="text-primary-dark mt-1" size={16} />

                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-secondary-light/60 mb-1">
                    Registered Office
                  </p>

                  <p className="text-xs md:text-sm font-semibold text-secondary-dark leading-relaxed">
                    34/1Q, Ballygunge Circular Road <br />
                    Heritage House <br />
                    Kolkata – 700069
                  </p>
                </div>
              </div>

              {/* WHATSAPP CTA */}
              <div className="mt-6 md:mt-12 p-4 md:p-6 bg-secondary-dark rounded-lg md:rounded-xl text-primary-light">
                <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 opacity-70">
                  Need quick help?
                </p>

                <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                  Chat with us on WhatsApp
                </h3>

                <a
                  href="https://wa.me/+919903534695"
                  className="inline-flex items-center gap-2 bg-primary-dark px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-light hover:text-secondary-dark transition"
                >
                  Start Chat
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-7 flex flex-col h-full">
              {/* MAP */}
              <div className="flex-1 min-h-50 md:min-h-65">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29472.12877248966!2d88.40159602566067!3d22.57850128717209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKB%2021%2C%20Salt%20Lake%20Bypass%2C%20BN%20Block%2C%20Sector%203%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700058!5e0!3m2!1sen!2sin!4v1773154797657!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* WHATSAPP FORM */}
              <div className="p-4 md:p-6 bg-slate-50">
                <h3 className="text-base md:text-lg font-bold text-secondary-dark mb-3 md:mb-4">
                  WhatsApp Inquiry
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="grid md:grid-cols-2 gap-2 md:gap-3"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                    className="p-2 rounded-lg border border-slate-200 text-xs md:text-sm focus:border-primary-dark focus:outline-none"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                    className="p-2 rounded-lg border border-slate-200 text-xs md:text-sm focus:border-primary-dark focus:outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                    className="md:col-span-2 p-2 rounded-lg border border-slate-200 text-xs md:text-sm focus:border-primary-dark focus:outline-none"
                  />

                  <textarea
                    name="query"
                    rows="2"
                    placeholder="Your Query"
                    required
                    onChange={handleChange}
                    className="md:col-span-2 p-2 rounded-lg border border-slate-200 text-xs md:text-sm resize-none focus:border-primary-dark focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="bg-secondary-dark text-primary-light py-2 px-4 md:px-6 rounded-lg font-semibold text-xs md:text-sm flex items-center gap-2 hover:bg-primary-dark transition w-fit"
                  >
                    Send on WhatsApp
                    <Send size={14} />
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
