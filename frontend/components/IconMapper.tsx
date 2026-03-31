import {
  FlaskConical,
  HeartPulse,
  ShieldPlus,
  Stethoscope,
  Syringe,
  TestTubeDiagonal,
  LucideProps
} from 'lucide-react';

const iconMap = {
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Syringe,
  TestTubeDiagonal,
  ShieldPlus
};

type IconName = keyof typeof iconMap;

type IconMapperProps = LucideProps & {
  name: string;
};

export default function IconMapper({ name, ...props }: IconMapperProps) {
  const Icon = iconMap[name as IconName] ?? ShieldPlus;
  return <Icon {...props} />;
}
