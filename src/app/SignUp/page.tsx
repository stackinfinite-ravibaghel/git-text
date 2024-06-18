'use client'
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logo from "../Component/UI/Logo/page";


export default function SignUp() {

  const [fullName, setFullName] = useState(" ");
  const [mail, setEmail] = useState(" ");
  const [pass, setPass] = useState();

  const router = useRouter();
 
  const handleSubmit = (e : any) => {
    e.preventDefault()
      
    if (mail && pass) {
      router.push(`Dashboard?fullName=${fullName}&mail=${mail}&pass=${pass}` );
    }else {
      alert('Please enter both valid value.');
    }
    
  }

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">

      <main className="flex flex-col items-center justify-center w-full flex-1 p-20 text-center">

        <div className="bg-white rounded-2xl shadow-2xl flex  max-w-4xl ">

          <div className=" p-5 text-black" >
            <Logo />


            <form onSubmit={handleSubmit} >
            
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Sign Up to Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2" ></div>

              <div className="flex justify-center my-2">

                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>

              </div>{/* Social Sign Up Section */}

              <p className="text-gray-400 m-8">or <br />Fill up personal information & start journey with us.</p>

              <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  {/* <FaRegEnvelope  /> */}
                  <CgProfile className="text-gray-400  m-1"/>

                  <input type="text" name="name" placeholder="Full Name" className="bg-gray-100 outline-none text-sm flex-1"  onChange={(e) => setFullName(e.target.value)} required/>
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-1" />

                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" value={mail} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className="bg-gray-100 w-64 p-2 mb-3 flex items-center">
                  <MdLockOutline className="text-gray-400 m-1" />

                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1 " value={pass}
                  onChange={(e : any) => setPass(e.target.value)} required/>
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-1" />

                  <input type="password" name="cpassword" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" 
                  required/>
                </div>
                

                {/* Button */}
                <button className="border-2 text-green-500 border-green-500 rounded-full px-12 py-2 my-5 inline-block font-semibold hover:bg-green-500 hover:text-white hover:border-black" type="submit"  >Sign Up</button>
                <p className="text-gray-400 my-3">Already have an Account? <Link href={"/"} className="text-green-500 font-bold">Sign in</Link></p>
              </div>

            </div>
            </form>
          </div> 
          
        </div>

      </main>
    </div>
  );
}
