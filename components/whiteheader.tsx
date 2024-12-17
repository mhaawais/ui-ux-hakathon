import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


import { Poppins } from 'next/font/google';
const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });

const Header = () => {
  return ( 
  <nav className='w-full h-[50px] md:h-[75px] lg:h-[100px] bg-[#FFFFFF]'>

        <div className='h-[24px] pl-[125px] md:pl-[250px] lg:pl-[305px] xl:pl-[500px] w-full'>
               <ul className='pt-4 space-x-5 lg:pt-9 lg:space-x-10'>
                         <button><Link href='#'       className={`${myFonts.className} font-medium text-[16px]`}>
                           Home</Link></button>
                          <button><Link href='/shop'   target='_blank'  className={`${myFonts.className} font-medium text-[16px]`}>
                           Shop  </Link></button>
                          <button><Link href='/#'  target='_blank'  className={`${myFonts.className} font-medium text-[16px]`}>
                           About </Link></button>
                          <button><Link href='/contact' target='_blank'  className={`${myFonts.className} font-medium text-[16px]`}>
                          Contact   </Link></button>
              </ul>
       </div>

      <div className='hidden lg:flex justify-end px-10'>
            <Image src='/Group 1.png' alt='icons' width={247} height={28}  className='pt-2'/>
      </div>


    </nav>
  )
}

export default Header
