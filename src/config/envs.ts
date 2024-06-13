import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  port: get('PORT').required().asPortNumber(),
  databaseUrl: get('DATABASE_URL').required().asString(),
}