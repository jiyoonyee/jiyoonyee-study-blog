import type { MDXComponents } from 'mdx/types';

import { StackBlitzEmbed } from './components/stack-blitz-embed';

export function Heading1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...props} className='text-gray-100 text-5xl font-bold mb-4' />;
}

export function Heading2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props} className='text-gray-100 text-2xl font-bold mb-4' />;
}

export function Heading3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} className='text-gray-100 text-xl font-bold mb-4' />;
}

export function Heading4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 {...props} className='text-gray-100 text-lg font-bold mb-4' />;
}

export function Heading5(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 {...props} className='text-gray-100 text-base font-bold mb-4' />;
}

export function Heading6(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h6 {...props} className='text-gray-100 text-sm font-bold mb-4' />;
}

export function Paragraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className='text-gray-100 mb-4' />;
}

export function Blockquote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className='border-l-4 border-blue-300 pl-4 italic text-gray-100 mb-4'
    />
  );
}

export function UnorderedList(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className='text-gray-100 list-disc list-inside mb-4' />;
}

export function OrderedList(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ol {...props} className='list-decimal list-inside mb-4' />;
}

export function ListItem(props: React.HTMLAttributes<HTMLLIElement>) {
  return <li {...props} className='mb-2' />;
}

export function Pre(props: React.HTMLAttributes<HTMLElement>) {
  return <pre className='bg-blue-100 p-4 rounded mb-4'>{props.children}</pre>;
}

export function Code(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...props}
      className='bg-blue-200 rounded px-1 text-sm font-mono text-gray-800'>
      {props.children}
    </code>
  );
}

export function HR() {
  return <hr className='my-2 border-gray-300' />;
}

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-400 hover:underline hover:text-blue-200 transition-colors'
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    p: Paragraph,
    blockquote: Blockquote,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    pre: Pre,
    code: Code,
    hr: HR,
    a: Link, // ✅ 여기에 추가
    StackBlitzEmbed: StackBlitzEmbed,
  };
}
