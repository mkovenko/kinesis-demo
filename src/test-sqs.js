import { handler } from './index-sqs.js';

const event = {
  "Records": [
    {
      messageId: 'f3ff9001-8c96-4d48-97a0-629ac3e2d059',
      receiptHandle: 'AQEB/nBROPeGXMeNHokAFOk8sq6WKtMaaSQ/kaxtLs1BWB14y/Ndu6H2Y8OKrFGinvUz/f9gjrq4R73OpScs/d8PJJ0/lWu8P78S/0yLmGMD2uzbg6RcQIA4bQUunRA37vyvAal34XWCaPZf53T4iosryvUj7K5t9/Qv5z0+0RPoZk70Etas27Qgh7r1YO0ImvqgemjbejHacBX1XQwlx1bw3bHVt+Kytfkr6cnJamNr0BBVfd9/TAuSZnsxfDcye2FD2ZD6cPYt7aQw9Bs2g4WD3lCZu+cUqc/FKZ9cR7oLs3I=',
      body: '{\n' +
        '    "car_id": 124,\n' +
        '    "created_at": "2021-01-01T12:01:00-00:00",\n' +
        '    "coordinates": {\n' +
        '        "latitude": 45.175030,\n' +
        '        "longitude": 5.647733\n' +
        '    }\n' +
        '}',
      attributes: {
        ApproximateReceiveCount: '1',
        AWSTraceHeader: 'Root=1-64eec98e-62ef0df2085439036f13b6ad',
        SentTimestamp: '1693370766907',
        SequenceNumber: '18880246990037743616',
        MessageGroupId: '124',
        SenderId: 'AROA5IS4HHH7IILSTPBFT:BackplaneAssumeRoleSession',
        MessageDeduplicationId: '46565d33-a17f-4ffd-af6b-f331473eaa03',
        ApproximateFirstReceiveTimestamp: '1693370766907'
      },
      messageAttributes: {},
      md5OfBody: '1b84aee97a6a5d6779157c03c57861c8',
      eventSource: 'aws:sqs',
      eventSourceARN: 'arn:aws:sqs:eu-central-1:911800220158:car-telemetry.fifo',
      awsRegion: 'eu-central-1'
    }
  ],
};

const result = await handler(event);

console.log('=================');
console.log(result);
console.log('=================');
