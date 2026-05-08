import clsx from "clsx";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx("relative py-24 sm:py-32 lg:py-40", className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "tracking-eyebrow text-[11px] font-medium text-gold uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}
