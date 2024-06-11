import config from "config";
import { TResult } from "./types";
import { Service } from "typedi";
import Logger from "../utils/winston";
import { AppErrorCodes } from "../error/appError/general.error";

@Service()
export class Configuration {
  constructor() {
    this.readConfiguration();
  }

  get database(): string {
    return config.get("database");
  }

  get host(): string {
    return config.get("host");
  }

  get user(): string {
    return config.get("user");
  }

  get password(): string {
    return config.get("password");
  }

  get port(): number {
    return config.get("port");
  }

  public readConfiguration(): TResult {
    try {
      if (
        !config.get("host") ||
        !config.get("user") ||
        !config.get("password") ||
        !config.get("database")
      ) {
        return {
          success: false,
          error: "Unable to read configuration.",
        };
      } else {
        return {
          success: true,
          config,
        };
      }
    } catch (err: any) {
      Logger.error("Error while reading configuration ", err);
      return {
        success: false,
        error: err.message,
        responseData: AppErrorCodes.appConfigError,
      };
    }
  }
}
