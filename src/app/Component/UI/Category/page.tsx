// import React from "react";

// interface CategoryItem {
//   image: string ;
//   name: String ;
// }

// const Category : React.FC<CategoryItem> = ({image, name}) => {
//   return (
//     <div className="category-item p-4">
//       <Image src={image} alt={mame} className="w-full h-32 object-cover" />
//       <h3>{name}</h3>
//     </div>
//   );
// };

// export default Category;

"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Category() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-gray-300 text-black justify-center place-items-center gap-2 p-2 ">
      <button
        onClick={scrollLeft}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10  "
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Scroll Category Start */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-2 p-1  min-w-screen px-2 mx-10  "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* {categories.map((category: any) => (
          <div
            key={category.id}
            className="flex-shrink-0 text-center flex flex-col place-items-center p-2 bg-white rounded-lg "
          >
            <img
              src={category.image} // Assuming each category object has an 'image' field
              alt={category.name}
              className="w-fit h-12 object-cover rounded-md select-none"
            />

            <h2 className="mt-2 text-sm font-medium select-none sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {category.name}
            </h2>
          </div>
        ))} */}
        {/* Demo */}
        <div className="w-full  bg-white rounded-md p-2 ">
          <div className="flex justify-center">
            <Image
              src="/topoffer.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <div className="justify-center text-center mt-2">All Product 1</div>
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

          <div className="justify-center text-center mt-2">All Product Last</div>
        </div>

        {/* Demo */}
      </div>
      {/* Scroll Category End */}
      <button
        onClick={scrollRight}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 "
      >
        <FiChevronRight size={24} />
      </button>

      {/* <div className="w-full  bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/topoffer.webp"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className='justify-center text-center mt-2'>All Product</div>
      </div>
      
       <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/aa.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2 '>Mobile</div>
      </div>
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/electronics.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2'>Display</div>
      </div>

      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/Toys.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2'>Beauty</div>
      </div>

      
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/fasion.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2'>Clothes</div>
      </div>
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/grocery.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2'>Grocery</div>
      </div>
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/furniture.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2'>Furniture</div>
      </div>

      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
          <Image
            src="/tv.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        
        <div className='justify-center text-center mt-2'>Electonics</div>
      </div> */}
    </div>
  );
}
