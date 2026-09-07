import React, { useState } from 'react';
import { ViewType, Topic } from '../types';
import { TopicIcon } from '../components/TopicIcon';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Check, 
  HeartHandshake, 
  BookOpen, 
  ShieldAlert
} from 'lucide-react';

interface TopicDetailViewProps {
  topic: Topic;
  onNavigate: (view: ViewType, topicId?: string) => void;
  isSaved: boolean;
  onToggleSave: (topicId: string, e: React.MouseEvent) => void;
  onOpenTawbahModal: () => void;
}

export function TopicDetailView({ 
  topic, 
  onNavigate, 
  isSaved, 
  onToggleSave,
  onOpenTawbahModal 
}: TopicDetailViewProps) {
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleCheck = (idx: number) => {
    setCheckedSteps(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-14">
      {/* Top Breadcrumb / Action row */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('topics')}
          className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#3b5445] transition-colors hover:bg-[#ede7dc] hover:text-[#183928]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>All Topics</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={(e) => onToggleSave(topic.id, e)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors ${
              isSaved
                ? 'border-[#204933] bg-[#eef4ee] text-[#204933]'
                : 'border-[#ded8ce] bg-white text-[#526b5c] hover:bg-[#f3efe8]'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved Guide' : 'Save Guide'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-xl border border-[#ded8ce] bg-white px-3 py-1.5 text-xs font-medium text-[#526b5c] transition-colors hover:bg-[#f3efe8]"
          >
            {copiedLink ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-700" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="mt-8 rounded-3xl border border-[#e5dfd4] bg-white p-6 shadow-xs sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ee] p-4 text-[#204933] ring-1 ring-[#204933]/15">
            <TopicIcon iconName={topic.icon} className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <span className="rounded-full bg-[#f4efe8] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3d5e4a]">
              Topic Guide
            </span>
            <h1 className="mt-2 font-heading text-2xl font-extrabold text-[#163623] sm:text-4xl">
              {topic.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#4e6758] sm:text-lg">
              {topic.summary}
            </p>
          </div>
        </div>
      </header>

      {/* 1. Why it harms you */}
      <section className="mt-12">
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="h-5 w-5 text-[#b34033]" />
          <h2 className="font-heading text-xl font-bold text-[#163623] sm:text-2xl">
            Why It Harms You
          </h2>
        </div>
        <p className="mt-1 text-xs text-[#607a6c] sm:text-sm">
          Understanding the real effects helps remove the false illusion that the habit is harmless.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {topic.harms.map((harm, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#e5ded3] bg-white p-5 shadow-2xs transition-shadow hover:shadow-xs"
            >
              <h3 className="font-heading text-base font-bold text-[#1a3c2a]">
                {harm.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#516b5c]">
                {harm.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. What Allah SWT says (Islamic Perspective) */}
      <section className="mt-14 rounded-3xl border border-[#e2dcd2] bg-[#f5f1ea] p-6 sm:p-10">
        <div className="flex items-center gap-2.5">
          <BookOpen className="h-5 w-5 text-[#204933]" />
          <h2 className="font-heading text-xl font-bold text-[#163623] sm:text-2xl">
            What Allah SWT & His Messenger ﷺ Say
          </h2>
        </div>

        {/* Islamic View Description */}
        <div className="mt-6 space-y-3">
          {topic.islamicView.map((para, idx) => (
            <p key={idx} className="text-sm leading-relaxed text-[#234230] sm:text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Qur'an Verses */}
        {topic.verses.length > 0 && (
          <div className="mt-8 space-y-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#204933]">
              Qur'anic Guidance
            </h3>
            {topic.verses.map((verse, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl border-l-4 border-[#204933] bg-white p-5 shadow-2xs"
              >
                <p className="font-serif text-base italic leading-relaxed text-[#1a3c2a] sm:text-lg">
                  “{verse.text}”
                </p>
                <footer className="mt-3 text-xs font-bold text-[#204933]">
                  — {verse.ref}
                </footer>
              </blockquote>
            ))}
          </div>
        )}

        {/* Hadith */}
        {topic.hadith.length > 0 && (
          <div className="mt-8 space-y-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#3d654f]">
              Hadith of the Prophet ﷺ
            </h3>
            {topic.hadith.map((item, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl border-l-4 border-[#59846b] bg-white p-5 shadow-2xs"
              >
                <p className="font-serif text-base italic leading-relaxed text-[#1a3c2a] sm:text-lg">
                  “{item.text}”
                </p>
                <footer className="mt-3 text-xs font-bold text-[#506e5d]">
                  — {item.ref}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </section>

      {/* 3. If you fail, do this (Actionable Recovery Checklist) */}
      <section className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-[#204933]" />
              <h2 className="font-heading text-xl font-bold text-[#163623] sm:text-2xl">
                If You Slip Up, Do This
              </h2>
            </div>
            <p className="mt-1 text-xs text-[#607a6c] sm:text-sm">
              Tap each step as you complete it to regain control and reset your heart.
            </p>
          </div>

          <button
            onClick={onOpenTawbahModal}
            className="inline-flex items-center gap-1.5 self-start rounded-xl bg-[#eef4ee] px-3.5 py-2 text-xs font-bold text-[#204933] hover:bg-[#dcebdd]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Open Tawbah Walkthrough
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {topic.ifYouFail.map((action, idx) => {
            const isCompleted = checkedSteps.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`flex items-start gap-4 rounded-2xl border p-4 transition-all cursor-pointer ${
                  isCompleted
                    ? 'border-[#204933] bg-[#eef4ee]/80 text-[#183928]'
                    : 'border-[#e5ded3] bg-white text-[#2a4435] hover:border-[#b8cdbf]'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isCompleted ? 'bg-[#204933] text-white' : 'bg-[#ece6dc] text-[#557061]'
                  }`}
                >
                  {isCompleted ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : idx + 1}
                </div>
                <p className={`flex-1 text-sm leading-relaxed sm:text-base ${isCompleted ? 'line-through opacity-80' : ''}`}>
                  {action}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Rebuild your confidence */}
      <section className="mt-14 rounded-3xl bg-[#204933] p-6 text-white shadow-lg sm:p-10">
        <div className="flex items-center gap-2.5">
          <Sparkles className="h-5 w-5 text-emerald-200" />
          <h2 className="font-heading text-xl font-bold sm:text-2xl text-white">
            Rebuild Your Confidence
          </h2>
        </div>
        <p className="mt-1 text-xs text-emerald-100 sm:text-sm">
          A slip does not define your destiny. Plant these truths firmly in your heart:
        </p>

        <ul className="mt-6 space-y-4">
          {topic.confidence.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
              <span className="text-sm leading-relaxed text-emerald-50 sm:text-base">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Direct Action Navigation Bar */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5dfd4] pt-8">
        <button
          onClick={() => onNavigate('topics')}
          className="inline-flex items-center justify-center rounded-xl border border-[#ded8ce] bg-white px-5 py-3 text-xs font-semibold text-[#2d4738] shadow-xs hover:bg-[#ede7dd]"
        >
          ← Back to all topics
        </button>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center justify-center rounded-xl border border-[#204933]/30 bg-[#eef4ee] px-5 py-3 text-xs font-semibold text-[#204933] hover:bg-[#dcebdd]"
          >
            Meet the Mentor
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#204933] px-5 py-3 text-xs font-bold text-white shadow-xs hover:bg-[#183928]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Ask Private Advice on this Struggle
          </button>
        </div>
      </div>
    </article>
  );
}
