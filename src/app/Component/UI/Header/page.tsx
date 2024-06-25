"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { TbShoppingCart } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Logo from "../Logo/page";
import SearchInput from "../SearchInput/page";

export default function Header() {

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("CartList")
  };

  return (
    <div className=" w-full flex justify-between items-center p-5 bg-green-500">
      
      <Logo />
      <SearchInput />

      {/* <div className="flex justify-between">
        <ul className="inline-block justify-between">
          <li className="inline-block">
            <Link href={""} className="px-5 font-bold">
              About
            </Link>
          </li>
          <li className="inline-block">
            <Link href={""} className="px-5 font-bold text-white">
              Service
            </Link>
          </li>
          <li className="inline-block">
            <Link href={""} className="px-5 font-bold ">
              Contact
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="flex justify-center ">
        {/* <a
          href="#"
          className="border-2 border-white rounded-full p-5 mx-2 bg-white"
        >
          <IoNotificationsOutline className="text-sm " />
        </a> */}
        <a
          href="#"
          className="border-2 border-white rounded-full p-5 mx-2 bg-white static" 
          onClick={handleSubmit}>
          <TbShoppingCart className="text-xl " />
        </a>
        <span className=" flex rounded-full bg-red-500 align-top ms-12 px-2 absolute" >10</span>

        {/* <a
          href="#"
          className="border-2 border-white rounded-full p-5 mx-2 bg-white"
        >
          <CgProfile className="text-sm" />
        </a> */}
      </div>
    </div>
  );
}
