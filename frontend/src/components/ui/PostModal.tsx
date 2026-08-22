import { Post } from "@/types";
import { X, Clock, ThumbsUp } from "lucide-react";
import { useEffect } from "react";

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

export default function PostModal({ post, onClose }: PostModalProps) {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white dark:bg-zinc-950 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-zinc-200 dark:border-zinc-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Image */}
        <div className="relative w-full h-48 sm:h-64 bg-zinc-200 dark:bg-zinc-800 shrink-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 dark:text-orange-500 shadow-sm">
            {post.category}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
            {post.title}
          </h2>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-700 dark:text-zinc-300">
                {post.author.name.charAt(0)}
              </div>
              <span className="font-medium text-zinc-900 dark:text-zinc-300">{post.author.name}</span>
            </div>
            <span>&bull;</span>
            <span>{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
            <span>&bull;</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTimeMinutes} min</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <ThumbsUp className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {post.excerpt}
            </p>
            {/* Aqui poderia vir o conteúdo completo do post renderizado */}
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
              Este é um conteúdo de demonstração. Em um cenário real, o corpo completo do artigo ou post seria renderizado aqui, permitindo uma leitura aprofundada. O modal melhora a retenção do usuário ao manter o contexto do feed por baixo.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
              O design foca na legibilidade, com contraste adequado e tipografia cuidadosamente escolhida, acompanhando o estilo de plataformas profissionais como o Reddit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
