import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "../components/section-heading";
import WebTabContent from "./sections/web-tabcontent";
import DesignTabContent from "./sections/design-tabcontent";
import EngineeringTabContent from "./sections/engineering-tabcontent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const VideoToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span> Video</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming Soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function Gallery() {
  return (
    <main>
      <div className="bg-gray-100 dark:bg-transparent">
        <div className="wrapper container-4xl">
          <div className="" />
          <div className="p-4">
            <div className="my-10 max-w-lg">
              <SectionHeading
                hElement="h1"
                title="Gallery"
                subheading="This page is where I showcase a collection of all my past 
                works and where future works too will be displayed."
                align="left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 pt-3 dark:bg-neutral-900">
        <div className="wrapper container-4xl">
          <div className="p-4">
            <Tabs defaultValue="web" className="min-h-[400px]">
              <TabsList>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="video" inert>
                  <VideoToolTip />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="web">
                <WebTabContent />
              </TabsContent>
              <TabsContent value="design">
                <DesignTabContent />
              </TabsContent>
              <TabsContent value="engineering">
                <EngineeringTabContent />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
