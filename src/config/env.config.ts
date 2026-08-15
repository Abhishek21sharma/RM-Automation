import * as dotenv from "dotenv";
import * as path from "path";
import { z } from "zod";

const envName = process.env.Test_ENV || "qa";
const envPath = path.resolve(__dirname, `.env.${envName}`);

dotenv.config({ path: envPath });

console.log("env data from node env: " + JSON.stringify(process.env, null, 2));

export const MANDATORY_ENV_VARS = z.object({
  BASE_URL: z.string().url(),
  VALID_USER: z.string(),
  VALID_PWD: z.string(),
});

//check the schema with ENV VARS to make sure we have everything to run the project
export const ENV = MANDATORY_ENV_VARS.parse(process.env);
