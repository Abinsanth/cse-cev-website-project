
import Hero from "@/components/Hero";
import PlacementStats from "@/components/PlacementStats";
import FacilitiesSection from "@/components/FacilitiesSection";
import AboutSection from "@/components/AboutSection";
import AlumniSection from "@/components/AlumniSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "CSE Department - College of Engineering Vadakara";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <div id="placement-stats">
        <PlacementStats />
      </div>
      <FacilitiesSection />
      <AboutSection />
      <AlumniSection />
      <ContactSection />
    </main>
  );
};

export default Index;
