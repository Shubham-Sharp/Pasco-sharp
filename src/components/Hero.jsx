'use client';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://preview--pasco-jcb-clone.lovable.app/assets/hero-construction-BI0CErwS.jpg",
        "./hero-construction.jpg",
        "./hero-excavator.jpg",
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Hero Slides */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/80" />
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 shadow-lg hover:bg-gray-100 p-3 rounded-full transition-all duration-300 z-10"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 shadow-lg hover:bg-gray-100 p-3 rounded-full transition-all duration-300 z-10"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                </>
            )}
        </div>
    );
};
