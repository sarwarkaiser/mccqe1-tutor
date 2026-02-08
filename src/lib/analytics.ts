export type SessionAnswer = {
  questionId: string
  isCorrect: boolean
  timeTaken: number
  category?: string
}

export type SessionLike = {
  startTime: Date
  endTime: Date | null
  type: string
  score: number | null
  answers: string
}

export type DashboardData = {
  totalQuestions: number
  correctAnswers: number
  accuracy: number
  studyStreak: number
  weakAreas: string[]
  strongAreas: string[]
  recentSessions: {
    date: string
    score: number
    type: string
    questions: number
    time: string
  }[]
  categoryBreakdown: Record<string, { correct: number; total: number }>
  dailyGoal: number
  weeklyGoal: number
  dailyProgress: number
  weeklyProgress: number
  examReadiness: number
}

function parseAnswers(raw: string): SessionAnswer[] {
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10)
}

function formatMinutes(totalMinutes: number) {
  if (totalMinutes <= 0) return '0m'
  if (totalMinutes < 60) return `${totalMinutes}m`
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
}

function calculateStudyStreak(dates: Date[]) {
  const unique = new Set(dates.map(dateKey))
  if (unique.size === 0) return 0

  const today = new Date()
  let streak = 0

  for (let i = 0; i < 365; i += 1) {
    const day = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
    day.setUTCDate(day.getUTCDate() - i)
    if (unique.has(dateKey(day))) {
      streak += 1
    } else {
      break
    }
  }

  return streak
}

export function buildDashboardData(sessions: SessionLike[]): DashboardData {
  const categoryBreakdown: Record<string, { correct: number; total: number }> = {}
  const sessionDates: Date[] = []
  const dailyGoal = 50
  const weeklyGoal = 350

  let totalQuestions = 0
  let correctAnswers = 0
  let dailyProgress = 0
  let weeklyProgress = 0

  const todayKey = dateKey(new Date())
  const weekAgo = new Date()
  weekAgo.setUTCDate(weekAgo.getUTCDate() - 6)

  for (const session of sessions) {
    const answers = parseAnswers(session.answers)
    const sessionDate = session.startTime
    sessionDates.push(sessionDate)

    totalQuestions += answers.length
    correctAnswers += answers.filter(a => a.isCorrect).length

    const sessionDateKey = dateKey(sessionDate)
    if (sessionDateKey === todayKey) {
      dailyProgress += answers.length
    }
    if (sessionDate >= weekAgo) {
      weeklyProgress += answers.length
    }

    for (const answer of answers) {
      const category = answer.category ?? 'Uncategorized'
      if (!categoryBreakdown[category]) {
        categoryBreakdown[category] = { correct: 0, total: 0 }
      }
      categoryBreakdown[category].total += 1
      if (answer.isCorrect) {
        categoryBreakdown[category].correct += 1
      }
    }
  }

  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
  const examReadiness = accuracy

  const categoryAccuracies = Object.entries(categoryBreakdown).map(([category, stats]) => ({
    category,
    accuracy: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
  }))

  const weakAreas = categoryAccuracies
    .filter(c => c.accuracy < 60)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3)
    .map(c => `${c.category} - ${c.accuracy}%`)

  const strongAreas = categoryAccuracies
    .filter(c => c.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy)
    .slice(0, 3)
    .map(c => `${c.category} - ${c.accuracy}%`)

  const recentSessions = sessions
    .slice(0, 3)
    .map((session) => {
      const answers = parseAnswers(session.answers)
      const questions = answers.length
      const correct = answers.filter(a => a.isCorrect).length
      const score = session.score ?? (questions > 0 ? Math.round((correct / questions) * 100) : 0)
      const endTime = session.endTime ?? session.startTime
      const minutes = Math.max(1, Math.round((endTime.getTime() - session.startTime.getTime()) / 60000))

      return {
        date: dateKey(session.startTime),
        score,
        type: session.type,
        questions,
        time: formatMinutes(minutes),
      }
    })

  return {
    totalQuestions,
    correctAnswers,
    accuracy,
    studyStreak: calculateStudyStreak(sessionDates),
    weakAreas,
    strongAreas,
    recentSessions,
    categoryBreakdown,
    dailyGoal,
    weeklyGoal,
    dailyProgress,
    weeklyProgress,
    examReadiness,
  }
}

