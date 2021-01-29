import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {

   private readonly envConfig: { [key: string]: string };

   constructor() {

      // Se obtiene la propiedad ENV de proccess una propiedad de node que existe solo cuando es producción
      const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

      if ( isDevelopmentEnv ) {

         // __dirname hace referencia al path por defecto de node, en este caso: src
         const envFilePath = __dirname + '/../../.env';
         const existsPath = fs.existsSync( envFilePath );

         if ( !existsPath ) {
            console.log('.env file not exist');
            process.exit(0);
         }

         this.envConfig = parse( fs.readFileSync( envFilePath ) );

      } else {

         this.envConfig = {
            PORT: process.env.PORT,
         };

      }
   }

   get( key: string ): string {
      return this.envConfig[key];
   }

}