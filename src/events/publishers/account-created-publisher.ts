import { PublishResponse } from "aws-sdk/clients/sns";
import { BasePublisher } from "./base-publisher";

export class AccountCreatedPublisher extends BasePublisher<{
  accountId: string;
}> {
  topicArn = "arn:aws:sns:us-east-1:405944478746:account-created.fifo";

  successCallback(response: PublishResponse): void {
    console.log(`Message sent to the topic ${this.topicArn}`);
    console.log("MessageID is " + response.MessageId);
  }
}
