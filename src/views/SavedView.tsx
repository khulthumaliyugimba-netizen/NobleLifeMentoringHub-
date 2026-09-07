import React from 'react';
import { ViewType } from '../types';
import { TOPICS } from '../data/topics';
import { TopicCard } from '../components/TopicCard';
import { Bookmark, ArrowRight, BookOpen } from 'lucide-react';

interface SavedViewProps {
  onNavigate: (view: ViewType, topicId?: string) => void;
  savedTopicIds: string[];
  onToggleSave: (topicId: string, e: React.MouseEvent) => void;
}

export function SavedView({ onNavigate, savedTopicIds, onToggleSave }: SavedViewProps) {
  const savedTopics = TOPICS.filter(t => savedTopicIds.includes(t.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef4ee] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#204933]">
          <Bookmark className="h-3.5 w-3.5" />
          Personal Library
        </span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#163623] sm:text-4xl">
          Saved Mentoring Guides
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-[#526b5d]">
          Your bookmarked guides for quick, private access whenever you need encouragement or recovery steps.
        </p>
      </div>

      {savedTopics.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onSelect={(id) => onNavigate('topic-detail', id)}
              isSaved={true}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-[#e2ded5] bg-white p-8 text-center shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2eee7] text-[#556e60]">
            <Bookmark className="h-7 w-7" />
          </div>
          <h2 className="mt-4 font-heading text-lg font-bold text-[#163623]">
            No saved guides yet
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-[#556e60]">
            Bookmark the topics you want to keep handy for quick guidance, dhikr reminders, and recovery checklists.
          </p>
          <button
            onClick={() => onNavigate('topics')}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#204933] px-5 py-3 text-xs font-bold text-white shadow-xs hover:bg-[#183928]"
          >
            <BookOpen className="h-4 w-4" />
            Explore Topics to Save
          </button>
        </div>
      )}
    </div>
  );
}
