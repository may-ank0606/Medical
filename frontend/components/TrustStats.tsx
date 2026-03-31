type TrustStatsProps = {
  stats: Array<{ label: string; value: string }>;
};

export default function TrustStats({ stats }: TrustStatsProps) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-soft">
          <p className="text-2xl font-bold text-primary">{stat.value}</p>
          <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
