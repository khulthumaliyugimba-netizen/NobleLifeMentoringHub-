import React from 'react';
import { ViewType } from '../types';
import { HeartHandshake, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#e5dfd6] bg-[#f4efe8]/80 text-[#2c4235] transition-colors pb-20 sm:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/noble-life-logo.png"
                alt="Noble Life Mentoring Hub Logo"
                className="h-9 w-9 rounded-full object-cover ring-1 ring-[#1e3427]/15"
              />
              <span className="font-heading text-lg font-bold text-[#1a3c2a]">
                Noble Life
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#516759]">
              Guiding young hearts to purity, dignity, and purpose through compassionate, faith-rooted Islamic mentoring.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2d5a3f]">
              <Shield className="h-3.5 w-3.5" />
              100% Confidential & Judgment-Free
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#1a3c2a]">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#4c6555]">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#1a3c2a] hover:underline"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('topics')} 
                  className="hover:text-[#1a3c2a] hover:underline"
                >
                  All 12 Mentoring Topics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('reset')} 
                  className="hover:text-[#1a3c2a] hover:underline"
                >
                  Spiritual Reset & Tawbah Steps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('saved')} 
                  className="hover:text-[#1a3c2a] hover:underline"
                >
                  Saved Guides & Bookmarks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Topics Overview */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#1a3c2a]">
              Key Areas
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#4c6555]">
              <li>Private Desires & Chaste Living</li>
              <li>Honesty & Speech Purification</li>
              <li>Emotional Balance & Anger Control</li>
              <li>Building Confidence with Taqwa</li>
              <li>Overcoming Screen & Social Addiction</li>
            </ul>
          </div>

          {/* Col 4: Founder & Direct Advice */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#1a3c2a]">
              Mentorship
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-[#516759]">
              Founded by <strong>Ummukhulthum Aliyu Gimba</strong>. Reach out directly for private, sisterly guidance and encouragement.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="mailto:Khulthumaliyugimba@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-xs font-medium text-[#224833] ring-1 ring-[#d4ccc0] hover:bg-white"
              >
                Khulthumaliyugimba@gmail.com
              </a>
              <a
                href="https://wa.me/2349035428621?text=Assalamu%20alaykum%2C%20I%20would%20like%20advice%20from%20Noble%20Life%20Mentoring%20Hub."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#27543a] px-3 py-2 text-xs font-medium text-white hover:bg-[#1c402b]"
              >
                WhatsApp Mentor Directly
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#e2dcd3] pt-6 text-center text-xs text-[#62776a]">
          <p>© {new Date().getFullYear()} Noble Life Mentoring Hub. All rights reserved.</p>
          <p className="mt-1 italic">
            “And whoever relies upon Allah — then He is sufficient for him.” — Qur'an 65:3
          </p>
        </div>
      </div>
    </footer>
  );
}
