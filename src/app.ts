import express from 'express';
import 'reflect-metadata';
import {
  useExpressServer,
  useContainer
} from 'routing-controllers';
import { join } from 'path';
import helmet from 'helmet';
import { Container } from 'typedi';
import { DatabaseConnection } from './db'
import rateLimit, { MemoryStore } from 'express-rate-limit';
import { ErrorHandlerMiddleware } from './error/error.middleware';

const token: any = 'token-value';  //DUMMY TOKEN VALUE

export class XcoreAppApplication {
    private app: express.Application;

    constructor(private port: number = 8080, private routePrefix: string = '/api/v1') {
    this.app = express();
    useContainer(Container);
    this.initializeApp();
  }

  private initializeApp() {
    this.app.disable('x-powered-by');
    this.app.use(helmet());
    // set this in order to get the IP Address from the remote machine
    this.app.set('trust proxy', false);
    // set up the rate limit
    const limiter = rateLimit({
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
      store: new MemoryStore(),
    });

    // Apply the rate limiting middleware to all requests
    this.app.use(limiter);

    useExpressServer(this.app, {
      defaultErrorHandler: false,
      middlewares: [ErrorHandlerMiddleware],
      controllers: [join(__dirname) + '/controllers/**/*.controller.{js,ts}'],
      authorizationChecker: async () => {
        return token;
      },
      currentUserChecker: async () => {
        return token;
      },
      routePrefix: this.routePrefix,
      cors: {
        credentials: true,
        origin: '*',
      },
    });
  }

    private async initializeDatabase() {
    // initialize the MySQL database connection
    const databaseInstance = Container.get(DatabaseConnection);
    await databaseInstance.initialize()
  }

   public async listen() {
    // initialize the database
    await this.initializeDatabase();
    // start the application listening on port <port>
    return this.app.listen(this.port, async () => {
      console.log(`Application running on port ${this.port}`);
    });
  }
}