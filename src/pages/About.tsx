
import { useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const About = () => {
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

  const pastEvents = [
    {
      title: "National Conference on Advanced Computing",
      date: "March 15-17, 2023",
      location: "Main Auditorium",
      description: "A three-day conference featuring keynote speeches, paper presentations, and panel discussions on various aspects of advanced computing.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Workshop on Artificial Intelligence",
      date: "January 10, 2023",
      location: "Conference Hall",
      description: "A hands-on workshop on AI applications, machine learning algorithms, and deep learning techniques conducted by industry experts.",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industry-Academia Meet",
      date: "November 5, 2022",
      location: "Seminar Hall",
      description: "An interactive session between industry professionals and academia to bridge the gap between theoretical knowledge and industry requirements.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hackathon: Code for Change",
      date: "September 20-21, 2022",
      location: "Computer Labs",
      description: "A 24-hour coding competition where students developed innovative solutions for real-world problems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Technical Symposium: TechVista 2022",
      date: "August 12-13, 2022",
      location: "College Campus",
      description: "An annual technical symposium featuring coding competitions, paper presentations, and technical quiz competitions.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Workshop on Cybersecurity",
      date: "July 5, 2022",
      location: "Seminar Hall",
      description: "A workshop on ethical hacking, network security, and cybersecurity best practices conducted by security experts.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=800&q=80"
  ];

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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                alt="Department Building" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-cse-accent/20 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-60 h-60 bg-cse/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-20 bg-gray-50 p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cse">Our Vision</h2>
              <p className="text-gray-700">
                To become a center of excellence in Computer Science and Engineering education, producing 
                competent professionals with sound technical knowledge, ethical values, and a commitment 
                to serve society through innovation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cse">Our Mission</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide quality education incorporating the latest technological advancements</li>
                <li>To cultivate research aptitude among students and faculty</li>
                <li>To develop industry-ready professionals with strong technical and soft skills</li>
                <li>To foster entrepreneurship and innovation in computing technologies</li>
                <li>To inculcate ethical values and social responsibility among students</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section id="events" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cse text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
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
        </section>

        {/* Department Gallery */}
        <section id="gallery" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cse text-center">Department Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md card-hover">
                <img 
                  src={image} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
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
                    src="https://randomuser.me/api/portraits/men/42.jpg" 
                    alt="HOD" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">Dr. Anand Kumar</h4>
                <p className="text-cse-accent">Head of Department</p>
                <p className="text-sm text-gray-600 mt-2">PhD in Computer Science</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/42.jpg" 
                    alt="Professor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">Dr. Meera Nair</h4>
                <p className="text-cse-accent">Professor</p>
                <p className="text-sm text-gray-600 mt-2">PhD in Data Science</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/46.jpg" 
                    alt="Associate Professor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">Dr. Rahul Menon</h4>
                <p className="text-cse-accent">Associate Professor</p>
                <p className="text-sm text-gray-600 mt-2">PhD in Network Security</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
