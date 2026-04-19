'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Our Services' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Healfast India logo"
            width={64}
            height={64}
            className="rounded-lg border-2 border-secondary/20 shadow-md"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold text-primary">Healfast India</span>
            <p className="text-sm font-semibold text-primary">Also Empowering Health Together</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary font-medium' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg p-2 text-primary md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    pathname === link.href
                      ? 'bg-secondary/10 font-medium text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
