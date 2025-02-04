'use client'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Intro from "@/components/intro";

export default async function Home() {
    const content = `
        # This is my markdown
        Here is some more content in **markdown** format.
    `;
    const mdxContent: MDXRemoteSerializeResult = await serialize(content);

    return (
        <section className="py-24">
            <div className="container max-w-3xl">
                <Intro />
                <MDXRemote {...mdxContent} />
            </div>
        </section>
    );
}
