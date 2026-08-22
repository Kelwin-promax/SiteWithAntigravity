"use client";

import Link from "next/link";
import { Search, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-900 dark:text-white hidden sm:block">
            RedditFeed
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors">
            Início
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors">
            Explorar
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors">
            Sobre
          </Link>
        </nav>

        {/* Actions & Auth */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-3 mr-2">
            <Link 
              href="/login" 
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/register" 
              className="text-sm font-medium px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-sm shadow-orange-600/20 hover:shadow-orange-600/40"
            >
              Cadastrar
            </Link>
          </div>

          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block mx-1" />

          <button className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" aria-label="Buscar">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            aria-label="Alternar Tema"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          <button className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
