import IconMapper from '@/components/IconMapper';
import { CheckCircle2, Clock3 } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  turnaround: string;
  availability: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  highlights = [],
  turnaround = 'Quick support',
  availability = 'Available'
}: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-primary">
          <IconMapper name={icon} size={22} />
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
          {availability}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>

      <ul className="mt-4 space-y-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle2 className="mt-0.5 text-secondary" size={16} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="flex items-center gap-2 text-xs font-medium text-gray-600">
          <Clock3 size={14} className="text-primary" />
          Response: {turnaround}
        </p>
      </div>
    </article>
  );
}
