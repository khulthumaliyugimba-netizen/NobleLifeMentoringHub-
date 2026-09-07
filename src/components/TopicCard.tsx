import React from 'react';
import { Topic } from '../types';
import { TopicIcon } from './TopicIcon';
import { Bookmark, ArrowRight } from 'lucide-react';

interface TopicCardProps {
  key?: React.Key;
  topic: Topic;
  onSelect: (topicId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (topicId: string, e: React.MouseEvent) => void;
}

export function TopicCard({ topic, onSelect, isSaved = false, onToggleSave }: TopicCardProps) {
  const categoryLabels: Record<string, string> = {
    habits: 'Private Habits',
    character: 'Character & Speech',
    mindset: 'Mindset & Taqwa',
    relationships: 'Relationships'
  };

  return (
    <div
      onClick={() => onSelect(topic.id)}
      className="group relative flex flex-col justify-between rounded-2xl border border-[#e5dfd4] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#2d5a3f]/40 hover:shadow-md cursor-pointer"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex rounded-xl bg-[#eef4ee] p-3 text-[#204a32] transition-colors group-hover:bg-[#204a32] group-hover:text-white">
            <TopicIcon iconName={topic.icon} className="h-6 w-6" />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-[#f4efe8] px-2.5 py-0.5 text-[11px] font-medium text-[#4a6b57]">
              {categoryLabels[topic.category] || 'Guidance'}
            </span>

            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(topic.id, e);
                }}
                className={`rounded-lg p-1.5 transition-colors ${
                  isSaved
                    ? 'bg-[#eef4ee] text-[#204a32]'
                    : 'text-[#8b9e92] hover:bg-[#f3efe8] hover:text-[#204a32]'
                }`}
                title={isSaved ? "Remove from saved" : "Save for quick reading"}
                aria-label={isSaved ? "Remove bookmark" : "Save bookmark"}
              >
                <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            )}
          </div>
        </div>

        <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-[#1a3c2a] transition-colors group-hover:text-[#2d5a3f] sm:text-xl">
          {topic.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#556e5f] line-clamp-3">
          {topic.summary}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#f1eee8] pt-4 text-xs font-semibold text-[#204a32]">
        <span>Explore Harms & Sunnah Guide</span>
        <span className="flex items-center gap-1 transition-transform group-hover:translate-x-1">
          Read Guide
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
