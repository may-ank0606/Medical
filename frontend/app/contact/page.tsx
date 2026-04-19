import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import { Instagram, Mail, MapPin, PhoneCall } from 'lucide-react';
import { CONTACT, CONTACT_LINKS } from '@/lib/contact';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionHeader
        title="Contact Healfast India"
        subtitle="Get in touch for home healthcare services, nursing support, and diagnostic assistance."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-primary">Contact Details</h2>

          <div className="flex items-start gap-3 text-sm text-gray-700">
            <MapPin size={18} className="mt-0.5 text-primary" />
            <p>120 B Sainik Enclave Part-3, CRPF Camp, Jharoda Kalan Road, Najafgarh - 110072</p>
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-700">
            <PhoneCall size={18} className="mt-0.5 text-primary" />
            <a href={CONTACT_LINKS.call} className="hover:text-primary">
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-700">
            <Mail size={18} className="mt-0.5 text-primary" />
            <a href={CONTACT_LINKS.mail} className="hover:text-primary">
              {CONTACT.email}
            </a>
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-700">
            <Instagram size={18} className="mt-0.5 text-primary" />
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
              @healfastindia
            </a>
          </div>

          <p className="rounded-xl bg-secondary/10 px-4 py-3 text-xs text-primary">
            Optional chatbot integration can be added via Tawk.to, Crisp, or Intercom script.
          </p>
        </div>
      </div>
    </section>
  );
}
