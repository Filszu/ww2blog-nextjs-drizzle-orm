import { drizzle } from 'drizzle-orm/neon-http'
import { migrate } from 'drizzle-orm/neon-http/migrator'
import { neon } from '@neondatabase/serverless'

// This script should be run from the command line to apply migrations
async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
  }

  const sql = neon(process.env.DATABASE_URL)
  const db = drizzle(sql)

  console.log('Running migrations...')

  await migrate(db, { migrationsFolder: 'drizzle' })

  console.log('Migrations completed!')
  process.exit(0)
}

main().catch((err) => {
  console.error('Migration failed!')
  console.error(err)
  process.exit(1)
})

