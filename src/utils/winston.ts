import winston from "winston";

const Logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "./src/logs/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "./src/logs/combined.log" }),
  ],
});

export default Logger;
