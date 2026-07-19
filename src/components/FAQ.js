"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is there a limit on how many projects I can manage?",
      a: "Our platform is designed for scale. While our entry-level tiers have project caps to keep things simple, our Growth and Enterprise plans offer unlimited project workspaces to ensure you never hit a wall while expanding your creative operations."
    },
    {
      q: "How does the AI ensure brand voice consistency?",
      a: "We utilize a proprietary fine-tuning layer that analyzes your previously published content. Once set up, the engine applies your unique linguistic patterns, tone, and formatting style across every piece of content you generate."
    },
    {
      q: "Can I export my generated content to external CMS?",
      a: "Absolutely. We provide one-click integrations for WordPress, Webflow, and Ghost. Additionally, our API allows developers to hook our output directly into headless CMS structures like Sanity or Contentful."
    },
    {
      q: "How secure is my data within the workspace?",
      a: "We prioritize security above all else. Your data is encrypted at rest and in transit. We never use your proprietary inputs or generated output to train our public models, ensuring your intellectual property remains exclusively yours."
    },
    {
      q: "Can I switch between plans whenever I need?",
      a: "We believe in flexibility. You can scale your subscription up or down at any time. Changes take effect immediately, and any unused balance from your previous plan is automatically credited toward your new billing cycle."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#08060f]">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Commonly Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Queries</span>
          </h2>
          <p className="text-slate-400">Everything you need to know about scaling with our platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === idx 
                  ? "bg-white/[0.04] border-indigo-500/30" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-white text-lg">{faq.q}</span>
                <div className={`p-1 rounded-full transition-transform ${openIndex === idx ? "bg-indigo-600 rotate-180" : "bg-white/10"}`}>
                  {openIndex === idx ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-white" />}
                </div>
              </button>

              <div className={`grid transition-all duration-300 ${openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}