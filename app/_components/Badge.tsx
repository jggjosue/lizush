type BadgeProps = {
  size?: number;
  subtitle?: string;
};

export function Badge({ size = 80, subtitle = "ARCHITECT" }: BadgeProps) {
  const subtitleScale = subtitle.length > 12 ? 0.06 : 0.075;
  return (
    <div
      aria-label="Lizush Architect monogram"
      className="grid shrink-0 place-items-center rounded-full text-center shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, #efd9b1 0%, #c9a978 60%, #8c6a44 100%)",
      }}
    >
      <div className="flex flex-col items-center leading-none text-[#3a2611]">
        <span
          className="font-script font-semibold"
          style={{ fontSize: size * 0.27 }}
        >
          Lizush
        </span>
        <span
          className="mt-1 tracking-[0.28em] whitespace-nowrap"
          style={{ fontSize: Math.max(size * subtitleScale, 7) }}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}
