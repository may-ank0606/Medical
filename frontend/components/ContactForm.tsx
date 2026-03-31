'use client';

import { FormEvent, useState } from 'react';
import { CONTACT, CONTACT_LINKS } from '@/lib/contact';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      message: String(formData.get('message') || '')
    };

    try {
      const subject = `New enquiry from ${payload.name}`;
      const body = [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        '',
        'Message:',
        payload.message
      ].join('\n');

      const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}` +
        `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailUrl, '_blank', 'noopener,noreferrer');

      setMessage('Gmail compose opened. Please review and click Send.');
      event.currentTarget.reset();
    } catch {
      setMessage('Unable to open Gmail. Please call or WhatsApp us directly.');
      window.location.href = `${CONTACT_LINKS.mail}?subject=${encodeURIComponent('New enquiry')}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none transition focus:border-secondary"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-primary">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none transition focus:border-secondary"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none transition focus:border-secondary"
          placeholder="Tell us your requirement"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="inline-flex rounded-xl bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2f4603] disabled:opacity-60"
      >
        {loading ? 'Opening Gmail...' : 'Send Message'}
      </button>
      {message ? <p className="text-sm text-gray-600">{message}</p> : null}
    </form>
  );
}
