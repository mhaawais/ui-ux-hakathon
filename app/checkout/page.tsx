import React from 'react'
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'
import Image from 'next/image'

import { Poppins } from 'next/font/google';
const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });

const Checkout = () => {
  return (
    <section>
      <Header />

           {/*     first component cart page    */}
                                    <div className='w-full relative'>
                          
                                         <Image src='/Rectangle 1.png'  alt='bgnewimage'  width={1440}  height={316}  />
                                         
                                         <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                            <Image src='/Meubel.png'  alt='vlogo'  width={77}  height={77} />
                                            <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}>
                                              Checkout
                                             </h2>
                                             <div className='hidden md:flex gap-2'>
                                             <p className={`${myFonts.className} font-medium text-[16px]`}>
                                               Home
                                             </p>
                                             <Image src='/Arrow.png'  alt='rightarrow'  width={20}  height={20}  />
                                             <p className={`${myFonts.className} font-light text-[16px]`}>
                                               Checkout
                                             </p>
                                             </div>
                                         </div>
                          
                                     </div>




            {/*     second component checkout page    */}
           <div className='h-full mt-[70px] mb-[70px] mx-[50px] lg:mx-[110px]'>  

              <div className='flex flex-col lg:flex-row'>

                <div className='w-full lg:w-[45%]'>

                 <h2 className={`${myFonts.className} font-semibold text-[24px] lg:text-[36px] mb-14`}>
                 Billing details</h2>


               <div className='space-y-10'>

                <div className='flex flex-col md:flex-row gap-7'>               
               <div className='flex-1 space-y-4'> 
                <h3 className={`${myFonts.className} font-medium text-[16px]`}>First Name</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
              </div>
              <div className='flex-1 space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Last Name</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
              </div>
           
             </div>


             <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Company Name (Optional)</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
             </div>

             <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Country / Region</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F] flex items-center justify-between px-8'>
                 <span className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>Sri Lanka</span>
                 <span><Image src='/Down Arrow.png' alt='arrowdown' width={20} height={20}  /></span>
               </p>
             </div> 

              <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Street address</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
             </div>

              <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Town / City</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
             </div>  

             <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Province</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F] flex items-center justify-between px-8'>
                 <span className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>Western Province</span>
                 <span><Image src='/Down Arrow.png' alt='arrowdown' width={20} height={20}  /></span>
               </p>
             </div>  

             <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>ZIP code</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
             </div>  

             <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Phone</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
             </div>  

             <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Email address</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
             </div>  

             <div className='space-y-4'>
               <h3 className={`${myFonts.className} text-[1px]`}>.</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F] flex items-center justify-between px-8'>
                 <span className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>Additional information</span>
               </p>
             </div>  


           </div> 

         </div>


            <div className='h-full w-[55%]'>

              <div className='lg:ml-[140px] mt-14'>

               <div className='space-y-4'>

                <div className='flex justify-between'>
                      <p className={`${myFonts.className} font-medium text-[24px]`}>Product</p>
                      <p className={`${myFonts.className} font-medium text-[24px]`}>Subtotal</p>
                </div> 

                <div className='flex justify-between'>
                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>Asgaard sofa
                        <span className={`${myFonts.className} font-medium text-[12px] text-[#000000]`}> X 1</span></p>
                      <p className={`${myFonts.className} font-light text-[16px]`}>Rs. 250,000.00</p>
                </div> 

                <div className='flex justify-between'>
                      <p className={`${myFonts.className} font-normal text-[16px]`}>Subtotal</p>
                      <p className={`${myFonts.className} font-light text-[16px]`}>Rs. 250,000.00</p>
                </div> 

                <div className='flex justify-between'>
                      <p className={`${myFonts.className} text-[16px]`}>Total</p>
                      <p className={`${myFonts.className} font-bold text-[24px] text-[#B88E2F]`}>Rs. 250,000.00</p>
                </div> 

                <div className='border-b-2 border-[#D9D9D9]'></div>

               <div className='flex items-center gap-4'>
                 <p className= 'h-[14px] w-[14px] bg-black border rounded-[10px]'></p>
                 <h3 className={`${myFonts.className} text-[16px]`}>Direct Bank Transfer</h3>
               </div>  

               <p className={`${myFonts.className} font-light text-[16px] text-[#9F9F9F]`}>
               Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
               </p>

               <div className='flex items-center gap-4'>
                 <p className= 'h-[14px] w-[14px] border border-[#9F9F9F] rounded-[10px]'></p>
                 <h3 className={`${myFonts.className} font-medium text-[16px] text-[#9F9F9F]`}>Direct Bank Transfer</h3>
               </div>  

               <div className='flex items-center gap-4'>
                 <p className= 'h-[14px] w-[14px] border rounded-[10px] border-[#9F9F9F]'></p>
                 <h3 className={`${myFonts.className} font-medium text-[16px] text-[#9F9F9F]`}>Cash On Delivery</h3>
               </div>  

               <p className={`${myFonts.className} font-light text-[16px]`}>
               Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
               <span  className={`${myFonts.className} font-semibold text-[16px]`}> privacy policy.</span>
               </p>

               <div className='pt-6 flex justify-center items-center'>
                 <p className='w-1/2 h-[65px] border-2 border-black rounded-[15px] flex justify-center items-center'>
                 <span className={`${myFonts.className} text-[20px]`}>Place order</span></p>
               </div>  
               
              </div>

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


      <Footer />
    </section>
  )
}

export default Checkout
