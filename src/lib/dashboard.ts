import { prisma } from '@/lib/prisma'
import { buildDashboardData } from '@/lib/analytics'

export async function getDashboardDataForUser(userId?: string) {
  if (!userId) {
    return buildDashboardData([])
  }

  const sessions = await prisma.userSession.findMany({
    where: { userId },
    orderBy: { startTime: 'desc' },
    take: 50,
  })

  return buildDashboardData(sessions)
}

