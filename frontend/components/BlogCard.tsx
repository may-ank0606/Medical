import { BlogPost } from '@/lib/types';
import Image from 'next/image';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          className="h-48 w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-primary shadow">
          {post.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{post.author}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-primary">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.description}</p>
        <button className="mt-4 inline-flex rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-white transition hover:bg-[#2f4603]">
          Read article
        </button>
      </div>
    </article>
  );
}
