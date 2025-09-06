import Link from "next/link";
import PostCard from "@/components/PostCard";
import { fetchPosts } from "@/lib/api";

export default async function PostsPage() {
  const posts = await fetchPosts(10);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Demo Posts
        </h1>
        <p className="text-gray-600">
          Fetched from <span className="font-semibold">JSONPlaceholder</span>
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.id}
            href={`/posts/${p.id}`}
            className="group block h-full"
          >
            <PostCard
              title={p.title}
              body={p.body}
              id={p.id}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
