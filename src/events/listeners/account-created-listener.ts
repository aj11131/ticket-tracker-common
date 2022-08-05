import { BaseListener } from "./base-listener";

export class AccountCreatedListener extends BaseListener {
  queueUrl =
    "https://sqs.us-east-1.amazonaws.com/405944478746/account-created.fifo";
}
