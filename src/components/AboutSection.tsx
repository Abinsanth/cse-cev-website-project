
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const pastEvents = [
    {
      title: "National Conference on Advanced Computing",
      date: "March 15-17, 2023",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Workshop on Artificial Intelligence",
      date: "January 10, 2023",
      location: "Conference Hall",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industry-Academia Meet",
      date: "November 5, 2022",
      location: "Seminar Hall",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
    }
  ];

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
            <p className="text-gray-700 mb-6">
              To become a center of excellence in Computer Science and Engineering education, 
              producing competent professionals with sound technical knowledge, ethical values, 
              and a commitment to serve society through innovation.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-cse">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>To provide quality education incorporating the latest technological advancements</li>
              <li>To cultivate research aptitude among students and faculty</li>
              <li>To develop industry-ready professionals with strong technical and soft skills</li>
              <li>To foster entrepreneurship and innovation in computing technologies</li>
            </ul>
            
            <Link to="/about">
              <Button className="bg-cse hover:bg-cse-light text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
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
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
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
    </section>
  );
};

export default AboutSection;
