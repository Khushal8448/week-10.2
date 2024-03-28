import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      email: true,
    },
  });

  console.log(res);
}

insertUser("zendria@gmail.com", "ram123", "zendria", "mali");

// # Environment variables declared in this file are automatically made available to Prisma.
// # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

// # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
// # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

// DATABASE_URL="postgresql://neondb_owner:lnZ87IhCFQzm@ep-dawn-dust-a1xjdsed.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
