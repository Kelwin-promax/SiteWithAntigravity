"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login seria inserida aqui
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="mx-auto w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-600/20">
            R
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Entre para acessar seu feed personalizado
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                E-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm transition-colors"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-600 border-zinc-300 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-950 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer">
                Lembrar de mim
              </label>
            </div>

            <div className="text-sm">
              <Link href="#" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Esqueceu a senha?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 dark:focus:ring-offset-zinc-900 transition-all shadow-md shadow-orange-600/20 hover:shadow-orange-600/40 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Ainda não tem uma conta?{" "}
            <Link href="/register" className="font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Cadastre-se agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
