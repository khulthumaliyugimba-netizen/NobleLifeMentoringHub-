import React, { useState } from 'react';
import { ViewType } from '../types';
import { 
  Menu, 
  X, 
  Bookmark, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  HeartHandshake, 
  BookOpen, 
  Home, 
  Info, 
  Phone
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, topicId?: string) => void;
  savedCount: number;
  isMobilePreview: boolean;
  onToggleMobilePreview: () => void;
}

export function Navbar({ 
  currentView, 
  onNavigate, 
  savedCount,
  isMobilePreview,
  onToggleMobilePreview
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e1d7] bg-[#faf8f5]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Logo */}
        <button
          id="nav-brand-btn"
          onClick={() => handleNav('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <img
            src="/assets/noble-life-logo.png"
            alt="Noble Life Mentoring Hub Logo"
            className="h-10 w-10 rounded-full object-cover shadow-sm ring-1 ring-[#1e3427]/10 transition-transform group-hover:scale-105"
          />
          <div>
            <span className="block font-heading text-lg font-bold tracking-tight text-[#1e3427]">
              Noble Life
            </span>
            <span className="block text-[11px] font-medium text-[#4a6b57]">
              Mentoring Hub
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#425a4c] md:flex">
          <button
            id="nav-home-link"
            onClick={() => handleNav('home')}
            className={`transition-colors hover:text-[#1e3427] ${
              currentView === 'home' ? 'font-semibold text-[#1e3427]' : ''
            }`}
          >
            Home
          </button>
          <button
            id="nav-topics-link"
            onClick={() => handleNav('topics')}
            className={`transition-colors hover:text-[#1e3427] ${
              currentView === 'topics' || currentView === 'topic-detail' ? 'font-semibold text-[#1e3427]' : ''
            }`}
          >
            Topics
          </button>
          <button
            id="nav-reset-link"
            onClick={() => handleNav('reset')}
            className={`flex items-center gap-1.5 transition-colors hover:text-[#1e3427] ${
              currentView === 'reset' ? 'font-semibold text-[#1e3427]' : ''
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#2d5a3f]" />
            Spiritual Reset
          </button>
          <button
            id="nav-saved-link"
            onClick={() => handleNav('saved')}
            className={`relative flex items-center gap-1.5 transition-colors hover:text-[#1e3427] ${
              currentView === 'saved' ? 'font-semibold text-[#1e3427]' : ''
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            Saved
            {savedCount > 0 && (
              <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#2d5a3f] px-1 text-[10px] font-bold text-white">
                {savedCount}
              </span>
            )}
          </button>
          <button
            id="nav-about-link"
            onClick={() => handleNav('about')}
            className={`transition-colors hover:text-[#1e3427] ${
              currentView === 'about' ? 'font-semibold text-[#1e3427]' : ''
            }`}
          >
            About
          </button>
          <button
            id="nav-contact-link"
            onClick={() => handleNav('contact')}
            className={`transition-colors hover:text-[#1e3427] ${
              currentView === 'contact' ? 'font-semibold text-[#1e3427]' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA & Mobile Frame Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Preview Toggle Button for testing app view before mobile deployment */}
          <button
            id="mobile-preview-toggle-btn"
            onClick={onToggleMobilePreview}
            title={isMobilePreview ? "Switch to Full Desktop View" : "Preview in Mobile App Frame"}
            className="hidden items-center gap-1.5 rounded-lg border border-[#ded8ce] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#3b5445] shadow-xs transition-colors hover:bg-[#f3efe8] lg:flex"
          >
            {isMobilePreview ? (
              <>
                <Monitor className="h-3.5 w-3.5 text-[#2d5a3f]" />
                Full View
              </>
            ) : (
              <>
                <Smartphone className="h-3.5 w-3.5 text-[#2d5a3f]" />
                Mobile App Mode
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            id="nav-get-help-btn"
            onClick={() => handleNav('topics')}
            className="inline-flex items-center justify-center rounded-xl bg-[#204933] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-xs transition-all hover:bg-[#183928] active:scale-98 sm:text-sm"
          >
            Get Help
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#2d5a3f] hover:bg-[#ede7dd] md:hidden focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#e7e1d7] bg-[#faf8f5] px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid gap-2">
            <button
              onClick={() => handleNav('home')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentView === 'home' ? 'bg-[#ede7dd] text-[#1e3427]' : 'text-[#425a4c]'
              }`}
            >
              <Home className="h-4 w-4 text-[#2d5a3f]" />
              Home
            </button>
            <button
              onClick={() => handleNav('topics')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentView === 'topics' ? 'bg-[#ede7dd] text-[#1e3427]' : 'text-[#425a4c]'
              }`}
            >
              <BookOpen className="h-4 w-4 text-[#2d5a3f]" />
              Browse All Topics
            </button>
            <button
              onClick={() => handleNav('reset')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentView === 'reset' ? 'bg-[#ede7dd] text-[#1e3427]' : 'text-[#425a4c]'
              }`}
            >
              <Sparkles className="h-4 w-4 text-[#2d5a3f]" />
              Spiritual Reset & Tawbah
            </button>
            <button
              onClick={() => handleNav('saved')}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentView === 'saved' ? 'bg-[#ede7dd] text-[#1e3427]' : 'text-[#425a4c]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bookmark className="h-4 w-4 text-[#2d5a3f]" />
                Saved Guides
              </div>
              {savedCount > 0 && (
                <span className="rounded-full bg-[#2d5a3f] px-2 py-0.5 text-xs text-white">
                  {savedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentView === 'about' ? 'bg-[#ede7dd] text-[#1e3427]' : 'text-[#425a4c]'
              }`}
            >
              <Info className="h-4 w-4 text-[#2d5a3f]" />
              About Noble Life & Mentor
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentView === 'contact' ? 'bg-[#ede7dd] text-[#1e3427]' : 'text-[#425a4c]'
              }`}
            >
              <Phone className="h-4 w-4 text-[#2d5a3f]" />
              Private Advice & WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
