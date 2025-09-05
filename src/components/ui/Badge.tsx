import type { ReactNode } from "react";

export const Badge = ({ children }: { children:ReactNode }) => {
  return (
    <div className="px-3 py-1 items-center gap-2  bg-[#D2EBF1] text-[#035E71] w-fit border border-[#0A8BA6] text-sm font-medium rounded-full flex">{children}</div>
  );
}