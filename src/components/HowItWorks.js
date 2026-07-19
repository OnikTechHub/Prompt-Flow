"use client";

import React, { useState } from "react";
import { PenTool, Brain, CloudLightning, Check, Globe } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Select Template & Context",
      desc: "Choose from 100+ industry-focused prompts. Feed your URLs or documents to guide the generation style.",
      icon: PenTool,
      preview: (
        <div className="p-6 rounded-2xl bg-[#0f0b24]/50 border border-white/5 backdrop-blur-xl">
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-[10px] uppercase font-bold tracking-wider">SEO Mode</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 italic font-medium leading-relaxed">
            "Create a high-converting SaaS landing page section focusing on lightning speed and dark-mode aesthetics..."
          </div>
        </div>
      )
    },
    {
      title: "2. Real-Time Processing",
      desc: "Prompt-Flow routes your prompt to the best-suited model (Claude, GPT, or Gemini) for maximum accuracy.",
      icon: Brain,
      preview: (
        <div className="p-6 rounded-2xl bg-[#0f0b24]/50 border border-white/5 backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Model Routing</span>
            <span className="text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full font-bold">ACTIVE</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-cyan-500 w-[85%] animate-pulse" />
            </div>
            <div className="text-[10px] text-slate-500 text-right">Processing... 120 t/s</div>
          </div>
        </div>
      )
    },
    {
      title: "3. Publish & Optimize",
      desc: "Verify originality with our plagiarism checker and sync content to Webflow, HubSpot, or Markdown.",
      icon: CloudLightning,
      preview: (
        <div className="p-6 rounded-2xl bg-[#0f0b24]/50 border border-white/5 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
            <Check className="h-4 w-4 bg-emerald-500/20 p-0.5 rounded-full" />
            <span>SEO Optimized & Verified</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg text-xs font-bold shadow-lg shadow-cyan-900/20">
              Sync to Webflow
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#08060f] relative">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Workflow in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Three Steps</span>
          </h2>
          <p className="text-slate-400">Transform raw ideas into publication-ready copy with an enterprise-grade automated workflow.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Selector */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx 
                  ? "bg-white/[0.03] border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]" 
                  : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5"
                }`}
              >
                <div className="flex gap-4">
                  <div className={`p-3 rounded-xl ${activeStep === idx ? "bg-indigo-600 text-white" : "bg-white/5 text-slate-400"}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Preview */}
          <div className="lg:col-span-7">
            <div className="relative group p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
              <div className="bg-[#0b0819] rounded-[22px] p-8 border border-white/5 shadow-2xl">
                 <div className="flex gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500/20" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/20" />
                 </div>
                 {steps[activeStep].preview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}