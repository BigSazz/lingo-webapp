import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <>
      <div
        className={cn(
          "flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
          className,
        )}
      >
        Sidebar
      </div>
    </>
  );
};
