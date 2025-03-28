
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("facilities-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-cse to-cse-light flex items-center">
      {/* Overlay with pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-grid bg-center"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Department of</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-cse-accent">
              Computer Science & Engineering
            </span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Nurturing future tech leaders with cutting-edge education, research opportunities, 
            and industry-relevant skills at College of Engineering Vadakara.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link to="/about">
              <Button className="bg-cse-accent hover:bg-cse-accent/90 text-white font-medium px-8 py-3 rounded-md">
                Discover More
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Hero;
