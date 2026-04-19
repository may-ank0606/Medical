import { MessageCircle } from 'lucide-react';
import { CONTACT_LINKS } from '@/lib/contact';

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-soft transition-transform hover:scale-105"
    >
      <MessageCircle size={16} />
      WhatsApp
    </a>
  );
}
