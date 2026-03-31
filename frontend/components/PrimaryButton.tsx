import Link from 'next/link';
import { ReactNode } from 'react';

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline';
};

export default function PrimaryButton({ href, children, variant = 'solid' }: PrimaryButtonProps) {
  const common =
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary';

  return (
    <Link
      href={href}
      className={
        variant === 'solid'
          ? `${common} bg-primary text-white hover:bg-[#2f4603] shadow-soft`
          : `${common} border border-primary text-primary hover:bg-primary hover:text-white`
      }
    >
      {children}
    </Link>
  );
}
