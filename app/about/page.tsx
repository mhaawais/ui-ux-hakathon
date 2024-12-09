import React from 'react';
import Header from '@/components/whiteheader';
import Footer from '@/components/footer';

import { Poppins } from 'next/font/google';

const myFonts = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const AboutUs = () => {
  return (
    
    //  sir this section is made by chatgpat because its not part of design but i considered  it to make my buttons responsive linking to show only,
    
    <section className='w-full bg-[#F8F8F8] py-16 px-6 md:px-12 lg:px-24'>

      <Header />

      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12'>
        {/* Text Section */}
        <div className='w-full md:w-1/2'>
          <h2 className={`${myFonts.className} text-3xl md:text-4xl font-bold text-gray-800 mb-6`}>
            About <span className='text-[#D97706]'>Us</span>
          </h2>
          <p className={`${myFonts.className} text-gray-600 leading-relaxed mb-4`}>
            At <strong>House</strong>, we are dedicated to offering premium quality furniture that combines style, comfort, and durability. From cozy sofas to elegant dining sets, we curate pieces that make your home truly special.
          </p>
          <p className={`${myFonts.className} text-gray-600 leading-relaxed mb-4`}>
            Our mission is to provide you with furniture that transforms your living spaces into havens of comfort and sophistication. With years of experience and a passion for craftsmanship, we ensure every piece meets the highest standards.
          </p>
          <p className={`${myFonts.className} text-gray-600 leading-relaxed`}>
            Discover furniture that fits your style and budget, and experience unparalleled customer service with us.
          </p>
        </div>
      </div>

      <Footer />

    </section>
  );
};

export default AboutUs;
