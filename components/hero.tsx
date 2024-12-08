import React from 'react'
import Image from 'next/image';
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

          <div className='w-full h-[300px] md:h-[500px] lg:h-[672px]'>
               <Image src='/Group 10.png' alt='tables' height={672} width={1440}  />
          </div>
             
          <div className='w-full h-[300px] md:h-[500px] lg:h-[777px]'>
               <Image src='/Group 19.png' alt='tables2' height={777} width={1440}  />
          </div>

          <div className='w-full h-[300px] md:h-[500px] lg:h-[750px]'>
               <Image src='/Group 23.png' alt='tables2sofas' height={750} width={1440}  />
          </div>

          <div className='w-full h-[300px] md:h-[500px] lg:h-[944px]'>
               <Image src='/Group 54.png' alt='tables2new' height={944} width={1440}  />
          </div>

          <div className='w-full h-[200px] md:h-[300px] lg:h-[450px]'>
               <Image src='/Group 47.png' alt='tables2old' height={450} width={1440}  />
          </div>

    </section>
  )
}

export default Hero

