"use client";
import { basePath } from '@/utils/config';
import { Carousel } from "flowbite-react";

export function CarouselComponent() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <Carousel
        pauseOnHover
        className="h-96 sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg"
      >
        <div className="relative w-full h-full">
          <img
            src={`${basePath}/usa.jpg`}
            alt="USA"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">United States of America</h3>
            <p className="text-gray-200">Experience the American Dream with our comprehensive visa services</p>
          </div>
        </div>

        <div className="relative w-full h-full">
          <img
            src={`${basePath}/uk.jpg`}
            alt="UK"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">United Kingdom</h3>
            <p className="text-gray-200">Discover opportunities in the heart of Great Britain</p>
          </div>
        </div>

        <div className="relative w-full h-full">
          <img
            src={`${basePath}/canada.jpg`}
            alt="Canada"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">Canada</h3>
            <p className="text-gray-200">Your gateway to the Great White North's possibilities</p>
          </div>
        </div>

        <div className="relative w-full h-full">
          <img
            src={`${basePath}/aus.jpg`}
            alt="Australia"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">Australia</h3>
            <p className="text-gray-200">Begin your journey Down Under with expert guidance</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}