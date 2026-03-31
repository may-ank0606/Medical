import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, CONTACT_LINKS } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Healfast India logo"
              width={32}
              height={32}
              className="rounded-full border border-gray-100"
            />
            <h3 className="text-lg font-semibold text-primary">Healfast India</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Home healthcare services you can trust. Professional, compassionate, and always nearby.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-primary">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>
              <Link href="/services" className="hover:text-primary">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-primary">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>
              Phone:{' '}
              <a href={CONTACT_LINKS.call} className="hover:text-primary">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href={CONTACT_LINKS.mail} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
                @healfastindia
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Healfast India. All rights reserved.
      </div>
    </footer>
  );
}
