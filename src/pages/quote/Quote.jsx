import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import CommonHeader from "../../components/Header";

export default function Quote() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <CommonHeader
        title="Get a Free Quote"
        subtitle="Tell us about your project and receive a customized estimate for swimming pools, water parks, fountains, landscapes, resort developments, rain dance systems, kids play areas, and theme parks."
        category="Start Your Project"
        image="https://www.pulliam.com/wp-content/uploads/2025/10/JimiSmithPhotographyEW05-12-950x0-c-f.webp"
      />

      {/* PROCESS */}
      <Section className="bg-slate-50 py-12 lg:py-16">
        <Container>
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-dark mb-2">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm lg:text-base">
              Simple steps to start your project with Forest Lake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 text-center">
            {/* STEP 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-secondary-dark">
                1
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-2">
                Submit Request
              </h3>
              <p className="text-slate-600 text-sm">
                Fill the form with your project details and requirements.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-secondary-dark">
                2
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-2">
                Consultation
              </h3>
              <p className="text-slate-600 text-sm">
                Our experts review your request and contact you for discussion.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-secondary-dark">
                3
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-2">
                Project Estimate
              </h3>
              <p className="text-slate-600 text-sm">
                Receive a detailed quote and planning for your project.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FORM */}
      <Section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-dark mb-2">
                Request Your Free Quote
              </h2>

              <p className="text-slate-500 text-sm">
                Fill in your details and we will get back to you shortly.
              </p>
            </div>

            <form
              action="https://formsubmit.co/forestlakes54@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  required
                  className="border border-slate-300 p-3 rounded-lg w-full text-sm focus:ring-2 focus:ring-primary-dark outline-none"
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  required
                  className="border border-slate-300 p-3 rounded-lg w-full text-sm focus:ring-2 focus:ring-primary-dark outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number"
                  required
                  className="border border-slate-300 p-3 rounded-lg w-full text-sm focus:ring-2 focus:ring-primary-dark outline-none"
                />

                <select
                  name="Service"
                  required
                  className="border border-slate-300 p-3 rounded-lg w-full text-sm focus:ring-2 focus:ring-primary-dark outline-none"
                >
                  <option>Select Service</option>
                  <option>Swimming Pool</option>
                  <option>Water Park</option>
                  <option>Musical Fountain</option>
                  <option>Resort Planning</option>
                  <option>Rain Dance</option>
                  <option>Children's Play Area</option>
                  <option>Theme Park</option>
                  <option>Landscape</option>
                </select>
              </div>

              <textarea
                name="Project Details"
                rows="3"
                placeholder="Tell us about your project..."
                className="border border-slate-300 p-3 rounded-lg w-full text-sm focus:ring-2 focus:ring-primary-dark outline-none"
              />

              <button
                type="submit"
                className="w-full bg-primary-dark hover:bg-secondary-dark text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition text-sm"
              >
                Submit Request
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </Container>
      </Section>

      {/* CONTACT STRIP */}
      <Section className="bg-slate-50 py-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="mx-auto mb-3 text-primary-dark" size={22} />
              <h4 className="font-semibold text-sm mb-1">Call Us</h4>
              <p className="text-slate-600 text-sm">+91 7710941885</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Mail className="mx-auto mb-3 text-primary-dark" size={22} />
              <h4 className="font-semibold text-sm mb-1">Email</h4>
              <p className="text-slate-600 text-sm">forestlakes54@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MapPin className="mx-auto mb-3 text-primary-dark" size={22} />
              <h4 className="font-semibold text-sm mb-1">Office</h4>
              <p className="text-slate-600 text-sm">
                34/1Q, Ballygunge Circular Road, Heritage House, Kolkata
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
