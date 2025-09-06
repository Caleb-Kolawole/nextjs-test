import { fetchPost } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost(parseInt(params.id, 10));
  return {
    title: post?.title ?? 'Post',
    description: (post?.body ?? '').slice(0, 160),
    openGraph: {
      title: post?.title ?? 'Post',
      description: (post?.body ?? '').slice(0, 160)
    }
  };
}

export default async function PostDetail({ params }: Props) {
  const id = parseInt(params.id, 10);
  const post = await fetchPost(id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article className="bg-white rounded shadow p-6">
      <header className="flex items-center gap-4 mb-4">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <Image src={'/avatar.jpeg'} width={48} height={48} alt={`Avatar for ${post.title}`} />
        </div>
        <div>
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">Post #{post.id} from API</p>
        </div>
      </header>

      <div className="prose max-w-none">
        <p>{post.body}</p>
      </div>

      <div className="mt-6">
        <Link href="/posts" className="text-indigo-600 hover:underline">
          ← Back to posts
        </Link>
      </div>
    </article>
  );
}
