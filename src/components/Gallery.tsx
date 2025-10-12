import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  category: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/images/gallery/img1.jpg', category: 'Campus Vibes', alt: 'Campus view' },
  { type: 'image', src: '/images/gallery/img2.jpg', category: 'Event Highlights', alt: 'Tech event' },
  { type: 'image', src: '/images/gallery/img3.jpg', category: 'Team Moments', alt: 'Team collaboration' },
  { type: 'image', src: '/images/gallery/img4.jpg', category: 'Event Highlights', alt: 'Hackathon' },
  { type: 'image', src: '/images/gallery/img5.jpg', category: 'Campus Vibes', alt: 'Technology lab' },
  { type: 'image', src: '/images/gallery/img6.jpg', category: 'Team Moments', alt: 'Student team' },
  { type: 'image', src: '/images/gallery/img7.jpg', category: 'Event Highlights', alt: 'Competition' },
  { type: 'image', src: '/images/gallery/img8.jpg', category: 'Campus Vibes', alt: 'Students learning' },
  { type: 'image', src: '/images/gallery/img9.jpg', category: 'Team Moments', alt: 'Group discussion' },
  { type: 'image', src: '/images/gallery/img10.jpg', category: 'Event Highlights', alt: 'Presentation' },
  { type: 'image', src: '/images/gallery/img11.jpg', category: 'Campus Vibes', alt: 'Innovation hub' },
  { type: 'image', src: '/images/gallery/img12.jpg', category: 'Team Moments', alt: 'Teamwork' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus Vibes', 'Event Highlights', 'Team Moments'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-[#1A1A1A] to-[#0A2540]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient">
          Gallery
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Relive the Genesis – Photos & Videos from Martinovation's Epic Moments
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B2CBF] text-white shadow-lg'
                  : 'bg-[#1A1A1A] text-gray-400 border border-[#00D4FF]/30 hover:border-[#00D4FF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{item.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00D4FF] transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#00D4FF] transition-colors duration-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-[#00D4FF] transition-colors duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-[#00D4FF] transition-colors duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">{filteredItems[lightboxIndex].category}</p>
              <p className="text-gray-400 text-sm mt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
