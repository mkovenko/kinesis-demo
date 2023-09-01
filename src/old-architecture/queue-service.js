import {
  SQSClient,
  SendMessageCommand,
} from '@aws-sdk/client-sqs';

const QueueUrl =  process.env.PDF_GENERATION_QUEUE_URL;
const sqsClient = new SQSClient({ region: process.env.AWS_DEFAULT_REGION });

export const enqueueTelemetry = async (telemetry) => {
  const command = new SendMessageCommand({
    QueueUrl,
    MessageGroupId: telemetry.car_id,
    MessageBody: JSON.stringify(telemetry),
    MessageDeduplicationId: `${telemetry.car_id}-${telemetry.created_at}`,
  });

  return await sqsClient.send(command);
}


