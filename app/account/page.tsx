import React from 'react'
import Image from 'next/image'
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'

import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });


const Account = () => {
  return (
    <section>
       <Header />


       {/*  first component my account    */}
                <div className='w-full relative'>
      
                     <Image src='/Rectangle 1.png'  alt='bgnewimage'  width={1440}  height={316}  />
                     
                     <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <Image src='/Meubel.png'  alt='vlogo'  width={77}  height={77} />
                        <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}>
                           My Account
                         </h2>
                         <div className='flex gap-2'>
                         <p className={`${myFonts.className} font-medium text-[16px]`}>
                           Home
                         </p>
                         <Image src='/Arrow.png'  alt='rightarrow'  width={20}  height={20}  />
                         <p className={`${myFonts.className} font-light text-[16px]`}>
                           My Account
                         </p>
                         </div>
                     </div>
      
                 </div>



       {/*     second component checkout page    */}
       <div className='h-full mt-[70px] mb-[70px] mx-[50px] lg:mx-[110px]'>  

        <div className='flex flex-col lg:flex-row'>

         <div className='w-full lg:w-[45%]'>

          <h2 className={`${myFonts.className} font-semibold text-[24px] lg:text-[36px] mb-14`}>
            Log In</h2>


             <div className='space-y-10'>   

               <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Username or email address</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
               </div>


               <div className='space-y-4'>
               <h3 className={`${myFonts.className} font-medium text-[16px]`}>Password</h3>
               <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
               </div>


               <div className='space-y-8'>

               <div className='flex items-center gap-4'>
                 <p className= 'h-[27px] w-[30px] border rounded-[5px] border-[#9F9F9F]'></p>
                 <h3 className={`${myFonts.className} text-[16px]`}>Remember me</h3>
               </div> 

               <div className='flex items-center gap-6'>
                 <p className='w-1/2 h-[65px] border border-black rounded-[15px] flex justify-center items-center'>
                 <span className={`${myFonts.className} text-[20px]`}>Log In</span></p>
                 <p className={`${myFonts.className} font-light text-[16px]`}>Lost Your Password?</p>                  
                </div> 



               </div>
          
          </div>

       </div>

      

         <div className='h-full w-full lg:w-[55%]'>

          <div className='lg:ml-[140px] mt-[70px] lg:mt-0'>

               <h2 className={`${myFonts.className} font-semibold text-[24px] lg:text-[36px] mb-14`}>
                 Register</h2>

                <div className='space-y-8'>

                   <div className='space-y-4'>
                     <h3 className={`${myFonts.className} font-medium text-[16px]`}>Email address</h3>
                     <p className='w-full h-[65px] border rounded-[10px] border-[#9F9F9F]'></p>
                   </div>

                   <p className={`${myFonts.className} font-light text-[16px]`}>
                   A link to set a new password will be sent to your email address.
                   </p>  

                   <p className={`${myFonts.className} font-light text-[16px]`}>
                   Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                   <span className={`${myFonts.className} font-semibold text-[16px]`}> privacy policy.</span>
                   </p>

                   <div>
                   <p className='w-1/2 h-[65px] border border-black rounded-[15px] flex justify-center items-center'>
                   <span className={`${myFonts.className} text-[20px]`}>Register</span></p>
                   </div>


              </div>

          </div>

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

export default Account
