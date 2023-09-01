import express from 'express';
import { enqueueTelemetry } from './queue-service.js';

const app = express();
app.use(express.json());

const port = 8080;

app.post('/telemetry', async ({ body }, res) => {
  // console.log(body);


  const telemetry = {
    car_id: body.car_id,
    created_at: body.created_at,
    coordinates: {
      latitude: body.coordinates.latitude,
      longitude: body.coordinates.longitude,
    }
  }

  const { MessageId } = await enqueueTelemetry(telemetry);

  res.send({
    telemetry,
    message: {
      id: MessageId,
    }
  });
});


app.listen(port, () => {
  console.log(`Queue app listening on port ${port}`)
});
