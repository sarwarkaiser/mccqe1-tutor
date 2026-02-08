import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sampleQuestions } from '@/lib/questionBank'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categoryParam = searchParams.get('category')
  const limitParam = searchParams.get('limit')

  const limit = limitParam ? Math.max(1, Math.min(500, Number(limitParam))) : undefined

  const where: {
    category?: string
    subcategory?: string
  } = {}

  if (categoryParam && categoryParam !== 'All') {
    if (categoryParam.includes(' - ')) {
      const [category, subcategory] = categoryParam.split(' - ').map(s => s.trim())
      if (category) {
        where.category = category
      }
      if (subcategory) {
        where.subcategory = subcategory
      }
    } else {
      where.category = categoryParam
    }
  }

  try {
    const questions = await prisma.question.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      take: limit,
      orderBy: { createdAt: 'asc' },
    })

    return NextResponse.json({ questions })
  } catch (error) {
    console.error('Questions fetch error:', error)
    const filtered = Object.keys(where).length > 0
      ? sampleQuestions.filter(q => {
          if (where.category && q.category !== where.category) return false
          if (where.subcategory && q.subcategory !== where.subcategory) return false
          return true
        })
      : sampleQuestions

    return NextResponse.json({ questions: filtered.slice(0, limit ?? filtered.length), fallback: true })
  }
}

