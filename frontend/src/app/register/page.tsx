"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica de registro seria inserida aqui
    console.log("Register attempt:", { name, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="mx-auto w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-600/20">
            R
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Junte-se ao RedditFeed e personalize sua experiência
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm transition-colors"
                placeholder="João da Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Confirmar Senha
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm transition-colors"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 dark:focus:ring-offset-zinc-900 transition-all shadow-md shadow-orange-600/20 hover:shadow-orange-600/40 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Criar conta
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Já possui uma conta?{" "}
            <Link href="/login" className="font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
