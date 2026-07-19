"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap } from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Hobbyist",
      desc: "Perfect for testing the waters and personal projects.",
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        "Up to 5,000 token generations",
        "Community access to base models",
        "Limited template customization",
        "Standard queue priority",
        "Personal use only"
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Growth Engine",
      desc: "Scale your content production with smart AI assistance.",
      priceMonthly: 39,
      priceYearly: 31,
      features: [
        "Unlimited generation capacity",
        "GPT-4o & Claude 3.5 Sonnet access",
        "Automated SEO keyword optimizer",
        "Team collaboration & shared workspace",
        "API integration & webhook support",
        "Priority 24/7 technical support"
      ],
      cta: "Choose Growth",
      popular: true,
    },
    {
      name: "Corporate Suite",
      desc: "For agencies and teams requiring total control.",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      features: [
        "Private AI model hosting",
        "Enterprise-grade security & SOC2",
        "Custom brand voice fine-tuning",
        "Unlimited seat management",
        "Dedicated account strategist",
        "Custom SLA & onboarding training"
      ],
      cta: "Talk to Sales",
      popular: false,
    }
  ];

  return (
    <section className="py-24 bg-[#08060f] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Pick Your <span className="text-indigo-400">Growth Plan</span>
          </h2>
          
          {/* Toggle */}
          <div className="inline-flex items-center bg-white/5 p-1 rounded-full border border-white/10">
            {["monthly", "yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setBillingPeriod(period)}
                className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                  billingPeriod === period ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? "bg-indigo-950/20 border-indigo-500/50 shadow-2xl" 
                  : "bg-white/[0.02] border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-indigo-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles size={12} /> Best Value
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-white">
                  {typeof plan.priceMonthly === "number" ? `$${billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly}` : "Custom"}
                </span>
                <span className="text-slate-500 text-sm ml-2">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-indigo-400" /> {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                plan.popular ? "bg-indigo-600 text-white hover:bg-indigo-500" : "bg-white/5 text-white hover:bg-white/10"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}