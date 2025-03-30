
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import alumniData from "@/data/alumniData.json";

const AlumniSection = () => {
  // Display only 3 alumni success stories on the home page
  const featuredAlumni = alumniData.alumniSuccessStories.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Alumni Success Stories</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our alumni have gone on to achieve remarkable success in their careers, working with leading
            technology companies around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAlumni.map((alum) => (
            <div key={alum.id} className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-cse-accent">
                  <img 
                    src={alum.image} 
                    alt={alum.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{alum.name}</h3>
                <p className="text-cse-accent font-medium">{alum.role} at {alum.company}</p>
                <p className="text-gray-500 text-sm">Batch of {alum.batch}</p>
              </div>
              
              <div className="relative">
                <div className="text-gray-600 italic">
                  <svg className="w-8 h-8 text-cse-accent/20 absolute top-0 left-0 -mt-4 -ml-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative z-10 text-sm pl-6">{alum.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/alumni">
            <Button className="bg-cse hover:bg-cse-light text-white">
              Meet More Alumni
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
