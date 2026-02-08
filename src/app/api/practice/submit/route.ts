import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

type AnswerPayload = {
  questionId: string
  isCorrect: boolean
  timeTaken: number
  category?: string
}

export async function POST(request: NextRequest) {
  const session = await auth()
  const userId = (session?.user as { id?: string } | undefined)?.id

  let body: {
    answers?: AnswerPayload[]
    type?: string
    startedAt?: string
    endedAt?: string
  }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const answers = body.answers ?? []
  const type = body.type ?? 'practice'

  if (answers.length === 0) {
    return NextResponse.json({ error: 'No answers submitted' }, { status: 400 })
  }

  const total = answers.length
  const correct = answers.filter(a => a.isCorrect).length
  const score = Math.round((correct / total) * 100)

  const startedAt = body.startedAt ? new Date(body.startedAt) : new Date()
  const endedAt = body.endedAt ? new Date(body.endedAt) : new Date()

  if (!userId) {
    return NextResponse.json({
      persisted: false,
      score,
      total,
      correct,
      reason: 'unauthenticated',
    })
  }

  try {
    await prisma.userSession.create({
      data: {
        userId,
        type,
        startTime: startedAt,
        endTime: endedAt,
        questions: JSON.stringify(answers.map(a => a.questionId)),
        answers: JSON.stringify(answers),
        score,
      },
    })

    await prisma.progress.create({
      data: {
        userId,
        questionsAnswered: total,
        correct,
        date: endedAt,
      },
    })

    return NextResponse.json({
      persisted: true,
      score,
      total,
      correct,
    })
  } catch (error) {
    console.error('Practice submit error:', error)
    return NextResponse.json({
      persisted: false,
      score,
      total,
      correct,
      reason: 'database_error',
    })
  }
}

