import { Connection, createConnection, getConnectionOptions } from 'typeorm'

createConnection();

// finds ormconfig.json file and creates a connection. (magic!),
// it could be set up manually with parameters
// however an external file is the best practise
createConnection()
  .then((op: any) => {
      // console.log('options', op);
     console.log("Connected to the database")
     import('../../../app')
  })
  .catch(() => new Error("Unable to connect to the database"));

export default async (host = "database"): Promise<Connection> => {
   const defaultOptions = await getConnectionOptions();
   
   return createConnection(
      Object.assign(defaultOptions, {
         host,
      })
   )
}