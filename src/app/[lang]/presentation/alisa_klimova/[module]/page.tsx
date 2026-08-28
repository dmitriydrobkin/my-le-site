import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MarkdownWrapper from "./MarkdownWrapper";
import modulesData from "@/data/alisa-klim-modules.json";

export default async function ModulePage({ params }: { params: { lang: string; module: string } }) {
  const { module, lang } = params;
  
  // Security check to avoid path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(module)) {
    return <div className="p-12 text-center text-red-500">Invalid module</div>;
  }

  const content = (modulesData as Record<string, string>)[module];
  
  if (!content) {
    return <div className="p-12 text-center text-slate-500">Модуль не найден или еще не описан.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-32">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-16 flex items-center max-w-3xl">
          <Link href={`/${lang}/presentation/alisa_klimova`} className="flex items-center text-slate-500 hover:text-slate-900 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад к структуре
          </Link>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 pt-12 max-w-3xl">
        <MarkdownWrapper content={content} />
      </main>
    </div>
  );
}
