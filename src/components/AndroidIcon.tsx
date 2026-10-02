type AndroidIconProps = {
  className?: string;
};

export function AndroidIcon({ className }: AndroidIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5 6.75 2.85M16 5l1.25-2.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 9a5.5 5.5 0 0 1 11 0H6.5Z" fill="currentColor" />
      <circle cx="9.5" cy="6.8" r="0.7" fill="white" />
      <circle cx="14.5" cy="6.8" r="0.7" fill="white" />
      <path d="M6.5 10h11v7.5a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V10Z" fill="currentColor" />
      <rect x="3.5" y="10" width="2" height="7" rx="1" fill="currentColor" />
      <rect x="18.5" y="10" width="2" height="7" rx="1" fill="currentColor" />
      <rect x="8.25" y="18" width="2" height="4" rx="1" fill="currentColor" />
      <rect x="13.75" y="18" width="2" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}
