
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  photo: string;
}

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-full">
          <div className="h-40 overflow-hidden">
            <img
              src={achievement.photo}
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-cse">{achievement.title}</h3>
            <p className="text-cse-accent mb-2 text-sm">{achievement.date}</p>
            <p className="text-gray-600 text-sm line-clamp-3">{achievement.description}</p>
            <div className="mt-2 text-sm text-cse-accent font-medium">Click to view details</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <div className="p-4">
          <div className="mb-4 overflow-hidden rounded-md">
            <img
              src={achievement.photo}
              alt={achievement.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-cse">{achievement.title}</h2>
          <p className="text-cse-accent mb-4">{achievement.date}</p>
          <p className="text-gray-700">{achievement.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AchievementCard;
