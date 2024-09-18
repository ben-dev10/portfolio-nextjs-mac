import { ArrowUpRight, LucidePhoneCall } from "lucide-react";
import Link from "next/link";
export default function HeroCtaButton() {
  return (
    <div className="flex items-center justify-center gap-5">
      <a href="#footerSection">
        <button className="group flex h-9 select-none items-center gap-1 rounded-full bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-4 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Contact
          </span>
          <span>
            <LucidePhoneCall size={15} />
          </span>
        </button>
      </a>
      <Link
        href="/gallery"
        className="flex items-center gap-1 rounded-full border bg-white from-zinc-900 to-zinc-700 p-[6px] px-3 
        text-accent shadow-md ring-violet-300/30 hover:ring-[4px] dark:border-violet-300/50 dark:bg-gradient-to-b 
        dark:text-violet-300 dark:shadow-2xl"
      >
        See my work
        <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
