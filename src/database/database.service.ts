import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';

/**
 * @description
 *  Servicio para configurar la conexión a la BD
 *  y los directorios para las entidades y las migraciones
 */
export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ ConfigModule ],
    inject: [ ConfigService ],
    async useFactory( config: ConfigService ) {
      return {
        ssl: false,
        type: 'postgres' as 'postgres',
        host: config.get( Configuration.HOST ),
        port: 5444,
        username: config.get( Configuration.USERNAME ),
        password: config.get( Configuration.PASSWORD ),
        database: config.get( Configuration.DATABASE ),
        entities: [ __dirname + '/../**/*.entity{.ts,.js}' ],
        migrations: [ __dirname + '/migrations/*{.ts,.js}' ],
      } as ConnectionOptions;
    },
  }),
];
