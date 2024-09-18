import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "../components/section-heading";
import WebTabContent from "./sections/web-tabcontent";
import DesignTabContent from "./sections/design-tabcontent";
import EngineeringTabContent from "./sections/engineering-tabcontent";
import TooltipUI from "../components/TooltipUI";
import { gradientText } from "@/utils/ui-helpers";

export default function Gallery() {
  return (
    <main>
      <div className="overflow-hidden bg-gray-100 dark:bg-transparent">
        <div className="wrapper container-4xl">
          <div className="relative p-4">
            <div className="header-gradient-1 -z-1 z-1 absolute -top-[20%] left-[20%] h-[400px] w-[540px] -translate-x-1/2 rotate-[360deg] dark:opacity-40 md:left-[5%]" />
            <div className="z-5 relative my-10 max-w-lg">
              <SectionHeading
                hElement="h1"
                title={
                  <span
                    className="dark:![background-image:linear-gradient(to_bottom_right,#DEBBF3,#8DB4FF)]"
                    style={gradientText(
                      "linear-gradient(to bottom, #4C1D95 20%, #7C3AED, #4C1D95 80%)",
                    )}
                  >
                    Gallery
                  </span>
                }
                subheading="This page is where I showcase a collection of all my past 
                works and where future works too will be displayed."
                align="left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 pt-3 dark:bg-[#17171A]">
        <div className="wrapper container-4xl">
          <div className="p-4">
            <Tabs defaultValue="web" className="min-h-[400px]">
              <TabsList>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <div className="">
                  <TooltipUI
                    defaultOpen={true}
                    content="Coming soon"
                    trigger={
                      <TabsTrigger value="video" disabled>
                        Video
                      </TabsTrigger>
                    }
                  />
                </div>
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
