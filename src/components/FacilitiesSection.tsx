
import { Link } from "react-router-dom";
import { Users, Computer, GraduationCap, Award } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Faculties",
      description: "Learn from our highly qualified faculty with industry experience.",
      icon: <Users className="w-10 h-10 text-cse-accent" />,
      link: "/facilities?tab=faculties"
    },
    {
      title: "Laboratories",
      description: "State-of-the-art computer labs with the latest hardware and software.",
      icon: <Computer className="w-10 h-10 text-cse-accent" />,
      link: "/facilities?tab=laboratories"
    },
    {
      title: "Placements",
      description: "Strong industry connections ensuring excellent placement opportunities.",
      icon: <GraduationCap className="w-10 h-10 text-cse-accent" />,
      link: "/facilities?tab=placements"
    },
    {
      title: "CS Association",
      description: "Student-led initiatives, events, competitions, and department achievements.",
      icon: <Award className="w-10 h-10 text-cse-accent" />,
      link: "/facilities?tab=cs-association"
    }
  ];

  return (
    <section id="facilities-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cse">Our Facilities</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            The Department of Computer Science & Engineering offers world-class facilities to
            ensure that our students receive the best education and practical experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <Link key={index} to={facility.link} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full card-hover">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/facilities" className="inline-block bg-cse hover:bg-cse-light text-white font-medium px-6 py-3 rounded-md transition-colors">
            Explore All Facilities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
