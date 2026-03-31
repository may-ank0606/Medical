import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { quickServices, testimonials } from '@/data/site';
import { ShieldCheck, Stethoscope, TimerReset } from 'lucide-react';

const whyChooseUsPoints = [
  {
    title: 'Trusted healthcare at home',
    description: 'Ethical and patient-first service with clear communication and safe protocols.',
    icon: ShieldCheck
  },
  {
    title: 'Experienced staff',
    description: 'Qualified nurses and trained caregivers focused on comfort, dignity, and outcomes.',
    icon: Stethoscope
  },
  {
    title: 'Quick response',
    description: 'Prompt assistance for urgent home-care needs with efficient coordination.',
    icon: TimerReset
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto mt-14 max-w-6xl px-4 md:px-6">
        <SectionHeader title="Services Highlights" subtitle="Professional services designed for home comfort and medical reliability." />
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {quickServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                highlights={service.highlights}
                turnaround={service.turnaround}
                availability={service.availability}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 md:px-6">
        <SectionHeader title="Why Choose Us" />
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {whyChooseUsPoints.map((point) => (
            <li key={point.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-soft">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                <point.icon size={18} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-primary">{point.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{point.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 md:px-6">
        <SectionHeader
          title="Patient Testimonials"
          subtitle="Real stories from families and patients who trust Healfast India."
        />
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.07}>
              <TestimonialCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
