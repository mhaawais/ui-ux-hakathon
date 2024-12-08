import React from 'react'
import Image from 'next/image'
import Header from '@/components/whiteheader'
import Footer from '@/components/footer'

const Contact = () => {
  return (
    <section>

      <Header />
 
         <div className='w-full h-[180px] md:h-[220px] lg:h-[316px]'>
               <Image src='/Group 100.png' alt='Contactuspic' height={316} width={1440}  />
          </div>

          <div className='w-full h-[700px] md:h-[900px] lg:h-[1144px]'>
               <Image src='/Group 162.png' alt='uspic' height={1144} width={1440}  />
          </div>
  
          <div className='w-full h-[110px] md:h-[200px] lg:h-[300px]'>
               <Image src='/Group 76.png' alt='usipic' height={300} width={1440}  />
          </div>

           
       <Footer /> 
    </section>
  )
}

export default Contact
