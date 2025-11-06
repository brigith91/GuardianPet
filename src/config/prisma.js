import { PrismaClient } from '@prisma/client';

const prisma = globalThis.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query','info','warn','error'] : ['error']
});

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;