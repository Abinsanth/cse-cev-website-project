
import { useState } from "react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import FacultyCard from "./FacultyCard";
import facultyData from "@/data/facultyData.json";

const FacultiesTab = () => {
  const [showAllFaculty, setShowAllFaculty] = useState(false);
  const initialFacultyCount = 8;

  const getFacultyToDisplay = () => {
    return showAllFaculty 
      ? facultyData.faculty 
      : facultyData.faculty.slice(0, initialFacultyCount);
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Users className="w-8 h-8 text-cse-accent mr-3" />
        <h2 className="text-2xl font-bold text-cse">Our Faculty Members</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {getFacultyToDisplay().map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
      
      {!showAllFaculty && facultyData.faculty.length > initialFacultyCount && (
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => setShowAllFaculty(true)}
            className="bg-cse-accent hover:bg-cse-accent/90 text-white"
          >
            View All Faculty
          </Button>
        </div>
      )}
    </div>
  );
};

export default FacultiesTab;
