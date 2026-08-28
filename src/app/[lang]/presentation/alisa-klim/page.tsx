"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star, Target, Home, Users, ShoppingBag, FileText, Heart, Shield } from "lucide-react";
import Link from "next/link";

import { useParams } from "next/navigation";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const STAGGER: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const modules = [
  { id: "home", title: "Главная страница", icon: Home, desc: "Структура первого экрана, болей ЦА и решений." },
  { id: "about", title: "Обо мне", icon: Heart, desc: "Продажа экспертности через эмпатию и твердые факты." },
  { id: "products", title: "Продукты", icon: ShoppingBag, desc: "Витрина курсов и книг, снятие барьеров." },
  { id: "consultations", title: "Консультации", icon: Users, desc: "Личная работа: от детей до беременности." },
  { id: "articles", title: "Статьи", icon: FileText, desc: "Блог как генератор продаж и доверия." },
  { id: "club", title: "Закрытый клуб", icon: Shield, desc: "Рекуррентная подписка и база рецептов (в проекте)." },
];

export default function PresentationPage() {
  const params = useParams();
  const lang = params.lang || "ru";

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-coral/20 font-sans text-slate-900 overflow-hidden relative pb-32">
      {/* Background Blobs */}
      <div className="pointer-events-none fixed inset-0 flex justify-center z-0 overflow-hidden">
        <div className="absolute top-[-10%] w-[800px] h-[800px] rounded-full bg-cyan-200/40 blur-[120px] opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-rose-200/40 blur-[120px] opacity-50 mix-blend-multiply" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-16 max-w-4xl space-y-24">
        {/* Section 1: Hero */}
        <motion.section initial="hidden" animate="visible" variants={STAGGER} className="text-center pt-10">
          <motion.div
            variants={FADE_UP}
            className="inline-block px-5 py-2 rounded-full bg-rose-100 text-rose-600 font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            Проект структуры сайта
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Алиса <span className="text-rose-500">Климова</span>
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-xl text-slate-600 max-w-2xl mx-auto">
            Интерактивная презентация логики, маркетинговой структуры и пользовательских путей для вашего будущего сайта.
          </motion.p>
        </motion.section>

        {/* Section 2: Modules */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER} className="space-y-6">
          {modules.map((mod) => (
            <motion.div
              key={mod.id}
              variants={FADE_UP}
              className="p-6 md:p-8 bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-200/50 rounded-3xl border border-white/50 relative group flex flex-col md:flex-row items-center md:justify-between gap-6 hover:bg-white transition-colors duration-500"
            >
              <div className="flex items-center gap-6 w-full text-center md:text-left flex-col md:flex-row">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <mod.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{mod.title}</h3>
                  <p className="text-slate-500">{mod.desc}</p>
                </div>
              </div>
              
              <Link
                href={`/${lang}/presentation/alisa-klim/${mod.id}`}
                className="w-full md:w-auto shrink-0 inline-flex items-center justify-center px-6 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all active:scale-95 group-hover:scale-105"
              >
                Смотреть структуру <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.section>

        {/* Section 3: Footer */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="pt-12">
          <div className="p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
             <h2 className="text-3xl font-bold mb-4">Готовы обсудить?</h2>
             <p className="text-slate-400 mb-8 max-w-md mx-auto">Все модули спроектированы так, чтобы бережно вести клиента к нужной цели.</p>
             <a href="https://instagram.com/alisa__klim" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all">
               Связаться с нами
             </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
