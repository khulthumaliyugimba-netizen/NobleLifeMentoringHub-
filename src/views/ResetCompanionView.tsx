import React, { useState } from 'react';
import { ViewType } from '../types';
import { 
  Sparkles, 
  RotateCcw, 
  Check, 
  Copy, 
  BookOpen, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface ResetCompanionViewProps {
  onNavigate: (view: ViewType) => void;
}

export function ResetCompanionView({ onNavigate }: ResetCompanionViewProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [tasbihCount, setTasbihCount] = useState(0);
  const [activeDhikrIndex, setActiveDhikrIndex] = useState(0);
  const [copiedDua, setCopiedDua] = useState(false);

  const dhikrList = [
    {
      phrase: 'Astaghfirullah wa Atubu Ilayh',
      arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      meaning: "I seek Allah's forgiveness and repent to Him.",
      target: 70
    },
    {
      phrase: 'SubhanAllah',
      arabic: 'سُبْحَانَ اللَّهِ',
      meaning: 'Glory be to Allah.',
      target: 33
    },
    {
      phrase: 'Alhamdulillah',
      arabic: 'الْحَمْدُ لِلَّهِ',
      meaning: 'All praise is for Allah.',
      target: 33
    },
    {
      phrase: 'Allahu Akbar',
      arabic: 'اللَّهُ أَكْبَرُ',
      meaning: 'Allah is the Greatest.',
      target: 34
    },
    {
      phrase: 'La hawla wa la quwwata illa billah',
      arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
      meaning: 'There is no power nor strength except through Allah.',
      target: 33
    }
  ];

  const steps = [
    {
      num: 1,
      title: 'Immediate Disconnect',
      desc: 'Stop the habit immediately. Put the phone down, close the door or exit the isolated room. Physical distance breaks the trance.'
    },
    {
      num: 2,
      title: 'Feel Sincere Regret (An-Nadam)',
      desc: 'The Prophet ﷺ said: "Regret is repentance." (Ibn Majah). Do not let pride or despair deceive you; acknowledge your mistake to Allah.'
    },
    {
      num: 3,
      title: 'Perform Conscious Wudhu',
      desc: 'Wash away the physical and spiritual heat of sin. Feel the cool water purifying your limbs.'
    },
    {
      num: 4,
      title: "Pray 2 Rak'ahs of Salat at-Tawbah",
      desc: 'Stand before your Creator in calm, private prayer. Pour out your weakness and need for His protection in Sujood.'
    },
    {
      num: 5,
      title: 'Follow Up with a Good Deed',
      desc: 'Replace darkness with light: recite Qur\'an, give small sadaqah, or help a parent immediately. Good deeds actively extinguish sins.'
    }
  ];

  const toggleStep = (num: number) => {
    setCompletedSteps(prev => 
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const copySayyidulIstighfar = () => {
    const text = `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ\n\nAllahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfiru-dhunuba illa Ant.\n\n"O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant, and I am abiding by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favors upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You." (Sahih al-Bukhari)`;
    
    navigator.clipboard.writeText(text);
    setCopiedDua(true);
    setTimeout(() => setCopiedDua(false), 2000);
  };

  const currentDhikr = dhikrList[activeDhikrIndex];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef4ee] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#204933]">
          <Sparkles className="h-3.5 w-3.5" />
          Spiritual Reset
        </span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#163623] sm:text-4xl">
          Tawbah & Heart Cleansing Companion
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-[#526b5d]">
          If you slipped up, do not allow despair to freeze you. Take immediate action through these five Sunnah steps and calm your heart with Dhikr.
        </p>
      </div>

      {/* 5 Steps Interactive Recovery Checklist */}
      <div className="mt-10 rounded-3xl border border-[#e2ded5] bg-white p-6 shadow-xs sm:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold text-[#163623]">
              The 5 Steps of Sincere Tawbah
            </h2>
            <p className="mt-1 text-xs text-[#526b5d] sm:text-sm">
              Tap each step as you complete it
            </p>
          </div>
          <span className="rounded-xl bg-[#eef4ee] px-3 py-1 text-xs font-bold text-[#204933]">
            {completedSteps.length} of 5 Completed
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {steps.map((step) => {
            const isDone = completedSteps.includes(step.num);
            return (
              <div
                key={step.num}
                onClick={() => toggleStep(step.num)}
                className={`flex items-start gap-4 rounded-2xl border p-4 transition-all cursor-pointer ${
                  isDone
                    ? 'border-[#204933] bg-[#eef4ee]/80 text-[#183928]'
                    : 'border-[#e4ded5] bg-[#faf8f5] text-[#2a4435] hover:border-[#b8cdbf]'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isDone ? 'bg-[#204933] text-white' : 'bg-[#e9e3da] text-[#4a6b57]'
                  }`}
                >
                  {isDone ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : step.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-bold sm:text-base ${isDone ? 'line-through opacity-80' : ''}`}>
                      {step.title}
                    </h3>
                    {isDone && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#204933]">
                        Done
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[#556e5f] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {completedSteps.length === 5 && (
          <div className="mt-6 rounded-2xl bg-[#204933] p-5 text-center text-white animate-in zoom-in-95 duration-200">
            <h4 className="font-heading text-base font-bold">
              Mabrook! You have taken the physical and spiritual steps.
            </h4>
            <p className="mt-1 text-xs text-emerald-100">
              Now trust Allah's infinite mercy, lift your chin with dignity, and move forward with purpose.
            </p>
          </div>
        )}
      </div>

      {/* Digital Dhikr & Tasbeeh Companion */}
      <div className="mt-10 rounded-3xl border border-[#e2ded5] bg-white p-6 shadow-xs sm:p-10">
        <h2 className="font-heading text-xl font-bold text-[#163623]">
          Calming Dhikr Counter
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#526b5d]">
          Select an authentic phrase and tap the counter to soothe your mind and renew your connection with Allah.
        </p>

        {/* Phrase Selector */}
        <div className="mt-5 flex flex-wrap gap-2">
          {dhikrList.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveDhikrIndex(idx);
                setTasbihCount(0);
              }}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                activeDhikrIndex === idx
                  ? 'bg-[#204933] text-white shadow-xs'
                  : 'bg-[#faf8f5] text-[#4a6b57] border border-[#e4ded5] hover:bg-[#ede7dd]'
              }`}
            >
              {item.phrase}
            </button>
          ))}
        </div>

        {/* Active Phrase Card */}
        <div className="mt-6 rounded-2xl bg-[#faf8f5] p-6 text-center border border-[#e2dcd2]">
          <p className="font-serif text-2xl font-bold leading-loose text-[#163623] sm:text-3xl">
            {currentDhikr.arabic}
          </p>
          <p className="mt-2 text-sm font-semibold text-[#204933]">
            {currentDhikr.phrase}
          </p>
          <p className="mt-1 text-xs italic text-[#556e5f]">
            "{currentDhikr.meaning}"
          </p>
          <span className="mt-3 inline-block rounded-full bg-[#eef4ee] px-3 py-1 text-[11px] font-bold text-[#204933]">
            Recommended: {currentDhikr.target} times
          </span>

          {/* Big Tap Button */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setTasbihCount(prev => prev + 1)}
              className="flex h-24 w-44 flex-col items-center justify-center rounded-3xl bg-[#204933] text-white shadow-md active:scale-95 transition-all hover:bg-[#183928]"
            >
              <span className="font-heading text-4xl font-extrabold tracking-tight">
                {tasbihCount}
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase opacity-80 mt-0.5">
                Tap to Count
              </span>
            </button>

            <button
              onClick={() => setTasbihCount(0)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#425a4c] shadow-xs border border-[#ded8ce] hover:bg-[#ede7dd] transition-colors"
              title="Reset Counter to 0"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>

          {tasbihCount >= currentDhikr.target && (
            <p className="mt-4 text-xs font-bold text-[#204933] animate-pulse">
              Alhamdulillah! You completed the goal of {currentDhikr.target} recitations.
            </p>
          )}
        </div>
      </div>

      {/* Sayyidul Istighfar Box */}
      <div className="mt-10 rounded-3xl border border-[#e2ded5] bg-[#f5f1ea] p-6 sm:p-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#204933]">
              Sunnah Treasure
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold text-[#163623] sm:text-xl">
              Sayyidul Istighfar (The Chief Prayer for Forgiveness)
            </h3>
          </div>

          <button
            onClick={copySayyidulIstighfar}
            className="flex items-center gap-1.5 rounded-xl border border-[#d8d1c5] bg-white px-3 py-1.5 text-xs font-semibold text-[#204933] hover:bg-[#ede7dd]"
          >
            {copiedDua ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-700" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <p className="mt-4 text-right font-serif text-lg leading-loose text-[#1a3c2a] sm:text-xl">
          اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
        </p>

        <p className="mt-3 text-xs italic text-[#4a6b57]">
          "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfiru-dhunuba illa Ant."
        </p>

        <p className="mt-2 text-xs leading-relaxed text-[#5a7164]">
          <strong>Translation:</strong> "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant, and I am abiding by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favors upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You." (Sahih al-Bukhari)
        </p>
      </div>

      {/* Back to Topics Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => onNavigate('topics')}
          className="inline-flex items-center gap-2 rounded-xl bg-[#204933] px-6 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-[#183928]"
        >
          <BookOpen className="h-4 w-4" />
          Continue to Mentoring Topics
        </button>
      </div>
    </div>
  );
}
