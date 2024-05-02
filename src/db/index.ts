import { Service } from 'typedi';
import { Configuration } from "../config/readConfiguration"
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

@Service()
export class DatabaseConnection {
  private database: string;
  public instance: Sequelize | null;
  private dbOptions: SequelizeOptions;

  constructor(private setting: Configuration) {
   this.database = this.getDBName();
   this.dbOptions = {
    dialect: 'mysql',
    models: [__dirname + '/models/*.model.{js,ts}'],
    logging: false,
    host: this.setting.host,
    port: this.setting.port,
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    };
     this.instance = null;
  }

  public async db() {
      try {
      this.instance = new Sequelize(
        this.database,
        this.setting.user,
        this.setting.password,
        this.dbOptions
      );
      return this.instance;
    } catch (error) {
      console.error(error);
    }
  }

public async initialize() {
  try {
      this.instance = new Sequelize(
        this.database,
        this.setting.user,
        this.setting.password,
        this.dbOptions
      );
      await this.instance.sync();
      if(this.instance.config) {
        console.log("Database connection established.")
      }
    } catch (error) {
      console.error(error);
    }
}


  private getDBName(): string {
    const nodeEnv = process.env.NODE_ENV ?? 'development';
    if (nodeEnv === 'test') {
      return 'pawa_test';
    }
    return this.setting.database;
  }


}