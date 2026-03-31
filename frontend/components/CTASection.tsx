import { PhoneCall, MessageCircleMore } from 'lucide-react';
import { CONTACT_LINKS } from '@/lib/contact';

export default function CTASection() {
  return (
    <section className="mx-auto mt-14 max-w-6xl px-4 md:px-6">
      <div className="rounded-2xl bg-primary p-6 text-white shadow-soft md:flex md:items-center md:justify-between md:p-8">
        <div>
          <h3 className="text-xl font-semibold">Need Immediate Home Healthcare Support?</h3>
          <p className="mt-2 text-sm text-white/90">Book your service now through call or WhatsApp.</p>
        </div>
        <div className="mt-4 flex gap-3 md:mt-0">
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-medium text-white"
          >
            <MessageCircleMore size={16} />
            WhatsApp
          </a>
          <a
            href={CONTACT_LINKS.call}
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2 text-sm font-medium text-white"
          >
            <PhoneCall size={16} />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
