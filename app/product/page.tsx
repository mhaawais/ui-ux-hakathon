import React from 'react'
import Image from 'next/image';
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'
import Link from 'next/link';

import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });

const Product = () => {
  return (
    // single product and cart-sidebar page
<section>

  <Header />


       {/*  1st components icons   */}
    <div className='hidden w-full h-[100px] md:flex items-center bg-[#FFFFFF] px-[100px]'>
            
      <div className='gap-5 flex'>
          <p className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
            Home </p>
            <Image src='/Arrow.png' alt='sign' width={20} height={20}  />
            <p className={`${myFonts.className} text-[16px]  text-[#9F9F9F]`}>
              Shop</p>
            <Image src='/Arrow.png' alt='sign' width={20} height={20}  />
      </div>
        <div className='mx-8 h-[50px] w-[3px] bg-[#9F9F9F]'></div>
      <div className=''>
        <p className={`${myFonts.className} text-[16px]`}>
          Asgaard sofa</p>
      </div>

    </div>


    {/*   2nd component product details   */}
    <div className='w-full h-[1300px] px-16 lg:h-[820px] lg:px-[100px] lg:py-[25px]'>
      
      <div className='md:flex'>

       <div className='w-full'>
         <Image src='/Group 102.png' alt='sofanewpic' width={553}  height={500}  />
       </div>

       <div className='sm:px-14 sm:mt-10 lg:mt-0 md:flex-shrink-0'>
         
          <h2 className={`${myFonts.className} text-[42px]`}>
          Asgaard sofa</h2>

          <div className='space-y-5'>

          <h3  className={`${myFonts.className} font-medium text-[24px] text-[#9F9F9F]`}>
           Rs. 250,000.00</h3>
           <div className='flex items-center'>
             <Image src='/Group 88.png' alt='stars' width={124}  height={20}  />
             <div className='mx-4 h-[30px] w-[2px] bg-[#9F9F9F]'></div>
             <p className={`${myFonts.className} text-[13px] text-[#9F9F9F]`}>
               5 Customer Review</p>
           </div>

            <p className={`${myFonts.className} w-full text-[13px]`}>
            Setting the bar as one of the loudest speakers in its class, the <br />
            Kilburn is a compact, stout-hearted hero with a well-balanced <br />
            audio which boasts a clear midrange and extended highs for a <br />
            sound.
            </p>
             </div>
            <div className='mt-5 space-y-5'>
            <p className={`${myFonts.className} text-[14px] text-[#9F9F9F]`}>
              Size</p>
             
             <div className='flex gap-7'>
             <p className='bg-[#FBEBB5] border rounded-[5px] w-[30px] h-[30px] flex justify-center items-center'>
              <span className={`${myFonts.className} text-[13px]`}>
               L
             </span></p>

             <p className='bg-[#FAF4F4]  border rounded-[5px] w-[30px] h-[30px] flex justify-center items-center'>
              <span className={`${myFonts.className} text-[13px]`}>
               XL
               </span></p>

               <p className='bg-[#FAF4F4]  border rounded-[5px] w-[30px] h-[30px] flex justify-center items-center'>
               <span className={`${myFonts.className} text-[13px]`}>
                 XS
                </span></p>
               </div>
               
               <p className={`${myFonts.className} text-[14px] text-[#9F9F9F]`}>
               Color</p>
               <div className='flex gap-7'>
               <p className= 'h-[30px] w-[30px] bg-[#816DFA] border rounded-[50px]'></p>
               <p className= 'h-[30px] w-[30px] bg-[#000000] border rounded-[50px]'></p>
               <p className= 'h-[30px] w-[30px] bg-[#CDBA7B] border rounded-[50px]'></p>
               </div>

              <div className='flex gap-5'>
              <p className='border rounded-[10px] border-[#9F9F9F] w-[123px] h-[64px] flex items-center justify-around'>
              <span className={`${myFonts.className} text-[16px]`}>-</span>
              <span className={`${myFonts.className} font-medium text-[16px]`}>1</span>
              <span className={`${myFonts.className} text-[16px]`}>+</span>
              </p>

              <button>
              <p className='border-2 rounded-[15px] border-[#9F9F9F] w-[215px] h-[64px] flex items-center justify-center'>
              <Link href='/cart' target='_blank' className={`${myFonts.className} text-[20px]`}>Add To Cart</Link>
              </p>
              </button>

              </div>
              <div className='pt-8 w-full border-b border-[#D9D9D9]'></div>             
 
           <div className='space-y-3'>

             <div className='flex gap-12'>  
              <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                SKU</p> 
                <div   className='flex gap-5'>
               <p className={`${myFonts.className} font-medium text-[16px] text-[#9F9F9F]`}>
                :</p> 
               <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                SS001</p> 
              </div> 
              </div>

              <div className='flex gap-4'>  
              <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
               Category</p> 
               <div   className='flex gap-5' >
               <p className={`${myFonts.className} font-medium text-[16px] text-[#9F9F9F]`}>
                :</p> 
               <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
               Sofas</p> 
              </div>
              </div> 

              <div  className='flex gap-12'>  
              <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
              Tags</p> 
              <div   className='flex gap-5'>
               <p className={`${myFonts.className} font-medium text-[16px] text-[#9F9F9F]`}>
                :</p> 
               <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
               Sofa, Chair, Home, Shop</p> 
              </div> 
              </div>

              <div className='flex gap-10'>  
              <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
               Share</p> 
               <div   className='flex gap-5'>
               <p className={`${myFonts.className} font-medium text-[16px] text-[#9F9F9F]`}>
                :</p> 
               <p className={`${myFonts.className} text-[16px] text-[#9F9F9F] flex gap-7`}>
                <Image src='/facebook.png' alt='fbicon' width={20} height={20} /> 
                <Image src='/linkedin.png' alt='liicon' width={20} height={20} /> 
                <Image src='/twitter.png' alt='twicon' width={25} height={25} />
                </p> 
              </div> 
              </div>

            </div>

            </div>
        </div>
    </div>

  </div> 




    {/*        3rd component         */}
   <div className='w-full h-[950px] lg:h-[744px] border border-[#D9D9D9] bg-[#FFFFFF]'>
    
    <div className='mt-4  md:mt-14 space-y-5 md:space-y-12 px-[100px]'>

      <div className='md:flex md:justify-evenly'>

      <h2 className={`${myFonts.className} text-[24px]`}>Description</h2> 
      <h2 className={`${myFonts.className} text-[24px] text-[#9F9F9F]`}>Additional Information</h2> 
      <h2 className={`${myFonts.className} text-[24px]  text-[#9F9F9F]`}>Reviews [5]</h2> 
      </div>

       <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
       Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look <br />
       and sound of Marshall, unplugs the chords, and takes the show on the road.
       </p>   

       <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
       Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
       speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />
       and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />
       to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
       </p>

     <div className='w-full'>
      <Image src='/Double image.png' alt='doublepicture' width={1239} height={348} />
     </div>

   </div>

</div>


    {/*        4th component ---   related products        */}
<div className='w-full h-[500px] lg:h-[777px] px-3 sm:px-[20px] lg:px-[100px] bg-[#FFFFFF] border'>

          <div className='text-center pt-3 sm:pt-5 lg:pt-16'>
           <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[36px]`}>
                Related Products</h1>
           </div>

           <div className='flex gap-8 sm:pt-[50px] lg:pt-[80px]'> 

               <div className='w-full h-[250px] lg:h-[372px]'>
                    <Image src='/Mask Group.png' alt='maskpic' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                        Trenton modular sofa_3</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>

               <div className='w-full h-[250px] lg:h-[397px]'>
                    <Image src='/Mask Groupaik.png' alt='maskpic2' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                        Granite dining table with dining chair</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>
 
               <div className='w-full h-[250px] lg:h-[397px]'>
                    <Image src='/Mask Groupdo.png' alt='maskpic3' width={287} height={287} />
                    <p  className={`${myFonts.className} text-[16px]`}>
                         Outdoor bar table and stool</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>
                   
               <div className='w-full h-[250px] lg:h-[397px]'>
                    <Image src='/Mask Groupteen.png' alt='maskpic4' width={287} height={287} />
                    <p className={`${myFonts.className} text-[16px]`}>
                       Plain console with teak mirror</p>
                      <h1  className={`${myFonts.className} font-medium text-[20px] lg:text-[24px]`}>
                        Rs. 25,000.00</h1>
               </div>

                    
       </div>

               <div className='text-center'>
                <p  className={`${myFonts.className} font-medium text-[24px]`}>
                    <span className='border-b-2 border-black'>View More</span></p>
               </div>

  </div>


  <Footer />
  
</section>
  )
}

export default Product
