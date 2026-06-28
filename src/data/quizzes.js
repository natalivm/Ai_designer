// Per-chapter quizzes, keyed by language then block id.
// Shape per question: { q: string, options: string[], answer: number, fact: string }
// `answer` is the 0-based index of the correct option; `fact` is the
// interesting takeaway shown after answering (right or wrong).
// Generated from the authored quiz files.
export const QUIZZES = { uk: {}, en: {} }

export function getQuiz(lang, id) {
  const byLang = QUIZZES[lang] || QUIZZES.uk || {}
  return byLang[id] || null
}
