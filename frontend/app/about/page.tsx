import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import TrustStats from '@/components/TrustStats';
import Image from 'next/image';
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

      <Reveal className="mt-8">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-primary">Achievements</h3>
          <p className="mt-2 text-lg font-bold text-secondary">Our biggest achievement is your health</p>
          <p className="mt-2 text-sm text-gray-600">
            Dedicated section ready for your verified records and institutional trust assets.
          </p>
        </article>
      </Reveal>

      <Reveal className="mt-8">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-8">Treatment Results - Before & After</h2>
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-soft p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="relative w-full rounded-xl overflow-hidden border-2 border-gray-200">
                  <Image
                    src="/new3.jpeg"
                    alt="Before treatment"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-bold text-sm">Before</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-full rounded-xl overflow-hidden border-2 border-gray-200">
                  <Image
                    src="/new2.jpeg"
                    alt="After treatment"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-bold text-sm">After</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-primary">Remarkable Recovery Journey</p>
              <p className="text-sm text-gray-600 mt-2">Our comprehensive treatment and care protocols deliver visible, measurable improvements in patient health and wellness.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <TrustStats stats={trustStats} />
    </section>
  );
}
