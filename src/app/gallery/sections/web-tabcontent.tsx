import { Tags } from "lucide-react";

function Pill({ text }: { text: string }) {
  return (
    <p className="rounded-sm bg-zinc-100 px-2 text-violet-400 dark:bg-zinc-700 dark:text-violet-300">
      #{text}
    </p>
  );
}

export default function WebTabContent() {
  return (
    <div className="web-tab-content">
      <div className="py-3">
        <h3 className="mb-2 text-[20px] font-[600]">Web Designs</h3>
        <div className="flex items-center gap-2">
          <Tags className="mr-1" />
         <Pill text="personal" />
         <Pill text="concept" />
        </div>
      </div>
    </div>
  );
}
