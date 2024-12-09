import React from 'react' 
import Image from 'next/image';
import Link from 'next/link';

import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });


const Footer = () => {
  return ( 
<footer className='w-full h-[350px] lg:h-[490px] bg-[#FFFFFF]'>
    
       <div className='w-full h-[200px] lg:h-[419px] px-[10px] sm:px-[40px] md:px-[80px] pt-[5px] lg:pt-[90px]'>
             <div className='h-[200px] lg:h-[312px] flex'>
                <div>
                   <p className={`${myFonts.className} pt-[50px] lg:pt-[110px] text-[16px] text-[#9F9F9F]`}>
                    400 University Drive Suite 200 Coral <br />Gables,<br />FL 33134 USA</p>
                </div>

              <div className='ml-[50px] lg:ml-[100px] w-[68px]'>      
                  <h1 className={`${myFonts.className} font-medium text-[20px] text-[#9F9F9F]`}>Link
                        <button className='pt-6 lg:pt-10'><Link href='#'       className={`${myFonts.className} font-medium text-[16px] text-black `}>
                         Home</Link></button>
                        <button className='pt-4 lg:pt-8'><Link href='/shop'   target='_blank'  className={`${myFonts.className} font-medium text-[16px] text-black`}>
                         Shop  </Link></button>
                        <button className='pt-4 lg:pt-8'><Link href='/about'  target='_blank'  className={`${myFonts.className} font-medium text-[16px] text-black  `}>
                         About  </Link></button>
                         <button className='pt-4 lg:pt-8'><Link href='/contact' target='_blank'  className={`${myFonts.className} font-medium text-[16px] text-black`}>
                          Contact   </Link></button>
                  </h1>
             </div>

             <div className='ml-[50px] lg:ml-[100px] w-[140px]'>

                  <h1 className={`${myFonts.className} font-medium text-[20px] text-[#9F9F9F]`}>Help
                         <button className='pt-6 lg:pt-12'><p className={`${myFonts.className} font-medium text-[16px] text-black`}>
                           Payment Options</p></button>
                         <button className='pt-4 lg:pt-10'><p className={`${myFonts.className} font-medium text-[16px] text-black `}>                         Returns  </p></button>
                         <button className='pt-4 lg:pt-10'><p className={`${myFonts.className} font-medium text-[16px] text-black`}>
                         Privacy Policies  </p></button>
                 </h1>
             </div>

             <div className='pl-[35px] lg:pl-[60px]'>
            
                <h1 className={`${myFonts.className} font-medium text-[20px] text-[#9F9F9F]`}>Newsletter</h1>
                       <Image src='/Group 29.png' alt='search bar' width={250} height={24}  className='pt-11'/>
             </div>
     </div>
      

          <div className='pt-8 w-[90%] border-b-2'></div>
          <div className='pt-4 sm:pt-7 md:pt-9 lg:pt-13 xl:pt-14'>
             <p className={`${myFonts.className} font-normal text-[16px]`}>
                2022 Meubel House. All rights reverved
             </p></div>

  </div>

</footer>
  )
}

export default Footer