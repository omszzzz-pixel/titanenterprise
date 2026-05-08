import Image from "next/image";
import clsx from "clsx";

/**
 * Both mark.png and wordmark.png are 1280×1024 with the actual graphic
 * occupying ~50% of the canvas (centered with black padding). We crop the
 * padding away with overflow:hidden + transform:scale so the visible content
 * fills its container.
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={clsx("relative block overflow-hidden", className)}>
      <Image
        src="/logo/mark.png"
        alt=""
        fill
        sizes="64px"
        priority
        className="object-contain"
        style={{ transform: "scale(1.55)" }}
      />
    </span>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={clsx("relative block overflow-hidden", className)}>
      <Image
        src="/logo/wordmark.png"
        alt="Titan-Enterprise — Bridging Financial and Technology"
        fill
        sizes="320px"
        priority
        className="object-contain"
        style={{ transform: "scale(4)" }}
      />
    </span>
  );
}

export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <LogoMark className="h-11 w-11 shrink-0" />
      <LogoWordmark className="h-9 w-44 shrink-0" />
    </div>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/fulllogo.png"
      alt="Titan-Enterprise — Bridging Financial and Technology"
      width={1280}
      height={1024}
      priority
      className={clsx("h-auto w-auto object-contain", className)}
    />
  );
}

export function LogoCompact({ className }: { className?: string }) {
  return <LogoHorizontal className={className} />;
}
