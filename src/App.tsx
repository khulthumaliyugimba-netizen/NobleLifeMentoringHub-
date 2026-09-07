import React, { useState, useEffect } from 'react';
import { ViewType, Topic } from './types';
import { getTopicById, TOPICS } from './data/topics';
import { getSavedTopicIds, toggleSavedTopicId } from './utils/storage';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { TawbahGuideModal } from './components/TawbahGuideModal';
import { HomeView } from './views/HomeView';
import { TopicsView } from './views/TopicsView';
import { TopicDetailView } from './views/TopicDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { SavedView } from './views/SavedView';
import { ResetCompanionView } from './views/ResetCompanionView';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string | undefined>(undefined);
  const [savedTopicIds, setSavedTopicIds] = useState<string[]>([]);
  const [isTawbahModalOpen, setIsTawbahModalOpen] = useState(false);
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  // Initialize saved bookmarks from localStorage
  useEffect(() => {
    setSavedTopicIds(getSavedTopicIds());
  }, []);

  // Handle browser popstate / back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('topic/')) {
        const topicId = hash.replace('topic/', '');
        if (getTopicById(topicId)) {
          setSelectedTopicId(topicId);
          setCurrentView('topic-detail');
          return;
        }
      }
      if (['home', 'topics', 'about', 'contact', 'saved', 'reset'].includes(hash)) {
        setCurrentView(hash as ViewType);
        setSelectedTopicId(undefined);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // initial check
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on navigation
  const navigateTo = (view: ViewType, topicId?: string) => {
    setCurrentView(view);
    setSelectedTopicId(topicId);
    if (view === 'topic-detail' && topicId) {
      window.location.hash = `topic/${topicId}`;
    } else {
      window.location.hash = view === 'home' ? '' : view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSave = (topicId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = toggleSavedTopicId(topicId);
    setSavedTopicIds(updated);
  };

  const selectedTopic = selectedTopicId ? getTopicById(selectedTopicId) : undefined;

  // Inner view content rendering
  const renderViewContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            onNavigate={navigateTo}
            onOpenTawbahModal={() => setIsTawbahModalOpen(true)}
            savedTopicIds={savedTopicIds}
            onToggleSave={handleToggleSave}
          />
        );
      case 'topics':
        return (
          <TopicsView
            onNavigate={navigateTo}
            savedTopicIds={savedTopicIds}
            onToggleSave={handleToggleSave}
          />
        );
      case 'topic-detail':
        if (!selectedTopic) {
          return (
            <div className="mx-auto max-w-xl px-4 py-20 text-center">
              <h2 className="font-heading text-2xl font-bold text-[#163623]">Topic Not Found</h2>
              <p className="mt-2 text-sm text-[#557060]">The requested mentoring guide could not be located.</p>
              <button
                onClick={() => navigateTo('topics')}
                className="mt-6 rounded-xl bg-[#204933] px-5 py-2.5 text-xs font-bold text-white"
              >
                Back to Topics
              </button>
            </div>
          );
        }
        return (
          <TopicDetailView
            topic={selectedTopic}
            onNavigate={navigateTo}
            isSaved={savedTopicIds.includes(selectedTopic.id)}
            onToggleSave={handleToggleSave}
            onOpenTawbahModal={() => setIsTawbahModalOpen(true)}
          />
        );
      case 'about':
        return <AboutView onNavigate={navigateTo} />;
      case 'contact':
        return (
          <ContactView
            onNavigate={navigateTo}
            preselectedTopic={selectedTopic ? selectedTopic.title : undefined}
          />
        );
      case 'saved':
        return (
          <SavedView
            onNavigate={navigateTo}
            savedTopicIds={savedTopicIds}
            onToggleSave={handleToggleSave}
          />
        );
      case 'reset':
        return <ResetCompanionView onNavigate={navigateTo} />;
      default:
        return (
          <HomeView
            onNavigate={navigateTo}
            onOpenTawbahModal={() => setIsTawbahModalOpen(true)}
            savedTopicIds={savedTopicIds}
            onToggleSave={handleToggleSave}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e3427]">
      {/* Mobile Preview Device Frame Mode for Testing */}
      {isMobilePreview ? (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#15231b] p-4 sm:p-8">
          {/* Header Bar for Frame Controls */}
          <div className="mb-4 flex items-center justify-between gap-4 w-full max-w-[420px] text-white">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Mobile App Simulator
              </span>
            </div>
            <button
              onClick={() => setIsMobilePreview(false)}
              className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20 transition-colors"
            >
              <Monitor className="h-3.5 w-3.5" />
              Exit Simulator
            </button>
          </div>

          {/* Smartphone Shell */}
          <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[50px] border-[10px] border-[#293c31] bg-[#faf8f5] shadow-2xl ring-1 ring-white/10">
            {/* Dynamic Island / Speaker Notch */}
            <div className="absolute top-2 left-1/2 z-50 h-5 w-28 -translate-x-1/2 rounded-full bg-black/80" />

            {/* Simulated App Screen */}
            <div className="h-full overflow-y-auto pt-6 pb-20 scrollbar-none">
              <Navbar
                currentView={currentView}
                onNavigate={navigateTo}
                savedCount={savedTopicIds.length}
                isMobilePreview={isMobilePreview}
                onToggleMobilePreview={() => setIsMobilePreview(!isMobilePreview)}
              />

              <main className="min-h-[70vh]">
                {renderViewContent()}
              </main>

              <Footer onNavigate={navigateTo} />

              <MobileBottomNav
                currentView={currentView}
                onNavigate={navigateTo}
                savedCount={savedTopicIds.length}
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-emerald-200/70">
            This simulator allows you to experience the exact touch layouts, bottom navigation, and flow before releasing the mobile app.
          </p>
        </div>
      ) : (
        /* Normal Full Responsive Web View */
        <div className="flex min-h-screen flex-col">
          <Navbar
            currentView={currentView}
            onNavigate={navigateTo}
            savedCount={savedTopicIds.length}
            isMobilePreview={isMobilePreview}
            onToggleMobilePreview={() => setIsMobilePreview(!isMobilePreview)}
          />

          <main className="flex-1">
            {renderViewContent()}
          </main>

          <Footer onNavigate={navigateTo} />

          {/* Mobile Bottom Navigation for actual mobile devices */}
          <MobileBottomNav
            currentView={currentView}
            onNavigate={navigateTo}
            savedCount={savedTopicIds.length}
          />
        </div>
      )}

      {/* Sincere Tawbah & Spiritual Reset Walkthrough Modal */}
      <TawbahGuideModal
        isOpen={isTawbahModalOpen}
        onClose={() => setIsTawbahModalOpen(false)}
      />
    </div>
  );
}
