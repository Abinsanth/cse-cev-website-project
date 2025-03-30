
import { useState, useEffect } from "react";
import departmentData from "@/data/departmentData.json";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface HistoricalYear {
  year: string;
  image: string;
  summary: string;
}

const HistoricalPlacements = () => {
  useEffect(() => {
    // Set page title
    document.title = "Historical Placements - CSE Department";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-cse">Historical Placements</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Review our department's placement history. Click on any batch to view detailed placement statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentData.placements.historicalYears.map((year) => (
            <YearCard key={year.year} year={year} />
          ))}
        </div>
      </div>
    </main>
  );
};

const YearCard = ({ year }: { year: HistoricalYear }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          <div className="h-48 overflow-hidden">
            <img 
              src={year.image} 
              alt={`${year.year} Batch`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{year.year} Batch</h3>
            <p className="text-gray-600 line-clamp-2">{year.summary}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <div className="p-2">
          <img 
            src={year.image} 
            alt={`${year.year} Batch`} 
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{year.year} Placement Statistics</h2>
          <p className="text-gray-700">{year.summary}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoricalPlacements;
