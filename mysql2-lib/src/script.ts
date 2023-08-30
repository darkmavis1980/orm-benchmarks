import { createConnection } from 'mysql2/promise';

const main = async () => {
  const connection = await createConnection({
    host: 'localhost',
    user: 'prisma',
    password: 'prisma',
    database: 'prisma',
    port: 3307
  });

  const sql = `SELECT Book.*, Author.firstname, Author.lastname
              FROM Book
              JOIN AuthorsOnBooks
              ON bookID = AuthorsOnBooks.bookId
              JOIN Author
              ON Author.id = AuthorsOnBooks.authorId AND Book.id = AuthorsOnBooks.bookId`
  const [result] = await connection.query(sql);
  console.log(result);
}

main();