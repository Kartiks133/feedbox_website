'use client';

// import About from "@/components/About";
// import Events from "@/components/Events";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
import Login from "@/components/Login";
// import Navbar from "@/components/Navbar";
// import Services from "@/components/Services";
import Signup from "@/components/Signup";
// import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (  
    <div>
      {/* <Navbar/> */}

      {/* comment out other compoennts and uncomment the one you want to test */}
      <Login/>
      <Signup/>

      
      {/* <Hero/>  
      <About />
      <Services/>
      <Events/>
      <Team/>
      <Testimonials/>
      <Footer /> */}
    </div>
  );
}
