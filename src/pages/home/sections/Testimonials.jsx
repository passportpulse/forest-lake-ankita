import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sanjay Chatterjee",
      role: "Resort Owner",
      image:
        "https://thumbs.dreamstime.com/b/portrait-young-handsome-indian-bengali-man-standing-front-victoria-memorial-wearing-blue-shirt-indian-lifestyle-186343540.jpg",
      text: "Forest Lakes transformed our resort area with a stunning infinity pool. Their attention to detail in the filtration system was truly world-class.",
      location: "Kolkata",
      rating: 3.8,
    },
    {
      name: "Priya Sharma",
      role: "Home Owner",
      image:
        "https://img.freepik.com/free-photo/indian-hindu-girl-traditional-violet-saree-sitting-cafe-table_627829-1989.jpg?semt=ais_rp_progressive&w=740&q=80",
      text: "The team was professional and maintained a clean workspace throughout. Our backyard pool looks exactly like the 3D design they showed us.",
      location: "Durgapur",
      rating: 4,
    },
    {
      name: "Amitabh Roy",
      role: "Real Estate Developer",
      image:
        "https://www.shutterstock.com/image-photo/outdoor-photo-bangladeshi-man-smiling-600nw-2574912025.jpg",
      text: "A reliable partner for large scale water projects. They handled the entire commercial park installation with complete technical expertise.",
      location: "West Bengal",
      rating: 4.1,
    },
    {
      name: "Vikram Malhotra",
      role: "Hotel Manager",
      image:
        "https://www.shutterstock.com/image-photo/young-man-wearing-green-shirt-600nw-2158049973.jpg",
      text: "Excellent service from planning to execution. The maintenance support they provide is prompt and keeps our facility running smoothly.",
      location: "Asansol",
      rating: 5,
    },
  ];

  return (
    <Section className="py-12 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 px-4">
          <span className="text-primary-dark font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            Client Stories
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-primary-dark rounded-full" />
        </div>

        <div className="relative px-2 md:px-12">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 p-4!" // Added padding to prevent shadow clipping
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="h-full">
                {/* h-full on the card and flex-col ensures bottom alignment */}
                <div className="bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 h-95 md:h-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary-dark/5">
                  <Quote
                    className="text-primary-dark/20 mb-4 shrink-0"
                    size={32}
                  />

                  {/* Dynamic Star Rating */}
                  <div className="flex gap-1 mb-4 shrink-0">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        className={
                          index < review.rating
                            ? "fill-[#FBDB04] text-[#FBDB04]" // Filled color
                            : "fill-slate-200 text-slate-200" // Empty color
                        }
                      />
                    ))}
                  </div>

                  {/* grow ensures this takes up available space, pushing the bottom div down */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 overflow-hidden line-clamp-4 grow">
                    "{review.text}"
                  </p>

                  {/* Bottom section now locked to the bottom of the card */}
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-6 shrink-0">
                    <div className="w-12 h-12 shrink-0">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white shadow-sm aspect-square"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm md:text-base font-bold text-secondary-dark truncate">
                        {review.name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider truncate">
                        {review.role} • {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="prev-btn absolute top-1/2 -left-2 md:-left-6 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary-dark hover:text-primary-dark transition-colors border border-slate-100 active:scale-90">
            <ChevronLeft size={24} />
          </button>
          <button className="next-btn absolute top-1/2 -right-2 md:-right-6 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary-dark hover:text-primary-dark transition-colors border border-slate-100 active:scale-90">
            <ChevronRight size={24} />
          </button>

          <div className="custom-pagination flex justify-center gap-2 mt-8" />
        </div>
      </Container>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #fbdb04;
        }
        /* Ensure all swiper slides are equal height */
        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </Section>
  );
}
