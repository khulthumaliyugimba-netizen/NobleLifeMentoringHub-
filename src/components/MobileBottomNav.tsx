import React from 'react';
import { ViewType } from '../types';
import { Home, BookOpen, Sparkles, Bookmark, MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  savedCount: number;
}

export function MobileBottomNav({ currentView, onNavigate, savedCount }: MobileBottomNavProps) {
  const navItems = [
    { view: 'home' as ViewType, label: 'Home', icon: Home },
    { view: 'topics' as ViewType, label: 'Topics', icon: BookOpen },
    { view: 'reset' as ViewType, label: 'Reset', icon: Sparkles },
    { view: 'saved' as ViewType, label: 'Saved', icon: Bookmark, badge: savedCount },
    { view: 'contact' as ViewType, label: 'Advice', icon: MessageCircle },
  ];

  return (
    <nav 
      id="mobile-bottom-navigation"
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e2dcd3] bg-[#faf8f5]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg sm:hidden shadow-lg"
    >
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            currentView === item.view || 
            (item.view === 'topics' && currentView === 'topic-detail');

          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`relative flex flex-1 flex-col items-center justify-center py-1 text-center transition-colors focus:outline-none ${
                isActive ? 'text-[#183928]' : 'text-[#6a8073] hover:text-[#2d5a3f]'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 transition-transform ${isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.7]'}`} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#2d5a3f] px-1 text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`mt-1 text-[11px] font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 h-1 w-6 rounded-full bg-[#2d5a3f]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
