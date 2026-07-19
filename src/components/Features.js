"use client";

import React, { useState } from "react";
import { 
  PenTool, Code, BarChart2, Cpu, Users, 
  Calendar, X 
} from "lucide-react";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      title: "Smart Content Architect",
      desc: "Produce structured, high-quality content optimized for SEO in one click.",
      icon: PenTool,
      detail: "Our Smart Content Architect module utilizes advanced AI technology to generate SEO-friendly, long-form articles. It streamlines your writing process through automated internal linking and intelligent outline building, making your workflow 100x faster and more precise."
    },
    {
      title: "Universal Code Synthesizer",
      desc: "Write, debug, and translate code across 20+ programming languages.",
      icon: Code,
      detail: "This synthesizer is a powerful tool designed for modern developers. It doesn't just help write code; it assists in complex bug fixes and seamless conversion between various programming languages, significantly reducing your development time."
    },
    {
      title: "Multi-Model Cognitive Engine",
      desc: "Access GPT-4o, Claude 3.5, and Gemini Pro in one workspace.",
      icon: Cpu,
      detail: "Our Cognitive Engine automatically selects the optimal AI model—such as GPT-4o, Claude 3.5 Sonnet, or Gemini Pro—based on your specific prompt requirements, ensuring you always receive the highest quality output."
    },
    {
      title: "Predictive Analytics",
      desc: "Analyze content conversions before you publish.",
      icon: BarChart2,
      detail: "Before you publish, our Predictive Analytics tool analyzes your headlines, newsletters, or social media copies. It provides a mathematical forecast of potential click-through rates and engagement metrics to ensure your content performs at its best."
    },
    {
      title: "Team Workspaces",
      desc: "Shared prompt libraries and role management for organizations.",
      icon: Users,
      detail: "The Team Workspaces feature allows you to share prompt libraries with your team members and control access permissions based on specific roles, making it an highly effective solution for large organizations and collaborative projects."
    },
    {
      title: "Content Publishing Scheduler",
      desc: "Integrate with Webflow, WordPress, HubSpot, and social platforms.",
      icon: Calendar,
      detail: "Once your content is ready, schedule it directly from our dashboard to Webflow, WordPress, or various social media platforms. It fully automates your publishing process, saving you valuable time and effort."
    }
  ];

  return (
    <section className="relative py-20 bg-[#08060f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-amber-600/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            An elite suite for professional <span className="text-amber-400">content creators</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col h-full">
              <feat.icon className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-white/50 mb-6 flex-grow">{feat.desc}</p>
              <button 
                onClick={() => setSelectedFeature(feat)}
                className="text-teal-500 text-xs font-bold uppercase tracking-widest hover:text-white transition w-fit"
              >
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 p-8 rounded-2xl max-w-lg w-full relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedFeature(null)} 
              className="absolute top-4 right-4 text-white/50 hover:text-white p-2"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedFeature.title}</h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">{selectedFeature.detail}</p>
          </div>
        </div>
      )}
    </section>
  );
}