import Image from "next/image";

interface Category{
  name: string;
  image: string;
}

const categories : Category[] =[
  {
    name: "Top Offer",
    image: "/mobile/oppooo.jpg",
    // alt: "Top Offer",
    // slug: "top-offer",
  }
];

export default function Cart( ) {
  return ( 
    <div className="flex overflow-x-auto space-x-4 p-4 ">
      {categories.map((category, index)=> (

        <div key={index} className="min-w-[150px] flex-shrink-0 text-center">
          <div className="flex  ">
            <Image
              src={category.image}
              alt={category.name}
              // layout="fill"
              // objectFit="cover"
              width={500}
              height={500}
              className=""            
            />
          </div>
          <h2 className="flex mt-2 text-lg font-meduim justify-center">
              {category.name}
          </h2>
        </div> 
        

      ))}
      
    </div>
  )
}