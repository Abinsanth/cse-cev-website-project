
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  },
  {
    id: 6,
    name: "Sneha Reddy",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    company: "Wipro",
    batch: "2023",
    package: "₹12 LPA"
  },
  {
    id: 7,
    name: "Karthik Menon",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    company: "TCS",
    batch: "2022",
    package: "₹10 LPA"
  },
  {
    id: 8,
    name: "Divya Nair",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    company: "Infosys",
    batch: "2023",
    package: "₹11 LPA"
  }
];

const StudentProfile = ({ student }: { student: PlacedStudent }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-12 h-12 border-2 border-cse-accent">
            <AvatarImage src={student.photo} alt={student.name} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-bold">{student.name}</h3>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="font-medium text-xs">Company</TableHead>
              <TableCell className="text-sm">{student.company}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-medium text-xs">Batch</TableHead>
              <TableCell className="text-sm">{student.batch}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-medium text-xs">Package</TableHead>
              <TableCell className="text-sm font-semibold text-cse-accent">{student.package}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const PlacementProfiles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const profilesPerPage = 4;
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Placement Records
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentPage ? "bg-cse-accent" : "bg-gray-300"
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
