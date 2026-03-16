import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function SpecializedPools() {
  const specializedServices = [
    {
      title: "Rooftop Swimming Pools",
      desc: "Engineering high-end, leak-proof aquatic spaces for modern skyscrapers and private villas.",
      image:
        "https://www.diamondspas.com/wp-content/uploads/2022/10/JimiSmithPhotography12.jpg",
      tag: "Premium Engineering",
    },
    {
      title: "FRP Pools & Jacuzzi",
      desc: "Advanced Fiber Reinforced Plastic solutions offering rapid installation and low maintenance.",
      image:
        "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/blue-frp-jacuzzi-swimming-pool-for-residential20230825090333.jpeg",
      tag: "Rapid Installation",
    },
  ];

  return (
    <Section className="py-10 md:py-24 bg-slate-50 overflow-hidden">
      <Container>
        {/* Compact Header for Mobile */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-20 px-4">
          <span className="text-primary-dark font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
            What We Specialize In
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-3 md:mb-4">
            Specialized Aquatic Solutions
          </h2>
          <div className="w-12 md:w-16 h-1 bg-primary-dark rounded-full mb-4 md:mb-6" />
          <p className="text-slate-600 text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            From high-altitude structural pools to cutting-edge prefabricated
            FRP systems, we deliver expertise in niche aquatic construction.
          </p>
        </div>

        {/* Compact Content Layout */}
        <div className="space-y-10 md:space-y-20">
          {specializedServices.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-5 md:gap-16 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Compact Image Container */}
              <div className="w-full md:w-1/2 group px-2 md:px-0">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-video md:aspect-video shadow-sm border border-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary-dark/5" />
                </div>
              </div>

              {/* Condensed Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-2">
                <span className="text-[9px] md:text-xs font-bold text-primary-dark uppercase tracking-[0.2em] mb-1 md:mb-2 block">
                  {service.tag}
                </span>
                <h3 className="text-lg md:text-3xl font-bold text-secondary-dark mb-2 md:mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[11px] md:text-base leading-snug md:leading-relaxed mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
                  {service.desc}
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="px-5 py-1.5 md:px-6 md:py-2 bg-secondary-dark text-white text-[9px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all active:scale-95 duration-300 shadow-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
