
import { useState } from "react";
import { Computer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import labData from "@/data/labData.json";

const LaboratoriesTab = () => {
  const [showAllTechnicalStaff, setShowAllTechnicalStaff] = useState(false);
  const initialTechnicalStaffCount = 4;

  const getTechnicalStaffToDisplay = () => {
    return showAllTechnicalStaff 
      ? labData.technicalStaff 
      : labData.technicalStaff.slice(0, initialTechnicalStaffCount);
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Computer className="w-8 h-8 text-cse-accent mr-3" />
        <h2 className="text-2xl font-bold text-cse">Our Laboratories</h2>
      </div>
      
      <p className="text-gray-700 mb-8 max-w-3xl">
        Our department is equipped with state-of-the-art laboratories that provide students with
        hands-on experience in various domains of computer science and engineering. These labs are
        regularly updated with the latest hardware and software to keep pace with industry standards.
      </p>
      
      <div className="mb-12">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {labData.labs.map((lab) => (
              <CarouselItem key={lab.id}>
                <div className="p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="h-80 overflow-hidden">
                      <img 
                        src={lab.image} 
                        alt={lab.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold">{lab.name}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">Technical Staff</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {getTechnicalStaffToDisplay().map((staff) => (
          <div key={staff.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={staff.photo} 
                alt={staff.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold mb-1">{staff.name}</h4>
              <p className="text-cse-accent">{staff.designation}</p>
              <p className="text-gray-600 text-sm">{staff.email}</p>
            </div>
          </div>
        ))}
      </div>
      
      {!showAllTechnicalStaff && labData.technicalStaff.length > initialTechnicalStaffCount && (
        <div className="mt-2 flex justify-center">
          <Button 
            onClick={() => setShowAllTechnicalStaff(true)}
            className="bg-cse-accent hover:bg-cse-accent/90 text-white"
          >
            View All Technical Staff
          </Button>
        </div>
      )}
    </div>
  );
};

export default LaboratoriesTab;
