import type { SVGProps } from "react";

/**
 * Paw print — brand accent inspired by the husky/guide motif.
 * Use with `className` to size (e.g. `h-4 w-4`) and `text-*` to color (currentColor).
 */
export function Paw({
  className,
  rotate = 0,
  ...props
}: SVGProps<SVGSVGElement> & { rotate?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, ...(props.style ?? {}) }}
      {...props}
    >
      {/* Main pad */}
      <path d="M16 17c-4.2 0-7.8 3.1-7.8 6.7 0 2.4 1.9 3.8 4.3 3.8 1.4 0 2.4-.5 3.5-.5s2.1.5 3.5.5c2.4 0 4.3-1.4 4.3-3.8C23.8 20.1 20.2 17 16 17z" />
      {/* Toes */}
      <ellipse cx="9" cy="13" rx="2.4" ry="3.2" />
      <ellipse cx="23" cy="13" rx="2.4" ry="3.2" />
      <ellipse cx="13" cy="7.5" rx="2.1" ry="2.9" />
      <ellipse cx="19" cy="7.5" rx="2.1" ry="2.9" />
    </svg>
  );
}

/**
 * A row of alternating paw prints — evokes a trail. Use as a section divider.
 */
export function PawTrail({
  count = 6,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 text-foreground/25 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Paw
          key={i}
          className="h-3.5 w-3.5 md:h-4 md:w-4"
          rotate={i % 2 === 0 ? -14 : 14}
          style={{ transform: `translateY(${i % 2 === 0 ? -2 : 2}px) rotate(${i % 2 === 0 ? -14 : 14}deg)` }}
        />
      ))}
    </div>
  );
}
