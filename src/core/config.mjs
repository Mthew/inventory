import { config } from "dotenv";

config();

const dbConfig = {
  connectionLimit: 10,
  host: process.env.DB_HOST || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_USER_PWD || "",
  database: process.env.DB_NAME || "",
};
