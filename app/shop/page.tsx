import React from 'react'
import Image from 'next/image'
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'

import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });

const Shop = () => {
  return (

    <section>

        <Header />
          {/*  first component shop    */}
          <div className='w-full relative'>

               <Image src='/Rectangle 1.png'  alt='bgnewimage'  width={1440}  height={316}  />
               
               <div className='absolute inset-0 flex flex-col justify-center items-center'>
                  <Image src='/Meubel.png'  alt='vlogo'  width={77}  height={77} />
                  <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}>
                     Shop
                   </h2>
                   <div className='flex gap-2'>
                   <p className={`${myFonts.className} font-medium text-[16px]`}>
                     Home
                   </p>
                   <Image src='/Arrow.png'  alt='rightarrow'  width={20}  height={20}  />
                   <p className={`${myFonts.className} font-light text-[16px]`}>
                     Shop
                   </p>
                   </div>
               </div>

           </div>
         


             {/*   2nd component shop filter     */}
           <div className='mt-5 lg:mt-10 bg-[#FAF4F4] w-full h-[50px] md:h-[75px] lg:h-[100px] px-[50px] md:px-[75px] lg:px-[100px] hidden md:flex justify-between'>

               <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-5 flex-1'>
                         <Image src='/Vector.png'  alt='arrows'  width={19}  height={16}  />
                         <p className={`${myFonts.className} text-[20px]`}>
                           Filter
                         </p>
                         <Image src='/Vectordots.png'  alt='arrowsdots'  width={16}  height={16}  />
                         <Image src='/Vectorfull.png'  alt='arrowsfull'  width={21}  height={19}  />
                    </div>
                      <div className="h-[50px] w-[3px] bg-[#9F9F9F] mx-5"></div>
                      <div className='flex items-center'>
                          <p className={`${myFonts.className} text-[16px]`}>
                           Showing 1–16 of 32 results
                          </p>
                     </div>
               </div>

                   <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-4'>
                          <p className={`${myFonts.className} text-[20px]`}>
                             Show
                          </p>
                           <p className='bg-[#FFFFFF] w-[55px] h-[55px] flex justify-center items-center'>
                            <span className={`${myFonts.className} text-[20px]`}>
                             16
                            </span></p>
                    </div>
                    <div className='flex items-center gap-4'>
                           <p className={`${myFonts.className} text-[20px]`}>
                             Short by
                           </p>
                           <p className='bg-[#FFFFFF] w-[188px] h-[55px] flex justify-center items-center'>
                            <span className={`${myFonts.className} text-[20px]`}>
                              Default
                            </span></p>
                    </div>
               </div>             

           </div>



               {/*     third component products         */}
            <div className='w-full h-[1820px] bg-[#FFFFFF] px-[30px] md:px-[75px] lg:px-[100px]'>

              <div className='flex mt-5'>

                <div className='w-full h-[372px]'>
                    <Image src='/Mask Group.png' alt='maskpic' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                        Trenton modular sofa_3</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>

               <div className='w-full h-[397px]'>
                    <Image src='/Mask Groupaik.png' alt='maskpic2' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                        Granite dining table with <br />dining chair</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>
 
               <div className='w-full h-[397px]'>
                    <Image src='/Mask Groupdo.png' alt='maskpic3' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                         Outdoor bar table and <br />stool</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>
                   
               <div className='w-full h-[397px]'>
                    <Image src='/Mask Groupteen.png' alt='maskpic4' width={287} height={287} />
                    <p className={`${myFonts.className} text-[16px]`}>
                       Plain console with teak <br />mirror</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>
            
           </div>         


           <div className='flex mt-5'>

                <div className='w-full h-[372px]'>
                    <Image src='/Hello.png' alt='tablemaskpic' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                    Grain coffee table</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                       Rs. 15,000.00</h1>
               </div>

               <div className='w-full h-[397px]'>
                    <Image src='/Qwerty.png' alt='tablemaskpic2' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                    Kent coffee table</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                      Rs. 225,000.00</h1>
               </div>
 
               <div className='w-full h-[397px]'>
                    <Image src='/Right.png' alt='tablemaskpic3' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                      Round coffee table_color <br />2</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                       Rs. 251,000.00</h1>
               </div>
                   
               <div className='w-full h-[397px]'>
                    <Image src='/Left.png' alt='tablemaskpic4' width={287} height={287} />
                    <p className={`${myFonts.className} text-[16px]`}>
                     Reclaimed teak coffee <br />table</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                      Rs. 25,200.00</h1>
               </div>
            
           </div>         

              
           <div className='flex mt-5'>

                <div className='w-full h-[372px]'>
                    <Image src='/Bottom.png' alt='nayatable' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                      Plain console_</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                      Rs. 258,200.00</h1>
               </div>

               <div className='w-full h-[397px]'>
                    <Image src='/Cupboard.png' alt='cupboard' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                        Reclaimed teak Sideboard</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 20,000.00</h1>
               </div>
 
               <div className='w-full h-[397px]'>
                    <Image src='/Set full.png' alt='table' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                      SJP_0825 </p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 200,000.00</h1>
               </div>
                   
               <div className='w-full h-[397px]'>
                    <Image src='/Single.png' alt='chair' width={287} height={287} />
                    <p className={`${myFonts.className} text-[16px]`}>
                      Bella chair and table</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 100,000.00</h1>
               </div>
            
           </div>         


           <div className='flex mt-5'>

                <div className='w-full h-[250px] lg:h-[372px]'>
                    <Image src='/Granite table.png' alt='granite' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                      Granite square side table</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 258,800.00</h1>
               </div>

               <div className='w-full h-[250px] lg:h-[397px]'>
                    <Image src='/Asgaard.png' alt='asgaard' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                        Asgaard sofa</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                       Rs. 250,000.00</h1>
               </div>
 
               <div className='w-full h-[250px] lg:h-[397px]'>
                    <Image src='/Maya.png' alt='maya' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                      Maya sofa three seater</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                      Rs. 115,000.00</h1>
               </div>
                   
               <div className='w-full h-[250px] lg:h-[397px]'>
                    <Image src='/Outdoor.png' alt='outdoor' width={287} height={287} />
                    <p className={`${myFonts.className} text-[16px]`}>
                      Outdoor sofa set</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 244,000.00</h1>
               </div>
            
           </div>         

                <div className='gap-10 flex justify-center mt-10'>
                            <p className='bg-[#FBEBB5] w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center'>
                            <span className={`${myFonts.className} text-[20px]`}>
                             1
                            </span></p>
                            <p className='bg-[#FFF9E5] w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center'>
                            <span className={`${myFonts.className} text-[20px]`}>
                             2
                            </span></p>
                            <p className='bg-[#FFF9E5] w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center'>
                            <span className={`${myFonts.className} text-[20px]`}>
                             3
                            </span></p>
                            <p className='bg-[#FFF9E5] w-[98px] h-[60px] border rounded-[10px] flex justify-center items-center'>
                            <span className={`${myFonts.className} font-light text-[20px]`}>
                             Next
                            </span></p>

                </div>
       </div>




        {/*   Fourth Component       */}
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

export default Shop
