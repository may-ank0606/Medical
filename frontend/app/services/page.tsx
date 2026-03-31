import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import IconMapper from '@/components/IconMapper';
import { serviceGroups } from '@/data/site';
import { CheckCircle2, CircleX, Info } from 'lucide-react';

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionHeader
        title="Our Services"
        subtitle="Expert home healthcare support with trusted clinical practices."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {serviceGroups.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.08}>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-primary">
                <IconMapper name={group.icon} size={22} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-primary">{group.group}</h2>

              <p className="mt-2 text-sm text-gray-600">
                Tap each service to see what is included, what is not included, and who it is suitable for.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {group.items.map((item) => (
                  <li key={item.name} className="rounded-xl border border-gray-100 bg-gray-50">
                    <details className="group">
                      <summary className="cursor-pointer list-none px-4 py-3 font-medium text-primary marker:content-none">
                        <div className="flex items-center justify-between gap-3">
                          <span>{item.name}</span>
                          <span className="text-xs text-gray-500 group-open:hidden">View details</span>
                          <span className="hidden text-xs text-gray-500 group-open:inline">Hide details</span>
                        </div>
                      </summary>

                      <div className="space-y-3 border-t border-gray-100 bg-white px-4 py-3">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Includes</h3>
                          <ul className="mt-2 space-y-1.5">
                            {item.includes.map((line) => (
                              <li key={line} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle2 size={15} className="mt-0.5 text-secondary" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Not included</h3>
                          <ul className="mt-2 space-y-1.5">
                            {item.notIncludes.map((line) => (
                              <li key={line} className="flex items-start gap-2 text-sm text-gray-700">
                                <CircleX size={15} className="mt-0.5 text-rose-500" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {item.suitableFor ? (
                          <p className="flex items-start gap-2 rounded-lg bg-secondary/10 px-3 py-2 text-xs text-primary">
                            <Info size={14} className="mt-0.5" />
                            <span>
                              <strong>Suitable for:</strong> {item.suitableFor}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
