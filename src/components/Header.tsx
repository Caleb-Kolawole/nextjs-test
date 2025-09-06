import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Caleb = Next JS Test
        </Link>
        <nav>
          <Link href="/posts" className="mr-4 text-sm">
            Demo
          </Link>
          <a href="#" className="text-sm opacity-60">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
