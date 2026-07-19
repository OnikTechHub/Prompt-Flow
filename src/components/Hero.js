"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Play, Terminal, FileText, Mail, Share2, Copy, Check, RefreshCw } from "lucide-react";

export default function Hero({ onLogin, isAuthenticated, onPromptGenerated }) {
  const templates = [
    {
      id: "blog",
      name: "Blog Intro",
      icon: FileText,
      prompt: "Write an engaging intro about the future of AI Agent coding.",
      output: "The era of manual boilerplate writing is coming to a close. As autonomous AI coding agents evolve from simple autocomplete tools into cooperative pair programmers, software development is undergoing a massive paradigm shift. Prompt-Flow stands at the forefront, bridging the gap between human intent and production-ready architectures.",
      color: "from-blue-500 to-teal-500"
    },
    {
      id: "email",
      name: "Launch Email",
      icon: Mail,
      prompt: "Create an email copy for launching our SaaS platform.",
      output: "Subject: Generate 10x Content Overnight 🚀\n\nHey there,\n\nAre you tired of staring at a blank page? Meet Prompt-Flow—the ultimate writing companion for modern teams. Start creating blogs, emails, and high-converting copy in seconds.\n\nClaim your free credits now!",
      color: "from-cyan-500 to-pink-500"
    },
    {
      id: "code",
      name: "FastAPI Script",
      icon: Terminal,
      prompt: "Generate a fast FastAPI server with authentication.",
      output: "from fastapi import FastAPI, Depends, HTTPException\nfrom fastapi.security import OAuth2PasswordBearer\n\napp = FastAPI()\noauth2_scheme = OAuth2PasswordBearer(tokenUrl=\"token\")\n\n@app.get(\"/api/v1/generate\")\ndef generate_content(token: str = Depends(oauth2_scheme)):\n    return {\"status\": \"success\", \"data\": \"AI generated response\"}",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: "social",
      name: "LinkedIn Post",
      icon: Share2,
      prompt: "Create an engaging LinkedIn post for launch day.",
      output: "🚀 Exciting news! Today we are officially launching Prompt-Flow v2.0.\n\n✨ 10x faster generation times\n✨ Deep-indigo multi-model context processing\n✨ Production-ready exports\n\nSay goodbye to writer's block. Try it out for free and let us know what you build! #AI #Copywriting #SaaS",
      color: "from-pink-500 to-blue-500"
    }
  ];

  const [activeTab, setActiveTab] = useState(templates[0]);
  const [displayText, setDisplayText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateGeneration = (template) => {
    setIsGenerating(true);
    setDisplayText("");
    setProgress(0);
    setCopied(false);

    // Simulate AI model latency/thinking
    let count = 0;
    const interval = setInterval(() => {
      count += 10;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
        
        // Start streaming text
        const text = template.output;
        let index = 0;
        const words = text.split(" ");
        let currentText = "";
        
        const streamInterval = setInterval(() => {
          if (index < words.length) {
            currentText += (index === 0 ? "" : " ") + words[index];
            setDisplayText(currentText);
            index++;
          } else {
            clearInterval(streamInterval);
            setIsGenerating(false);
            if (onPromptGenerated) {
              onPromptGenerated({
                prompt: template.prompt,
                output: template.output,
                category: template.name,
                words: template.output.split(" ").length
              });
            }
          }
        }, 60);
      }
    }, 150);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      simulateGeneration(activeTab);
    }, 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(displayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-[#08060f] pt-24 pb-24 md:pt-32 md:pb-36">
      {/* Background ambient glows — amber/rose signal instead of blue/cyan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-amber-600/10 blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-rose-950/20 blur-[80px] sm:blur-[120px] pointer-events-none" />
      {/* faint scanline grid for console mood */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-amber-400/25 bg-amber-400/[0.06] mb-6">
              <span className="flex items-end gap-[2px]" aria-hidden="true">
                <span className="eq-bar w-[2.5px] rounded-full bg-amber-400" style={{ animationDelay: "0ms" }} />
                <span className="eq-bar w-[2.5px] rounded-full bg-amber-400" style={{ animationDelay: "140ms" }} />
                <span className="eq-bar w-[2.5px] rounded-full bg-amber-400" style={{ animationDelay: "280ms" }} />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-300">
                v2.0 — multi-model playground live
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Craft perfect content at{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                10x speed
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-white/45 max-w-xl leading-relaxed">
              Prompt-Flow runs advanced writing, code, and marketing models inside one console-grade
              workspace. Zero boilerplate. Max conversions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button 
                onClick={onLogin}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#08060f] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl hover:shadow-[0_0_20px_-2px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
              >
                {isAuthenticated ? "Go to Dashboard" : "Start Generating Free"}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
              <a 
                href="#how-it-works"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md transition-all"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-9 flex items-center gap-6 font-mono text-[11px] text-white/35">
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-amber-400" />
                <span>No card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-amber-400" />
                <span>10,000 free words</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Playground Scaffolding */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0c0a16] shadow-2xl shadow-black/60 max-w-2xl mx-auto">

              {/* moving gradient hairline across the top of the console */}
              <div className="h-[2px] w-full bg-[length:200%_100%] animate-flowline bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400" />

              {/* Card Header (console-style traffic lights and live status) */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-400/70" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                    prompt-flow-engine — v2.0
                  </span>
                </div>
              </div>

              {/* Playground Tabs — underline tab-strip, matches nav */}
              <div className="flex border-b border-white/[0.06]">
                {templates.map((tpl) => {
                  const Icon = tpl.icon;
                  const isActive = activeTab.id === tpl.id;
                  return (
                    <button
                      key={tpl.id}
                      onClick={() => !isGenerating && setActiveTab(tpl)}
                      disabled={isGenerating}
                      className={`relative flex flex-1 flex-col sm:flex-row items-center justify-center gap-2 py-3.5 px-1 text-[11px] font-bold uppercase tracking-[0.08em] transition-all cursor-pointer ${
                        isActive ? "text-white" : "text-white/35 hover:text-white/70"
                      } ${isGenerating ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tpl.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-rose-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Playground Body */}
              <div className="p-5 flex flex-col gap-4">
                
                {/* Input Prompt Box */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35 font-bold">Input prompt</label>
                  <div className="mt-1.5 flex items-center justify-between p-3 rounded-md bg-black/40 border border-white/[0.06]">
                    <span className="text-sm font-medium text-white/80 truncate pr-4">
                      &quot;{activeTab.prompt}&quot;
                    </span>
                    <button 
                      onClick={() => !isGenerating && simulateGeneration(activeTab)} 
                      disabled={isGenerating}
                      className="p-1.5 rounded-md bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 transition-colors cursor-pointer disabled:opacity-50"
                      title="Regenerate"
                    >
                      <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Simulated AI Output Panel */}
                <div className="relative">
                  <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35 font-bold">Generated result</label>
                  
                  <div className="mt-1.5 min-h-[140px] p-4 rounded-md bg-black/60 border border-white/[0.06] font-mono text-sm leading-relaxed text-white/70 relative overflow-hidden select-text">
                    
                    {/* Running Loader or Bar */}
                    {isGenerating && progress < 100 && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[1px]">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-amber-400 mb-2">Analyzing prompt context...</span>
                        <div className="h-1 w-40 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-400 to-rose-400 transition-all duration-150"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Output display content */}
                    {displayText ? (
                      <p className="whitespace-pre-line">{displayText}</p>
                    ) : (
                      !isGenerating && <p className="text-white/25 italic">Ready to generate...</p>
                    )}

                    {/* Cursor blinking */}
                    {isGenerating && progress >= 100 && (
                      <span className="inline-block w-1.5 h-4 ml-1 bg-amber-400 animate-pulse" />
                    )}
                  </div>

                  {/* Copy Button */}
                  {displayText && !isGenerating && (
                    <button 
                      onClick={handleCopy}
                      className="absolute right-3 bottom-3 p-2 rounded-md bg-white/[0.04] border border-white/[0.06] hover:border-white/10 hover:bg-white/[0.08] text-white/50 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-amber-400" />
                          <span className="text-amber-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes flowline {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-flowline {
          animation: flowline 6s linear infinite;
        }
        @keyframes eqbar {
          0%, 100% { height: 4px; opacity: 0.5; }
          50% { height: 10px; opacity: 1; }
        }
        .eq-bar {
          height: 6px;
          animation: eqbar 900ms ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
