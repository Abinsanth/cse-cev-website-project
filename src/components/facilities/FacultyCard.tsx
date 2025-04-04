
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export interface FacultyMember {
  id: number;
  name: string;
  photo: string;
  designation: string;
  email: string;
  qualification?: string;
  experience?: string;
  interests?: string[];
  publications?: string[];
  research?: string[];
  responsibilities?: string[];
}

const FacultyCard = ({ faculty }: { faculty: FacultyMember }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          <div className="h-64 overflow-hidden">
            <img 
              src={faculty.photo} 
              alt={faculty.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
            <p className="text-cse-accent mb-1">{faculty.designation}</p>
            <p className="text-gray-500 text-sm">{faculty.email}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <div className="p-2">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/3">
              <img 
                src={faculty.photo} 
                alt={faculty.name} 
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-1">{faculty.name}</h2>
              <p className="text-cse-accent text-lg mb-2">{faculty.designation}</p>
              <p className="text-gray-600 mb-2">{faculty.email}</p>
              
              {faculty.qualification && (
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-1">Qualification</h3>
                  <p className="text-gray-700">{faculty.qualification}</p>
                </div>
              )}
              
              {faculty.experience && (
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-1">Professional Experience</h3>
                  <p className="text-gray-700">{faculty.experience}</p>
                </div>
              )}
            </div>
          </div>
          
          {faculty.interests && faculty.interests.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Areas of Interest</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {faculty.interests.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
            </div>
          )}
          
          {faculty.publications && faculty.publications.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Publications</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {faculty.publications.map((pub, idx) => (
                  <li key={idx}>{pub}</li>
                ))}
              </ul>
            </div>
          )}
          
          {faculty.research && faculty.research.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Research & Consultancy</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {faculty.research.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {faculty.responsibilities && faculty.responsibilities.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Additional Responsibilities</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {faculty.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FacultyCard;
