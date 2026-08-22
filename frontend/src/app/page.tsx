"use client";

import { useState } from "react";
import CircularGallery from "@/components/ui/CircularGallery";
import PostModal from "@/components/ui/PostModal";
import { Category, Post } from "@/types";

// Mock Data
const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "Como escalar automação com n8n",
    excerpt: "Descubra as melhores práticas para escalar seus workflows sem gargalos de performance.",
    imageUrl: "https://picsum.photos/seed/n8n/800/600",
    category: "Automation",
    author: { id: "a1", name: "Alice Dev" },
    publishedAt: "2023-10-25T10:00:00Z",
    readTimeMinutes: 5,
    likes: 120
  },
  {
    id: "2",
    title: "O futuro da IA no Frontend",
    excerpt: "Como agentes inteligentes estão mudando a forma de criar interfaces de usuário.",
    imageUrl: "https://picsum.photos/seed/ai/800/600",
    category: "AI",
    author: { id: "a2", name: "Bob AI" },
    publishedAt: "2023-10-26T12:00:00Z",
    readTimeMinutes: 8,
    likes: 340
  },
  {
    id: "3",
    title: "Design System acessível",
    excerpt: "Construindo componentes de UI que funcionam para todos os usuários.",
    imageUrl: "https://picsum.photos/seed/design/800/600",
    category: "Design",
    author: { id: "a3", name: "Carol UX" },
    publishedAt: "2023-10-27T09:00:00Z",
    readTimeMinutes: 4,
    likes: 85
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const featuredItems = MOCK_POSTS.map(post => ({
    image: post.imageUrl,
    text: post.title
  }));

  const filteredPosts = MOCK_POSTS.filter(post => 
    (activeCategory === "All" || post.category === activeCategory) &&
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Featured 3D Gallery */}
      <section className="w-full bg-zinc-900 text-white relative border-b border-zinc-800">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent to-zinc-900/90" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Posts em Destaque</h1>
          <p className="text-zinc-400 mt-2">Arraste para explorar</p>
        </div>
        <div style={{ height: '500px', position: 'relative' }}>
          <CircularGallery
            items={featuredItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
          />
        </div>
      </section>

      {/* Main Feed Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Últimas Publicações</h2>
          
          <div className="flex w-full md:w-auto gap-4">
            <input 
              type="text" 
              placeholder="Buscar posts..."
              className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Technology", "Automation", "Design", "AI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category | "All")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === cat 
                  ? "bg-orange-600 text-white shadow-md transform scale-105" 
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {cat === "All" ? "Todos" : cat}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <button 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              >
                <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                  {/* Using standard img for quick mock, but should be next/image */}
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 dark:text-orange-400">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
                    <span>{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
                    <span>{post.readTimeMinutes} min de leitura</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center text-zinc-500">
            <p className="text-lg mb-2">Nenhum post encontrado para "{searchQuery}"</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
              className="text-orange-600 hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      {/* Post Modal */}
      <PostModal 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </div>
  );
}
