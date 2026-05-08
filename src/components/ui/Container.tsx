import clsx from "clsx";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
