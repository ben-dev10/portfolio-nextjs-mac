import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import "./hero.css";
import { PieChart1 } from "./piechart";
import MenuIcon from "../../menu-icon";
import { Checkbox } from "@/components/ui/checkbox";

export function SignUpFormHeroUI({ className }: { className?: string }) {
  return (
    <div
      className={`sign-up-form-ui min-w-[260px] max-w-[320px] rounded-sm bg-[#fafafa] p-5 pb-[60px] text-[12px] dark:bg-[#FEFBFD] sm:max-w-[340px] ${className}`}
    >
      <div className="header">
        <div className="mb-3 grid grow-0 place-items-start rounded-lg bg-pink-500 p-4 shadow-md shadow-pink-200">
          <span className="rotate-12 text-[20px] font-[600] text-white">M</span>
        </div>
        <h4 className="text-[18px] font-[600] text-pink-500">Sign Up</h4>
        <p>
          Thanks for signing up to{" "}
          <span className="text-pink-500">Max Streams</span>. By signing up, you
          enjoy exclusive privileges and member-only perks.
        </p>
      </div>
      <div className="inputs mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-ui"
            checked
          />
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="name"
            placeholder="example@mail.com"
            className="input-ui"
          />
        </div>
        <div className="flex items-center gap-1 py-2 pt-3">
          <Checkbox className=" border-pink-300/50" defaultChecked aria-readonly />{" "}
          <small>
            I have read the{" "}
            <span className="text-pink-500 underline">Privacy Policy</span> and
            Terms of Service{" "}
          </small>
        </div>
        <button className="font-700 mt-3 w-full rounded-md bg-pink-500 p-1 py-2 text-pink-50">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export function DashboardHeroUI({ className }: { className?: string }) {
  return (
    <div
      className={`min-h-[300px] min-w-[350px] rounded-sm bg-zinc-50 text-[12px] text-zinc-500 dark:bg-zinc-100 ${className}`}
    >
      <div className="menu-bar mb-1 flex items-center rounded-tl-md rounded-tr-md border-b bg-zinc-100 p-2 px-5 dark:border-zinc-200 dark:bg-[#fafafa]">
        <button className="mr-auto">
          <MenuIcon />
        </button>
        <div className="">
          <div className="size-[30px] rounded-full border-[4px] border-white bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md shadow-blue-200" />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <h4 className="text-[18px] font-[600] text-zinc-800">Dashboard</h4>
          <p>Welcome back Alex </p>
        </div>
        <div className="flex gap-2">
          <div className="metrics w-[150px] border-t-[3px] border-zinc-300/60 bg-zinc-100 p-3 pb-2 pt-2 dark:bg-zinc-50">
            <small>Today&apos;s prices</small>
            <p className="text-[18px] font-[700]">$20,000</p>
            <p className="mt-1 flex items-center text-green-500">
              +25%
              <span className="inline-block">
                <ArrowUpRight size={15} />
              </span>
            </p>
          </div>
          <div className="metrics w-[150px] border-t-[3px] border-zinc-300/60 bg-zinc-100 p-3 pb-2 pt-2 dark:bg-zinc-50">
            <small>Stock prices</small>
            <p className="text-[18px] font-[700]">$18,650</p>
            <p className="mt-1 flex items-center text-red-500">
              +25%
              <span className="inline-block">
                <ArrowDownLeft size={15} />
              </span>
            </p>
          </div>
        </div>
        <div className="charts mt-3">
          <p className="font-[600]">Charts</p>
          <div className="">
            <PieChart1 />
          </div>
        </div>
      </div>
    </div>
  );
}
