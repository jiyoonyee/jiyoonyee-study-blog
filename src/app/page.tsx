import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

export default async function Home() {
  const dir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const mod = await import(`../content/${slug}.mdx`);
      return { slug, metadata: mod.metadata };
    }),
  );

  return (
    <div className='w-full flex flex-col items-center px-4 py-8'>
      <div className='max-w-7xl w-full grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 grid '>
        {posts.map((post) => (
          <div
            key={post.slug}
            className='border border-gray-800 rounded-lg shadow-md bg-amber-300 transition-transform transition-shadow duration-300 transform hover:-translate-y-2 hover:shadow-xl'>
            <Image
              src={
                post.metadata.image ||
                `/posts/og-image?title=${encodeURIComponent(post.metadata.title)}`
              }
              alt={post.metadata.title}
              className='w-full object-cover rounded-t-lg mb-4 aspect-[1200/630]'
              width={1200}
              height={630}
            />
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-2'>
                <Link href={`/posts/${post.slug}`}>{post.metadata.title}</Link>
              </h2>
              <p className='text-gray-600 mb-4'>{post.metadata.description}</p>
              <Link
                href={`/posts/${post.slug}`}
                className='text-blue-600 hover:underline  '>
                자세히 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
