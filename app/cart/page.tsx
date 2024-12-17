import React from 'react'
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

import { Poppins } from 'next/font/google';
const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });

const Cart = () => {
  return (
    <section>
          
<Header />

   {/*     first component cart page    */}
                          <div className='w-full relative'>
                 
                                <Image src='/Rectangle 1.png'  alt='bgnewimage'  width={1440}  height={316}  />
                                
                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                   <Image src='/Meubel.png'  alt='vlogo'  width={77}  height={77} />
                                   <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}>
                                     Cart
                                    </h2>
                                    <div className='hidden md:flex gap-2'>
                                    <p className={`${myFonts.className} font-medium text-[16px]`}>
                                      Home
                                    </p>
                                    <Image src='/Arrow.png'  alt='rightarrow'  width={20}  height={20}  />
                                    <p className={`${myFonts.className} font-light text-[16px]`}>
                                      Cart
                                    </p>
                                    </div>
                                </div>
                 
                            </div>



           {/*    second component cart page     */}

           <div className='w-full h-[800px] lg:h-[525px] bg-[#FFFFFF]'>

              <div className='mx-8 lg:mx-[100px] my-[80px] grid grid-cols-3 grid-rows-3 gap-5'>

                  <div className='w-[700px] h-[216px] '>
                        <nav className='bg-[#FFF9E5] w-full h-[55px] pl-[160px] flex gap-[60px]'>
                            
                            <ul className='flex items-center gap-[105px]'>
                                 <li className={`${myFonts.className} font-medium text-[16px]`}>
                                   Product
                                  </li>
                                  <li className={`${myFonts.className} font-medium text-[16px]`}>
                                    Price
                                  </li>
                            </ul>

                             <ul className='flex items-center gap-12'>
                                  <li className={`${myFonts.className} font-medium text-[16px]`}>
                                    Quantity
                                  </li>
                                  <li className={`${myFonts.className} font-medium text-[16px]`}>
                                    Subtotal
                                  </li>
                             </ul>

                        </nav>


              
                     <div className='h-full flex items-center justify-between'>

                            <Image src='/Small sofa.png' alt='small sofapic' width={100}  height={100}/>
                    

                           <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                            Asgaard sofa
                            </p>

                            <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Rs. 250,000.00
                            </p>

                            <p className='w-[32px] h-[32px] border rounded-[5px] border-[#9F9F9F] flex justify-center items-center'>
                            <span className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              1
                            </span></p>

                            <p className={`${myFonts.className} text-[16px]`}>
                             Rs. 250,000.00
                            </p>

                            <Image src='/Bin pic.png' alt='small binpic' width={21}  height={21}/>


                     </div>  
                    

                  </div>
                  
                
                 <div className='w-[342px] h-[390px] bg-[#FFF9E5] space-y-16 
                                col-start-1 ml-4 row-start-2 lg:col-start-5 lg:ml-0 lg:row-start-auto'>
                
                     <div className='flex justify-center pt-4'>
                        <h2 className={`${myFonts.className} font-semibold text-[32px]`}>
                          Cart Totals
                        </h2>
                      </div>
                    
                    <div className='space-y-10'>         
                    <div className='flex justify-center gap-10'>

                      <p className={`${myFonts.className} font-medium text-[16px]`}>
                        Subtotal
                      </p>

                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                      Rs. 250,000.00
                      </p>
                            

                    </div>

                    <div className='flex justify-center gap-16'>

                    <p className={`${myFonts.className} font-medium text-[16px]`}>
                      Total
                     </p>

                    <p className={`${myFonts.className} font-medium text-[16px] text-[#B88E2F]`}>
                     Rs. 250,000.00
                   </p>
      

                   </div>
                   </div>
                    
                    <div className='flex justify-center'>
                      <button className='w-[222px] h-[58px] border rounded-[15px] border-[#000000] flex justify-center items-center'>
                       <Link href='/checkout' target='_blank' className={`${myFonts.className} text-[20px]`}>
                         Check Out
                       </Link></button>      

                   </div>
                 </div>


             </div>
              </div>



 {/*   third  Component       */}
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

<Footer/>
</section> 
  )
}

export default Cart