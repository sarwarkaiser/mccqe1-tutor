import { PrismaClient } from '@prisma/client'
import { sampleQuestions } from '../src/lib/questionBank'

const prisma = new PrismaClient()

async function main() {
  for (const q of sampleQuestions) {
    await prisma.question.upsert({
      where: { id: q.id },
      update: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        category: q.category,
        subcategory: q.subcategory,
        difficulty: q.difficulty,
        tags: q.tags,
      },
      create: {
        id: q.id,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        category: q.category,
        subcategory: q.subcategory,
        difficulty: q.difficulty,
        tags: q.tags,
      },
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error('Seed error:', error)
    await prisma.$disconnect()
    process.exit(1)
  })

