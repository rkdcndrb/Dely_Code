import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "nuber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234"
};

export default connectionOptions;
