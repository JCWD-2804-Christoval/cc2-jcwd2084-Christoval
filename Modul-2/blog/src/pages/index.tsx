// src/pages/index.tsx
import { GetStaticProps } from 'next';
import { fetchEntries } from '@/utils/contentful';

export default function Home({ posts }: { posts: any[] }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <a href={`/posts/${post.fields.slug}`} className="text-blue-500">
              {post.fields.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchEntries();
  return { props: { posts } };
};
