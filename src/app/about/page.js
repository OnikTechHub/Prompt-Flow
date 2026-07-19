"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Target, Eye, Shield, Users, Heart, Zap, ArrowLeft, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  const scrollToStory = () => {
    const element = document.getElementById("story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = [
    { icon: <Zap className="h-6 w-6 text-indigo-400" />, title: "Precision First", description: "Every prompt is engineered for exactness, minimizing hallucination and maximizing model adherence." },
    { icon: <Shield className="h-6 w-6 text-emerald-400" />, title: "Secure Infrastructure", description: "Your data privacy is our priority. We employ end-to-end encryption for every template and log." },
    { icon: <Users className="h-6 w-6 text-cyan-400" />, title: "Collaborative Growth", description: "Built for teams to sync, iterate, and deploy prompts without friction across different departments." },
    { icon: <Heart className="h-6 w-6 text-rose-400" />, title: "Developer Centric", description: "We believe in clean code and scalable architecture—making AI integration feel like second nature." }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-slate-100 flex flex-col font-sans relative selection:bg-teal-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Back Button */}
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white transition-all group mb-12"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">Our Identity</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
            Orchestrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Intelligence</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10">
            Prompt-Flow isn't just a management tool; it's the operating system for the next generation of AI-driven creative workflows.
          </p>
          <button 
            onClick={scrollToStory}
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 mx-auto"
          >
            Discover Our Story <ChevronRight size={18} />
          </button>
        </div>

        <div id="story" className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">From Chaos to Clarity</h2>
            <p className="text-slate-400 leading-relaxed">
              We started because we were tired of "Prompt Hell." Managing instructions across disparate docs and codebases was slowing down innovation. We needed a way to treat prompts as assets—version-controlled, testable, and instantly deployable.
            </p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-black text-white mb-2">10K+</div>
                <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Happy Creators</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-4xl font-black text-white mb-2">500K</div>
                <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Prompts Executed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-16">The Principles That Drive Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/50 transition-all group">
                <div className="mb-6">{val.icon}</div>
                <h4 className="text-lg font-bold text-white mb-3">{val.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}