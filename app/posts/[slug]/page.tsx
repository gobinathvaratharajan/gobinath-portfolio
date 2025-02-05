import { getPostBySlug, getPosts } from '@/lib/posts';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';

// for dynamic fetch data generate static data on run time
export async function generateStaticParams() {
  const posts = await getPosts();
  const slug = posts.map(post => ({ slug: post.slug }));
  return slug;
}

const Post = async ({ params }: any) => {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <MoveLeft className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
};

export default Post;
