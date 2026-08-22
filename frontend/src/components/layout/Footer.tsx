import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-12 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-orange-600 flex items-center justify-center text-white font-bold text-xs">
            R
          </div>
          <span className="font-medium text-zinc-900 dark:text-white text-sm">
            RedditFeed &copy; {new Date().getFullYear()}
          </span>
        </div>
        
        <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Termos</Link>
          <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Privacidade</Link>
          <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
