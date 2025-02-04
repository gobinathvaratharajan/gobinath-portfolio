'use client';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Intro from '@/components/intro';
import { useEffect, useState } from 'react';
import { getSerializedContent } from '@/lib/getSerializedContent';

export default function Home() {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      const content = `
                # This is my markdown
                Here is some more content in **markdown** format.
            `;
      const mdx = await getSerializedContent(content);
      setMdxContent(mdx);
    }

    fetchData();
  }, []);

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        {mdxContent ? <MDXRemote {...mdxContent} /> : <p>Loading...</p>}
      </div>
    </section>
  );
}
