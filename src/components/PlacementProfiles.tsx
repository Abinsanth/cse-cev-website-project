
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface PlacedStudent {
  id: number;
  name: string;
  photo: string;
  company: string;
  companyLogo?: string;
  batch: string;
}

const placedStudents: PlacedStudent[] = [
  {
    id: 1,
    name: "Arun Kumar",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    company: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    batch: "2022-23 Batch"
  },
  {
    id: 2,
    name: "Priya Singh",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    company: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    batch: "2022-23 Batch"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    company: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
    batch: "2021-22 Batch"
  },
  {
    id: 4,
    name: "Anjali Patel",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    company: "Adobe",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Electronic_Arts.svg/1280px-Adobe_Electronic_Arts.svg.png",
    batch: "2022-23 Batch"
  },
  {
    id: 5,
    name: "Vikram Mehta",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    company: "IBM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
    batch: "2021-22 Batch"
  },
  {
    id: 6,
    name: "Sneha Reddy",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    company: "Wipro",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
    batch: "2022-23 Batch"
  }
];

const StudentProfile = ({ student }: { student: PlacedStudent }) => {
  return (
    <Card className="h-full bg-white border-0 rounded-md shadow-md">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 border-2 border-cse-accent mb-4">
          <AvatarImage src={student.photo} alt={student.name} className="object-cover" />
          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <h3 className="text-xl font-bold mb-1 text-gray-800">{student.name}</h3>
        <p className="text-gray-500 mb-4">{student.batch}</p>
        
        {student.companyLogo ? (
          <div className="mt-auto h-12 flex items-center justify-center">
            <img 
              src={student.companyLogo} 
              alt={`${student.company} logo`} 
              className="max-h-10 max-w-[120px] object-contain" 
            />
          </div>
        ) : (
          <div className="mt-auto">
            <p className="font-medium text-gray-700">{student.company}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const PlacementProfiles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const profilesPerPage = 3; // Changed from 4 to 3
  const totalPages = Math.ceil(placedStudents.length / profilesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const currentProfiles = placedStudents.slice(
    currentPage * profilesPerPage,
    (currentPage + 1) * profilesPerPage
  );

  return (
    <section className="py-16 bg-cse-accent text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Placement Records
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {currentProfiles.map((student) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <StudentProfile student={student} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`View page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementProfiles;
