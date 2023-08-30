# Benchmark between plain mysql queries and Prisma ORM

This is a simple test to benchmark the difference between a simple SQL approach with Node.js and MySQL, against using a more complex ORM like Prisma ORM.

## Show logs in MySQL/MariaDB

Connect to the docker instance:

```sh
docker-compose exec db bash
```

Then connect to the database as a root user:

```sh
mysql -u root -p
# password is in the prisma-orm/docker-compose.yml file
```

Then run the following in MySQL:

```sql
SET global general_log = on;
SET global general_log_file='/var/log/mysql/mysql.log';
SET global log_output = 'file';
```

Exit from MySQL, and watch the logs with:

```sh
tail -f /var/logs/mysql/mysql.log
```