
import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import placementData from "@/data/placementData.json";

const PlacementsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPlacements, setShowAllPlacements] = useState(false);
  
  const initialPlacementsCount = 8;
  const placementsPerPage = 12;
  const totalPlacements = placementData.currentYearPlacements.length;
  const totalPages = Math.ceil(totalPlacements / placementsPerPage);

  const getPlacementsToDisplay = () => {
    if (showAllPlacements) {
      const indexOfLastPlacement = currentPage * placementsPerPage;
      const indexOfFirstPlacement = indexOfLastPlacement - placementsPerPage;
      return placementData.currentYearPlacements.slice(
        indexOfFirstPlacement,
        indexOfLastPlacement
      );
    } else {
      return placementData.currentYearPlacements.slice(0, initialPlacementsCount);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const placementsSection = document.getElementById("placements");
    if (placementsSection) {
      placementsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewMoreClick = () => {
    setShowAllPlacements(true);
    setCurrentPage(1);
  };

  const paginationItems = () => {
    const items = [];
    
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          onClick={() => handlePageChange(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue;
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <GraduationCap className="w-8 h-8 text-cse-accent mr-3" />
        <h2 className="text-2xl font-bold text-cse">Our Placements</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {getPlacementsToDisplay().map((student) => (
          <div 
            key={student.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={student.photo} 
                alt={student.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
              <div className="flex items-center mb-1">
                {student.companyLogo && (
                  <div className="h-5 w-5 mr-2 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                    <img 
                      src={student.companyLogo} 
                      alt={`${student.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <p className="text-cse-accent">{student.company}</p>
              </div>
              <p className="text-gray-600 text-sm">{student.designation}</p>
            </div>
          </div>
        ))}
      </div>
      
      {!showAllPlacements ? (
        <div className="text-center mt-8">
          <Button 
            onClick={handleViewMoreClick}
            className="bg-cse text-white font-medium hover:bg-cse-dark transition-colors"
          >
            View More Placements
          </Button>
        </div>
      ) : (
        <>
          {totalPages > 1 && (
            <Pagination className="my-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>
                )}
                
                {paginationItems()}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
      
      <div className="text-center mt-8">
        <Link 
          to="/historical-placements" 
          className="inline-flex items-center px-6 py-3 bg-cse text-white font-medium rounded-md hover:bg-cse-dark transition-colors"
        >
          View Past Placements
        </Link>
      </div>
    </div>
  );
};

export default PlacementsTab;
