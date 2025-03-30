
import { useEffect } from "react";
import { Link } from "react-router-dom";
import alumniData from "@/data/alumniData.json";

const Alumni = () => {
  useEffect(() => {
    // Set page title
    document.title = "Alumni - CSE Department";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-cse">Our Alumni</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our alumni are our pride and have gone on to achieve remarkable success in their careers.
            Here are some testimonials from our distinguished alumni.
          </p>
        </div>

        {/* Alumni Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.alumniSuccessStories.map((alum) => (
            <div key={alum.id} className="bg-white rounded-lg shadow-md p-6 h-full card-hover">
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

        {/* Alumni Network */}
        <div className="mt-20 bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cse">Join Our Alumni Network</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              We value our alumni and want to stay connected with you. Join our alumni network to:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cse-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-cse-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-600">
                Keep in touch with your classmates, faculty, and the department through regular updates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cse-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-cse-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship Programs</h3>
              <p className="text-gray-600">
                Share your knowledge and experience with current students through mentorship programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cse-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-cse-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
              <p className="text-gray-600">
                Connect with fellow alumni for professional networking and collaboration opportunities.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/alumni/register" 
              className="inline-block bg-cse hover:bg-cse-light text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Register with Alumni Network
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Alumni;
