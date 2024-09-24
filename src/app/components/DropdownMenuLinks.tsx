import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DropdownMenuLinks({
  trigger,
  links,
}: {
  trigger: string | React.ReactNode;
  dropdownLabel?: string;
  links: {
    label: string;
    url: string;
  }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className=""
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="group flex items-center gap-[3px] outline-none">
          {trigger} <ChevronDown size={18} />{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[999999] " sideOffset={2}>
          {links.map((link, index) => (
            <DropdownMenuItem>
              <Link
                className="w-full hover:text-white"
                href={link.url}
                key={index}
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
