
import { useEffect, useState } from "react";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
import departmentData from "@/data/departmentData.json";
import { Button } from "@/components/ui/button";

const About = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  
  const initialEventsCount = 6;
  const initialGalleryCount = 8;
  
  const displayedEvents = showAllEvents ? 
    departmentData.pastEvents : 
    departmentData.pastEvents.slice(0, initialEventsCount);
    
  const displayedGallery = showAllGallery ? 
    departmentData.galleryImages : 
    departmentData.galleryImages.slice(0, initialGalleryCount);

  useEffect(() => {
    // Set page title
    document.title = "About Us - CSE Department";
    
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
        {/* Department History */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-cse">About Our Department</h1>
            <p className="max-w-3xl mx-auto text-gray-600">
              Learn about the history, mission, and achievements of the Department of Computer Science and Engineering 
              at College of Engineering Vadakara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cse">Our History</h2>
              <p className="text-gray-700 mb-4">
                The Department of Computer Science and Engineering at College of Engineering Vadakara was established 
                in 2001 with a vision to provide quality education in the field of computer science and engineering.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, the department has grown significantly in terms of infrastructure, faculty strength, 
                and academic excellence. The department started with an intake of 60 students for the B.Tech program 
                and later expanded to include M.Tech programs in Computer Science and Engineering.
              </p>
              <p className="text-gray-700">
                Today, the department stands as one of the leading computer science departments in the region, 
                known for its academic rigor, research contributions, and industry collaborations.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/cev/CEV2.jpg"
                alt="Department Building" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-cse-accent/20 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-60 h-60 bg-cse/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-20 bg-gray-100 p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cse">Our Vision</h2>
              <p className="text-gray-700">
              To be a world class technical education institute with the highest quality 
              and standards of excellence to meet the demands of business industry and 
              the community and there by to contribute to India's socio-economic progress.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cse">Our Mission</h2>
              <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2 mb-6">
              <li>Upgrading the existing software and hardware facilities in the computer centers and laboratories to match the outcomes of the programs offered.</li>
              <li>Organize need based faculty and staff development programs and encourage faculty to participate in national and international conferences. Encourage faculty to organize frequent departmental seminars and use class room seminar methods to improve abilities of the students.</li>
              <li> Sponsor faculty and staff on study leave to upgrade their qualification.</li>
              <li>Explore opportunities for development and assessment of Graduate Attributes in the co-curricular and extracurricular activities.</li>
              <li>To mould the students by inculcating the professional ethics.</li>
              <li>To prepare graduates for leadership in profession and in higher education</li>
              <li>To prepare graduates for leadership in profession and in higher education</li>
            </ul>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section id="events" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cse text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover bg-white"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-cse-accent" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-cse-accent" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {!showAllEvents && departmentData.pastEvents.length > initialEventsCount && (
            <div className="mt-12 flex justify-center">
              <Button 
                onClick={() => setShowAllEvents(true)}
                className="bg-cse hover:bg-cse-light text-white flex items-center gap-2"
              >
                View All Events <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Department Gallery */}
        <section id="gallery" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cse text-center">Department Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedGallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md card-hover">
                <img 
                  src={image} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          
          {!showAllGallery && departmentData.galleryImages.length > initialGalleryCount && (
            <div className="mt-8 flex justify-center">
              <Button 
                onClick={() => setShowAllGallery(true)}
                className="bg-cse hover:bg-cse-light text-white flex items-center gap-2"
              >
                View All Images <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Faculty Team */}
        <section id="team" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cse text-center">Our Team</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-cse-accent mr-3" />
              <h3 className="text-2xl font-semibold">Department Leadership</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="/assets/faculty/vinod.jpg" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">Dr. Vinod Pottakulath</h4>
                <p className="text-cse-accent">principal</p>
                <p className="text-sm text-gray-600 mt-2">PhD in Computer Science</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="/assets/faculty/sreena.jpg" 
                    alt="Professor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">Ms. Sreena S</h4>
                <p className="text-cse-accent">Head of the Department</p>
                <p className="text-sm text-gray-600 mt-2">M.Tech in Computer Science and Engineering</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="/assets/faculty/sayooj.jpg" 
                    alt="CS Associaation Secretary" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">Sayooj V P</h4>
                <p className="text-cse-accent">CS Associaation Secretary</p>
                <p className="text-sm text-gray-600 mt-2">S8 CSE Batch 2021-25</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
