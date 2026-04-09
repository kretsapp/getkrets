export function KretsMark({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="128"
        cy="128"
        r="106"
        fill="none"
        stroke="#CF5C36"
        strokeWidth="16"
      />
      <circle cx="128" cy="128" r="26" fill="#CF5C36" />
    </svg>
  );
}
