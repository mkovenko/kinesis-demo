import {
  SQSClient,
  SendMessageCommand,
} from '@aws-sdk/client-sqs';

const QueueUrl =  process.env.QUEUE_URL;
const sqsClient = new SQSClient({ region: process.env.AWS_DEFAULT_REGION });

console.log('===============================');
console.log(process.env.QUEUE_URL);
console.log(process.env.AWS_DEFAULT_REGION);
console.log('===============================');

export const enqueueTelemetry = async (telemetry) => {
  const command = new SendMessageCommand({
    QueueUrl,
    MessageGroupId: telemetry.car_id,
    MessageBody: JSON.stringify(telemetry),
    MessageDeduplicationId: `${telemetry.car_id}-${telemetry.created_at}`,
  });

  return await sqsClient.send(command);
}


