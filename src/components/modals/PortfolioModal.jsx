import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioModal({
  items,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  if (currentIndex === null) return null;

  const item = items[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-999 flex items-center justify-center p-4">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black p-2 rounded-full transition cursor-pointer"
      >
        <X size={28} />
      </button>

      {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-6 text-white bg-black/40 hover:bg-black p-2 rounded-full cursor-pointer"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Content */}
      <div className="max-w-6xl w-full flex justify-center">
        {item.type === "image" ? (
          <img
            src={item.src}
            alt="portfolio"
            className="max-h-[85vh] rounded-lg"
          />
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[85vh] rounded-lg"
          />
        )}
      </div>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-6 text-white bg-black/40 hover:bg-black p-2 rounded-full cursor-pointer"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
