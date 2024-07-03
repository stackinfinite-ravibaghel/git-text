import React, { useRef } from 'react';
import Image from "next/image";

const HorizontalScrollable = () => {
  // Ref to the container div for scrolling
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gray-200">
      {/* Left button */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10"
      >
        &lt;
      </button>

      {/* Right button */}
      <button
        onClick={scrollRight}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10"
      >
        &gt;
      </button>

      {/* Horizontal scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hidden px-2 mx-10 gap-4"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Images and names */}
        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">First Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product</div>
        </div>

        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">Last Product</div>
        </div>
        
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default HorizontalScrollable;
