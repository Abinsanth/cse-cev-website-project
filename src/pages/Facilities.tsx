
import { useEffect, useState } from "react";
import { Computer, Users, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Faculty Data
const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    designation: "Professor & Head of Department",
    qualification: "Ph.D in Computer Science, Stanford University",
    experience: "15+ years of teaching and research experience",
    specialization: "Artificial Intelligence, Machine Learning",
    email: "sarah.johnson@example.com"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    photo: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=800&q=80",
    designation: "Associate Professor",
    qualification: "Ph.D in Computer Engineering, MIT",
    experience: "10+ years of teaching and industry experience",
    specialization: "Computer Networks, Cybersecurity",
    email: "michael.chen@example.com"
  },
  {
    id: 3,
    name: "Prof. Emily Rodriguez",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    designation: "Assistant Professor",
    qualification: "M.Tech in Computer Science, IIT Delhi",
    experience: "8+ years of teaching experience",
    specialization: "Web Technologies, Database Systems",
    email: "emily.rodriguez@example.com"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    designation: "Associate Professor",
    qualification: "Ph.D in Data Science, University of California",
    experience: "12+ years of research and teaching experience",
    specialization: "Big Data Analytics, Cloud Computing",
    email: "james.wilson@example.com"
  }
];

// Lab Images
const labImages = [
  { id: 1, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", caption: "Programming Lab" },
  { id: 2, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", caption: "Research Lab" },
  { id: 3, image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80", caption: "Network Lab" },
  { id: 4, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", caption: "Hardware Lab" },
  { id: 5, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", caption: "Software Development Lab" }
];

// Placement Data
const placementData = [
  {
    id: 1,
    name: "Alex Martinez",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    company: "Google",
    position: "Software Engineer",
    package: "₹24 LPA",
    year: "2023",
    testimonial: "The department provided me with excellent training and mentorship which helped me secure my dream job."
  },
  {
    id: 2,
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    company: "Microsoft",
    position: "UX Designer",
    package: "₹22 LPA",
    year: "2023",
    testimonial: "The design and development courses offered by the department gave me a competitive edge during interviews."
  },
  {
    id: 3,
    name: "David Kim",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    company: "Amazon",
    position: "Backend Developer",
    package: "₹20 LPA",
    year: "2022",
    testimonial: "The practical exposure and project-based learning approach helped me develop the skills needed for industry."
  },
  {
    id: 4,
    name: "Aisha Patel",
    photo: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=800&q=80",
    company: "TCS",
    position: "System Analyst",
    package: "₹10 LPA",
    year: "2022",
    testimonial: "The department's focus on fundamentals and industry requirements prepared me well for my role."
  }
];

const Facilities = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

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
            {selectedFaculty ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <button 
                    onClick={() => setSelectedFaculty(null)}
                    className="mb-4 text-cse hover:text-cse-accent text-sm font-medium flex items-center"
                  >
                    ← Back to all faculties
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={selectedFaculty.photo} 
                          alt={selectedFaculty.name} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold text-cse mb-2">{selectedFaculty.name}</h2>
                      <p className="text-lg text-cse-accent font-medium mb-4">{selectedFaculty.designation}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">Qualification</h3>
                          <p className="text-gray-700">{selectedFaculty.qualification}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Experience</h3>
                          <p className="text-gray-700">{selectedFaculty.experience}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Specialization</h3>
                          <p className="text-gray-700">{selectedFaculty.specialization}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Email</h3>
                          <p className="text-gray-700">{selectedFaculty.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-cse-accent mr-3" />
                  <h2 className="text-2xl font-bold text-cse">Our Faculty Members</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facultyData.map((faculty) => (
                    <div 
                      key={faculty.id} 
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedFaculty(faculty)}
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
            )}
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
                    {labImages.map((lab) => (
                      <CarouselItem key={lab.id}>
                        <div className="p-1">
                          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="h-80 overflow-hidden">
                              <img 
                                src={lab.image} 
                                alt={lab.caption} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <h3 className="text-xl font-semibold">{lab.caption}</h3>
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Programming Lab</h3>
                  <p className="text-gray-700">
                    Equipped with high-performance computers loaded with the latest development 
                    environments and programming tools for students to practice coding and problem-solving.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Network Lab</h3>
                  <p className="text-gray-700">
                    Features Cisco routers, switches, and network simulation software to help students 
                    understand network architectures, protocols, and configurations.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Research Lab</h3>
                  <p className="text-gray-700">
                    Advanced computing facilities for research in areas like artificial intelligence, 
                    machine learning, big data analytics, and cloud computing.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Placements Section */}
          <TabsContent value="placements" id="placements">
            {selectedStudent ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <button 
                    onClick={() => setSelectedStudent(null)}
                    className="mb-4 text-cse hover:text-cse-accent text-sm font-medium flex items-center"
                  >
                    ← Back to all placements
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={selectedStudent.photo} 
                          alt={selectedStudent.name} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold text-cse mb-2">{selectedStudent.name}</h2>
                      <div className="flex items-center mb-4">
                        <span className="bg-cse-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          {selectedStudent.year} Batch
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">Placed at</h3>
                          <p className="text-gray-700 text-xl">{selectedStudent.company}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Position</h3>
                          <p className="text-gray-700">{selectedStudent.position}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Package</h3>
                          <p className="text-gray-700 font-bold">{selectedStudent.package}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Testimonial</h3>
                          <p className="text-gray-700 italic">"{selectedStudent.testimonial}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-cse-accent mr-3" />
                  <h2 className="text-2xl font-bold text-cse">Our Placements</h2>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3">Placement Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-3xl font-bold text-cse">92%</p>
                      <p className="text-gray-700">Placement Rate</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-3xl font-bold text-cse">120+</p>
                      <p className="text-gray-700">Companies Visited</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-3xl font-bold text-cse">₹8 LPA</p>
                      <p className="text-gray-700">Average Package</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-3xl font-bold text-cse">₹24 LPA</p>
                      <p className="text-gray-700">Highest Package</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8">
                  Click on a student to view their detailed placement information and testimonial.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {placementData.map((student) => (
                    <div 
                      key={student.id} 
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedStudent(student)}
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
                        <p className="text-gray-600 text-sm">{student.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Facilities;
