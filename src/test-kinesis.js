import { handler } from './index.js';

const event = {
  "Records": [
    {
      "kinesis": {
        "kinesisSchemaVersion": "1.0",
        "partitionKey": "128",
        "sequenceNumber": "49644010932402461964042674290991774153685192351844139010",
        "data": "ewogICAgImNhcl9pZCI6IDEyOCwKICAgICJjcmVhdGVkX2F0IjogMTY5MzAzMjA1NzAwMCwKICAgICJjb29yZGluYXRlcyI6IHsKICAgICAgICAibGF0aXR1ZGUiOiA0NS4xNzUwMzAsCiAgICAgICAgImxvbmdpdHVkZSI6IDUuNjQ3NzMzCiAgICB9Cn0=",
        "approximateArrivalTimestamp": 1693200519.825
      },
      "eventSource": "aws:kinesis",
      "eventVersion": "1.0",
      "eventID": "shardId-000000000000:49644010932402461964042674290991774153685192351844139010",
      "eventName": "aws:kinesis:record",
      "invokeIdentityArn": "arn:aws:iam::911800220158:role/kinesis-demo-LambdaRole-I93BXynwsjhB",
      "awsRegion": "eu-central-1",
      "eventSourceARN": "arn:aws:kinesis:eu-central-1:911800220158:stream/demo-stream"
    },
    {
      "kinesis": {
        "kinesisSchemaVersion": "1.0",
        "partitionKey": "128",
        "sequenceNumber": "49644010932402461964042674290992983079504806981018845186",
        "data": "ewogICAgImNhcl9pZCI6IDEyOSwKICAgICJjcmVhdGVkX2F0IjogMTY5MzAzMzA1NzAwMCwKICAgICJjb29yZGluYXRlcyI6IHsKICAgICAgICAibGF0aXR1ZGUiOiA0MS4xNzUwMzAsCiAgICAgICAgImxvbmdpdHVkZSI6IDEuNjQ3NzMzCiAgICB9Cn0=",
        "approximateArrivalTimestamp": 1693200520.226
      },
      "eventSource": "aws:kinesis",
      "eventVersion": "1.0",
      "eventID": "shardId-000000000000:49644010932402461964042674290992983079504806981018845186",
      "eventName": "aws:kinesis:record",
      "invokeIdentityArn": "arn:aws:iam::911800220158:role/kinesis-demo-LambdaRole-I93BXynwsjhB",
      "awsRegion": "eu-central-1",
      "eventSourceARN": "arn:aws:kinesis:eu-central-1:911800220158:stream/demo-stream"
    },
    {
      "kinesis": {
        "kinesisSchemaVersion": "1.0",
        "partitionKey": "128",
        "sequenceNumber": "49644010932402461964042674290994192005324421678913028098",
        "data": "ewogICAgImNhcl9pZCI6IDEzMCwKICAgICJjcmVhdGVkX2F0IjogMTY5MzAzNDA1NzAwMCwKICAgICJjb29yZGluYXRlcyI6IHsKICAgICAgICAibGF0aXR1ZGUiOiA0Mi4xNzUwMzAsCiAgICAgICAgImxvbmdpdHVkZSI6IDIuNjQ3NzMzCiAgICB9Cn0=",
        "approximateArrivalTimestamp": 1693200520.571
      },
      "eventSource": "aws:kinesis",
      "eventVersion": "1.0",
      "eventID": "shardId-000000000000:49644010932402461964042674290994192005324421678913028098",
      "eventName": "aws:kinesis:record",
      "invokeIdentityArn": "arn:aws:iam::911800220158:role/kinesis-demo-LambdaRole-I93BXynwsjhB",
      "awsRegion": "eu-central-1",
      "eventSourceARN": "arn:aws:kinesis:eu-central-1:911800220158:stream/demo-stream"
    },
    {
      "kinesis": {
        "kinesisSchemaVersion": "1.0",
        "partitionKey": "128",
        "sequenceNumber": "49644010932402461964042674290994192005324421678913028098",
        "data": "ewogICAgImNhcl9pZCI6IDEyOCwKICAgICJjcmVhdGVkX2F0IjogMTY5MzAzMjA1NzAwMCwKICAgICJjb29yZGluYXRlcyI6IHsKICAgICAgICAibGF0aXR1ZGUiOiAxNS4xNzUwMzAsCiAgICAgICAgImxvbmdpdHVkZSI6IDE1LjY0NzczMwogICAgfQp9",
        "approximateArrivalTimestamp": 1693200520.571
      },
      "eventSource": "aws:kinesis",
      "eventVersion": "1.0",
      "eventID": "shardId-000000000000:49644010932402461964042674290994192005324421678913028098",
      "eventName": "aws:kinesis:record",
      "invokeIdentityArn": "arn:aws:iam::911800220158:role/kinesis-demo-LambdaRole-I93BXynwsjhB",
      "awsRegion": "eu-central-1",
      "eventSourceARN": "arn:aws:kinesis:eu-central-1:911800220158:stream/demo-stream"
    }
  ]
};

const result = await handler(event);

console.log('=================');
console.log(result);
console.log('=================');
