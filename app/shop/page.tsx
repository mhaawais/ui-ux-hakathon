import React from 'react'
import Image from 'next/image'
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'

const Shop = () => {
  return (

    <section>

        <Header />
        
           <div className='w-full h-[150px] md:h-[200px] lg:h-[316px]'>
               <Image src='/Group 78.png' alt='shop' height={316} width={1440}  />
          </div>

          <div className='w-full h-[30px] md:h-[50px] lg:h-[100px]'>
               <Image src='/Group 63.png' alt='pic' height={100} width={1440}  />
          </div>

          <div className='w-full h-[800px] md:h-[1200px] lg:h-[1808px]'>
               <Image src='/Group 83.png' alt='logo' height={1808} width={1440}  />
          </div>
   
          <div className='w-full h-[170px] md:h-[230px] lg:h-[300px]'>
               <Image src='/Group 76.png' alt='logo' height={300} width={1440}  />
          </div>
         
       <Footer />
      
    </section>
  )
}

export default Shop
