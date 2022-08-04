import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

export abstract class BasePublisher<T> {
  abstract topicArn: string;
  abstract successCallback(response: AWS.SNS.PublishResponse): void;

  async publishMessage(message: T) {
    const messageJson = JSON.stringify(message);
    const params = {
      Message: messageJson,
      TopicArn: this.topicArn,
    };

    try {
      const publishPromise = await new AWS.SNS({ apiVersion: "2010-03-31" })
        .publish(params)
        .promise();
      this.successCallback(publishPromise);
    } catch (error) {
      console.error(error);
    }
  }
}
