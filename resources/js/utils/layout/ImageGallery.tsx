import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const sertifikatData = [
  { id: 1, src: '/image/certificates/Dkn_depan.webp', title: 'BackEnd certificate 1', description: 'Certificate BackEnd certificate pertama', category: 'BackEnd certificate' },
  { id: 2, src: '/image/certificates/Dkn_belakang.webp', title: 'BackEnd certificate 2', description: 'Certificate BackEnd certificate kedua', category: 'BackEnd certificate' },
  { id: 3, src: '/image/certificates/PtWan_depan.webp', title: 'Certificate UI 1', description: 'Certificate UI pertama', category: 'UI' },
  { id: 4, src: '/image/certificates/PtWan_belakang.webp', title: 'Certificate UI 2', description: 'Certificate UI kedua', category: 'UI' },
];

interface Sertifikat {
  src: string;
  title: string;
  description: string;
}

interface Image {
  src: string;
  title: string;
}

const SertifikatCard = ({ sertifikat, onClick }: { sertifikat: Sertifikat; onClick: () => void }) => (
  <div className=" bg-indigo-950 rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" onClick={onClick}>
    <img src={sertifikat.src} alt={sertifikat.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-white">{sertifikat.title}</h3>
      <p className=" text-gray-400">{sertifikat.description}</p>
    </div>
  </div>
);

const Carousel = ({ images, currentIndex, onClose, onPrev, onNext }: { images: Image[]; currentIndex: number; onClose: () => void; onPrev: () => void; onNext: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-300">
      <X size={24} />
    </button>
    <button onClick={onPrev} className="absolute left-4 text-white hover:text-gray-300 transition duration-300">
      <ChevronLeft size={36} />
    </button>
    <button onClick={onNext} className="absolute right-4 text-white hover:text-gray-300 transition duration-300">
      <ChevronRight size={36} />
    </button>
    <img src={images[currentIndex].src} alt={images[currentIndex].title} className="max-w-full max-h-full" />
  </div>
);

const SertifikatGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
    const openCarousel = (index: number) => setSelectedIndex(index);
    const closeCarousel = () => setSelectedIndex(null);
    const prevImage = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : sertifikatData.length - 1));
    const nextImage = () => setSelectedIndex((prev) => (prev !== null && prev < sertifikatData.length - 1 ? prev + 1 : 0));
  
    const categories = ['BackEnd certificate', 'UI'];

  return (
    <div className="container mx-auto px-4 py-8">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category} Certificate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sertifikatData
              .filter((sertifikat) => sertifikat.category === category)
              .map((sertifikat, index) => (
                <SertifikatCard
                  key={sertifikat.id}
                  sertifikat={sertifikat}
                  onClick={() => openCarousel(sertifikatData.findIndex((s) => s.id === sertifikat.id))}
                />
              ))}
          </div>
        </div>
      ))}
      {selectedIndex !== null && (
        <Carousel
          images={sertifikatData}
          currentIndex={selectedIndex}
          onClose={closeCarousel}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default SertifikatGallery;