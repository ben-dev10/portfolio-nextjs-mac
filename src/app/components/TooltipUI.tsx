import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import React from "react";

const TooltipUI = ({
  trigger,
  content,
  sideOffset,
}: {
  trigger: string | React.ReactNode;
  content: string | React.ReactNode;
  sideOffset?: number;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span> {trigger}</span>
        </TooltipTrigger>
        <TooltipContent sideOffset={sideOffset}>
          <p>{content}</p>
        </TooltipContent>
        {/* <TooltipArrow /> */}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipUI;
