'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[] | string | null;
  cover: string | null;
  title: string;
  isUk: boolean;
}

export function ProjectGallery({ images, cover, title, isUk }: ProjectGalleryProps) {
  const [index, setIndex] = useState(-1);

  let gallery: string[] = [];
  if (images) {
    try {
      gallery = typeof images === 'string' ? JSON.parse(images) : images;
    } catch (e) {
      gallery = cover ? [cover] : [];
    }
  } else if (cover) {
    gallery = [cover];
  }

  if (gallery.length === 0) {
    return (
      <div className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-[2rem] overflow-hidden border border-ink/5 shadow-glass bg-surface/50">
        <div className="w-full h-full flex items-center justify-center text-ink/20 font-bold text-3xl">
          {isUk ? 'Немає обкладинки' : 'Нет обложки'}
        </div>
      </div>
    );
  }

  if (gallery.length === 1) {
    return (
      <>
        <div 
          className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-[2rem] overflow-hidden border border-ink/5 shadow-glass bg-surface/50 cursor-zoom-in group"
          onClick={() => setIndex(0)}
        >
          <Image fill priority unoptimized src={gallery[0]!} alt={title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 shadow-2xl">
              <Expand className="w-6 h-6" />
            </div>
          </div>
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={[{ src: gallery[0]! }]}
          plugins={[Zoom]}
          carousel={{ finite: true }}
          styles={{ container: { backgroundColor: 'rgba(0,0,0,0.9)' } }}
        />
      </>
    );
  }

  return (
    <>
      <div className="w-full relative rounded-[2rem] overflow-hidden border border-ink/5 shadow-glass bg-surface/50 group">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation={{
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          className="w-full aspect-[16/9] md:aspect-[21/9] cursor-zoom-in"
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
        >
          {gallery.map((src, idx) => (
            <SwiperSlide key={idx} onClick={() => setIndex(idx)}>
              <div className="relative w-full h-full group/slide">
                <Image fill priority={idx === 0} unoptimized src={src} alt={`${title} - ${idx + 1}`} className="object-cover transition-transform duration-700 group-hover/slide:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover/slide:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slide:opacity-100 transition-opacity translate-y-4 group-hover/slide:translate-y-0 shadow-2xl pointer-events-none">
                    <Expand className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-btn-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-ink disabled:opacity-0 disabled:hidden">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="swiper-btn-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-ink disabled:opacity-0 disabled:hidden">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: rgba(255,255,255,0.5); opacity: 1; }
        .swiper-pagination-bullet-active { background: white; width: 24px; border-radius: 8px; }
      `}} />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={gallery.map(src => ({ src }))}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,0.9)' } }}
      />
    </>
  );
}
