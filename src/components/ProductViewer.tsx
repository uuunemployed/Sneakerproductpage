import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

export function ProductViewer() {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Simulate multiple angles for 360 view
  const images = [
    'https://images.unsplash.com/photo-1585645712146-721f67b41a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2MzY1MTYzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1513133459438-8847a611ed08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNob2UlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NjM1OTg0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1660743155363-9097a14172a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZSUyMGFuZ2xlfGVufDF8fHx8MTc2MzY1MTYzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1585645712146-721f67b41a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2MzY1MTYzNHww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const sensitivity = 2;
    const newRotation = rotation + deltaX / sensitivity;
    
    setRotation(newRotation);
    setStartX(e.clientX);
    
    // Calculate which image to show based on rotation
    const normalizedRotation = ((newRotation % 360) + 360) % 360;
    const imageIndex = Math.floor((normalizedRotation / 360) * images.length);
    setCurrentAngle(imageIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 2;
    const newRotation = rotation + deltaX / sensitivity;
    
    setRotation(newRotation);
    setStartX(e.touches[0].clientX);
    
    const normalizedRotation = ((newRotation % 360) + 360) % 360;
    const imageIndex = Math.floor((normalizedRotation / 360) * images.length);
    setCurrentAngle(imageIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePrevious = () => {
    setCurrentAngle((prev) => (prev - 1 + images.length) % images.length);
    setRotation((prev) => prev - 90);
  };

  const handleNext = () => {
    setCurrentAngle((prev) => (prev + 1) % images.length);
    setRotation((prev) => prev + 90);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Main Image Viewer */}
      <div
        className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <ImageWithFallback
          src={images[currentAngle]}
          alt="Sneaker view"
          className="w-full h-full object-contain p-8"
          draggable={false}
        />
        
        {/* 360 Indicator */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
          <RotateCw className="w-4 h-4" />
          <span className="text-sm">360° View - Drag to rotate</span>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg"
          aria-label="Previous view"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg"
          aria-label="Next view"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="p-4 flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentAngle(index);
              setRotation(index * 90);
            }}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentAngle === index
                ? 'border-blue-600 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Angle Indicator */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Rotation</span>
          <span>{Math.round(((rotation % 360) + 360) % 360)}°</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-100"
            style={{
              width: `${((((rotation % 360) + 360) % 360) / 360) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
