import React from 'react'
import Image from 'next/image'
import Header from '@/components/whiteheader';
import Footer from '@/components/footer'

import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });


const Contact = () => {
  return (
    <section>

      <Header />
 
                      {/*     first component contact page    */}
                        <div className='w-full relative'>
               
                              <Image src='/Rectangle 1.png'  alt='bgnewimage'  width={1440}  height={316}  />
                              
                              <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                 <Image src='/Meubel.png'  alt='vlogo'  width={77}  height={77} />
                                 <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}>
                                   Contact
                                  </h2>
                                  <div className='hidden md:flex gap-2'>
                                  <p className={`${myFonts.className} font-medium text-[16px]`}>
                                    Home
                                  </p>
                                  <Image src='/Arrow.png'  alt='rightarrow'  width={20}  height={20}  />
                                  <p className={`${myFonts.className} font-light text-[16px]`}>
                                    Contact
                                  </p>
                                  </div>
                              </div>
               
                          </div>

                        


        {/*   2nd component contact us get in touch with us       */}
 
       <div className='w-full h-[1144px] bg-[#FFFFFF]'>

         <div className='text-center pt-3 sm:pt-5 lg:pt-16'>
           <h1  className={`${myFonts.className} font-semibold text-[24px] lg:text-[36px]`}>
             Get In Touch With Us</h1>
           <p  className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
             For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
              An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
           </p>
           </div>

       <div className='flex'>
     
           <div className='mx-5 md:mx-9 xl:mx-[150px] md:pl-12 md:pt-[50px] mt-14 md:mt-[100px] space-y-12'>

                 <div className='flex  gap-12 '>
                 <div>
                <Image src='/Location.png' alt='location icon' width={22}  height={28}  /> 
                 </div>
                <div>
                <h3 className={`${myFonts.className} font-medium text-[24px]`}>
                  Address
                </h3>
    
                  <p  className={`${myFonts.className} text-[16px]`}>
                    236 5th SE Avenue, New <br />
                    York NY10000, United <br />
                    States
                  </p>
                  </div>
                  </div>



                 <div className='flex gap-12 '>
                  <div>
                  <Image src='/Phone.png' alt='phone icon' width={23}  height={23}  /> 
                   </div>
                  <div>
                  <h3 className={`${myFonts.className} font-medium text-[24px]`}>
                  Phone
                  </h3>
    
                  <p  className={`${myFonts.className} text-[16px]`}>
                   Mobile: +(84) 546-6789 <br />
                   Hotline: +(84) 456-6789
                  </p>
                  </div>
                  </div>



                  <div className='flex gap-12 '>
                 <div>
                <Image src='/Time.png' alt='timer icon' width={23}  height={23}  /> 
                 </div>
                <div>
                <h3 className={`${myFonts.className} font-medium text-[24px]`}>
                  Working Time
                </h3>
    
                  <p  className={`${myFonts.className} text-[16px]`}>
                  Monday-Friday: 9:00 - <br />
                  22:00 <br />
                  Saturday-Sunday: 9:00 - <br />
                   21:00
                  </p>
                  </div>
                  </div>


          </div> 


           <div className='space-y-8 pt-[120px]'>


                <div className='w-full space-y-10'>

                    <h3 className={`${myFonts.className} font-medium text-[16px]`}>
                       Your name
                    </h3>
                    <p className='w-[528px] h-[75px] border rounded-[10px] border-[#9F9F9F] pl-8 flex items-center'>
                      <span className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
                       Abc
                      </span>
                    </p>

                </div>


                <div className='w-full space-y-10'>

                    <h3 className={`${myFonts.className} font-medium text-[16px]`}>
                      Email address
                    </h3>
                    <p className='w-[528px] h-[75px] border rounded-[10px] border-[#9F9F9F] pl-8 flex items-center'>
                    <span className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
                    Abc@def.com
                   </span>
                   </p>

               </div>


               <div className='w-full space-y-10'>

                    <h3 className={`${myFonts.className} font-medium text-[16px]`}>
                    Subject
                    </h3>
                    <p className='w-[528px] h-[75px] border rounded-[10px] border-[#9F9F9F] pl-8 flex items-center'>
                    <span className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
                    This is an optional
                   </span>
                   </p>

               </div>


               <div className='w-full space-y-10'>

                    <h3 className={`${myFonts.className} font-medium text-[16px]`}>
                     Message
                    </h3>
                    <p className='w-[528px] h-[120px] border rounded-[10px] border-[#9F9F9F] pl-8 flex flex-col justify-center'>
                    <span className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
                    Hi! i’d like to ask about
                   </span>
                   </p>

               </div>


               <div className='w-full'>

                    <p className='w-[237px] h-[48px] border rounded-[15px] border-[#000000] flex items-center justify-center'>
                    <span className={`${myFonts.className} text-[16px]  text-[#000000]`}>
                      Sbumit
                   </span>
                   </p>

               </div>

           </div>

          <div>

        </div>
                
      </div>

    </div>    



            {/*   third component       */}
          <div className='w-full h-[300px] bg-[#FAF4F4] px-[50px] md:px-[100px] flex items-center'>

       <div className='flex justify-between'>

    <div>
      <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[32px]`}>
       Free Delivery</h1>
       <p className={`${myFonts.className} text-[20px] text-[#9F9F9F]`}>
         For all oders over $50, consectetur <br /> adipim scing elit.</p>
    </div>

    <div>
      <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[32px]`}>
        90 Days Return</h1>
       <p className={`${myFonts.className} text-[20px] text-[#9F9F9F]`}>
        If goods have problems, consectetur <br />adipim scing elit.</p>
    </div>

    <div>
      <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[32px]`}>
       Secure Payment</h1>
       <p className={`${myFonts.className} text-[20px] text-[#9F9F9F]`}>
        100% secure payment, consectetur <br /> adipim scing elit.</p>
    </div>

</div>
</div>



       <Footer /> 
    </section>
  )
}

export default Contact
