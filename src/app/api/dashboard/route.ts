import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getDashboardDataForUser } from '@/lib/dashboard'

export async function GET() {
  const session = await auth()
  const userId = (session?.user as { id?: string } | undefined)?.id

  const data = await getDashboardDataForUser(userId)

  return NextResponse.json({ data })
}

