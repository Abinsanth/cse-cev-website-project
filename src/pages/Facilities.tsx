
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "react-router-dom";
import FacultiesTab from "@/components/facilities/FacultiesTab";
import LaboratoriesTab from "@/components/facilities/LaboratoriesTab";
import PlacementsTab from "@/components/facilities/PlacementsTab";
import CSAssociationTab from "@/components/facilities/CSAssociationTab";

const Facilities = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tabFromQuery = queryParams.get('tab');
  
  const [activeTab, setActiveTab] = useState(tabFromQuery || "faculties");
  
  useEffect(() => {
    document.title = "Facilities - CSE Department";
    window.scrollTo(0, 0);
    
    // Handle URL hash or tab from query parameter
    if (tabFromQuery) {
      setActiveTab(tabFromQuery);
    } else {
      const { hash } = window.location;
      if (hash) {
        const id = hash.substring(1);
        if (["faculties", "laboratories", "placements", "cs-association"].includes(id)) {
          setActiveTab(id);
        }
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [tabFromQuery]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL with the tab value
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('tab', value);
    window.history.replaceState(null, '', `${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-cse">Our Facilities</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            The Department of Computer Science & Engineering is equipped with state-of-the-art 
            facilities to provide students with an excellent learning environment.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full mb-16">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="faculties" className="px-8 py-3">Faculties</TabsTrigger>
            <TabsTrigger value="laboratories" className="px-8 py-3">Laboratories</TabsTrigger>
            <TabsTrigger value="placements" className="px-8 py-3">Placements</TabsTrigger>
            <TabsTrigger value="cs-association" className="px-8 py-3">CS Association</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faculties" id="faculties">
            <FacultiesTab />
          </TabsContent>
          
          <TabsContent value="laboratories" id="laboratories">
            <LaboratoriesTab />
          </TabsContent>
          
          <TabsContent value="placements" id="placements">
            <PlacementsTab />
          </TabsContent>
          
          <TabsContent value="cs-association" id="cs-association">
            <CSAssociationTab />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Facilities;
