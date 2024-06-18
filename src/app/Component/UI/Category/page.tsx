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

import Image from 'next/image'

export default function Category() {
  return (
    <div className=" w-full bg-gray-300 text-black justify-center  grid grid-cols-12 place-items-center gap-2 p-2 ">

      <div className="w-full  bg-white rounded-md p-2 ">
        
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
        
        <div className='justify-center text-center mt-2'>Mobile</div>
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
      </div>
      

    </div>
  );
}
