import React, { useState } from 'react';
import { X, CheckCircle2, RotateCcw, Heart, Sparkles, Copy, Check } from 'lucide-react';

interface TawbahGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TawbahGuideModal({ isOpen, onClose }: TawbahGuideModalProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [tasbihCount, setTasbihCount] = useState(0);
  const [copiedDua, setCopiedDua] = useState(false);

  if (!isOpen) return null;

  const steps = [
    {
      num: 1,
      title: "Immediate Disconnect",
      desc: "Stop the action immediately, close the screen/app, or leave the room. Put distance between you and the trigger."
    },
    {
      num: 2,
      title: "Feel Sincere Remorse (An-Nadam)",
      desc: "Regret the sin for the sake of Allah SWT. The Prophet ﷺ said: 'Regret is repentance.' (Ibn Majah)"
    },
    {
      num: 3,
      title: "Perform Wudhu (Purification)",
      desc: "Wash your physical body with conscious wudhu. Let the water wash away feelings of heaviness and sin."
    },
    {
      num: 4,
      title: "Pray 2 Rak'ahs (Salat at-Tawbah)",
      desc: "Stand in quiet prayer with humility. The Prophet ﷺ taught that whoever makes wudhu well, then prays two rak'ahs seeking forgiveness, Allah forgives them."
    },
    {
      num: 5,
      title: "Make Sincere Istighfar & Good Deed",
      desc: "Follow the slip-up with a good deed (small charity, dhikr, helping family). The Qur'an says: 'Indeed, good deeds wipe out bad deeds.' (11:114)"
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#e5ded4] bg-[#faf8f5] p-6 shadow-2xl sm:p-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-[#4a6b57] hover:bg-[#ede7dd] transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#204933] text-white">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#1a3c2a]">
              Spiritual Reset & Tawbah Guide
            </h2>
            <p className="text-xs text-[#557060] sm:text-sm">
              Your 5-step blueprint to rise immediately after a slip-up
            </p>
          </div>
        </div>

        {/* Compassionate Reassurance */}
        <div className="mt-5 rounded-2xl bg-[#eef4ee] p-4 text-xs sm:text-sm leading-relaxed text-[#1d3c2a] border border-[#d6e5d7]">
          <strong>Remember:</strong> Shaytan's ultimate trick is not just the sin, but convincing you that Allah will not forgive you. The door of Tawbah is wide open right now.
        </div>

        {/* 5-Step Checklist */}
        <div className="mt-6 space-y-3">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#204933]">
            Follow These 5 Steps
          </h3>
          {steps.map((step) => {
            const isDone = completedSteps.includes(step.num);
            return (
              <div
                key={step.num}
                onClick={() => toggleStep(step.num)}
                className={`flex items-start gap-3 rounded-2xl border p-4 transition-all cursor-pointer ${
                  isDone 
                    ? 'border-[#2d5a3f] bg-[#eef4ee]/80 text-[#183928]' 
                    : 'border-[#e4ded5] bg-white text-[#2a4435] hover:border-[#b8cdbf]'
                }`}
              >
                <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  isDone ? 'bg-[#204933] text-white' : 'bg-[#e9e3da] text-[#4a6b57]'
                }`}>
                  {isDone ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : step.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-semibold ${isDone ? 'line-through opacity-80' : ''}`}>
                      {step.title}
                    </h4>
                    {isDone && <span className="text-[10px] font-bold uppercase text-[#204933]">Completed</span>}
                  </div>
                  <p className="mt-1 text-xs text-[#556e5f] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Du'a for Forgiveness (Sayyidul Istighfar) */}
        <div className="mt-6 rounded-2xl border border-[#dcd6ca] bg-white p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-heading text-sm font-bold text-[#1a3c2a]">
              Sayyidul Istighfar (The Master Prayer for Forgiveness)
            </h4>
            <button
              onClick={copySayyidulIstighfar}
              className="flex items-center gap-1.5 rounded-lg border border-[#e0d9cf] px-2.5 py-1 text-xs font-medium text-[#2d5a3f] hover:bg-[#f3efe8] transition-colors"
            >
              {copiedDua ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-700" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Du'a</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-3 text-right font-serif text-lg leading-loose text-[#1a3c2a] dir-rtl">
            اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
          </p>

          <p className="mt-3 text-xs italic text-[#4a6b57]">
            "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfiru-dhunuba illa Ant."
          </p>

          <p className="mt-2 text-xs leading-relaxed text-[#5a7164]">
            <strong>Meaning:</strong> "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant... I acknowledge Your favors upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You." (Bukhari)
          </p>
        </div>

        {/* Quick Istighfar Tap Counter */}
        <div className="mt-6 rounded-2xl bg-[#f0eae1] p-5 text-center">
          <p className="text-xs font-semibold text-[#486353]">
            Recite: "Astaghfirullah wa Atubu Ilayh"
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <button
              onClick={() => setTasbihCount(prev => prev + 1)}
              className="flex h-16 w-32 items-center justify-center rounded-2xl bg-[#204933] text-xl font-bold text-white shadow-md active:scale-95 transition-all"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl">{tasbihCount}</span>
                <span className="text-[10px] font-normal opacity-80">Tap to Count</span>
              </div>
            </button>
            <button
              onClick={() => setTasbihCount(0)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#486353] hover:bg-[#e4ded5] transition-colors"
              title="Reset Counter"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-[11px] text-[#6d8577]">
            Goal: Recite at least 33, 70, or 100 times to soothe your heart.
          </p>
        </div>

        {/* Done Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#204933] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#183928] transition-colors"
          >
            I feel ready to move forward
          </button>
        </div>
      </div>
    </div>
  );
}
