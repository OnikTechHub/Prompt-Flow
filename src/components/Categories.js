"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Mail, FileText, Share2, Timer, Check } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "blog",
      name: "Blog Posts",
      icon: FileText,
      tagline: "SEO-optimized long-form content generation for authority and reach.",
      prompts: ["Guide to Next.js AI Agents", "Webflow vs Custom Coding", "Quantum Computing Basics"],
      time: "4.2s",
      limit: "5,000 Words",
      outputTitle: "Next.js + AI Agents Architecture",
      outputBody: "Artificial Intelligence has shifted from a novelty API to the core architecture of modern web apps. By coupling Next.js App Router with server-side AI endpoints, we can stream structured markdown straight into responsive interfaces."
    },
    {
      id: "social",
      name: "Social Media",
      icon: Share2,
      tagline: "Generate high-converting viral threads, hooks, and captions.",
      prompts: ["Why we switched to Vite", "Design tips for dark UIs", "Desktop app launch announcement"],
      time: "1.8s",
      limit: "800 Words",
      outputTitle: "Why We Switched to Vite",
      outputBody: "🚀 We just shaved 42 seconds off our development reload times. Here's why we moved our entire workspace from legacy bundling systems to Vite. Out-of-the-box support for Tailwind CSS v4."
    },
    {
      id: "email",
      name: "Email Campaigns",
      icon: Mail,
      tagline: "Create high-converting email pitches and onboarding flows.",
      prompts: ["AI content audit pitch", "Welcome email sequence", "Product feature update"],
      time: "2.5s",
      limit: "1,500 Words",
      outputTitle: "Welcome to Prompt-Flow Pro!",
      outputBody: "Hey there,\nWelcome to Prompt-Flow Pro! Your workspace is fully unlocked. Set up your brand voice inside settings and try out the new multi-model routing to build something epic."
    },
    {
      id: "dev",
      name: "Dev Scripts",
      icon: Terminal,
      tagline: "Production-ready algorithms and server route configurations.",
      prompts: ["Debounce Hook (React)", "Next.js Dockerfile", "Postgres Schema"],
      time: "3.1s",
      limit: "No Limit",
      outputTitle: "useDebounce Hook (React)",
      outputBody: "export function useDebounce(value, delay) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const handler = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n  return debounced;\n}"
    }
  ];

  const [activeCat, setActiveCat] = useState(categories[0]);

  return (
    <section className="py-24 bg-[#08060f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tailored Templates for <span className="text-indigo-400">Every Output</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Choose from hundreds of preset modules fine-tuned for marketing, social copywriting, and engineering.</p>
        </div>

        {/* Tab Links */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border transition-all ${
                activeCat.id === cat.id
                  ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-400"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              <cat.icon size={16} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-bold mb-2">{activeCat.name}</h3>
            <p className="text-sm text-slate-400 mb-8">{activeCat.tagline}</p>
            
            <div className="space-y-4 mb-8">
              {activeCat.prompts.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check size={16} className="text-emerald-500" /> {p}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-[10px] uppercase text-slate-500 font-bold">Latency</p>
                <p className="font-bold flex items-center gap-2"><Timer size={14} /> {activeCat.time}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-slate-500 font-bold">Capacity</p>
                <p className="font-bold">{activeCat.limit}</p>
              </div>
            </div>
          </div>

          {/* Right Preview */}
          <div className="lg:col-span-7 rounded-3xl bg-[#030014] border border-white/10 overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
              <span className="text-xs font-mono text-slate-500">output_preview.log</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            <div className="p-8 font-mono text-sm text-slate-300">
              <h4 className="text-white font-bold mb-4">{activeCat.outputTitle}</h4>
              <p className="leading-relaxed opacity-80">{activeCat.outputBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}