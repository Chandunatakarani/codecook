import HomePage from "@/components/HomePage";
import Footer from "@/components/UI/Footer";
import LP3 from "@/components/UI/LP3";
import LP5 from "@/components/UI/LP5";
import LP6 from "@/components/UI/LP6";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      {/* <h1>What Our Learners Say</h1> */}
      <HomePage/>
      <LP3/>
       <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20">
        <div className="mt-20">

            <LP5 name="Uday Sai" role="5-star BroCoder, algorithm enthusiast, and interview coach." img="/landingImg/Profile.png"  />
        </div>
        <div className="mt-10">
            <LP5 name="Charan Kumar" role="Full-stack developer and coding mentor." img="/landingImg/Profile.png" />
        </div>
        
        <div className="mt-5 ">

                              <LP5 name="Chandu" role="Full-stack developer and coding mentor." img="/landingImg/Profile.png" />



        </div>
        
        </div>

        <LP6/>
        <Footer/>
        
      
    </div>
  );
}
