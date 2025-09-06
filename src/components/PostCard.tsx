import React from 'react';

type Props = {
  id: number;
  title: string;
  body: string;
};

export default function PostCard({ id, title, body }: Props) {
  return (
    <article
      role="article"
      aria-labelledby={`post-${id}`}
      className="rounded border bg-white p-4 shadow-sm hover:shadow-md transition-transform duration-200 group-hover:scale-[1.02]"
    >
      <h3 id={`post-${id}`} className="font-semibold text-lg leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{body}</p>
      <div className="mt-4">
        <span className="text-xs text-gray-400">#{id}</span>
      </div>
    </article>
  );
}
