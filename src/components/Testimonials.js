"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128",
      text: "Prompt-Flow has completely streamlined our agency's output. The UI is clean, and the responses are consistently better than anything we've used before.",
    },
    {
      name: "Samir Khan",
      role: "Lead Full-Stack Dev",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=128",
      text: "I rely on this for all my boilerplate code. It understands context better than any other AI I've tried, saving me hours of manual configuration.",
    },
    {
      name: "Jordan Lee",
      role: "Social Media Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128",
      text: "The campaign templates are a game changer. We've seen a 3x increase in engagement since we started automating our caption generation.",
    },
    {
      name: "Maya Patel",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128",
      text: "Finally, an AI tool that actually builds structured content instead of just dumping text. It's built for professionals.",
    }
  ];

  return (
    <section className="py-24 bg-[#08060f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Voices from the community</h2>
          <p className="text-slate-400">See why thousands of developers and creators trust us.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between ${i % 2 === 0 ? "lg:row-span-2" : ""}`}
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-indigo-500 text-indigo-500" />)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
              </div>
              
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/20" 
                />
                <div>
                  <h4 className="text-white text-sm font-bold">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}