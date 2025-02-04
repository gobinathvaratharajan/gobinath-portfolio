import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function getSerializedContent(
  content: string
): Promise<MDXRemoteSerializeResult> {
  return await serialize(content);
}
