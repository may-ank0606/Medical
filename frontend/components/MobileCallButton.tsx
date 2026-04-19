import { PhoneCall } from 'lucide-react';
import { CONTACT_LINKS } from '@/lib/contact';

export default function MobileCallButton() {
  return (
    <a
      href={CONTACT_LINKS.call}
      className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-soft md:hidden"
    >
      <PhoneCall size={16} />
      Call Now
    </a>
  );
}
