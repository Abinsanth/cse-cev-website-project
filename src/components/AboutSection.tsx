
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, X } from "lucide-react";
import departmentData from "@/data/departmentData.json";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const AboutSection = () => {
  // Display only 3 recent events on the home page
  const recentEvents = departmentData.events.slice(0, 3);
  const [selectedEvent, setSelectedEvent] = useState<(typeof departmentData.events)[0] | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Department</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Established in 2001, the Department of Computer Science & Engineering at College of Engineering Vadakara
            has been at the forefront of computer science education and research in Kerala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cse">Our Vision</h3>
            <p className="text-gray-700 mb-6 ">
              To produce competent Software Professionals that are capable of analyzing 
              organizational problems, design, formulate and evaluate, develop and maintain 
              technological solutions for the betterment of the global economy.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-cse">Our Mission</h3>
            <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2 mb-6">
              <li>Upgrading the existing software and hardware facilities in the computer centers and laboratories to match the outcomes of the programs offered.</li>
              <li>Organize need based faculty and staff development programs and encourage faculty to participate in national and international conferences. Encourage faculty to organize frequent departmental seminars and use class room seminar methods to improve abilities of the students.</li>
              <li> Sponsor faculty and staff on study leave to upgrade their qualification.</li>
              <li>Explore opportunities for development and assessment of Graduate Attributes in the co-curricular and extracurricular activities.</li>
              <li>To mould the students by inculcating the professional ethics.</li>
              <li>To prepare graduates for leadership in profession and in higher education</li>
              <li>To prepare graduates for leadership in profession and in higher education</li>
            </ul>
            
            <Link to="/about">
              <Button className="bg-cse hover:bg-cse-light text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="/assets/cev/CEV6.jpg" 
              alt="Computer Science Students" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-cse-accent/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-60 h-60 bg-cse/10 rounded-lg -z-10"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-cse">Recent Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover bg-white"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3">{event.title}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-cse-accent" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-cse-accent" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about#events" className="inline-block text-cse hover:text-cse-accent font-medium underline">
              View All Past Events
            </Link>
          </div>
        </div>
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          <div className="relative">
            <img 
              src={selectedEvent?.image}
              alt={selectedEvent?.title} 
              className="w-full h-64 object-contain"
            />
            <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{selectedEvent?.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="w-5 h-5 mr-2 text-cse-accent" />
              <span>{selectedEvent?.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="w-5 h-5 mr-2 text-cse-accent" />
              <span>{selectedEvent?.location}</span>
            </div>
            
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
