import { ErrorOutput } from "../types";
import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor() {
    super("Not authorized");
  }

  serializeErrors(): ErrorOutput[] {
    return [{ message: "Not found" }];
  }
}
