---
name: interactive-presentation-builder
description: Builds interactive, high-end React/Next.js presentations (pitch decks) for sales calls. Use this skill whenever the user asks to "create a presentation", "make slides for a call", "build a pitch deck", or mentions creating a PowerPoint/Keynote alternative. It ensures the presentation includes a synchronized Presenter View (with speaker notes) and premium UI/UX.
---

# Interactive Presentation Builder

This skill guides the creation of premium, interactive web-based presentations (pitch decks) that include a hidden "Presenter View" synchronized via BroadcastChannel.

## Key Principles

1. **Premium UI/UX:** The slides must look extremely high-end. Use Tailwind CSS with large typography (`font-display`, `text-6xl`, etc.), glassmorphism (`shadow-glass`, `backdrop-blur`), vibrant accents, and smooth `framer-motion` animations.
2. **Presenter View Integration:** The presentation must always utilize the `PresentationViewer` component (which supports `?presenter=true` via BroadcastChannel).
3. **Word-for-Word Speaker Notes:** EVERY slide must include a detailed, word-for-word sales script in the `notes:` property. These notes must be formatted with HTML/JSX (e.g., `<div className="space-y-4"><p><strong>...</strong></p></div>`) for readability in the presenter view.
4. **Clean Slide Content:** Slide `content` should be clean, visual, and free of long paragraphs. Move all the "talking points" and instructions into the `notes` and keep only the core visual hooks on the `content` UI. Do not leak internal strategy to the client-facing UI.

## Implementation Steps

1. **Create the Route:**
   - Create a new `page.tsx` file for the presentation (e.g., `src/app/[lang]/presentation/[name]/page.tsx`).
   - Define a `slides: SlideData[]` array.

2. **Structure the `SlideData`:**
   ```tsx
   import { PresentationViewer, SlideData } from '@/components/PresentationViewer';
   import { CheckCircle2, Zap } from 'lucide-react';
   
   export default function PresentationPage() {
     const slides: SlideData[] = [
       {
         id: 'slide-1',
         notes: (
           <div className="space-y-4">
             <p><strong>[Word-for-word intro script]</strong></p>
             <p>[Key talking points]</p>
           </div>
         ),
         content: (
           <div className="text-center space-y-8">
             {/* Premium UI blocks, Lucide icons, clear typography */}
             <h1 className="font-display text-5xl md:text-7xl font-black">Title</h1>
           </div>
         )
       }
     ];
     
     return <PresentationViewer slides={slides} />;
   }
   ```

3. **Writing the Sales Script (Notes):**
   - Act as a high-end sales closer when writing the notes.
   - Write exactly what the user should say, step by step, using persuasive language.
   - Guide the client from Point A (Problem) to Point B (Solution/ROI), ending with a clear Call to Action.

4. **Component Dependencies:**
   - Ensure `src/components/PresentationViewer.tsx` exists and supports `notes` and `BroadcastChannel`. (This component handles fullscreen, swipe gestures, keyboard navigation, and the dual-window presenter mode).
