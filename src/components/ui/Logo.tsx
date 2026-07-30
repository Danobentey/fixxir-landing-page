import Image from "next/image";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/fixxir-mark.png"
        alt="Fixxir"
        width={72}
        height={72}
        priority
        className="h-9 w-9 rounded-[0.6rem] ring-1 ring-white/10"
      />
      {showWordmark ? (
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          Fixxir
        </span>
      ) : null}
    </span>
  );
}
