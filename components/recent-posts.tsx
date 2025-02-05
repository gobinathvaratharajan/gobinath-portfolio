import { getPosts } from '@/lib/posts';
import React from 'react';
import Posts from './posts';
import Link from 'next/link';

const RecentPost = async () => {
  const posts = await getPosts(2);
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Latest Post</h2>
        <Posts posts={posts} />
        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
        >
          <span>All Posts</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentPost;
