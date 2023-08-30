import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   const user = await prisma.book.create({
//     data: {
//       title: 'I Robot',
//       year: 1953,
//       pages: 300,
//       authors: {
//         create: [
//           {
//             author: {
//               create: {
//                 firstname: 'Isaac',
//                 lastname: 'Asimov'
//               }
//             }
//           }
//         ]
//       }
//     },
//   })
//   console.log(user)
// }

async function main() {
  const books = await prisma.book.findMany({
    include: {
      authors: {
        include: {
          author: true
        }
      },
    }
  });

  console.log(books);
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