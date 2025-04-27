/* eslint-disable @next/next/no-img-element */
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect, useRef } from "react";
import { IResponseChat } from "@/interface/chats";

const RenderImageUrl: React.FC<IResponseChat> = ({ value }) => {
  const imageUrls = typeof value === 'string' ? JSON.parse(value) : value;
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const perView = imageUrls && imageUrls.length > 6 ? 6 : imageUrls && imageUrls.length > 3 ? 4 : 3;

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView,
      spacing: 15,
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (!slider) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        if (slider.current) {
          slider.current.next();
        }
      }, 3000);
    };

    autoplay();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : imageUrls.length - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(imageUrls[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex < imageUrls.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setSelectedImage(imageUrls[newIndex]);
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, currentImageIndex]);

  const handleImageClick = (url: string, index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(url);
  };

  if (!Array.isArray(imageUrls) || !imageUrls.length) {
    return null;
  }

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto pb-6 group">
        <div
          ref={sliderRef}
          className="keen-slider overflow-hidden rounded-lg"
          onMouseEnter={() => timer.current && clearInterval(timer.current)}
          onMouseLeave={() => {
            timer.current = setInterval(() => {
              if (slider?.current) {
                slider.current.next();
              }
            }, 3000);
          }}
        >
          {imageUrls.map((url: string, index: number) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center"
            >
              <div className="w-full aspect-[17/7] overflow-hidden rounded-md shadow-md">
                <img
                  src={url}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                  onClick={() => handleImageClick(url, index)}
                />
              </div>
            </div>
          ))}
        </div>

        {loaded && slider && (
          <>
            <button
              onClick={() => slider.current?.prev()}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition hidden group-hover:block"
            >
              ‹
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition hidden group-hover:block"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RenderImageUrl;
