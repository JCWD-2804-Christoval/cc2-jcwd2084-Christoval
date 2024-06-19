// src/pages/posts/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchEntries } from '@/utils/contentful';

export default function Post({ post }: { post: any }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.fields.body }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchEntries();
  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await fetchEntries();
  const post = posts.find((post) => post.fields.slug === params?.slug);
  return { props: { post } };
};
