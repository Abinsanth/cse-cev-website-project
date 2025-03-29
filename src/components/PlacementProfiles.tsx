
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface PlacedStudent {
  id: number;
  name: string;
  photo: string;
  company: string;
  batch: string;
  package: string;
}

const placedStudents: PlacedStudent[] = [
  {
    id: 1,
    name: "Arun Kumar",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    company: "Microsoft",
    batch: "2023",
    package: "₹18.5 LPA"
  },
  {
    id: 2,
    name: "Priya Singh",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    company: "Amazon",
    batch: "2023",
    package: "₹22 LPA"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    company: "Google",
    batch: "2022",
    package: "₹24 LPA"
  },
  {
    id: 4,
    name: "Anjali Patel",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    company: "Adobe",
    batch: "2023",
    package: "₹17 LPA"
  },
  {
    id: 5,
    name: "Vikram Mehta",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    company: "IBM",
    batch: "2022",
    package: "₹15.5 LPA"
  }
];

const StudentProfile = ({ student }: { student: PlacedStudent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img 
                src={student.photo} 
                alt={student.name} 
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-bold mb-2">{student.name}</h3>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHead className="font-medium">Company</TableHead>
                    <TableCell>{student.company}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Batch</TableHead>
                    <TableCell>{student.batch}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Package</TableHead>
                    <TableCell>{student.package}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PlacementProfiles = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileIndex((prevIndex) => 
        prevIndex === placedStudents.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change profile every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Placement Success Stories
        </h2>
        <div className="max-w-4xl mx-auto">
          <StudentProfile student={placedStudents[currentProfileIndex]} />
          
          <div className="flex justify-center mt-6 gap-2">
            {placedStudents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProfileIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentProfileIndex ? "bg-cse-accent" : "bg-gray-300"
                }`}
                aria-label={`View profile ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementProfiles;
