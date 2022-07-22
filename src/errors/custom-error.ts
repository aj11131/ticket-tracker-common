import { ErrorOutput } from "../types";

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
  }

  abstract serializeErrors(): ErrorOutput[];
}
