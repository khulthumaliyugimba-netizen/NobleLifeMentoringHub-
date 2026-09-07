import React from 'react';
import { ViewType } from '../types';
import { 
  Heart, 
  Sparkles, 
  Shield, 
  BookOpen, 
  HeartHandshake, 
  MessageCircle,
  Users,
  Compass
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
}

export function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Header */}
      <div className="text-center">
        <img
          src="/assets/noble-life-logo.png"
          alt="Noble Life Mentoring Hub logo"
          className="mx-auto mb-6 h-28 w-28 rounded-full object-cover shadow-md ring-4 ring-white"
        />
        <span className="rounded-full bg-[#eef4ee] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#204933]">
          Our Story & Mission
        </span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#163623] sm:text-5xl">
          About Noble Life Mentoring Hub
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#526b5d] sm:text-lg">
          Guiding young hearts back to purity, dignity, and purpose through faith and understanding.
        </p>
      </div>

      {/* Story / Mission Narrative */}
      <div className="mt-12 space-y-6 rounded-3xl border border-[#e5dfd4] bg-white p-6 sm:p-10 text-base leading-relaxed text-[#2a4435] shadow-xs">
        <p className="text-lg font-medium text-[#163623]">
          Noble Life Mentoring Hub was founded by <strong>Ummukhulthum Aliyu Gimba</strong> out of a deep desire to help young Muslims win the silent battles that many are too ashamed to speak about.
        </p>
        
        <p>
          In a world inundated with temptations, smartphones, hyper-sexualized media, and constant peer pressure, young boys and girls often suffer in silence. Feelings of guilt, worthlessness, and confusion can lead them to believe they are beyond redemption.
        </p>

        <p>
          The Hub mentors young Muslims struggling with habits like masturbation, pornography, stealing, lying, uncontrolled anger, low self-confidence, backbiting, envy, procrastination, social media addiction, and toxic company. Every resource, guide, and mentoring session here is built on three unbreakable pillars:
        </p>
      </div>

      {/* The 3 Pillars */}
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {/* Pillar 1 */}
        <div className="rounded-3xl border border-[#e2dcd2] bg-white p-6 text-center shadow-xs">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ee] text-[#204933]">
            <Compass className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold text-[#163623]">
            Clarity
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#556f61]">
            Clear, honest explanations of the physical, mental, and spiritual harms, paired with clear Islamic teachings.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="rounded-3xl border border-[#e2dcd2] bg-white p-6 text-center shadow-xs">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ee] text-[#204933]">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold text-[#163623]">
            Compassion
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#556f61]">
            No shame, no condemnation, and no judgment — only empathetic understanding and practical steps to heal.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="rounded-3xl border border-[#e2dcd2] bg-white p-6 text-center shadow-xs">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ee] text-[#204933]">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold text-[#163623]">
            Confidence
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#556f61]">
            Rebuilding unwavering self-worth and dignity through sincere tawbah, active taqwa, and trust in Allah SWT.
          </p>
        </div>
      </div>

      {/* Inspiring Verse */}
      <div className="mt-10 rounded-3xl bg-[#204933] p-8 text-center text-white shadow-md sm:p-12">
        <p className="font-serif text-xl italic text-emerald-100 sm:text-2xl">
          “And whoever relies upon Allah — then He is sufficient for him.”
        </p>
        <span className="mt-3 block text-sm font-semibold uppercase tracking-wider text-emerald-300">
          — Qur'an 65:3
        </span>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-emerald-100/90 sm:text-base">
          The goal is simple: to guide young hearts back to purity, dignity, and purpose. The journey is not always easy, but with Allah's help, sincere intention, and the right mentoring support, transformation is always within reach.
        </p>
      </div>

      {/* Bottom CTA Row */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => onNavigate('topics')}
          className="inline-flex items-center gap-2 rounded-xl bg-[#204933] px-6 py-3.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#183928]"
        >
          <BookOpen className="h-4 w-4" />
          Explore Topics
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 rounded-xl border border-[#d6cfc4] bg-white px-6 py-3.5 text-sm font-bold text-[#204933] shadow-xs transition-all hover:bg-[#ede7dd]"
        >
          <MessageCircle className="h-4 w-4" />
          Reach Out Privately
        </button>
      </div>
    </div>
  );
}
