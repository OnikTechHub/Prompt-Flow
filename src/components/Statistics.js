"use client";

import React from "react";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      label: "Total Words Generated",
      value: "15.4M+",
      trend: "+2.3M this week",
      icon: TrendingUp,
      accent: "text-blue-400",
      visual: (
        <div className="flex items-end gap-1.5 h-12 mt-6">
          {[40, 60, 50, 75, 90].map((h, i) => (
            <div key={i} className="w-full bg-blue-600/20 rounded-t transition-all group-hover:bg-blue-600/40" style={{ height: `${h}%` }} />
          ))}
        </div>
      )
    },
    {
      label: "Generation Speed",
      value: "10x Faster",
      trend: "Avg. 3.2s load time",
      icon: Zap,
      accent: "text-cyan-400",
      visual: (
        <div className="mt-6 space-y-3">
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-slate-600 w-full" />
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 w-[15%]" />
          </div>
        </div>
      )
    },
    {
      label: "Satisfaction Rate",
      value: "99.8%",
      trend: "Based on 4,000+ reviews",
      icon: Award,
      accent: "text-pink-400",
      visual: (
        <div className="mt-6 flex items-center gap-4">
          <div className="text-2xl font-black text-white/90">9.9/10</div>
          <div className="text-[10px] text-slate-400 leading-tight">Average G2<br/>Crowd Rating</div>
        </div>
      )
    },
    {
      label: "Active Creators",
      value: "45,000+",
      trend: "Across 140+ countries",
      icon: Users,
      accent: "text-teal-400",
      visual: (
        <div className="flex -space-x-2 mt-6 items-center">
          {[1,2,3,4].map((i) => (
            <div key={i} className="h-8 w-8 rounded-full border-2 border-[#08060f] bg-white/10" />
          ))}
          <div className="h-8 w-8 rounded-full border-2 border-[#08060f] bg-teal-500/20 flex items-center justify-center text-[10px] font-bold">+2k</div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#08060f] relative border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-xl bg-white/5 ${stat.accent}`}>
                  <stat.icon size={18} />
                </div>
              </div>
              
              <div className="mb-1">
                <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
              <p className="text-[10px] text-indigo-400/80 mb-2">{stat.trend}</p>
              
              {stat.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}