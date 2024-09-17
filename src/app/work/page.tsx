import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "../components/section-heading";
import { ResumeTabcontent } from "./sections/resume-tabcontent";
import { DocumentsTabcontent } from "./sections/documents-tabcontent";
import ContactTabcontent from "./sections/contact-tabcontent";

export default function Work() {
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
            <Tabs defaultValue="resume" className="min-h-[400px]">
              <TabsList>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              <TabsContent value="resume">
                <ResumeTabcontent />
              </TabsContent>
              <TabsContent value="documents">
                <DocumentsTabcontent />
              </TabsContent>
              <TabsContent value="contact">
                <ContactTabcontent />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
