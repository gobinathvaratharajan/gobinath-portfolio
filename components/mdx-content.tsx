import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

function Code({ children, ...props }: { children: string }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className='text-red-400'>
      {props.children}
    </h2>
  ),
};

const MDXContent = ({ components: wrapper, ...props }: MDXRemoteProps) => {
  return (
    <MDXRemote {...props} components={{ ...components, ...(wrapper || {}) }} />
  );
};

export default MDXContent;
