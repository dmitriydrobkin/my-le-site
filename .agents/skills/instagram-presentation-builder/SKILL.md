---
name: instagram-presentation-builder
description: Builds mobile-first, vertically scrolling commercial proposals (КП) and presentations meant to be sent via Instagram Direct. Use this skill when the user asks to "create an Instagram presentation", "build a mobile proposal", "create a КП to send as a link", or "make a scrollable presentation". It ensures the layout is mobile-optimized and utilizes premium glassmorphism styling.
---

# Instagram Presentation Builder (Mobile-First Proposal)

This skill guides the creation of commercial proposals (КП) and presentations that are meant to be viewed primarily on mobile devices, typically sent as a direct link in Instagram or Telegram. 

Unlike Zoom/Call presentations (which use PowerPoint-style horizontal slides), these presentations MUST be **vertically scrollable landing pages** with rich scroll animations.

## Key Principles

1. **Mobile-First Structure:** The page must be a continuous vertical scroll. Use responsive Tailwind classes heavily (e.g., `flex-col md:flex-row`), but always prioritize the mobile experience. Elements must be large and easy to tap.
2. **"Iryna Globina" Premium Aesthetics:** The user loves the high-end design style used in their best presentations. You MUST use:
   - **Typography:** `font-display`, `font-black`, and huge headings (`text-4xl md:text-6xl`).
   - **Glassmorphism:** Use `bg-white/50 backdrop-blur-md`, `shadow-glass`, `border border-white/20`, and `rounded-[2rem]` or `rounded-[3rem]`.
   - **Vibrant Accents:** Use the project's brand colors (like `coral` or `cyan`) for icons, badges, and glowing shadows (`shadow-neon-coral`).
   - **Background Effects:** Add blurred background blobs (`blur-[120px] mix-blend-multiply opacity-50`) to give depth to the page.
3. **Scroll Animations:** Use `framer-motion` heavily. Every section should fade up or stagger in as the user scrolls down the page (`initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}`).
4. **Interactive Elements:** Use Lucide icons to break up text. If showing visual concepts, use a gallery or `yet-another-react-lightbox`.

## Implementation Steps

1. **Create the Route:**
   - Create a new `page.tsx` file for the proposal (e.g., `src/app/[lang]/presentation/[client_name]/page.tsx`).
   - Ensure it is a Client Component (`"use client";`) because of `framer-motion`.

2. **Template Structure:**
   ```tsx
   "use client";
   import { motion, Variants } from 'framer-motion';
   import { ArrowRight, Star, Target } from 'lucide-react';

   const FADE_UP: Variants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
   };

   const STAGGER: Variants = {
     visible: { transition: { staggerChildren: 0.1 } }
   };

   export default function MobileProposal() {
     return (
       <div className="min-h-screen bg-surface selection:bg-coral/20 font-sans text-ink overflow-hidden">
         {/* Background Blobs */}
         <div className="pointer-events-none fixed inset-0 flex justify-center z-0 overflow-hidden">
           <div className="absolute top-[-10%] w-[800px] h-[800px] rounded-full bg-cyan/5 blur-[120px] opacity-50 animate-blob" />
         </div>

         <main className="relative z-10 container mx-auto px-6 py-16 max-w-4xl space-y-24">
           
           {/* Section 1: Hero Hook */}
           <motion.section initial="hidden" animate="visible" variants={STAGGER} className="text-center pt-10">
             <motion.div variants={FADE_UP} className="inline-block px-5 py-2 rounded-full bg-coral/10 text-coral font-display text-sm font-bold tracking-widest uppercase mb-6">
               Персональна пропозиція
             </motion.div>
             <motion.h1 variants={FADE_UP} className="font-display text-5xl md:text-6xl font-black mb-6">
               Title <span className="text-coral">Here</span>
             </motion.h1>
           </motion.section>

           {/* Section 2: Cards / Process (Use Glassmorphism) */}
           <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="space-y-6">
             <motion.div variants={FADE_UP} className="p-8 md:p-10 bg-white shadow-glass rounded-[2rem] border border-black/5 relative group">
                <div className="w-14 h-14 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                  <Target />
                </div>
                <h3 className="text-2xl font-bold font-display">Step 1</h3>
                <p className="text-ink/70">Description</p>
             </motion.div>
           </motion.section>

           {/* Section 3: Call to Action */}
           <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="pb-24">
              <div className="p-12 bg-ink text-white rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
                 <h2 className="text-3xl font-display font-bold mb-8">Готові почати?</h2>
                 <a href="https://instagram.com/your_handle" className="inline-block px-8 py-4 bg-coral text-white font-bold rounded-xl shadow-neon-coral">
                   Написати в Instagram
                 </a>
              </div>
           </motion.section>

         </main>
       </div>
     );
   }
   ```

3. **Writing the Copy:**
   - Keep paragraphs short (2-3 sentences max). Nobody reads long text on mobile.
   - Use bold text `<strong>` to highlight key metrics or emotional triggers.
   - Speak directly to the client's problem and how you solve it.
