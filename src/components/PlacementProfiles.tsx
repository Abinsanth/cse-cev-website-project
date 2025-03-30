
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import placementData from "@/data/placementData.json";

interface PlacedStudent {
  id: number;
  name: string;
  photo: string;
  company: string;
  companyLogo?: string;
  batch: string;
}

const PlacementProfiles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const profilesPerPage = 3;
  const placedStudents = placementData.recentPlacements;
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

export default PlacementProfiles;
