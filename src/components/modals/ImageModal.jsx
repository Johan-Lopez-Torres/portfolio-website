import ModalPortal from '@/components/modals/ModalPortal';
import { useEffect, useRef, useState } from 'react';

export default function ImageModal({ src, alt, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState('center center');
  const imageRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      resetZoom();
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (!imageRef.current) return;

    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.min(Math.max(1, scale + delta), 5);
    setScale(newScale);

    // Calcular punto del cursor relativo a la imagen
    const rect = imageRef.current.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((e.clientY - rect.top) / rect.height) * 100;

    // Setear el punto de origen de zoom como el cursor
    setOrigin(`${offsetX}% ${offsetY}%`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      resetZoom();
    }
  };

  const resetZoom = () => {
    setScale(1);
    setOrigin('center center');
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105 ${className}`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <ModalPortal>
          <div
            className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
            onClick={handleOverlayClick}
            onWheel={handleWheel}
            style={{
              backdropFilter: 'blur(3px)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => {
                setIsOpen(false);
                resetZoom();
              }}
              className="absolute top-5 right-5 z-[10000] text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
              aria-label="Cerrar"
            >
              &times;
            </button>

            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl transition-transform duration-200"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: origin,
              }}
            />
          </div>
        </ModalPortal>
      )}
    </>
  );
}
