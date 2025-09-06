export type Post = { userId: number; id: number; title: string; body: string };

const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(limit = 8): Promise<Post[]> {
  const res = await fetch(`${API_BASE}/posts?_limit=${limit}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function fetchPost(id: number): Promise<Post | null> {
  const res = await fetch(`${API_BASE}/posts/${id}`, { next: { revalidate: 60 } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}
