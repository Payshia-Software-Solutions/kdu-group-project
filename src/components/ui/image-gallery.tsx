
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type GalleryImage = {
  image: string;
  alt: string;
  hint: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={400}
              className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={item.hint}
            />
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-screen max-h-screen w-full h-full flex items-center justify-center">
          <DialogTitle className="sr-only">Image Gallery</DialogTitle>
          <div className="relative w-full h-full" onClick={closeLightbox}>
              <div className="absolute inset-0 bg-black/80 z-40" />

              <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 hover:text-white"
                  onClick={closeLightbox}
              >
                  <X className="h-8 w-8" />
                  <span className="sr-only">Close</span>
              </Button>

              <div className="absolute z-[60] top-1/2 left-4 -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={goToPrevious}
                      className="rounded-full h-12 w-12 text-white hover:bg-white/20 hover:text-white"
                  >
                      <ChevronLeft className="h-8 w-8" />
                      <span className="sr-only">Previous Image</span>
                  </Button>
              </div>
                <div className="absolute z-[60] top-1/2 right-4 -translate-y-1/2">
                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={goToNext}
                      className="rounded-full h-12 w-12 text-white hover:bg-white/20 hover:text-white"
                  >
                      <ChevronRight className="h-8 w-8" />
                      <span className="sr-only">Next Image</span>
                  </Button>
              </div>
              

              <div className="relative z-50 w-full h-full flex items-center justify-center p-16" onClick={(e) => e.stopPropagation()}>
                  <Image
                      src={images[currentIndex].image}
                      alt={images[currentIndex].alt}
                      width={1600}
                      height={900}
                      className="max-w-full max-h-full object-contain rounded-lg"
                      data-ai-hint={images[currentIndex].hint}
                  />
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
