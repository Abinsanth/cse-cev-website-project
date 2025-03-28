
import { useEffect } from "react";

const Alumni = () => {
  useEffect(() => {
    // Set page title
    document.title = "Alumni - CSE Department";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const alumni = [
    {
      name: "Arjun Kumar",
      batch: "2018",
      company: "Google",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "The Department of CSE at College of Engineering Vadakara provided me with a strong foundation in computer science that has been invaluable in my career. The faculty's guidance and the practical approach to learning helped me secure a position at Google."
    },
    {
      name: "Meera Nair",
      batch: "2019",
      company: "Amazon",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial: "I'm grateful for the excellent education and mentorship I received at the CSE department. The research opportunities and industry exposure prepared me well for the challenges of working in a fast-paced tech environment at Amazon."
    },
    {
      name: "Rahul Menon",
      batch: "2017",
      company: "Microsoft",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      testimonial: "The project-based learning approach and emphasis on teamwork at the CSE department shaped me into a well-rounded professional. The skills I gained during my time there continue to help me excel in my role as a Product Manager at Microsoft."
    },
    {
      name: "Priya Sharma",
      batch: "2019",
      company: "IBM",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      testimonial: "The CSE department at CEV helped me develop not just technical skills but also soft skills that are essential in the workplace. The faculty's mentorship and the department's focus on practical learning were instrumental in my career growth at IBM."
    },
    {
      name: "Ajith Nair",
      batch: "2016",
      company: "Infosys",
      role: "Technical Lead",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      testimonial: "My time at the CSE department of CEV laid a strong foundation for my career in software development. The curriculum's balance of theory and practice prepared me well for the challenges I face as a Technical Lead at Infosys."
    },
    {
      name: "Sneha Patel",
      batch: "2018",
      company: "TCS",
      role: "Systems Analyst",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
      testimonial: "I am thankful to the CSE department for providing me with the knowledge and skills needed to succeed in the IT industry. The department's emphasis on problem-solving and analytical thinking has been particularly valuable in my role at TCS."
    },
    {
      name: "Vishnu Prasad",
      batch: "2020",
      company: "Wipro",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      testimonial: "The CSE department's focus on emerging technologies helped me stay relevant in a rapidly changing tech landscape. The practical exposure through projects and internships facilitated a smooth transition from college to my professional role at Wipro."
    },
    {
      name: "Anjali Menon",
      batch: "2017",
      company: "Accenture",
      role: "Cloud Engineer",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      testimonial: "The diverse courses offered by the CSE department and the exposure to various technologies helped me explore different areas of computer science. This exploration led me to discover my passion for cloud computing, which I now pursue at Accenture."
    },
    {
      name: "Sanjay Krishnan",
      batch: "2016",
      company: "Tech Mahindra",
      role: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      testimonial: "The CSE department's emphasis on both development and operations aspects of software engineering provided me with a holistic understanding of the field. This comprehensive knowledge has been crucial in my role as a DevOps Engineer at Tech Mahindra."
    }
  ];

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
          {alumni.map((alum, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full card-hover">
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
            <a 
              href="#" 
              className="inline-block bg-cse hover:bg-cse-light text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Register with Alumni Network
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Alumni;
