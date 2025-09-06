import Link from "next/link";

export default function Home() {
  return (
        <div>
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              Built a Fast, Modern Web App
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-blue-100">
              Which is Powered by Next.js, TypeScript, and Tailwind CSS. Code Written by Caleb.
            </p>
            <Link
              href="/posts"
              className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 shadow hover:bg-gray-100"
            >
              View Posts
            </Link>
          </div>
        </section>
        <section id="features" className="mx-auto max-w-6xl px-4 py-16">
          <h3 className="mb-8 text-center text-2xl font-bold">Features</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 shadow hover:shadow-md">
              <h4 className="mb-2 text-lg font-semibold">Fast Setup</h4>
              <p className="text-gray-600">
                Quickly bootstrap with Next.js + TypeScript + Tailwind CSS.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow hover:shadow-md">
              <h4 className="mb-2 text-lg font-semibold">API Integration</h4>
              <p className="text-gray-600">
                Fetch and display data seamlessly from external APIs.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow hover:shadow-md">
              <h4 className="mb-2 text-lg font-semibold">SEO Optimized</h4>
              <p className="text-gray-600">
                Semantic HTML, Open Graph tags, and meta descriptions included.
              </p>
            </div>
          </div>
        </section>

    </div>
  );
}
