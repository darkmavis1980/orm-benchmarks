import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.book.create({
    data: {
      title: 'Alice in wonderland',
      year: 1865,
      pages: 400,
      authors: {
        create: [
          {
            author: {
              create: {
                firstname: 'Lewis',
                lastname: 'Carrol'
              }
            }
          }
        ]
      }
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })