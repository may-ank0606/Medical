import PrimaryButton from '@/components/PrimaryButton';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/10 to-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-20">
        <Reveal>
          <div>
            <p className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-primary">
              Trusted Home Healthcare
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-primary md:text-6xl">
              Welcome to Healfast India – Home Healthcare at Your Doorstep
            </h1>
            <p className="mt-3 max-w-xl text-sm text-gray-600 md:text-base">
              Personalized, trusted, and timely home healthcare designed around your family’s comfort.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Book Service</PrimaryButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-soft">
            <Image
              src="/new.jpeg"
              alt="Home healthcare professional assisting patient"
              width={1200}
              height={800}
              className="h-72 w-full rounded-xl object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
