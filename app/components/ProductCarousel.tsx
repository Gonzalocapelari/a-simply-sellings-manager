'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Product from './productComponent';
import { type productProps } from './storingManager';

type IconProps = React.SVGProps<SVGSVGElement>;

const ChevronLeft = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const PackageOpen = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
  </svg>
);

const ShoppingBag = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export interface ProductCarouselProps {
  products: productProps[];
  onRemove: (id: number) => void;
  className?: string;
}

export default function ProductCarousel({
  products,
  onRemove,
  className = '',
}: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update scroll boundaries & active index
  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el || products.length === 0) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      setActiveIndex(0);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    // Disabled at list boundaries (with small tolerance for subpixel rounding)
    const atStart = scrollLeft <= 4;
    const atEnd = scrollLeft >= maxScroll - 4 || maxScroll <= 0;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);

    // Estimate active card based on scroll offset
    const cardWidth = 280 + 20; // card width + gap
    const calculatedIndex = Math.round(scrollLeft / cardWidth);
    const clampedIndex = Math.min(Math.max(calculatedIndex, 0), products.length - 1);
    setActiveIndex(clampedIndex);
  }, [products.length]);

  // Scroll by card offset
  const scrollByAmount = useCallback((direction: 'prev' | 'next') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollAmount = 300; // approximates one card width + gap
    const delta = direction === 'next' ? scrollAmount : -scrollAmount;

    el.scrollBy({
      left: delta,
      behavior: 'smooth',
    });
  }, []);

  // Direct navigation to specific card index
  const scrollToIndex = useCallback((index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = 280 + 20;
    el.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  }, []);

  // Sync scroll state when products list changes or window resizes
  useEffect(() => {
    updateScrollState();

    const handleResize = () => {
      updateScrollState();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [products, updateScrollState]);

  // Adjust active position when items are removed
  useEffect(() => {
    if (products.length > 0 && activeIndex >= products.length) {
      scrollToIndex(products.length - 1);
    }
  }, [products.length, activeIndex, scrollToIndex]);

  // Keyboard navigation when carousel is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && canScrollLeft) {
      e.preventDefault();
      scrollByAmount('prev');
    } else if (e.key === 'ArrowRight' && canScrollRight) {
      e.preventDefault();
      scrollByAmount('next');
    }
  };

  // Clean empty state when all products are deleted or empty
  if (products.length === 0) {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center p-12 text-center bg-zinc-900/60 border border-zinc-700/60 rounded-2xl text-zinc-300 shadow-xl backdrop-blur-sm ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-zinc-400 border border-zinc-700">
          <PackageOpen className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
          No Products In Inventory
        </h3>
        <p className="text-zinc-400 text-sm max-w-md leading-relaxed mb-6">
          Your product list is currently empty. Add your items using the manager form on the left to start building your catalog.
        </p>
        <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full">
          <ShoppingBag className="w-3.5 h-3.5" />
          Ready for new entries
        </div>
      </div>
    );
  }

  return (
    <div
      className={`carousel-container flex flex-col w-full relative ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Product carousel"
    >
      {/* Carousel Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 px-1">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-400" />
            Product Inventory
          </h3>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Action Controls & Navigation Buttons */}
        <div className="flex items-center gap-3">
          <div className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
            {activeIndex + 1} of {products.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount('prev')}
              disabled={!canScrollLeft}
              aria-label="Previous product"
              className={`carousel-btn p-2 rounded-lg border transition-all duration-200 flex items-center justify-center ${
                canScrollLeft
                  ? 'bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700 hover:border-zinc-500 cursor-pointer active:scale-95 shadow-sm'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-600 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollByAmount('next')}
              disabled={!canScrollRight}
              aria-label="Next product"
              className={`carousel-btn p-2 rounded-lg border transition-all duration-200 flex items-center justify-center ${
                canScrollRight
                  ? 'bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700 hover:border-zinc-500 cursor-pointer active:scale-95 shadow-sm'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-600 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollState}
        className="carousel-track flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {products.map((prod) => (
          <div
            key={prod.id}
            className="carousel-slide flex-shrink-0 w-[280px] snap-start transition-transform duration-300"
          >
            {/* Card wrapper with stock badge & product component */}
            <div className="relative group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 hover:shadow-2xl transition-all h-full">
              {/* Badge info */}
              <div className="absolute top-2 left-2 z-10 flex gap-1.5 items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-sm text-zinc-300 px-2 py-0.5 rounded border border-white/10">
                  Stock: {prod.p_stock}
                </span>
              </div>

              {/* Render Product Component */}
              <Product
                id={prod.id}
                name={prod.p_name}
                description={prod.p_description}
                price={prod.p_price}
                baseprice={prod.p_bprice}
                imagePath="/testimage.jpg"
                onRemove={onRemove}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Indicator Dots */}
      {products.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {products.map((prod, idx) => (
            <button
              key={prod.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-indigo-500'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
