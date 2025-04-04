import { useState } from "react";
import { Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AchievementCard from "./AchievementCard";
import departmentData from "@/data/departmentData.json";

const CSAssociationTab = () => {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const initialAchievementsCount = 8;

  const getAchievementsToDisplay = () =>
    showAllAchievements
      ? departmentData.departmentAchievements
      : departmentData.departmentAchievements.slice(0, initialAchievementsCount);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Award className="w-8 h-8 text-cse-accent mr-3" />
        <h2 className="text-2xl font-bold text-cse">
          CS Association & Achievements
        </h2>
      </div>

      {/* Association Card */}
      <Card className="bg-gray-100 rounded-2xl shadow-md border border-gray-200 mb-12">
        <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/assets/cev/Cs_ethics.jpg"
              alt="ETHICS CS Association Logo"
              className="w-48 h-48 object-contain rounded-xl shadow"
            />
          </div>

          {/* Description */}
          <div className="md:flex-1">
            <h3 className="text-3xl font-bold text-cse mb-2">ETHICS</h3>
            <p className="text-lg text-gray-600 font-semibold mb-3">
              Computer Science Association
            </p>
            <p className="text-gray-700 leading-relaxed">
              The CS Association ETHICS is a vibrant student-led community that
              inspires innovation, learning, and collaboration. Through a wide
              range of events including workshops, coding contests, tech talks,
              and hackathons, ETHICS cultivates technical excellence and
              promotes the spirit of computer science within and beyond the
              campus.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <h3 className="text-xl font-bold text-cse">About the Association</h3>
          <Separator className="ml-4 flex-grow bg-cse-accent/30" />
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-4">
            ETHICS aims to bridge the gap between theoretical knowledge and
            practical application in the field of computer science. Our mission
            is to create opportunities for students to explore emerging
            technologies, develop leadership skills, and build a strong
            professional network.
          </p>
          <p className="text-gray-700">
            The association organizes technical workshops, coding competitions,
            industry expert talks, and project showcases throughout the academic
            year. We believe in fostering a collaborative environment where
            students can learn, grow, and innovate together.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <h3 className="text-xl font-bold text-cse">Notable Achievements</h3>
          <Separator className="ml-4 flex-grow bg-cse-accent/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {getAchievementsToDisplay().map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {!showAllAchievements &&
          departmentData.departmentAchievements.length >
            initialAchievementsCount && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => setShowAllAchievements(true)}
                className="bg-cse hover:bg-cse-light text-white font-medium transition-colors flex items-center gap-2"
              >
                View All Achievements
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
      </div>
    </div>
  );
};

export default CSAssociationTab;
