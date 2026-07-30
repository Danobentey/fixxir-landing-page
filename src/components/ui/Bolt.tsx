type BoltProps = {
  className?: string;
};

/** The bolt from the Fixxir mark, for use as a standalone accent. */
export function Bolt({ className }: BoltProps) {
  return (
    <svg viewBox="0 0 24 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M15.6 0 4.2 21.4h6.1L8.4 40 19.8 16.2h-6.3L15.6 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Ring-and-bolt monogram used for decorative watermarks. */
export function BoltMark({ className }: BoltProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M62 12.5A40 40 0 1 1 38 87.5"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path d="M63 8 40 51h11.5L38 92l24-45H50L63 8Z" fill="currentColor" />
    </svg>
  );
}
