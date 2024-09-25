import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "../components/section-heading";
import { ResourcesTabcontent } from "./sections/resources-tabcontent";
import { SnippetsTabcontent } from "./sections/snippets-tabcontent";

export default function Resources() {
  return (
    <main>
      <div className="bg-gray-100 dark:bg-transparent">
        <div className="wrapper container-4xl">
          <div className="" />
          <div className="p-4">
            <div className="my-10 max-w-lg">
              <SectionHeading
                hElement="h1"
                title="Resources"
                subheading="Useful links, design assets, code snippets and more."
                align="left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 pt-3 dark:bg-neutral-900">
        <div className="wrapper container-4xl">
          <div className="p-4">
            <Tabs defaultValue="resources" className="min-h-[400px]">
              <TabsList>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="snippets">Snippets</TabsTrigger>
              </TabsList>
              <TabsContent value="resources">
                <ResourcesTabcontent />
              </TabsContent>
              <TabsContent value="snippets">
                <SnippetsTabcontent />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
