// Prisma client wrapper with demo mode support
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

let prisma: PrismaClient

try {
  // Try to create Prisma client
  prisma = globalForPrisma.prisma ?? new PrismaClient()
  
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
  }
} catch (error) {
  // If Prisma fails (e.g., no database), create a mock client
  console.warn('Prisma initialization failed, using mock mode')
  
  prisma = {
    user: {
      findUnique: async () => null,
      create: async () => ({ id: 'demo', email: 'demo@mccqe1.com', name: 'Demo User' }),
    } as any,
    question: {
      findMany: async () => [],
    } as any,
    userSession: {
      create: async () => ({ id: 'demo-session' }),
      findMany: async () => [],
    } as any,
    progress: {
      create: async () => ({ id: 'demo-progress' }),
      findMany: async () => [],
    } as any,
    // Add other mock methods as needed
  } as any
}

export { prisma }
