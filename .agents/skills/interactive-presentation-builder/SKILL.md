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

2. **Structure the `SlideData` and Auth Guard:**
   The presentation page MUST check if the user is an admin and pass the `isAdmin` prop to the `PresentationViewer` to protect the speaker notes.
   ```tsx
   import { PresentationViewer, SlideData } from '@/components/PresentationViewer';
   
   export default async function PresentationPage() {
     const isAdmin = await (async () => {
       try {
         const { verifyAdminSession } = await import('@/server/actions/auth');
         await verifyAdminSession();
         return true;
       } catch {
         return false;
       }
     })();

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
             <h1 className="font-display text-5xl md:text-7xl font-black">Title</h1>
           </div>
         )
       }
     ];
     
     return <PresentationViewer slides={slides} isAdmin={isAdmin} />;
   }
   ```

3. **Writing the Sales Script (Notes):**
   - Act as a high-end sales closer when writing the notes.
   - Write exactly what the user should say, step by step, using persuasive language.
   - Guide the client from Point A (Problem) to Point B (Solution/ROI), ending with a clear Call to Action.

4. **Component Dependencies:**
   - Ensure `src/components/PresentationViewer.tsx` exists and supports `notes` and `BroadcastChannel`. 
   - **Auth Guard:** The component must accept an `isAdmin` prop and block access to the presenter view (`?presenter=true`) if `isAdmin` is false.
   - **Adaptive Presenter View:** The component must support a full-screen presenter mode (`?presenter=true`) where the notes section takes up 50% of the screen width (`w-1/2`). The text size in the notes must be dynamically scaled using viewport units (e.g., `text-[clamp(1.1rem,2.5vh,2.5rem)]`) and vertically centered (`flex flex-col justify-center`) so that the speaker NEVER has to scroll up or down while presenting on a full screen.
