import { MessageCircle } from 'lucide-react';
import { CONTACT_LINKS } from '@/lib/contact';

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105"
    >
      <MessageCircle size={22} />
    </a>
  );
}
