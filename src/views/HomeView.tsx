import React, { useState } from 'react';
import { ViewType, TopicCategory } from '../types';
import { TOPICS, TOPIC_CATEGORIES } from '../data/topics';
import { TopicCard } from '../components/TopicCard';
import { 
  Sparkles, 
  ArrowRight, 
  HeartHandshake, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Users,
  Compass
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType, topicId?: string) => void;
  onOpenTawbahModal: () => void;
  savedTopicIds: string[];
  onToggleSave: (topicId: string, e: React.MouseEvent) => void;
}

export function HomeView({ 
  onNavigate, 
  onOpenTawbahModal,
  savedTopicIds,
  onToggleSave 
}: HomeViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | 'all'>('all');

  const filteredTopics = selectedCategory === 'all' 
    ? TOPICS 
    : TOPICS.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-16 pb-12 sm:space-y-24 sm:pb-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-10 text-center sm:pt-20">
        <div className="relative mx-auto mb-8 inline-block">
          <img
            src="/assets/noble-life-logo.png"
            alt="Noble Life Mentoring Hub logo"
            className="h-28 w-28 rounded-full object-cover shadow-md ring-4 ring-white sm:h-36 sm:w-36"
          />
          <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#204933] text-white shadow-sm ring-2 ring-white">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[#163623] sm:text-5xl lg:text-6xl">
          Noble Life Mentoring Hub
        </h1>

        <p className="mt-4 font-heading text-lg font-semibold text-[#2b583e] sm:text-2xl">
          Guiding Young Hearts To Purity, Dignity and Purpose.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#516b5c] sm:text-lg">
          A safe, authentic Islamic space for young boys and girls who are struggling with difficult habits and silent battles. Here you will find the harms, what Allah SWT says, and how to pick yourself up with confidence when you fall.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            id="hero-browse-topics-btn"
            onClick={() => onNavigate('topics')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#204933] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#183928] hover:shadow-lg active:scale-98"
          >
            <BookOpen className="h-4 w-4" />
            Browse Topics
          </button>

          <button
            id="hero-spiritual-reset-btn"
            onClick={onOpenTawbahModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#204933]/30 bg-[#eef4ee] px-5 py-3.5 text-sm font-semibold text-[#204933] shadow-xs transition-all hover:bg-[#dce9dd] active:scale-98"
          >
            <Sparkles className="h-4 w-4 text-[#204933]" />
            Spiritual Reset Guide
          </button>

          <button
            id="hero-contact-advice-btn"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d8d1c5] bg-white px-5 py-3.5 text-sm font-semibold text-[#2d4738] shadow-xs transition-all hover:bg-[#f3efe8] active:scale-98"
          >
            <HeartHandshake className="h-4 w-4 text-[#355a45]" />
            Private Advice
          </button>
        </div>

        {/* Confidence Assurance Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#556e5f]">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="h-4 w-4 text-[#204933]" />
            Confidential & Non-Judgmental
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Compass className="h-4 w-4 text-[#204933]" />
            Rooted in Qur'an & Sunnah
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Heart className="h-4 w-4 text-[#204933]" />
            Practical Healing Blueprints
          </span>
        </div>
      </section>

      {/* Empathy & Reassurance Banner */}
      <section className="border-y border-[#e7e1d6] bg-[#f2ede4]/80 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#204933] shadow-2xs">
            A Safe Space
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-[#1a3c2a] sm:text-3xl">
            You are not alone, and you are not defined by your slip-ups.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e6758] sm:text-lg">
            Noble Life Mentoring Hub exists because every young Muslim deserves guidance that is clear, compassionate, and rooted in the Qur'an and Sunnah. Whether you are battling a secret habit or trying to rebuild your confidence, this site is a gentle, judgment-free step toward healing.
          </p>
        </div>
      </section>

      {/* Topics Catalog Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#163623] sm:text-3xl">
              Topics that help you heal
            </h2>
            <p className="mt-2 text-sm text-[#5a7364]">
              Click any topic to learn its harms, the Islamic view, and what to do if you fall.
            </p>
          </div>

          <button
            onClick={() => onNavigate('topics')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#204933] hover:underline"
          >
            View all 12 topics
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {TOPIC_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#204933] text-white shadow-xs'
                  : 'bg-white text-[#4a6b57] border border-[#e2dcd2] hover:bg-[#ede7dd]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.slice(0, 6).map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onSelect={(id) => onNavigate('topic-detail', id)}
              isSaved={savedTopicIds.includes(topic.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>

        {filteredTopics.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('topics')}
              className="inline-flex items-center gap-2 rounded-xl border border-[#204933] bg-white px-6 py-3 text-sm font-bold text-[#204933] shadow-xs transition-all hover:bg-[#eef4ee]"
            >
              Browse all {TOPICS.length} mentoring topics
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>

      {/* Allah's Mercy Callout */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b3d2b] to-[#2b583e] p-8 text-white shadow-xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur-xs">
              Divine Hope
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold sm:text-4xl text-white">
              Allah's mercy is bigger than your mistakes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
              The Prophet ﷺ told us that Allah rejoices more over the repentance of a believer than a traveler who finds his lost camel in the desert with his provisions. No matter how many times you have fallen, the door of tawbah is open right now.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={onOpenTawbahModal}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1b3d2b] shadow-md transition-all hover:bg-emerald-50 active:scale-98"
              >
                Start Your Reset Now
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/20 active:scale-98"
              >
                Talk to a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
