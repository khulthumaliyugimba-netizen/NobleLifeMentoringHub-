import { Topic, TopicCategory } from "../types";

export const TOPIC_CATEGORIES: { id: TopicCategory | "all"; label: string; description: string }[] = [
  { id: "all", label: "All Topics", description: "Explore all 12 mentoring guides" },
  { id: "habits", label: "Private Habits & Desires", description: "Breaking free from addictions and secret habits" },
  { id: "character", label: "Character & Speech", description: "Purifying words, honesty, and honorable conduct" },
  { id: "mindset", label: "Mindset & Emotions", description: "Conquering anger, envy, doubt, and building taqwa" },
  { id: "relationships", label: "Relationships & Companions", description: "Guarding friendships and honoring family" }
];

export const TOPICS: Topic[] = [
  {
    "id": "masturbation",
    "title": "Overcoming Masturbation",
    "summary": "Understand why this habit harms the soul and body, and how to break free with repentance and practical steps.",
    "icon": "heart",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "It weakens taqwa, distances the heart from Allah, and becomes a repeated sin that darkens the soul over time."
      },
      {
        "title": "Mental and emotional harm",
        "text": "It feeds guilt, shame, anxiety, and secrecy, making it harder to feel close to Allah and to other people."
      },
      {
        "title": "Physical harm",
        "text": "It can drain energy, disturb sleep, and lead to unhealthy dependency patterns that are hard to break."
      },
      {
        "title": "Social harm",
        "text": "It often isolates a person and can shape unrealistic expectations about relationships and marriage."
      }
    ],
    "islamicView": [
      "Islam teaches us to guard our chastity. Allah says, 'And they who guard their private parts...' (Qur'an 23:5-7).",
      "The Prophet ﷺ warned against approaching zina and its causes. This habit falls under the misuse of what Allah made private and sacred.",
      "Lowering the gaze, avoiding private triggers, and fasting are practical shields taught by the Sunnah."
    ],
    "ifYouFail": [
      "Do not despair — Allah's mercy is greater than your mistakes.",
      "Perform ghusl if needed, make wudu, and pray two rak'ahs of tawbah.",
      "Identify the trigger and remove it: unfollow accounts, install filters, and keep devices in shared spaces.",
      "Tell a trusted mentor or friend who can check on you daily.",
      "Replace the habit with dhikr, exercise, reading Qur'an, or a useful hobby."
    ],
    "confidence": [
      "Allah created you with fitrah — an innate purity. A slip does not erase your worth.",
      "Every new day is a chance to start again. The Prophet ﷺ said Allah rejoices at the repentance of His servant.",
      "Real strength is not never falling; it is standing back up and seeking Allah's help."
    ],
    "verses": [
      {
        "text": "Tell the believing men to lower their gaze and guard their private parts...",
        "ref": "Qur'an 24:30"
      },
      {
        "text": "And those who do not invoke with Allah another deity or kill the soul which Allah has forbidden, except by right, and who do not commit unlawful sexual intercourse...",
        "ref": "Qur'an 25:68"
      }
    ],
    "hadith": [
      {
        "text": "Allah the Almighty said: 'O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind.'",
        "ref": "Tirmidhi"
      }
    ],
    "category": "habits"
  },
  {
    "id": "pornography",
    "title": "Breaking Free from Pornography",
    "summary": "Learn how pornography affects the mind and heart, and discover Islamic tools to guard your gaze and rebuild purity.",
    "icon": "eye",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "It hardens the heart, weakens iman, and makes salah and dhikr feel heavy."
      },
      {
        "title": "Mental harm",
        "text": "It rewires the brain toward instant gratification, leading to addiction, anxiety, and depression."
      },
      {
        "title": "Relational harm",
        "text": "It distorts how a person sees others and damages trust in future relationships and marriage."
      },
      {
        "title": "Time harm",
        "text": "Hours spent on it are stolen from worship, family, studies, and personal growth."
      }
    ],
    "islamicView": [
      "Allah commands the believers to lower their gaze. 'Tell the believing men to lower their gaze and guard their private parts...' (Qur'an 24:30).",
      "Looking at what is haram is itself a sin of the eye and a step toward greater harm.",
      "The Prophet ﷺ taught that every limb has its share of zina; guarding the eyes is the first defense."
    ],
    "ifYouFail": [
      "Close the door to sin immediately: delete apps, block websites, and turn off private browsing.",
      "Make sincere tawbah and do not let Shaytan convince you that you are beyond hope.",
      "Install accountability software and give a trusted person access to your device usage.",
      "Fill your free time with Qur'an, good company, sports, and beneficial knowledge."
    ],
    "confidence": [
      "Your past does not define you; your repentance and intention do.",
      "Allah loves those who turn to Him again and again. Every clean day is a victory.",
      "You were created for nobility, not for hidden shame. Rise with dignity."
    ],
    "verses": [
      {
        "text": "Tell the believing men to lower their gaze and guard their private parts... And tell the believing women to lower their gaze and guard their private parts...",
        "ref": "Qur'an 24:30-31"
      },
      {
        "text": "Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.",
        "ref": "Qur'an 2:222"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'The son of Adam grows old, but two things remain young in him: greed and desire for women.'",
        "ref": "Bukhari"
      }
    ],
    "category": "habits"
  },
  {
    "id": "stealing",
    "title": "Leaving Stealing Behind",
    "summary": "See how theft damages trust and community, and what Islam says about returning what was taken and starting over.",
    "icon": "hand",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "It eats away at honesty and can become a habit that hardens the heart."
      },
      {
        "title": "Trust harm",
        "text": "Once trust is broken, family, friends, and employers may never look at you the same way."
      },
      {
        "title": "Legal and social harm",
        "text": "It can lead to punishment, criminal records, shame, and loss of future opportunities."
      },
      {
        "title": "Inner peace harm",
        "text": "Living with stolen property brings guilt, fear of being caught, and anxiety."
      }
    ],
    "islamicView": [
      "Theft is a major sin. Allah says, 'As for the thief, the male and the female, amputate their hands...' (Qur'an 5:38).",
      "Islam protects property and community trust. Taking what belongs to others without right is a violation of their dignity.",
      "Even small thefts — cheating, plagiarizing, or taking from family — are serious in the sight of Allah."
    ],
    "ifYouFail": [
      "Return the stolen item or its value to the owner, even if it is difficult.",
      "Ask for forgiveness from the person you harmed, if it is safe and appropriate.",
      "Make sincere tawbah and resolve never to return to it.",
      "Replace the habit by earning through halal means and giving charity to cleanse your wealth."
    ],
    "confidence": [
      "Honesty is the foundation of dignity. Choosing truth over theft is a sign of real strength.",
      "Allah can replace what you fear to lose with something better and purer.",
      "A person who returns what they took and repents is beloved to Allah."
    ],
    "verses": [
      {
        "text": "And do not consume one another's wealth unjustly or send it [in bribery] to the rulers...",
        "ref": "Qur'an 2:188"
      },
      {
        "text": "And whoever does evil or wrongs himself then seeks forgiveness of Allah will find Allah Forgiving and Merciful.",
        "ref": "Qur'an 4:110"
      }
    ],
    "hadith": [
      {
        "text": "The Messenger of Allah ﷺ said: 'The hand is cut off for a quarter of a dinar or more.'",
        "ref": "Bukhari"
      }
    ],
    "category": "character"
  },
  {
    "id": "lying",
    "title": "Speaking Truthfully",
    "summary": "Discover how lies weaken trust and character, and how the truth becomes a source of strength and barakah.",
    "icon": "message-circle",
    "harms": [
      {
        "title": "Trust harm",
        "text": "One lie can destroy years of trust with parents, teachers, and friends."
      },
      {
        "title": "Character harm",
        "text": "Lying becomes easier each time, until a person no longer recognizes themselves."
      },
      {
        "title": "Spiritual harm",
        "text": "It is a sign of hypocrisy and pushes the heart away from sincerity."
      },
      {
        "title": "Anxiety harm",
        "text": "Keeping track of lies creates stress and fear of being exposed."
      }
    ],
    "islamicView": [
      "Allah commands truthfulness in every situation. 'O you who have believed, fear Allah and be with those who are true.' (Qur'an 9:119).",
      "The Prophet ﷺ said, 'Adhere to truthfulness, for truthfulness leads to righteousness, and righteousness leads to Paradise.'",
      "Lying is from the characteristics of hypocrisy and is hated by Allah."
    ],
    "ifYouFail": [
      "Admit the lie as soon as possible and correct any harm it caused.",
      "Apologize sincerely to those you misled.",
      "Make tawbah and decide that your next word will be true, even when it costs you.",
      "Practice silence when you are tempted to lie; sometimes not speaking is better."
    ],
    "confidence": [
      "A truthful person walks with dignity because they have nothing to hide.",
      "Every truthful word plants a seed of honor in your character.",
      "Allah blesses the truthful with clarity, trust, and a light heart."
    ],
    "verses": [
      {
        "text": "O you who have believed, fear Allah and be with those who are true.",
        "ref": "Qur'an 9:119"
      },
      {
        "text": "And those who do not testify to falsehood, and when they pass near ill speech, they pass by with dignity.",
        "ref": "Qur'an 25:72"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'Adhere to truthfulness, for truthfulness leads to righteousness and righteousness leads to Paradise.'",
        "ref": "Bukhari"
      }
    ],
    "category": "character"
  },
  {
    "id": "anger",
    "title": "Controlling Anger",
    "summary": "Anger can burn relationships and decisions. Learn how Islam turns anger into patience and self-mastery.",
    "icon": "flame",
    "harms": [
      {
        "title": "Relational harm",
        "text": "Words spoken in anger can wound people for years and break family ties."
      },
      {
        "title": "Decision harm",
        "text": "Angry decisions are usually bad decisions that bring regret."
      },
      {
        "title": "Health harm",
        "text": "Chronic anger harms the body, raising stress and damaging the heart."
      },
      {
        "title": "Spiritual harm",
        "text": "It can lead to sinning with the tongue, the hands, or the heart."
      }
    ],
    "islamicView": [
      "The Prophet ﷺ said, 'The strong man is not the one who wrestles, but the one who controls himself at the moment of anger.'",
      "Allah praises those who swallow their anger and forgive others. 'Those who spend [in Allah's cause] during ease and hardship and who restrain anger and who pardon people...' (Qur'an 3:134).",
      "Seeking refuge from Shaytan when angry is a Sunnah that immediately cools the heart."
    ],
    "ifYouFail": [
      "Stop speaking as soon as you feel the heat. Silence prevents most damage.",
      "Make wudu or sit down; changing the body's state helps calm the soul.",
      "Seek refuge in Allah from the accursed Shaytan.",
      "Apologize to the person you hurt, even if they were also wrong.",
      "Reflect on the root cause and ask Allah to heal it."
    ],
    "confidence": [
      "Controlling anger is a sign of real strength — stronger than any muscle.",
      "When you master yourself, you earn the respect of Allah and people.",
      "Every time you choose patience over rage, your character grows."
    ],
    "verses": [
      {
        "text": "Who spend [in the cause of Allah] during ease and hardship and who restrain anger and who pardon the people — and Allah loves the doers of good.",
        "ref": "Qur'an 3:134"
      },
      {
        "text": "And if you should count the favors of Allah, you could not enumerate them. Indeed, Allah is Forgiving and Merciful.",
        "ref": "Qur'an 16:18"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'If one of you becomes angry while standing, let him sit down, and if he is still angry, let him lie down.'",
        "ref": "Abu Dawud"
      }
    ],
    "category": "mindset"
  },
  {
    "id": "self-confidence",
    "title": "Building Self-Confidence in Islam",
    "summary": "True confidence comes from knowing Allah created you with purpose and honor. Learn how to stop comparing and start rising.",
    "icon": "user",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "Constant self-doubt can make a person forget that Allah created them with care and purpose."
      },
      {
        "title": "Opportunity harm",
        "text": "Low confidence stops a person from trying, learning, and serving others."
      },
      {
        "title": "Comparison harm",
        "text": "Measuring yourself against others online breeds ingratitude and sadness."
      },
      {
        "title": "Relationship harm",
        "text": "It can lead to seeking validation in unhealthy ways or withdrawing from people."
      }
    ],
    "islamicView": [
      "Allah honored the children of Adam. 'And We have certainly honored the children of Adam...' (Qur'an 17:70).",
      "You were created in the best form: 'We have certainly created man in the best of stature.' (Qur'an 95:4).",
      "Your value is not in likes, looks, or wealth. It is in your taqwa and your relationship with Allah."
    ],
    "ifYouFail": [
      "When you fall into comparison, remember that Allah gave each person a different test and blessing.",
      "List three things Allah has blessed you with every morning.",
      "Take one small step outside your comfort zone each day and thank Allah for it.",
      "Speak to yourself the way you would speak to a beloved brother or sister in Islam."
    ],
    "confidence": [
      "You are not a mistake. Allah designed you on purpose, with purpose.",
      "Confidence in Islam is humble trust in Allah's plan, not arrogance.",
      "Every skill, quality, and strength you have is a trust from Allah — use it with gratitude."
    ],
    "verses": [
      {
        "text": "And We have certainly honored the children of Adam and carried them on the land and sea and provided for them of the good things and preferred them over much of what We have created, with [definite] preference.",
        "ref": "Qur'an 17:70"
      },
      {
        "text": "We have certainly created man in the best of stature.",
        "ref": "Qur'an 95:4"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'Allah does not look at your forms or your wealth, but He looks at your hearts and your deeds.'",
        "ref": "Muslim"
      }
    ],
    "category": "mindset"
  },
  {
    "id": "backbiting",
    "title": "Overcoming Backbiting & Gossip",
    "summary": "Learn why backbiting eats away at trust and honor, and how guarding your tongue can restore your dignity.",
    "icon": "ear",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "Backbiting is described in the Qur'an as eating the flesh of your dead brother — a sin that destroys good character."
      },
      {
        "title": "Trust harm",
        "text": "People stop confiding in you when they learn you talk about others behind their backs."
      },
      {
        "title": "Community harm",
        "text": "Gossip spreads division, suspicion, and hatred between friends, families, and classmates."
      },
      {
        "title": "Habit harm",
        "text": "Once backbiting becomes normal, the tongue becomes careless and many other sins follow."
      }
    ],
    "islamicView": [
      "Allah warns the believers: 'And do not backbite one another. Would one of you like to eat the flesh of his dead brother?' (Qur'an 49:12).",
      "The Prophet ﷺ defined backbiting as saying about your brother what he would dislike.",
      "Islam teaches us to speak good or remain silent, and to avoid gatherings where people are being spoken about unfairly."
    ],
    "ifYouFail": [
      "Stop the conversation immediately. Change the subject or leave the gathering if needed.",
      "Ask Allah for forgiveness and make a sincere intention to guard your tongue.",
      "If you harmed someone, ask their forgiveness when it is safe and appropriate.",
      "Practice silence for a few minutes each day and reflect before speaking.",
      "Replace gossip with praying for the person or mentioning their good qualities."
    ],
    "confidence": [
      "A person who controls their tongue controls their honor.",
      "Guarding your speech is a sign of strength, not weakness.",
      "Every time you choose silence over gossip, your character shines in the sight of Allah."
    ],
    "verses": [
      {
        "text": "And do not backbite one another. Would one of you like to eat the flesh of his brother when he has died?",
        "ref": "Qur'an 49:12"
      },
      {
        "text": "And when you received it with your tongues and said with your mouths that of which you had no knowledge...",
        "ref": "Qur'an 24:15"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'Do you know what backbiting is?' They said, 'Allah and His Messenger know best.' He said, 'It is saying about your brother what he would dislike.'",
        "ref": "Muslim"
      }
    ],
    "category": "character"
  },
  {
    "id": "envy",
    "title": "Dealing with Envy (Hasad)",
    "summary": "Understand how envy burns the heart and good deeds, and how gratitude can set you free.",
    "icon": "frown",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "Envy can destroy good deeds the way fire destroys firewood, and it distances the heart from Allah."
      },
      {
        "title": "Mental harm",
        "text": "It fills the mind with resentment, bitterness, and constant comparison."
      },
      {
        "title": "Relational harm",
        "text": "Envy poisons friendships and makes you unable to be happy for others."
      },
      {
        "title": "Physical harm",
        "text": "Constant jealousy raises stress and steals peace and sleep."
      }
    ],
    "islamicView": [
      "Allah teaches us not to desire what others have been given. 'And do not wish for that by which Allah has made some of you exceed others.' (Qur'an 4:32).",
      "The Prophet ﷺ warned that envy consumes good deeds like fire consumes wood.",
      "Seeking refuge from the envier and making dua for the person you envy are both Sunnah protections."
    ],
    "ifYouFail": [
      "Say A'udhu billahi min hasad and ask Allah to remove the feeling from your heart.",
      "Make sincere dua for the person you envy; this softens the heart.",
      "Count your own blessings every morning and evening.",
      "Remember that Allah's provision is written for you — no one can take what is meant for you.",
      "Replace comparison with gratitude and action toward your own goals."
    ],
    "confidence": [
      "Your rizq is already written; comparing yourself to others only steals your joy.",
      "Gratitude raises your rank and protects your heart from bitterness.",
      "When you are happy for others, Allah opens more doors for you."
    ],
    "verses": [
      {
        "text": "And do not wish for that by which Allah has made some of you exceed others. For men is a share of what they have earned, and for women is a share of what they have earned.",
        "ref": "Qur'an 4:32"
      },
      {
        "text": "And from the evil of the envier when he envies.",
        "ref": "Qur'an 113:5"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'Beware of jealousy, for verily jealousy consumes good deeds the way fire consumes firewood.'",
        "ref": "Abu Dawud"
      }
    ],
    "category": "mindset"
  },
  {
    "id": "parents",
    "title": "Respecting Parents",
    "summary": "See why honoring parents is so beloved to Allah, and how to repair the relationship when you fall short.",
    "icon": "users",
    "harms": [
      {
        "title": "Spiritual harm",
        "text": "Disobeying parents is a major sin and can block a person's path to Allah's pleasure."
      },
      {
        "title": "Family harm",
        "text": "Harsh words and disrespect create wounds in the family that can last for years."
      },
      {
        "title": "Regret harm",
        "text": "Many people only realize the value of their parents after it is too late to show kindness."
      },
      {
        "title": "Barakah harm",
        "text": "Cutting ties or being rude can remove barakah from time, wealth, and opportunities."
      }
    ],
    "islamicView": [
      "Allah commands kindness to parents right after worshipping Him. 'And your Lord has decreed that you not worship except Him, and to parents, good treatment.' (Qur'an 17:23).",
      "The Prophet ﷺ taught that Paradise lies at the feet of mothers.",
      "We obey parents in what is good, and we always treat them with mercy and humility."
    ],
    "ifYouFail": [
      "Apologize sincerely, even if pride makes it hard.",
      "Lower your voice and your wing of humility toward them.",
      "Serve them with small acts: a cup of water, help with chores, a kind message.",
      "Make dua for them daily, especially after salah.",
      "Obey them in what is pleasing to Allah, and be gentle when disagreeing."
    ],
    "confidence": [
      "Honoring your parents raises your status with Allah and brings peace to your heart.",
      "A kind child is a sign of strong character and true success.",
      "Every small act of kindness to parents is a step toward Jannah."
    ],
    "verses": [
      {
        "text": "And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them [so much as], 'Uff,' and do not repel them but speak to them a noble word.",
        "ref": "Qur'an 17:23"
      },
      {
        "text": "And We have enjoined upon man [care] for his parents. His mother carried him, [increasing her] in weakness upon weakness, and his weaning is in two years.",
        "ref": "Qur'an 31:14"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'Paradise lies at the feet of mothers.'",
        "ref": "Ahmad"
      }
    ],
    "category": "relationships"
  },
  {
    "id": "procrastination",
    "title": "Beating Procrastination & Laziness",
    "summary": "Time is a trust from Allah. Learn how to overcome delay, discipline yourself, and take small steps forward.",
    "icon": "clock",
    "harms": [
      {
        "title": "Time harm",
        "text": "Procrastination wastes the limited hours Allah gave you for worship, learning, and growth."
      },
      {
        "title": "Opportunity harm",
        "text": "Delaying action causes missed chances in school, work, and personal development."
      },
      {
        "title": "Stress harm",
        "text": "Putting things off creates last-minute panic, guilt, and poor quality work."
      },
      {
        "title": "Willpower harm",
        "text": "The longer you delay, the weaker your discipline becomes."
      }
    ],
    "islamicView": [
      "Time is a trust. Allah swears by time and warns that mankind is in loss except those who do good. 'By time, indeed mankind is in loss, except for those who have believed and done righteous deeds...' (Qur'an 103:1-3).",
      "The Prophet ﷺ taught us to take advantage of five things before five others: youth before old age, health before sickness, wealth before poverty, free time before busyness, and life before death.",
      "Sincere intention and consistent small actions are beloved to Allah."
    ],
    "ifYouFail": [
      "Make tawbah for wasted time and ask Allah to bless the time that remains.",
      "Break the task into the smallest possible first step and do it now.",
      "Remove distractions before starting: phone away, notifications off.",
      "Set a timer and work for just 15 minutes — momentum will carry you forward.",
      "Begin with bismillah and make the intention to please Allah with your effort."
    ],
    "confidence": [
      "Discipline is a muscle; every small step makes it stronger.",
      "You do not need to be perfect — you need to be consistent.",
      "With Allah's help, one sincere intention can turn your whole day around."
    ],
    "verses": [
      {
        "text": "By time, indeed mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
        "ref": "Qur'an 103:1-3"
      },
      {
        "text": "So verily, with every hardship, there is relief. Verily, with every hardship, there is relief.",
        "ref": "Qur'an 94:5-6"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busyness, and your life before your death.'",
        "ref": "Al-Hakim"
      }
    ],
    "category": "mindset"
  },
  {
    "id": "social-media",
    "title": "Breaking Social Media Addiction",
    "summary": "Reclaim your time, gaze, and heart from endless scrolling. Learn how to use technology without letting it use you.",
    "icon": "smartphone",
    "harms": [
      {
        "title": "Time harm",
        "text": "Hours disappear into scrolling that could have been spent on Qur'an, salah, studies, and real relationships."
      },
      {
        "title": "Comparison harm",
        "text": "Social media trains you to compare your real life to other people's highlight reels."
      },
      {
        "title": "Gaze harm",
        "text": "It constantly exposes the eyes to immodest images, ads, and content that weakens the heart."
      },
      {
        "title": "Focus harm",
        "text": "Notifications and short videos break concentration and make deep thinking harder."
      }
    ],
    "islamicView": [
      "Allah commands us to guard our gaze and our time. 'Tell the believing men to lower their gaze...' (Qur'an 24:30).",
      "The Prophet ﷺ said that part of a person's good Islam is leaving what does not concern him.",
      "Technology is a tool; it becomes harmful when it distracts us from Allah and our purpose."
    ],
    "ifYouFail": [
      "Delete the apps that trigger you most, even for a few days.",
      "Set a daily time limit and keep your phone out of your bedroom at night.",
      "Turn off all non-essential notifications.",
      "Replace scrolling with reading Qur'an, dhikr, exercise, or a hobby.",
      "Ask a friend or mentor to check in on your screen time weekly."
    ],
    "confidence": [
      "Real confidence is built in real life, not through likes and followers.",
      "Controlling your phone is controlling your attention — and your attention shapes your soul.",
      "Every hour you reclaim is an hour you can invest in becoming the person Allah created you to be."
    ],
    "verses": [
      {
        "text": "Tell the believing men to lower their gaze and guard their private parts. That is purer for them. Indeed, Allah is Acquainted with what they do.",
        "ref": "Qur'an 24:30"
      },
      {
        "text": "O you who have believed, avoid much [negative] assumption. Indeed, some assumption is sin. And do not spy or backbite each other.",
        "ref": "Qur'an 49:12"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'It is part of a person's good Islam that he leaves what does not concern him.'",
        "ref": "Tirmidhi"
      }
    ],
    "category": "habits"
  },
  {
    "id": "bad-company",
    "title": "Leaving Bad Company",
    "summary": "The people around you shape your faith and choices. Learn how to choose friends who draw you closer to Allah.",
    "icon": "user-minus",
    "harms": [
      {
        "title": "Faith harm",
        "text": "Bad friends make sin look normal and slowly weaken your connection to Allah."
      },
      {
        "title": "Pressure harm",
        "text": "You may start doing things you never imagined just to fit in or be accepted."
      },
      {
        "title": "Reputation harm",
        "text": "People judge you by the company you keep, and a bad reputation is hard to repair."
      },
      {
        "title": "Future harm",
        "text": "The wrong crowd can lead you away from your goals, family, and deen."
      }
    ],
    "islamicView": [
      "The Prophet ﷺ said, 'A person is on the religion of his close friend, so let each one of you look to whom he takes as a close friend.'",
      "Allah tells us to be with the truthful and righteous. 'O you who have believed, fear Allah and be with those who are true.' (Qur'an 9:119).",
      "Good friends remind you of Allah, support you in hardship, and want the best for you in this life and the next."
    ],
    "ifYouFail": [
      "Be honest with yourself about which friends are helping you and which are harming you.",
      "Distance yourself gradually and politely; you do not owe anyone your destruction.",
      "Fill your time with the mosque, Islamic circles, sports, or volunteer work.",
      "Make dua for righteous friends — Allah can send them when you sincerely ask.",
      "Be kind but firm: your deen and your future come first."
    ],
    "confidence": [
      "Choosing Allah over people is one of the bravest decisions you can make.",
      "A few true friends are better than many who lead you astray.",
      "When you walk toward Allah, He sends people who will walk with you."
    ],
    "verses": [
      {
        "text": "O you who have believed, fear Allah and be with those who are true.",
        "ref": "Qur'an 9:119"
      },
      {
        "text": "Close friends, that Day, will be enemies to each other, except for the righteous.",
        "ref": "Qur'an 43:67"
      }
    ],
    "hadith": [
      {
        "text": "The Prophet ﷺ said: 'A man follows the religion of his close friend, so let each one of you look to whom he takes as a close friend.'",
        "ref": "Abu Dawud"
      }
    ],
    "category": "relationships"
  }
];

export function getTopicById(id: string): Topic | undefined {
  return TOPICS.find(t => t.id === id);
}

export function searchTopics(query: string, category?: string): Topic[] {
  let list = TOPICS;
  if (category && category !== "all") {
    list = list.filter(t => t.category === category);
  }
  if (!query.trim()) return list;
  const q = query.toLowerCase().trim();
  return list.filter(t => 
    t.title.toLowerCase().includes(q) ||
    t.summary.toLowerCase().includes(q) ||
    t.islamicView.some(v => v.toLowerCase().includes(q)) ||
    t.harms.some(h => h.title.toLowerCase().includes(q) || h.text.toLowerCase().includes(q))
  );
}
