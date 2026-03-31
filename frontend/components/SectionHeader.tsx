type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary">{title}</h2>
      {subtitle ? <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
