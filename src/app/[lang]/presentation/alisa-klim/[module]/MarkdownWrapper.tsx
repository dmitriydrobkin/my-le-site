"use client";

import ReactMarkdown from "react-markdown";

export default function MarkdownWrapper({ content }: { content: string }) {
  return (
    <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 prose prose-slate prose-headings:font-black prose-headings:tracking-tight prose-a:text-rose-500 prose-li:marker:text-rose-400 max-w-none">
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 border-b pb-4" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-12 mb-6" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-bold text-slate-700 mt-8 mb-4" {...props} />,
          p: ({node, ...props}) => <p className="text-lg text-slate-600 mb-6 leading-relaxed" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-600 text-lg" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 space-y-3 mb-8 text-slate-600 text-lg" {...props} />,
          li: ({node, ...props}) => <li className="" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
          em: ({node, ...props}) => <em className="italic text-slate-500" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
