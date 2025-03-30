
import { useEffect, useState } from "react";
import { Computer, Users, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import departmentData from "@/data/departmentData.json";

const Facilities = () => {
  useEffect(() => {
    // Set page title
    document.title = "Facilities - CSE Department";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Scroll to section if hash in URL
    const { hash } = window.location;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-cse">Our Facilities</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            The Department of Computer Science & Engineering is equipped with state-of-the-art 
            facilities to provide students with an excellent learning environment.
          </p>
        </div>

        <Tabs defaultValue="faculties" className="w-full mb-16">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="faculties" className="px-8 py-3">Faculties</TabsTrigger>
            <TabsTrigger value="laboratories" className="px-8 py-3">Laboratories</TabsTrigger>
            <TabsTrigger value="placements" className="px-8 py-3">Placements</TabsTrigger>
          </TabsList>
          
          {/* Faculties Section */}
          <TabsContent value="faculties" id="faculties">
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-cse-accent mr-3" />
                <h2 className="text-2xl font-bold text-cse">Our Faculty Members</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentData.faculty.map((faculty) => (
                  <div 
                    key={faculty.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={faculty.photo} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
                      <p className="text-cse-accent">{faculty.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Laboratories Section */}
          <TabsContent value="laboratories" id="laboratories">
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
                    {departmentData.labs.map((lab) => (
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
              
              <h3 className="text-xl font-semibold mb-4">Lab Assistants</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {departmentData.labAssistants.map((assistant) => (
                  <div key={assistant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={assistant.photo} 
                        alt={assistant.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-semibold mb-1">{assistant.name}</h4>
                      <p className="text-gray-600">{assistant.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Placements Section */}
          <TabsContent value="placements" id="placements">
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-cse-accent mr-3" />
                <h2 className="text-2xl font-bold text-cse">Our Placements</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {departmentData.placements.currentYear.map((student) => (
                  <div 
                    key={student.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={student.photo} 
                        alt={student.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
                      <p className="text-cse-accent">{student.company}</p>
                      <p className="text-gray-600 text-sm">{student.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  to="/historical-placements" 
                  className="inline-flex items-center px-6 py-3 bg-cse text-white font-medium rounded-md hover:bg-cse-dark transition-colors"
                >
                  View Past Placements
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Facilities;
