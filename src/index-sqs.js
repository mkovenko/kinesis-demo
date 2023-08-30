import { CurrentLocation } from './database.js';

// await CurrentLocation.sync({ force: true });

export const handler = async ({ Records }) => {
  const time = new Date();

  const promises = Records.map(record => {
    const payload = JSON.parse(record.body);

    return CurrentLocation.upsert({
      car_id: payload.car_id,
      location_time: new Date(payload.created_at),
      latitude: payload.coordinates.latitude,
      longitude: payload.coordinates.longitude,
    });
  })

  await Promise.all(promises);

  console.log(`${Records.length} received. Processing time: ${new Date().getTime() - time} ms`);
};
