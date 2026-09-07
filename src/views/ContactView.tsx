import React, { useState } from 'react';
import { ViewType, ContactForm } from '../types';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: ViewType) => void;
  preselectedTopic?: string;
}

export function ContactView({ onNavigate, preselectedTopic }: ContactViewProps) {
  const mentorEmail = 'Khulthumaliyugimba@gmail.com';
  const mentorWhatsApp = '2349035428621';

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    topic: (preselectedTopic ? 'struggle' : 'general') as ContactForm['topic'],
    message: preselectedTopic 
      ? `Assalamu alaykum, I am reaching out regarding help with: ${preselectedTopic}.` 
      : ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please share a brief message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const topicLabels = {
      general: 'General Advice',
      struggle: 'A Specific Struggle',
      mentoring: 'Request Mentoring',
      other: 'Other Inquiry'
    };

    const subject = encodeURIComponent(`Noble Life Mentoring - ${topicLabels[form.topic]}`);
    const body = encodeURIComponent(
      `Assalamu alaykum,\n\nName: ${form.name}\nEmail: ${form.email}\nTopic: ${topicLabels[form.topic]}\n\nMessage:\n${form.message}\n\nJazakumullahu khairan.`
    );

    window.location.href = `mailto:${mentorEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${mentorWhatsApp}?text=${encodeURIComponent(
    'Assalamu alaykum, I would like private advice from Noble Life Mentoring Hub.'
  )}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Header */}
      <div className="text-center">
        <span className="rounded-full bg-[#eef4ee] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#204933]">
          Confidential Mentoring
        </span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#163623] sm:text-4xl">
          Contact for Private Advice
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#526b5d]">
          You are welcome to reach out privately. Whether you need guidance for yourself, a friend, or a young family member, every message is received with utmost care, compassion, and strict confidentiality.
        </p>
      </div>

      {/* Direct Contact Cards (Email & WhatsApp) */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {/* Email Card */}
        <a
          href={`mailto:${mentorEmail}`}
          className="group flex flex-col items-center justify-center rounded-3xl border border-[#e2ded5] bg-white p-6 text-center shadow-2xs transition-all hover:border-[#204933]/40 hover:shadow-xs"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ee] text-[#204933] transition-colors group-hover:bg-[#204933] group-hover:text-white">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="mt-3 font-heading text-base font-bold text-[#1a3c2a]">
            Email Mentor Directly
          </h2>
          <p className="mt-1 text-xs font-medium text-[#204933] break-all">
            {mentorEmail}
          </p>
          <span className="mt-3 text-[11px] text-[#6d8577]">
            Click to send an email
          </span>
        </a>

        {/* WhatsApp Card */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center rounded-3xl border border-[#e2ded5] bg-white p-6 text-center shadow-2xs transition-all hover:border-[#204933]/40 hover:shadow-xs"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ee] text-[#204933] transition-colors group-hover:bg-[#204933] group-hover:text-white">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h2 className="mt-3 font-heading text-base font-bold text-[#1a3c2a]">
            WhatsApp Message
          </h2>
          <p className="mt-1 text-xs font-medium text-[#204933]">
            +{mentorWhatsApp}
          </p>
          <span className="mt-3 text-[11px] text-[#6d8577]">
            Direct private conversation
          </span>
        </a>
      </div>

      {/* Advice Request Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 rounded-3xl border border-[#e2dcd2] bg-white p-6 shadow-xs sm:p-10"
        noValidate
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-[#204933]">
          <ShieldCheck className="h-4 w-4" />
          <span>Strictly Private & Confidential</span>
        </div>

        <h2 className="mt-2 font-heading text-xl font-bold text-[#163623]">
          Send an Advice Request
        </h2>

        <div className="mt-6 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-[#344e40]">
              Your Name or Nickname
            </label>
            <input
              id="name-input"
              type="text"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="You may use a pseudonym if preferred"
              maxLength={100}
              className="mt-2 w-full rounded-xl border border-[#ded8ce] bg-[#faf8f5] px-4 py-3 text-sm text-[#1a3c2a] placeholder-[#819688] outline-none transition-colors focus:border-[#204933] focus:ring-1 focus:ring-[#204933]"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-[#344e40]">
              Your Email Address
            </label>
            <input
              id="email-input"
              type="email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="Where we can privately respond to you"
              maxLength={255}
              className="mt-2 w-full rounded-xl border border-[#ded8ce] bg-[#faf8f5] px-4 py-3 text-sm text-[#1a3c2a] placeholder-[#819688] outline-none transition-colors focus:border-[#204933] focus:ring-1 focus:ring-[#204933]"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>
            )}
          </div>

          {/* Topic Dropdown */}
          <div>
            <label htmlFor="topic-select" className="block text-xs font-bold uppercase tracking-wider text-[#344e40]">
              What is this about?
            </label>
            <select
              id="topic-select"
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value as ContactForm['topic'] })}
              className="mt-2 w-full rounded-xl border border-[#ded8ce] bg-[#faf8f5] px-4 py-3 text-sm text-[#1a3c2a] outline-none transition-colors focus:border-[#204933] focus:ring-1 focus:ring-[#204933]"
            >
              <option value="general">General advice</option>
              <option value="struggle">A specific struggle / habit</option>
              <option value="mentoring">Request ongoing 1-on-1 mentoring</option>
              <option value="other">Other inquiry</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-[#344e40]">
                Your Message
              </label>
              <span className="text-[11px] text-[#788e80]">
                {form.message.length}/1000
              </span>
            </div>
            <textarea
              id="message-input"
              rows={5}
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Share what is in your heart. You will never be judged here..."
              maxLength={1000}
              className="mt-2 w-full rounded-xl border border-[#ded8ce] bg-[#faf8f5] p-4 text-sm text-[#1a3c2a] placeholder-[#819688] outline-none transition-colors focus:border-[#204933] focus:ring-1 focus:ring-[#204933]"
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              id="contact-submit-btn"
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#204933] px-6 py-3.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#183928] active:scale-98"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('topics')}
              className="inline-flex items-center justify-center rounded-xl border border-[#d8d1c5] bg-white px-5 py-3.5 text-xs font-semibold text-[#425a4c] hover:bg-[#ede7dd]"
            >
              Browse Topics Instead
            </button>
          </div>

          {/* Submission Notice */}
          {submitted && (
            <div className="mt-4 rounded-2xl bg-[#eef4ee] p-4 text-xs sm:text-sm text-[#1d3c2a] border border-[#d6e5d7] animate-in fade-in">
              <p className="font-semibold">
                Your email client is opening with your formatted message.
              </p>
              <p className="mt-1 text-[#456350]">
                If your email app did not launch, please email directly to{' '}
                <a href={`mailto:${mentorEmail}`} className="font-bold underline text-[#204933]">
                  {mentorEmail}
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
