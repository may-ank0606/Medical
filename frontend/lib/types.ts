export type QuickService = {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  turnaround: string;
  availability: string;
};

export type Testimonial = {
  name: string;
  role: string;
  review: string;
  rating: number;
  service: string;
};

export type DetailedServiceGroup = {
  group: string;
  items: ServiceItemDetail[];
  icon: string;
};

export type ServiceItemDetail = {
  name: string;
  includes: string[];
  notIncludes: string[];
  suitableFor?: string;
};

export type BlogPost = {
  title: string;
  description: string;
  category: 'Medical education' | 'Practical healthcare tips' | 'Scientific/medical proofs';
  image: string;
  readTime: string;
  author: string;
};
