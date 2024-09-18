import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipUI = ({
  trigger,
  content,
  sideOffset,
  defaultOpen,
}: {
  trigger: string | React.ReactNode;
  content: string | React.ReactNode;
  sideOffset?: number;
  defaultOpen?: boolean;
}) => {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen={defaultOpen}>
        <TooltipTrigger asChild>
          <span> {trigger}</span>
        </TooltipTrigger>
        <TooltipContent sideOffset={sideOffset}>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipUI;
