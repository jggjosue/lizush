type LeafProps = {
  className?: string;
};

export function Leaf({ className = "h-7 w-7 text-[#b08654]" }: LeafProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M16 4v24" />
      <path d="M16 14c-4-2-7-2-9 0 1 4 4 6 9 5" />
      <path d="M16 14c4-2 7-2 9 0-1 4-4 6-9 5" />
    </svg>
  );
}
