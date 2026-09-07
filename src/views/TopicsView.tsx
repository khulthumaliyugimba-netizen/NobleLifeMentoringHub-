import React, { useState, useMemo } from 'react';
import { ViewType, TopicCategory } from '../types';
import { TOPICS, TOPIC_CATEGORIES } from '../data/topics';
import { TopicCard } from '../components/TopicCard';
import { Search, X, Bookmark, BookOpen } from 'lucide-react';

interface TopicsViewProps {
  onNavigate: (view: ViewType, topicId?: string) => void;
  savedTopicIds: string[];
  onToggleSave: (topicId: string, e: React.MouseEvent) => void;
}

export function TopicsView({ onNavigate, savedTopicIds, onToggleSave }: TopicsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | 'all'>('all');
  const [onlySaved, setOnlySaved] = useState(false);

  const filteredTopics = useMemo(() => {
    return TOPICS.filter((topic) => {
      // Saved filter
      if (onlySaved && !savedTopicIds.includes(topic.id)) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && topic.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = topic.title.toLowerCase().includes(q);
        const matchesSummary = topic.summary.toLowerCase().includes(q);
        const matchesHarms = topic.harms.some(h => 
          h.title.toLowerCase().includes(q) || h.text.toLowerCase().includes(q)
        );
        const matchesIslamic = topic.islamicView.some(v => v.toLowerCase().includes(q));
        return matchesTitle || matchesSummary || matchesHarms || matchesIslamic;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, onlySaved, savedTopicIds]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef4ee] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#204933]">
          <BookOpen className="h-3.5 w-3.5" />
          Mentoring Library
        </span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#163623] sm:text-4xl">
          Mentoring Topics
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#526b5d] sm:text-lg">
          Each guide explains the real harms, what Islam teaches, practical steps if you fail, and how to rebuild your confidence in Allah and yourself.
        </p>
      </div>

      {/* Search & Filters Bar */}
      <div className="mt-10 rounded-2xl border border-[#e5dfd4] bg-white p-4 shadow-xs sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d9284]" />
            <input
              id="topics-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search struggles (e.g., anger, pornography, lying, confidence)..."
              className="w-full rounded-xl border border-[#ded8ce] bg-[#faf8f5] py-2.5 pl-10 pr-10 text-sm text-[#1a3c2a] placeholder-[#819688] outline-none transition-colors focus:border-[#204933] focus:ring-1 focus:ring-[#204933]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7d9284] hover:text-[#1a3c2a]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Saved Toggle Pill */}
          <button
            onClick={() => setOnlySaved(!onlySaved)}
            className={`flex items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
              onlySaved
                ? 'border-[#204933] bg-[#204933] text-white shadow-xs'
                : 'border-[#ded8ce] bg-[#faf8f5] text-[#425a4c] hover:bg-[#ede7dd]'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${onlySaved ? 'fill-current' : ''}`} />
            <span>Saved Only ({savedTopicIds.length})</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[#f0ebe2] pt-4">
          {TOPIC_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#204933] text-white font-semibold'
                  : 'bg-[#faf8f5] text-[#557061] hover:bg-[#ede7dd] border border-[#e5dfd4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Meta */}
      <div className="mt-6 flex items-center justify-between text-xs text-[#627a6c]">
        <span>
          Showing <strong>{filteredTopics.length}</strong> of {TOPICS.length} topics
        </span>
        {(searchQuery || selectedCategory !== 'all' || onlySaved) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setOnlySaved(false);
            }}
            className="font-semibold text-[#204933] hover:underline"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Grid of Topic Cards */}
      {filteredTopics.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onSelect={(id) => onNavigate('topic-detail', id)}
              isSaved={savedTopicIds.includes(topic.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-dashed border-[#dcd6cb] bg-white p-12 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-[#9ab0a2]" />
          <h3 className="mt-4 font-heading text-lg font-bold text-[#1a3c2a]">
            No matching topics found
          </h3>
          <p className="mt-2 text-sm text-[#5a7364]">
            Try adjusting your search keywords or clearing your category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setOnlySaved(false);
            }}
            className="mt-6 inline-flex rounded-xl bg-[#204933] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#183928]"
          >
            Show All Topics
          </button>
        </div>
      )}
    </div>
  );
}
