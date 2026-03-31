import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
  rating: number;
  service: string;
};

export default function TestimonialCard({ name, role, review, rating, service }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-medium text-primary">
          {service}
        </span>
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">“{review}”</p>
      <div className="mt-4">
        <h4 className="font-medium text-primary">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </article>
  );
}
