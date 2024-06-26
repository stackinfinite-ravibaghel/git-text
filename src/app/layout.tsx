'use client'
import { usePathname } from 'next/navigation'

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/UI/Header/page";
import Footer from "./Component/UI/Footer/page";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  const display : any= [
    "/",
    "/SignUp",
    
  ];


  
  return (
    <html lang="en">
      <body className={inter.className}>
      
        { display.includes(pathname)  ?  null : <Header /> }
        {children}
        { display.includes(pathname)  ?  null : <Footer /> }
        
        </body>
    </html>
  );
}
