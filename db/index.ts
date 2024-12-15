import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

const db: PostgresJsDatabase = drizzle(postgres(process.env.DB_URL!));

export { db };
