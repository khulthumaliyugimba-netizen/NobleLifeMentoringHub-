const SAVED_TOPICS_KEY = 'noble_life_saved_topics';

export function getSavedTopicIds(): string[] {
  try {
    const raw = localStorage.getItem(SAVED_TOPICS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleSavedTopicId(id: string): string[] {
  try {
    const current = getSavedTopicIds();
    const next = current.includes(id) 
      ? current.filter(item => item !== id)
      : [...current, id];
    localStorage.setItem(SAVED_TOPICS_KEY, JSON.stringify(next));
    return next;
  } catch {
    return [];
  }
}

export function isTopicSaved(id: string): boolean {
  return getSavedTopicIds().includes(id);
}
