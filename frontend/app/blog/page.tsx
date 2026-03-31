import BlogCard from '@/components/BlogCard';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { blogs } from '@/data/site';

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionHeader
        title="Healthcare Blog"
        subtitle="Educational articles, practical tips, and science-backed healthcare guidance."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {blogs.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.06}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
