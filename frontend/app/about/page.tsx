import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import TrustStats from '@/components/TrustStats';
import { trustStats } from '@/data/site';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionHeader
        title="About Healfast India"
        subtitle="Trusted home healthcare service provider delivering quality, compassion, and reliability."
      />

      <Reveal className="mt-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-primary">Leadership</h2>
          <p className="mt-2 text-sm text-gray-700">Founded under the leadership of Karan Balyan.</p>
          <p className="mt-1 text-sm text-gray-700">Established: April 2025</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {['Certificates', 'Achievements', 'Photos with notable personalities'].map((item, index) => (
          <Reveal key={item} delay={index * 0.07}>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">{item}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Dedicated section ready for your verified records and institutional trust assets.
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <TrustStats stats={trustStats} />
    </section>
  );
}
