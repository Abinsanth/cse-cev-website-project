
import { useEffect } from "react";
import { Computer, Users, GraduationCap, Database, Server, Microscope } from "lucide-react";

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
        element.scrollIntoView({ behavior: "smooth" });
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

        {/* Faculties Section */}
        <section id="faculties" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-cse-accent mr-4" />
                <h2 className="text-3xl font-bold text-cse">Our Faculties</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Our department boasts a team of highly qualified and experienced faculty members who are 
                dedicated to providing quality education and mentorship to students. Our faculty members 
                hold advanced degrees from prestigious institutions and have extensive experience in 
                both academia and industry.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>20+ faculty members with diverse specializations</li>
                <li>60% of faculty with PhD qualifications</li>
                <li>Regular faculty development programs to stay updated with the latest technologies</li>
                <li>Active involvement in research and publication</li>
                <li>Industry collaborations and consultancy projects</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=800&q=80" 
                alt="Faculty Members" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Laboratories Section */}
        <section id="laboratories" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                alt="Computer Laboratory" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Computer className="w-10 h-10 text-cse-accent mr-4" />
                <h2 className="text-3xl font-bold text-cse">Laboratories</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Our department is equipped with modern computer laboratories that provide students 
                with hands-on experience in various aspects of computer science and engineering. 
                Each lab is designed to cater to specific areas of study and research.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programming Lab</h3>
                  <p className="text-gray-600">
                    Equipped with high-performance computers with the latest development environments 
                    and programming tools for students to practice coding and problem-solving.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Networking Lab</h3>
                  <p className="text-gray-600">
                    Features Cisco routers, switches, and network simulation software to help students 
                    understand network architectures, protocols, and configurations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Database Systems Lab</h3>
                  <p className="text-gray-600">
                    Provides access to various database management systems and tools for students to 
                    learn database design, implementation, and administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placements Section */}
        <section id="placements" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="w-10 h-10 text-cse-accent mr-4" />
                <h2 className="text-3xl font-bold text-cse">Placements</h2>
              </div>
              <p className="text-gray-700 mb-6">
                The department has an excellent placement record with students securing positions in top 
                technology companies. Our dedicated placement cell works tirelessly to provide students 
                with opportunities for internships and full-time jobs.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Placement Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-cse-accent mr-3"></span>
                    <span>92% placement rate for the 2022-23 batch</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-cse-accent mr-3"></span>
                    <span>Average package of 8 LPA for the 2022-23 batch</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-cse-accent mr-3"></span>
                    <span>Top recruiters include TCS, Infosys, Wipro, and Amazon</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-cse-accent mr-3"></span>
                    <span>Regular pre-placement training and mock interviews</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                alt="Placement Activities" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Research Labs Section */}
        <section id="research" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Research Laboratory" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Microscope className="w-10 h-10 text-cse-accent mr-4" />
                <h2 className="text-3xl font-bold text-cse">Research Labs</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Our department has dedicated research laboratories where students and faculty members 
                can pursue research in emerging areas of computer science and engineering.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Artificial Intelligence & Machine Learning Lab</h3>
                  <p className="text-gray-600">
                    Equipped with high-performance computing resources for AI/ML research, including 
                    GPU-accelerated workstations and specialized software tools.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">IoT & Embedded Systems Lab</h3>
                  <p className="text-gray-600">
                    Features various IoT devices, sensors, microcontrollers, and development boards for 
                    research in Internet of Things and embedded systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cybersecurity Research Lab</h3>
                  <p className="text-gray-600">
                    Dedicated to research in network security, cryptography, and ethical hacking with 
                    specialized tools and isolated network environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Center and Library Sections (Shortened for brevity) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section id="datacenter" className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Server className="w-10 h-10 text-cse-accent mr-4" />
              <h2 className="text-2xl font-bold text-cse">Data Center</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our department maintains a modern data center with high-performance servers, storage 
              systems, and networking equipment to support academic and research activities.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>High-performance computing cluster for research</li>
              <li>24/7 server availability for student projects</li>
              <li>Cloud infrastructure for application deployment</li>
            </ul>
          </section>

          <section id="library" className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Database className="w-10 h-10 text-cse-accent mr-4" />
              <h2 className="text-2xl font-bold text-cse">Digital Library</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our digital library provides students and faculty with access to a vast collection of 
              e-books, journals, research papers, and other educational resources.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Subscriptions to IEEE, ACM, and other digital libraries</li>
              <li>Access to research databases and journals</li>
              <li>E-books and video lectures on various subjects</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
