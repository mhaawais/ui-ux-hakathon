import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });

const Hero = () => {
  return (
    <section className='main'>

        <div className='w-full h-[600px] lg:h-[800px] xl:h-[900px] bg-[#FBEBB5]'>

           <div className=' h-[170px] lg:h-[276px] pt-[200px] lg:pt-[350px] ml-[100px] lg:ml-[200px]'>

                    <h1  className={`${myFonts.className} font-medium text-[40px] lg:text-[64px]`}>
                        Rocket single <br />seater</h1>
                      <p  className={`${myFonts.className} font-medium text-[24px] pt-5`}>
                        <span className='border-b-2 border-black'>Shop Now</span></p>
             </div>
             <div className='relative hidden md:flex md:flex-col lg:mb-[-280px] lg:ml-[300px] '>
                   <Image src='/Rocket single seater 1.png' alt='sofa' height={600} width={650}
                     className='relative translate-x-[300px] translate-y-[-280px]' />
             </div>

      </div>

         <div className='bg-[#FAF4F4] w-full h-[500px] lg:h-[672px] px-3 sm:px-[20px] lg:px-[100px] flex items-center'>

          <div className='w-full h-[420px] lg:h-[562px]'>
               <Image src='/Granite square side table 12.png' alt='tablepic' width={605} height={386}  />
               <div className='pl-[80px]'>
               <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[36px]`}>
               Side table</h1>
               <p  className={`${myFonts.className} font-medium text-[24px]`}>
               <span className='border-b-2 border-black'>View More</span></p>
               </div>
          </div>
            
          <div className='pl-7 w-full h-[420px] lg:h-[562px]'>
               <Image src='/Seater1.png' alt='sofapic' width={605} height={357}   />
               <div className='pl-[30px] lg:pl-[80px]'>
               <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[36px]`}>
               Side table</h1>
               <p  className={`${myFonts.className} font-medium text-[24px]`}>
               <span className='border-b-2 border-black'>View More</span></p>
               </div>
          </div>
     </div>



     <div className='w-full h-[500px] lg:h-[777px] px-3 sm:px-[20px] lg:px-[100px] bg-[#FFFFFF]'>

          <div className='text-center pt-3 sm:pt-5 lg:pt-16'>
           <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[36px]`}>
                Top Picks For You</h1>
           <p  className={`${myFonts.className} font-medium text-[16px]  text-[#9F9F9F]`}>
               Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
           </p>
           </div>

           <div className='flex gap-8 sm:pt-[50px] lg:pt-[100px]'> 

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



     <div className='w-full h-[300px] sm:h-[400px] lg:h-[639px] bg-[#FFF9E5] flex items-center'>

          <div className='image'>
                <Image src='/Asgaard sofa 12.png' alt='new sofa' width={883} height={603}   />
          </div>

          <div className='text-center'>

          <p  className={`${myFonts.className} font-medium text-[24px]`}>
             New Arrivals</p>
           <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[48px]`}>
              Asgaard sofa
           </h2>
            <button className='solid border-2 border-black'><Link href='/product' target='_blank' className={`${myFonts.className} text-[20px] px-10 py-3`}>
              Order Now</Link></button>
               
          </div>

     </div>



   <div className='w-full h-[600px] lg:h-[900px]  px-3 sm:px-[20px] lg:px-[100px] bg-[#FFFFFF]'>

          <div className='text-center pt-3 sm:pt-5 lg:pt-16'>
             <h1  className={`${myFonts.className} font-medium text-[24px] lg:text-[36px]`}>
                    Our Blogs</h1>
           <p  className={`${myFonts.className} font-medium text-[16px]  text-[#9F9F9F]`}>
               Find a bright ideal to suit your taste with our great selection
             </p>
          </div>

     
       <div className='flex gap-5 pt-4 sm:pt-[40px] lg:pt-[70px]'> 

               <div className='w-full h-[370px] lg:h-[555px] md:space-y-5 grid place-items-center'>
                  <Image src='/Rectangle 13.png' alt='keyboardpic' width={393} height={393}  />
                    <p  className={`${myFonts.className} text-[20px]`}>
                       Going all-in with millennial design</p>
                    <p  className={`${myFonts.className} font-medium text-[24px]`}>
                        <span className='border-b-2 border-black'>Read More</span></p>
                    <Image src='/Group 37.png' alt='laptopglass' width={223}  height={24}/>
               </div>

               <div className='w-full h-[370px] lg:h-[555px] md:space-y-5 grid place-items-center'>
                  <Image src='/Rectangle 14.png' alt='glasslaptop' width={393} height={393} />
                    <p  className={`${myFonts.className} text-[20px]`}>
                       Going all-in with millennial design</p>
                    <p  className={`${myFonts.className} font-medium text-[24px]`}>
                        <span className='border-b-2 border-black'>Read More</span></p>
                    <Image src='/Group 37.png' alt='laptopglass' width={223}  height={24}  />
               </div>
 
               <div className='w-full h-[370px] lg:h-[555px] md:space-y-5 grid place-items-center'>
                  <Image src='/Rectangle 15.png' alt='mouselaptop' width={393} height={393} />
                    <p  className={`${myFonts.className} text-[20px]`}>
                       Going all-in with millennial design</p>
                    <p  className={`${myFonts.className} font-medium text-[24px]`}>
                        <span className='border-b-2 border-black'>Read More</span></p>
                    <Image src='/Group 37.png' alt='laptopglass' width={223}  height={24}  />
               </div>

        </div>

                <div className='text-center mt-1 sm:mt-2 lg:mt-10'>

                <button><Link href='/blog'  target='_blank'  className={`${myFonts.className} font-medium text-[20px] border-b-2 border-black`}>
                  View All Post </Link></button>

                 </div>

  </div>  


     <div className='w-full relative'>
     
         <Image src='/Group 43.png' alt='bgimage' width={1440} height={450}  />

            <div className='absolute inset-0 flex flex-col justify-center items-center'>

               <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[48px] lg:text-[60px]`}>
                  Our Instagram
                </h2>
                <p className={`${myFonts.className} text-[20px]`}>
                   Follow our store on Instagram
                </p>
                <button className='bg-[#FAF4F4] border-4 border-solid rounded-[50px]'>  
                   <p className={`${myFonts.className} text-[20px] px-12 py-3`}>
                     Follow Us
                   </p> </button>
              
              </div>

     </div>
               

</section>
  )
}

export default Hero

