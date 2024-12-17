import React from 'react'
import Image from 'next/image';
import Header from '@/components/whiteheader';
import Footer from '@/components/footer';

import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'] ,weight:['400','500','600','700','800'] });


const Blog = () => {
  return (
    <section>
      <Header />


         {/*     first component blog page    */}
                                <div className='w-full relative'>
                       
                                      <Image src='/Rectangle 1.png'  alt='bgnewimage'  width={1440}  height={316}  />
                                      
                                      <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                         <Image src='/Meubel.png'  alt='vlogo'  width={77}  height={77} />
                                         <h2 className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}>
                                           Blog
                                          </h2>
                                          <div className='hidden md:flex gap-2'>
                                          <p className={`${myFonts.className} font-medium text-[16px]`}>
                                            Home
                                          </p>
                                          <Image src='/Arrow.png'  alt='rightarrow'  width={20}  height={20}  />
                                          <p className={`${myFonts.className} font-light text-[16px]`}>
                                            Blog
                                          </p>
                                          </div>
                                      </div>
                       
                                  </div>
        

                {/*        2nd component              */}                
                <div className='w-full h-full'>

                  <div className='mt-[100px] mx-[75px]'>
                     
                     <div className='flex flex-col lg:flex-row'>
                        
                        <div className='w-full lg:w-[70%]'>
                          <Image src='/Rectangle 68.png'  alt='mobilelaptop pic'  width={800}  height={500}  />
                             

                          <div className='flex gap-16 mt-5'>
                          <div className='flex gap-4'>
                          <Image src='/Vector contactus.png'  alt='contactus pic'  width={15}  height={16}  />
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              Admin</p>
                              </div>
                            <div className='flex gap-4'>
                          <Image src='/Bokk.png'  alt='bokk pic'  width={17}  height={16}  />
                          <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              14 Oct 2022</p>
                              </div>
                              <div className='flex gap-4'>
                           <Image src='/Tick.png'  alt='tick pic'  width={18}  height={18}  />
                           <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Wood</p>
                             </div>
                            </div>


                            <h2 className={`${myFonts.className} font-medium text-[30px] mt-6`}>
                              Going all-in with millennial design</h2>

                            <p className={`${myFonts.className} text-[15px] text-justify text-[#9F9F9F] mt-3`}>
                            Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do  eiusmod tempor incididunt ut labore et<br />
                            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitud<br />
                            aliquam ultrices.Morbi blandit cursus risus at ultrices mi tempus imperdiet.Libero enim sed faucibus tu<br />
                            in.Cursus mattis molestie a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesq<br />
                            ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean euismod elementum.
                            </p>
                            <p className={`${myFonts.className} text-[16px] mt-10`}><span className='border-b-2 border-black'>
                              Read more</span></p>



                            <Image src='/Page pen.png'  alt='pagepen pic'  width={800}  height={500}  className='mt-16'/>

                            
                          <div className='flex gap-16 mt-5'>
                          <div className='flex gap-4'>
                          <Image src='/Vector contactus.png'  alt='contactus pic'  width={15}  height={16}  />
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              Admin</p>
                              </div>
                            <div className='flex gap-4'>
                          <Image src='/Bokk.png'  alt='bokk pic'  width={17}  height={16}  />
                          <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              14 Oct 2022</p>
                              </div>
                              <div className='flex gap-4'>
                           <Image src='/Tick.png'  alt='tick pic'  width={18}  height={18}  />
                           <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Handmade</p>
                             </div>
                            </div>


                            <h2 className={`${myFonts.className} font-medium text-[30px] mt-6`}>
                            Exploring new ways of decorating</h2>

                            <p className={`${myFonts.className} text-[15px] text-justify text-[#9F9F9F] mt-3`}>
                            Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do  eiusmod tempor incididunt ut labore et<br />
                            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitud<br />
                            aliquam ultrices.Morbi blandit cursus risus at ultrices mi tempus imperdiet.Libero enim sed faucibus tu<br />
                            in.Cursus mattis molestie a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesq<br />
                            ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean euismod elementum.
                            </p>
                            <p className={`${myFonts.className} text-[16px] mt-10`}><span className='border-b-2 border-black'>
                              Read more</span></p>



                              <Image src='/Laptop pen.png'  alt='laptoppen pic'  width={800}  height={500}  className='mt-16'/>

                              <div className='flex gap-16 mt-5'>
                          <div className='flex gap-4'>
                          <Image src='/Vector contactus.png'  alt='contactus pic'  width={15}  height={16}  />
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              Admin</p>
                              </div>
                            <div className='flex gap-4'>
                          <Image src='/Bokk.png'  alt='bokk pic'  width={17}  height={16}  />
                          <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                              14 Oct 2022</p>
                              </div>
                              <div className='flex gap-4'>
                           <Image src='/Tick.png'  alt='tick pic'  width={18}  height={18}  />
                           <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Wood</p>
                             </div>
                            </div>


                            <h2 className={`${myFonts.className} font-medium text-[30px] mt-5`}>
                            Handmade pieces that took time to make</h2>

                            <p className={`${myFonts.className} text-[15px] text-justify text-[#9F9F9F] mt-3`}>
                            Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do  eiusmod tempor incididunt ut labore et<br />
                            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitud<br />
                            aliquam ultrices.Morbi blandit cursus risus at ultrices mi tempus imperdiet.Libero enim sed faucibus tu<br />
                            in.Cursus mattis molestie a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesq<br />
                            ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean euismod elementum.
                            </p>
                            <p className={`${myFonts.className} text-[16px] mt-10`}><span className='border-b-2 border-black'>
                              Read more</span></p>

      
      </div> 

                    <div className='pl-[75px] lg:pl-[60px] mt-14 lg:mt-0 space-y-28 '>
                                
                         <div className='space-y-10'>
                            <p className='w-full h-[60px] border rounded-[10px] border-[#9F9F9F] flex items-center justify-end'>
                             <Image src='/Searchbar.png' alt='search icon' width={19}  height={19}  className='mx-5'/>
                            </p>

                            <h2 className={`${myFonts.className} font-medium text-[24px] `}>
                            Categories</h2>

                          <div className='space-y-8'>

                            <div className='flex justify-between'>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Crafts</p>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             2</p>
                            </div>

                            <div className='flex justify-between'>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Design</p>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             8</p>
                            </div>

                            <div className='flex justify-between'>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Handmade</p>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             7</p>
                            </div>

                            <div className='flex justify-between'>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Interior</p>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             1</p>
                            </div>

                            <div className='flex justify-between'>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             Wood</p>
                             <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                             6</p>
                            </div>

                      
                           </div>

                         </div> 


                         <div className='space-y-12'>
                             
                           <h2 className={`${myFonts.className} font-medium text-[24px] `}>
                           Recent Posts</h2>

                          <div className='space-y-9'>

                           <div className='flex items-center gap-4'>
                            <Image src='/Rectangle 69.png' alt='small pic' width={80} height={80}  />
                               <div className='space-y-1'>
                               <p className={`${myFonts.className} text-[14px]`}>
                               Going all-in with <br />
                               millennial design</p>
                               <p className={`${myFonts.className} text-[12px] text-[#9F9F9F]`}>
                               03 Aug 2022</p>
                               </div>
                              
                           </div>


                           <div className='flex items-center gap-4'>
                            <Image src='/Hand.png' alt='hand pic' width={80} height={80}  />
                               <div className='space-y-1'>
                               <p className={`${myFonts.className} text-[14px]`}>
                               Exploring new ways <br />
                               of decorating
                                </p>
                               <p className={`${myFonts.className} text-[12px] text-[#9F9F9F]`}>
                               03 Aug 2022</p>
                               </div>
                              
                           </div>


                           <div className='flex items-center gap-4'>
                            <Image src='/Pieces.png' alt='pieces pic' width={80} height={80}  />
                               <div className='space-y-1'>
                               <p className={`${myFonts.className} text-[14px]`}>
                               Handmade pieces <br />
                               that took time to make
                               </p>
                               <p className={`${myFonts.className} text-[12px] text-[#9F9F9F]`}>
                               03 Aug 2022</p>
                               </div>
                              
                           </div>


                           <div className='flex items-center gap-4'>
                            <Image src='/Homemade.png' alt='home pic' width={80} height={80}  />
                               <div className='space-y-1'>
                               <p className={`${myFonts.className} text-[14px]`}>
                               Modern home in <br />
                               Milan
                               </p>
                               <p className={`${myFonts.className} text-[12px] text-[#9F9F9F]`}>
                               03 Aug 2022</p>
                               </div>
                              
                           </div>


                           <div className='flex items-center gap-4'>
                            <Image src='/Redesign.png' alt='design pic' width={80} height={80}  />
                               <div className='space-y-1'>
                               <p className={`${myFonts.className} text-[14px]`}>
                               Colorful office <br />
                               redesign
                               </p>
                               <p className={`${myFonts.className} text-[12px] text-[#9F9F9F]`}>
                               03 Aug 2022</p>
                               </div>
                              
                           </div>


                          </div>

                         </div> 

                    </div>

      </div>
      </div>                 

                      <div className='gap-10 flex justify-center mt-20'>
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

export default Blog
