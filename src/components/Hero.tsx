
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("placement-stats");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/cev/CEV2.jpg" 
          alt="Department Building" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
      
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center">
            <span className="block">Department of</span>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-white to-cse-accent pb-1">
              Computer Science & Engineering
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
            To produce competent Software Professionals that are capable of 
            analyzing organizational problems, design, formulate and evaluate, 
            develop and maintain technological solutions for the betterment of the global economy.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link to="/about">
              <Button className="bg-cse-accent hover:bg-cse-accent/90 text-white font-medium px-8 py-3 rounded-md">
                Discover More
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 font-medium px-8 py-3 rounded-md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Hero;
