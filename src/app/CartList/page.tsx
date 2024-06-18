import Image from "next/image";

export default function CartList() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-300 p-4 ">
      <div className="rounded border-2 border-cyan-900 p-4 grid grid-rows-6">

        {/* List */}
        <div className="mb-4 grid grid-cols-3 place-items-center ">
          <div className="flex flex-col w-full p-6 justify-center bg-white rounded-tl-2xl rounded-bl-2xl ">
            <Image
              src="/shoe.webp"
              width={300}
              height={100}
              alt="Picture of the author"
            />
            
            <div className="grid grid-cols-5 mx-5">
            <Image
              src="/shoe.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Image
              src="/shoe.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Image
              src="/shoe.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Image
              src="/shoe.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Image
              src="/shoe.webp"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            </div>
          </div>
          <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl col-span-2">
            <div>OPPO F27 Pro+ (Midnight Navy, 128 GB)</div>
            <div>8 GB RAM</div>
            <div>₹32,999 ₹27,99915% Off</div>
          </div>
        </div>
        {/* List End */}

        {/* List */}
        <div className="mb-4 grid grid-cols-2 place-items-center  ">
          <div className="flex w-full p-6 justify-center bg-white rounded-tl-2xl rounded-bl-2xl ">
            <Image
              src="/shoe.webp"
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl ">
            <div>OPPO F27 Pro+ (Midnight Navy, 128 GB)</div>
            <div>8 GB RAM</div>
            <div>₹32,999 ₹27,99915% Off</div>
          </div>
        </div>
        {/* List End */}

        {/* List */}
        <div className="mb-4 grid grid-cols-2 place-items-center  ">
          <div className="flex w-full p-6 justify-center bg-white rounded-tl-2xl rounded-bl-2xl ">
            <Image
              src="/shoe.webp"
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl ">
            <div>OPPO F27 Pro+ (Midnight Navy, 128 GB)</div>
            <div>8 GB RAM</div>
            <div>₹32,999 ₹27,99915% Off</div>
          </div>
        </div>
        {/* List End */}

        {/* List */}
        <div className="mb-4 grid grid-cols-2 place-items-center  ">
          <div className="flex w-full p-6 justify-center bg-white rounded-tl-2xl rounded-bl-2xl ">
            <Image
              src="/shoe.webp"
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl ">
            <div>OPPO F27 Pro+ (Midnight Navy, 128 GB)</div>
            <div>8 GB RAM</div>
            <div>₹32,999 ₹27,99915% Off</div>
          </div>
        </div>
        {/* List End */}

        {/* List */}
        <div className="mb-4 grid grid-cols-2 place-items-center  ">
          <div className="flex w-full p-6 justify-center bg-white rounded-tl-2xl rounded-bl-2xl ">
            <Image
              src="/shoe.webp"
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl ">
            <div>OPPO F27 Pro+ (Midnight Navy, 128 GB)</div>
            <div>8 GB RAM</div>
            <div>₹32,999 ₹27,99915% Off</div>
          </div>
        </div>
        {/* List End */}

        {/* List */}
        <div className="mb-4 grid grid-cols-2 place-items-center  ">
          <div className="flex w-full p-6 justify-center bg-white rounded-tl-2xl rounded-bl-2xl ">
            <Image
              src="/shoe.webp"
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl ">
            <div>OPPO F27 Pro+ (Midnight Navy, 128 GB)</div>
            <div>8 GB RAM</div>
            <div>₹32,999 ₹27,99915% Off</div>
          </div>
        </div>
        {/* List End */}
      </div>
    </div>

    // <div className="flex min-h-screen flex-col items-center justify-between w-full p-2">
    //   <div className="flex flex-row w-fit justify-center  content-center bg-white rounded-md border-2 border-green-500   ">
    //     <div className="flex w-3/5 justify-center p-5 ">
    //       <Image
    //         src="/shoe.webp"
    //         width={300}
    //         height={100}
    //         alt="Picture of the author"
    //         className="content-center"
    //       />
    //     </div>
    //     <div className="flex flex-col w-2/5 justify-center bg-green-500  p-4">
    //       <div className="justify-center text-center mt-5">
    //         OPPO F27 Pro+ (Midnight Navy, 128 GB)
    //       </div>

    //       <div className="justify-center text-center mt-2">8 GB RAM</div>

    //       <div className="justify-center text-center mt-2">
    //         ₹32,999 ₹27,99915% Off
    //       </div>

    //       {/* Quantity start */}
    //       <div className="flex justify-center items-center p-5  ">
    //         <div className="flex justify-center ">
    //           {/* <div className="p-4 ">
    //         Quantity :
    //       </div> */}
    //           <a
    //             href="#"
    //             className="border-2 border-black rounded-full p-4 bg-white static"
    //           >
    //             -
    //           </a>
    //         </div>

    //         <div className="border-2 border-black rounded-full p-6 bg-white static mx-4">
    //           7
    //         </div>

    //         <div className="flex justify-center ">
    //           <a
    //             href="#"
    //             className="border-2 border-black rounded-full p-4 mr-4 bg-white static"
    //           >
    //             +
    //           </a>
    //         </div>
    //       </div>
    //       {/* <div className="flex justify-center w-fit mx-border-2 border-green-500 rounded-full p-2 bg-white static jus">
    //       Remove
    //     </div> */}
    //       {/* Quantity End */}
    //     </div>

    //     {/*  */}

    //     <div className="flex w-3/5 justify-center p-5 ">
    //       <Image
    //         src="/shoe.webp"
    //         width={300}
    //         height={100}
    //         alt="Picture of the author"
    //         className="content-center"
    //       />
    //     </div>
    //     <div className="flex flex-col w-2/5 justify-center bg-green-500  p-4">
    //       <div className="justify-center text-center mt-5">
    //         OPPO F27 Pro+ (Midnight Navy, 128 GB)
    //       </div>

    //       <div className="justify-center text-center mt-2">8 GB RAM</div>

    //       <div className="justify-center text-center mt-2">
    //         ₹32,999 ₹27,99915% Off
    //       </div>

    //       {/* Quantity start */}
    //       <div className="flex justify-center items-center p-5  ">
    //         <div className="flex justify-center ">
    //           {/* <div className="p-4 ">
    //         Quantity :
    //       </div> */}
    //           <a
    //             href="#"
    //             className="border-2 border-black rounded-full p-4 bg-white static"
    //           >
    //             -
    //           </a>
    //         </div>

    //         <div className="border-2 border-black rounded-full p-6 bg-white static mx-4">
    //           7
    //         </div>

    //         <div className="flex justify-center ">
    //           <a
    //             href="#"
    //             className="border-2 border-black rounded-full p-4 mr-4 bg-white static"
    //           >
    //             +
    //           </a>
    //         </div>
    //       </div>
    //       {/* <div className="flex justify-center w-fit mx-border-2 border-green-500 rounded-full p-2 bg-white static jus">
    //       Remove
    //     </div> */}
    //       {/* Quantity End */}
    //     </div>

    //   </div>

    // </div>
  );
}
