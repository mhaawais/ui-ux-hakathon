import React from "react";
import Navbar from "@/components/navbar";
import Header from "@/components/whiteheader";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home()  {
  return(
     <div className="mt-7 bg-yellow-200">
          <h1 className="text-center">Home Page</h1>
      <Navbar />
      <Hero />
      <Footer />

      <div className="mt-7">
          <h1 className="text-center">Single-Product / Cart SideBar (page)</h1>
      <Header />
       
      <Footer />     

      </div>
      
      <div className="mt-7">
         <h1 className="text-center">Cart (page)</h1>

         <Header />

         <Footer/>
       
      </div>

     </div>
  );
} 