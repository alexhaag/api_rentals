import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default(async (host = "database_rentx"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      host,
      database: process.env.NODE_ENV === "test"?"api_test" : defaultOptions.database
    })
  );
})()